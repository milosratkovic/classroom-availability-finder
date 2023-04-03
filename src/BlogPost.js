import React from 'react';
import './BlogPost.css'; // Import CSS file for styling

const BlogPost = () => {
  return (
    <div className="blog-post">
      <h2 className="blog-post-title">10 Tips for Finding the Best Study Spaces and Boosting Your Productivity at Simon Fraser University</h2>
      <ol className="blog-post-list">
        <li className="blog-post-item">Use Classroomfinder.ca: Classroomfinder.ca is a website that lets you input a time range and date to search for an empty classroom at Simon Fraser University that you can use to study in. This is a great tool to help you find available study spaces on campus.</li>
        <li className="blog-post-item">Check the library website: The library website provides information on the availability of study spaces and computer workstations in the library. You can also reserve a study room in advance.</li>
        <li className="blog-post-item">Explore other buildings: Don't limit yourself to the library! Other buildings on campus, such as student lounges and classrooms, may have available study spaces.</li>
        <li className="blog-post-item">Use campus maps: Check out the campus maps to find hidden study spaces that you may have overlooked.</li>
        <li className="blog-post-item">Avoid peak hours: Avoid peak hours when study spaces are more likely to be crowded. Try studying during off-peak hours or on weekends.</li>
        <li className="blog-post-item">Bring headphones: Headphones can help block out distractions and make it easier to focus.</li>
        <li className="blog-post-item">Try different locations: Experiment with different locations until you find a study space that works best for you. Some people prefer quiet spaces, while others may prefer more social settings.</li>
        <li className="blog-post-item">Stay hydrated: Don't forget to bring a water bottle to stay hydrated while you study.</li>
        <li className="blog-post-item">Use study apps: Consider using study apps, such as Forest or Pomodoro, to help you stay focused and on track.</li>
        <li className="blog-post-item">Take breaks: Taking breaks can help improve productivity and prevent burnout. Consider taking short breaks every hour or so.</li>
      </ol>
      <p>By following these tips, you can find the perfect study space at Simon Fraser University and boost your productivity. Good luck with your studies!</p>
    </div>
  );
};

export default BlogPost;
