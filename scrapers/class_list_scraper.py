import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service


# Setup
s = Service('C:\Program Files (x86)\chromedriver.exe')
driver = webdriver.Chrome(service=s)
time.sleep(2)

driver.get("https://coursys.sfu.ca/browse/#!semester=1231")  # Spring 2023 Link
##
time.sleep(2)


def scrape_page():
    the_urls = driver.find_elements(
        By.XPATH, "//table[@id='courses']//tbody//tr//a")
    print_to_file(the_urls)


def print_to_file(the_urls):
    with open('class_links.txt', 'a+') as f:
        for url in the_urls:
            f.write(url.get_attribute("href") + "\n")


isNextDisabled = False
counter = 1

while not isNextDisabled:
    time.sleep(2)
    scrape_page()
    print("Scraped Page: " + str(counter))
    counter += 1
    time.sleep(3)
    try:
        driver.find_element(
            By.XPATH, "//a[@id = 'courses_next']").click()
    except:
        isNextDisabled = True
