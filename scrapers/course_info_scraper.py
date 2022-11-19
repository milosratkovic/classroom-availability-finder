import time
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
import json


# # Setup
# Change start and end values in dates_URL to a week with no Holidays. Run scraper daily for first 3 weeks. Weekly thereafter
dates_URL = "?caldata=yes&start=2022-11-13T00%3A00%3A00-08%3A00&end=2022-11-20T00%3A00%3A00-08%3A00"
s = Service('C:\Program Files (x86)\chromedriver.exe')
driver = webdriver.Chrome(service=s)
time.sleep(2)

junk_room_values = ["Burnaby Campus ", "Distance Education ", "Harbour Centre ", "Off-campus ",
                    "Off-campus SRYC3200", "Other Locations in Vancouver ", "Surrey Campus "]

room_time_dict = {}
# 0 = Monday, 1 = Tuesday ...


def print_to_file(json_data):
    print("Writing data to JSON file...")
    with open("data_SFU.json", "w") as fp:
        json.dump(json_data, fp, indent=4, sort_keys=True)


def format_time(time_raw_start, time_raw_end):
    print("Formatting time...")
    start = time_raw_start[11:16]
    end = time_raw_end[11:16]
    time_clean = start + "-" + end
    return time_clean


def day_of_week_finder(time_raw_start):
    print("Converting date to day of week...")
    date = time_raw_start[0:10]
    formated_date = datetime.strptime(date, '%Y-%m-%d')
    day_num = formated_date.weekday()
    return day_num


with open("class_links.txt", 'r') as f:
    for line in f:
        base_link = line
        print("Going to link: " + base_link + dates_URL)
        driver.get(
            base_link + dates_URL)
        content = driver.page_source
        content = driver.find_element(By.TAG_NAME, 'pre').text
        print("Loading Json into list...")
        room_time_dict_list = json.loads(content)  # parsed content is a list

        for index, session in enumerate(room_time_dict_list):
            print("Capturing...")
            room = room_time_dict_list[index]['location']
            # fixes bug where WMC3250 is mislabled as Surrey/Harbour due to SFU.ca typo.
            if room == "Surrey Campus WMC3250" or room == "Harbour Centre WMC3250":
                room = "Burnaby Campus WMC3250"
            # ^^^ Remove code when fixed

            if room in junk_room_values:
                print("Detected invalid room: " + room)
                print(room_time_dict_list[index]['url'])
                continue

            time_raw_start = room_time_dict_list[index]['start']
            time_raw_end = room_time_dict_list[index]['end']
            print("Room: " + room)
            print("Raw Start Time: " + time_raw_start)
            print("Raw End Time: " + time_raw_end)
            _time = format_time(time_raw_start, time_raw_end)
            day = day_of_week_finder(time_raw_start)
            print("Formtatted Time: " + _time)

            list_of_days = {0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: []}
            if room in room_time_dict.keys():
                print("Adding time to existing room...")
                room_time_dict[room][day].append(_time)
                print("Time succesfully added")

            else:  # room not in room_time_dict.keys()
                print("Making new room to add time... Making Room: " + room)
                list_of_days[day].append(_time)
                room_time_dict[room] = list_of_days
                print("Time succesfully added")


print_to_file(room_time_dict)
