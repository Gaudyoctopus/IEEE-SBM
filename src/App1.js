import React, { useState, useEffect } from 'react';
import './style.css'


const App1 = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  // Function to handle automatic scrolling of testimonials
  const handleTestimonialAutoScroll = () => {
    const totalTestimonials = 5; // Change this number based on the total number of testimonials
    setActiveTestimonialIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  // useEffect to automatically scroll testimonials every 1 second
  useEffect(() => {
    const interval = setInterval(handleTestimonialAutoScroll, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to handle opening/closing the responsive menu
  const handleMenuToggle = () => {
    setNavbarVisible((prevVisible) => !prevVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
  <div>
    <nav className={isNavbarVisible ? "navbar visible" : "navbar"}>
      <div className="container nav_container">
        <a href="index.html"><h4>IEEE SBM</h4></a>
        <div className={isNavbarVisible ? "responsive-menu hidden" : "responsive-menu"}>
        <ul class="nav_menu">
          <li><a href="#headers">Home</a></li>
          <li><a href="#abouts">About Us</a></li>
          <li><a href="#event">Events</a></li>
          <li><a href="#footers">Connect</a></li>
          <li><a href="#fa">FAQs</a></li>
          <li><a href="#teams">Our Team</a></li>
          <li><a href="#achieve">Achievements</a></li>
        </ul>
        </div>
        <button id="open-menu-btn"><i class="uil uil-bars"></i></button>
        <button id="close-menu-btn"><i class="uil uil-multiply"></i></button>
      </div>
    </nav>

    <section class="header" id="headers">
      <div className="container header_container">
        <div className="header_left">
          <h1 class="topic">Code. Simulate. Design.</h1>
          <p>
              Come Join Us And Be The Change
          </p>
          <a class="btn btn-primary">Get Started</a>
        </div>
        <div className="header_right">
          <div className="header_right-image">
            <img class="img1" src="./images/IEEE-symbol-1e.png" />
          </div>
        </div>
      </div>
    </section>

    <section class="about" id="abouts">
      <div className="container about_container">
        <div className="about_left">
          <h1>About IEEE</h1>
          <p>IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
            IEEE and its members inspire a global community to innovate for a better tomorrow through its highly cited publications,
            conferences, technology standards, and professional and educational activities. IEEE is the trusted “voice” for engineering,
            computing, and technology information around the globe.
          </p>
        </div>
        <div className="about_right">
          <article class="about">
            <span class="about_icon1">
              <i class="uil uil-play"></i>
            </span>
            <h5>App Development</h5>
            <p>Enter the app development arena to develop a full-stack or a frontend app.</p>
          </article>
          <article class="about">
            <span class="about_icon2">
              <i class="uil uil-palette"></i>
            </span>
            <h5>Design</h5>
            <p>Enter the arena of imagination and creativity to produce something technically aesthetic and appealing!</p>
          </article>
          <article class="about">
            <span class="about_icon3">
              <i class="uil uil-laptop"></i>
            </span>
            <h5>Coding</h5>
            <p>Enter the coding arena to test your daring.</p>
          </article>
          <article class="about">
            <span class="about_icon4">
              <i class="uil uil-robot"></i>
            </span>
            <h5>AI/ML</h5>
            <p>It's time to test your AI knowledge in the arena. Claim victory over your opponents with your skills and efforts.</p>
          </article>
          <article class="about">
            <span class="about_icon5">
              <i class="uil uil-pen"></i>
            </span>
            <h5>Web Development</h5>
            <p>Bring out the developer in you with an exhilarating race back to the good old days.</p>
          </article>
          <article class="about">
            <span class="about_icon6">
              <i class="uil uil-circuit"></i>
            </span>
            <h5>Electronics</h5>
            <p>Go out in that rising sun with your circuit skills and fill the arena with electrifying energy.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="events" id="event">
      <h2>Our Popular Events</h2>
      <div className="container events_container">
        <article class="events">
          <div className="events_image">
            <img src="./images/image 2.jpg" />
          </div>
          <div className="events_info">
            <h4>Technoglossum'22</h4>
            <p>
              An intense three-day challenge comprising coding, electronics, machine learning, web dev, app dev and design.
            </p>
            <a class="btn btn-primary">Know More</a>
          </div>
        </article>
        <article class="events">
          <div className="events_image">
            <img src="./images/image 3.jpg" />
          </div>
          <div className="events_info">
            <h4>TechWeek'22</h4>
            <p>
              The scared do not even want to experiment with it while the brave are always willing to discover and unravel it's mystery.
            </p>
            <a class="btn btn-primary">Know More</a>
          </div>
        </article>
        <article class="events">
          <div className="events_image">
            <img src="./images/image 4.jpg" />
          </div>
          <div className="events_info">
            <h4>Codeathon'22</h4>
            <p>
              IEEE SBM WIE Affinity Group presents CODATHON, a coding contest to help you test and hone your coding skills.
            </p>
            <a class="btn btn-primary">Know More</a>
          </div>
        </article>
      </div>
    </section>

    <section class="container testimonials_container mySwiper">
      <h2>Student's Testimonials</h2>
      <div className="swiper-wrapper">
        <article class="testimonial swiper-slide">
          <div className="avatar">
            <img src="./images/avatar 1.webp" />
          </div>
          <div className="testimonial_info">
            <h5>Diana Ayi</h5>
            <small>Student</small>
          </div>
          <div className="testimonial_body">
           IEEE SBM provided us a great platform for learning and enriching our knowledge.
          </div>
        </article>
        <article class="testimonial swiper-slide">
          <div className="avatar">
            <img src="./images/avatar 1.webp" />
          </div>
          <div className="testimonial_info">
            <h5>Peter Thomas</h5>
            <small>Cloud Developer</small>
          </div>
          <div className="testimonial_body">
            The learning experience at IEEE SBM has been great.
          </div>
        </article>
        <article class="testimonial swiper-slide">
          <div className="avatar">
            <img src="./images/avatar 2.jpg" />
          </div>
          <div className="testimonial_info">
            <h5>Sarah Jane</h5>
            <small>App Developer</small>
          </div>
          <div className="testimonial_body">
            My journey at IEEE SBM was enriched by by the constant guidance that has been provided by our seniors.
          </div>
        </article>
        <article class="testimonial swiper-slide">
          <div className="avatar">
            <img src="./images/avatar 1.webp" />
          </div>
          <div className="testimonial_info">
            <h5>Harry Potter</h5>
            <small>Coder</small>
          </div>
          <div className="testimonial_body">
            My journey at IEEE SBM has been full of challenges and learning.
          </div>
        </article>
        <article class="testimonial swiper-slide">
          <div className="avatar">
            <img src="./images/avatar 2.jpg" />
          </div>
          <div className="testimonial_info">
            <h5>Peter Tom</h5>
            <small>Web Developer</small>
          </div>
          <div className="testimonial_body">
            It was my immense fortune to be a part of IEEE SBM.
          </div>
        </article>
      </div>
      <div className="swiper-pagination"></div>
    </section>

    <section class="faqs" id="fa">
      <h2>Frequently Asked Questions</h2>
      <div className="container faqs_container">
        <article class="faq">
          <div className="faq_icon"><i class="uil uil-plus"></i></div>
          <div className="question_answer">
            <h4>How do I know the right domains for me?</h4>
            <p>
              Just pick any one domain and get familiar with it.
            </p>
          </div>
        </article>
        <article class="faq">
          <div className="faq_icon"><i class="uil uil-plus"></i></div>
          <div className="question_answer">
            <h4>Do I get a Certificate for becoming an IEEE Member?</h4>
            <p>
              Yes, you get one appreciation Certificate.
            </p>
          </div>
        </article>
        <article class="faq">
          <div className="faq_icon"><i class="uil uil-plus"></i></div>
          <div className="question_answer">
            <h4>How to apply for mancomm positions?</h4>
            <p>
              When board members will start recruitment, you can apply for mancomm positions.
            </p>
          </div>
        </article>
        <article class="faq">
          <div className="faq_icon"><i class="uil uil-plus"></i></div>
          <div className="question_answer">
            <h4>What is the time period of our IEEE membership?</h4>
            <p>
              1 Year.
            </p>
          </div>
        </article>
        <article class="faq">
          <div className="faq_icon"><i class="uil uil-plus"></i></div>
          <div className="question_answer">
            <h4>Benefits of becoming an IEEE member?</h4>
            <p>
              You get to participate in all the IEEE events without any registration fee.
            </p>
          </div>
        </article>
        <article class="faq">
          <div className="faq_icon"><i class="uil uil-plus"></i></div>
          <div className="question_answer">
            <h4>How to participate in IEEE events?</h4>
            <p>
              Register through the registration links provided on IEEE SBM website.
            </p>
          </div>
        </article>
        <article class="faq">
          <div className="faq_icon"><i class="uil uil-plus"></i></div>
          <div className="question_answer">
            <h4>What all I will learn in my Working Committee tenure?</h4>
            <p>
              You will get familiar with the tech domains.
            </p>
          </div>
        </article>
        <article class="faq">
          <div className="faq_icon"><i class="uil uil-plus"></i></div>
          <div className="question_answer">
            <h4>What all we do in Management Committee tenure?</h4>
            <p>
              We get to work on projects that can be added to our Resume.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="about_achievements" id="achieve">
      <div className="container about_achievements-container">
        <div className="about_achievements-left">
          <img src="./images/achievements 1.webp" />
        </div>
        <div class="about_achievements-right">
          <h1>Achievements</h1>
          <p>
            IEEE SBM grows immensely and achieves new heights of success with every passing year, and last year was no different.
            Some major events and several valuable workshops conducted throughout the year ensured that the organization's standard
            and quality of performance remained at their absolute best.
          </p>
          <div className="achievements_cards">
            <article class="achievement_card">
              <img src="./images/achievement 1.jpg" />
            </article>
            <article class="achievement_card">
              <img src="./images/achievement 2.jpg" />
            </article>
            <article class="achievement_card">
              <img src="./images/achievement 3.jpg" />
            </article>
          </div>
        </div>

      </div>
    </section>

    <section class="team" id="teams">
      <h2>Meet Our Team</h2>
      <div className="container team_container">
        <article class="team_member">
          <div className="team_member-image">
            <img src="./images/member 1.png" />
          </div>
          <div className="team_member-info">
            <h4>Shreyas Shah</h4>
            <p>Webmaster</p>
          </div>
          <div className="team_member-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i class="uil uil-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i class="uil uil-twitter-alt"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i class="uil uil-linkedin-alt"></i></a>
          </div>
        </article>
        <article class="team_member">
          <div className="team_member-image">
            <img src="./images/member 2.png" />
          </div>
          <div className="team_member-info">
            <h4>Anurag Chowdhury</h4>
            <p>CS Tech Head</p>
          </div>
          <div className="team_member-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i class="uil uil-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i class="uil uil-twitter-alt"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i class="uil uil-linkedin-alt"></i></a>
          </div>
        </article>
        <article class="team_member">
          <div className="team_member-image">
            <img src="./images/member 3.png" />
          </div>
          <div className="team_member-info">
            <h4>Mrityunjay Shukla</h4>
            <p>CS Dev Head</p>
          </div>
          <div className="team_member-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i class="uil uil-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i class="uil uil-twitter-alt"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i class="uil uil-linkedin-alt"></i></a>
          </div>
        </article>
        <article class="team_member">
          <div className="team_member-image">
            <img src="./images/member 4.png" />
          </div>
          <div className="team_member-info">
            <h4>Kartikeya Tiwari</h4>
            <p>Research & ML Head</p>
          </div>
          <div className="team_member-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i class="uil uil-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i class="uil uil-twitter-alt"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i class="uil uil-linkedin-alt"></i></a>
          </div>
        </article>
        <article class="team_member">
          <div className="team_member-image">
            <img src="./images/member 5.png" />
          </div>
          <div className="team_member-info">
            <h4>Mahendra Singh</h4>
            <p>Electronics Head</p>
          </div>
          <div className="team_member-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i class="uil uil-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i class="uil uil-twitter-alt"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i class="uil uil-linkedin-alt"></i></a>
          </div>
        </article>
        <article class="team_member">
          <div className="team_member-image">
            <img src="./images/member 6.png" />
          </div>
          <div className="team_member-info">
            <h4>Tushar Patel</h4>
            <p>Head of Creatives</p>
          </div>
          <div className="team_member-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i class="uil uil-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i class="uil uil-twitter-alt"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i class="uil uil-linkedin-alt"></i></a>
          </div>
        </article>
        <article class="team_member">
          <div className="team_member-image">
            <img src="./images/member 7.png" />
          </div>
          <div className="team_member-info">
            <h4>Sujal Acharjya</h4>
            <p>Media & HR Head</p>
          </div>
          <div className="team_member-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i class="uil uil-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i class="uil uil-twitter-alt"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i class="uil uil-linkedin-alt"></i></a>
          </div>
        </article>
        <article class="team_member">
          <div className="team_member-image">
            <img src="./images/member 8.png" />
          </div>
          <div className="team_member-info">
            <h4>Kirti Kedia</h4>
            <p>Membership,PR & HR Head</p>
          </div>
          <div className="team_member-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i class="uil uil-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i class="uil uil-twitter-alt"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i class="uil uil-linkedin-alt"></i></a>
          </div>
        </article>
        <article class="team_member">
          <div className="team_member-image">
            <img src="./images/member 9.png" />
          </div>
          <div className="team_member-info">
            <h4>BV Muskan</h4>
            <p>Executive Board Chairperson</p>
          </div>
          <div className="team_member-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i class="uil uil-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i class="uil uil-twitter-alt"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i class="uil uil-linkedin-alt"></i></a>
          </div>
        </article>
        <article class="team_member">
          <div className="team_member-image">
            <img src="./images/member 10.png" />
          </div>
          <div className="team_member-info">
            <h4>Arshia Puthran</h4>
            <p>Executive Board Vice Chairperson</p>
          </div>
          <div className="team_member-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i class="uil uil-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i class="uil uil-twitter-alt"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i class="uil uil-linkedin-alt"></i></a>
          </div>
        </article>
        <article class="team_member">
          <div className="team_member-image">
            <img src="./images/member 11.png" />
          </div>
          <div className="team_member-info">
            <h4>Shreen Mohanty</h4>
            <p>Executive Board General Secretary</p>
          </div>
          <div className="team_member-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i class="uil uil-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i class="uil uil-twitter-alt"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i class="uil uil-linkedin-alt"></i></a>
          </div>
        </article>
        <article class="team_member">
          <div className="team_member-image">
                      <img src="./images/member12.png" alt='img12' />
          </div>
          <div className="team_member-info">
            <h4>Ankita Veerabahu</h4>
            <p>WiE Board Chairperson</p>
          </div>
          <div className="team_member-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i class="uil uil-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i class="uil uil-twitter-alt"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i class="uil uil-linkedin-alt"></i></a>
          </div>
        </article>
      </div>
    </section>

    <section class="footer" id="footers">
      <div className="container footer_container">
        <div className="footer_1">
          <a herf="index.html" class="footer_logo"><h4>IEEE SBM</h4></a>
          <p>
             IEEE is the trusted “voice” for engineering, computing, and technology information around the globe.
          </p>
        </div>
        <div className="footer_2">
          <h4>Permalinks</h4>
          <ul class="permalinks">
            <li><a href="#headers">Home</a></li>
            <li><a href="#abouts">About</a></li>
            <li><a href="#event">Events</a></li>
            <li><a href="#footers">Connect</a></li>
            <li><a href="#fa">FAQs</a></li>
            <li><a href="#teams">Our Team</a></li>
            <li><a href="#achieve">Achievements</a></li>
          </ul>
        </div>

        <div className="footer_3">
          <h4>Primacy</h4>
          <ul class="privacy">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms And Condition</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>
        <div className="footer_4">
          <h4>Connect</h4>

          <ul class="footer_socials">
            <li>
              <a href="https://www.facebook.com/ieeesbmanipal/"><i class="uil uil-facebook-f"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/ieeesbm/"><i class="uil uil-instagram-alt"></i></a>
            </li>
            <li>
              <a href="#"><i class="uil uil-twitter"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/ieee-student-branch-manipal/"><i class="uil uil-linkedin-alt"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_copyright">
        <small>Copyright &copy; IEEE SBM YouTube </small>
      </div>

    </section>
  </div>

  )
}

export default App1;