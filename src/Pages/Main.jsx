import React from "react";
function Main() {
  return (
    <div>
      <div>
        {/* ======= Header ======= */}
        <header id="header">
          <div className="container">
            <h1>
              <a href="index.html">Ammar Sami</a>
            </h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}
            <h2>
              I'm a passionate <span>Web & App Developer</span> from Pakistan
            </h2>
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a className="nav-link active" href="#header">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#resume">
                    Resume
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
            {/* .navbar */}
            <div className="social-links">
              <a href="#" className="twitter">
                <i className="bi bi-twitter" />
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </header>
        {/* End Header */}
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          {/* ======= About Me ======= */}
          <div className="about-me container">
            <div className="section-title">
              <h2>About</h2>
              <p>Learn more about me</p>
            </div>
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img src="assets/img/ammar4.jpg" className="img-fluid" alt />
              </div>
              <div
                className="col-lg-8 pt-4 pt-lg-0 content"
                data-aos="fade-left"
              >
                <h3>WEB &amp; APP DEVELOPER</h3>
                <p className="fst-italic">
                  As a programmer, I translate ideas into elegant solutions
                  through the language of code, architecting innovation with
                  precision.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Birthday:</strong> <span>27 April 2001</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Website:</strong>{" "}
                        <span>www.ammarsamiportfolio.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Phone:</strong> <span>+923115797944</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>City:</strong> <span>Lahore, Pakistan</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Age:</strong> <span>23</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Degree:</strong>{" "}
                        <span>Bachelor's In Computer Science</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Email:</strong>{" "}
                        <span>ammarsami734@gmail.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Freelance:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  👨🏻‍💻 Hello, I'm Ammar Sami, a seasoned Web & App Developer with
                  a passion for turning concepts into functional and engaging
                  websites. With 3 years of experience in web development, I
                  have honed my skills in creating efficient, user-friendly, and
                  visually appealing web solutions. 🛠️ My expertise includes:
                  Front-End: ReactJs, JavaScript (ES6+), Bootstrap5, HTML5,
                  CSS3, MUI, TailwindCss, React Native, Business Developer
                  Back-End: Node.js Databases: MySQL, Mongodb Responsive Web
                  Design & Cross-Browser Compatibility Version Control
                  (Git/GitHub) Web Performance Optimization & Security Best
                  Practices 🎯 My goal is to enhancing user experiences and
                  achieving business objectives. Let's connect and discuss how I
                  can help bring your web projects to life! 📧 Feel free to
                  contact me at ammarsami734@gmail.com | 🌐
                  (Whatsapp)Dm:+923115797944
                </p>
              </div>
            </div>
          </div>
          {/* End About Me */}
          {/* ======= Counts ======= */}
          <div className="counts container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-emoji-smile" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={73}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="bi bi-journal-richtext" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={110}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>Projects</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="bi bi-headset" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={2463}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>Hours Of Support</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="bi bi-award" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={12}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>Awards</p>
                </div>
              </div>
            </div>
          </div>
          {/* End Counts */}
          {/* ======= Skills  ======= */}
          <div className="skills container">
            <div className="section-title">
              <h2>Skills</h2>
            </div>
            <div className="row skills-content">
              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill">
                    HTML <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">75%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    Bootstrap <i className="val">95%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    Material Ui <i className="val">87%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={87}
                      aria-valuemin={87}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill">
                    React Js <i className="val">85%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    React Native <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    Nodejs <i className="val">70%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    MongoDb <i className="val">85%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Skills */}
          {/* ======= Interests ======= */}
          <div className="interests container">
            <div className="section-title">
              <h2>Interests</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="icon-box">
                  <i className="ri-store-line" style={{ color: "#ffbb2c" }} />
                  <h3>Web Development</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i
                    className="ri-bar-chart-box-line"
                    style={{ color: "#5578ff" }}
                  />
                  <h3>App Development</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i
                    className="ri-calendar-todo-line"
                    style={{ color: "#e80368" }}
                  />
                  <h3>UI & UX Design</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                <div className="icon-box">
                  <i
                    className="ri-paint-brush-line"
                    style={{ color: "#e361ff" }}
                  />
                  <h3>Coding Standards</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-database-2-line"
                    style={{ color: "#47aeff" }}
                  />
                  <h3>Continuous Learning</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-gradienter-line"
                    style={{ color: "#ffa76e" }}
                  />
                  <h3>Open Source Contribution</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-file-list-3-line"
                    style={{ color: "#11dbcf" }}
                  />
                  <h3>Community Engagement</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-price-tag-2-line"
                    style={{ color: "#4233ff" }}
                  />
                  <h3>Problem Solving</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-anchor-line" style={{ color: "#b2904f" }} />
                  <h3>Responsive Design</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-disc-line" style={{ color: "#b20969" }} />
                  <h3>Code Optimization</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-base-station-line"
                    style={{ color: "#ff5828" }}
                  />
                  <h3>UI Frameworks/Libraries</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-fingerprint-line"
                    style={{ color: "#29cc61" }}
                  />
                  <h3>Community Engagement</h3>
                </div>
              </div>
            </div>
          </div>
          {/* End Interests */}
          {/* ======= Testimonials ======= */}
          {/* <div className="testimonials container">
      <div className="section-title">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
              <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
              <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
              <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
              <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt />
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
              <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
            </div>
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
      <div className="owl-carousel testimonials-carousel">
      </div>
    </div> */}
        </section>
        {/* ======= Resume Section ======= */}
        <section id="resume" className="resume">
          <div className="container">
            <div className="section-title">
              <h2>Resume</h2>
              <p>Check My Resume</p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Bachelor's Of Computer Science</h4>
                  <h5>2020 - 2023</h5>
                  <p>
                    My academic journey has equipped me with a strong foundation
                    in programming languages. Actively engaged in hands-on
                    projects, I have honed my problem-solving skills and
                    practical application of theoretical concepts. Eager to
                    contribute to the ever-evolving field of technology, I am
                    committed to continuous learning and staying updated on the
                    latest industry trends.{" "}
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Full Stack Web Devlopment</h4>
                  <h5>2022 - 2023</h5>
                  <p>
                    Enthusiastic and dedicated professional with a solid
                    foundation in fullstack web development, by a comprehensive
                    6 month course at PNY Institute. Proficient in frontend
                    technologies, I have acquired hands on experience in HTML,
                    CSS,Bootstrap,JavaScript, and various frameworks such as
                    React.js
                  </p>
                </div>
                {/* <div className="resume-item pb-0">
                  <h4>Fsc Pre Engg</h4>
                  <p>
                    <em>
                      Innovative and deadline-driven Graphic Designer with 3+
                      years of experience designing and developing user-centered
                      digital/print marketing material from initial concept to
                      final, polished deliverable.
                    </em>
                  </p>
                  <p></p>
                  <p />
                </div> */}
              </div>
              <div className="col-lg-6">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Frontend Development Expert</h4>
                  <h5>2024 - Present</h5>
                  <p>
                    <em>Lahore,Pakistan</em>
                  </p>
                  <p>
                    As a Front-end Development expert at Tech 786 Certification,
                    I specialize in creating visually appealing and responsive
                    user interfaces for web and app platforms. Proficient in the
                    latest technologies, I collaborate with cross-functional
                    teams to implement design concepts, ensuring seamless user
                    experiences. My focus on user-centric design principles
                    contributes to the development of certification platforms
                    that align with modern industry standards.
                  </p>

                  <p />
                </div>
                <div className="resume-item">
                  <h4>Freelancing (Web Development)</h4>
                  <h5>2019 - 2024</h5>

                  <p>
                    As a versatile freelance developer since 2020, I specialize
                    in React.js for dynamic web interfaces, React Native for
                    cross-platform mobile applications, and WordPress for robust
                    content management systems. With expertise in front-end
                    technologies as well as back-end technologies. I deliver
                    comprehensive solutions. I undertake seamlessly blend
                    cutting-edge technology with user-friendly design, creating
                    impactful websites and mobile apps tailored to the unique
                    needs of clients.
                  </p>

                  <p />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Resume Section */}
        {/* ======= Services Section ======= */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
              <p>My Services</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bxl-dribbble" />
                  </div>
                  <h4>
                    <a href>Web Development</a>
                  </h4>
                  <p>
                  Elevate your online presence with our expert web development services.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-file" />
                  </div>
                  <h4>
                    <a href>App Development</a>
                  </h4>
                  <p>
              
Elevating ideas into seamless user experiences through expert app development services.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-tachometer" />
                  </div>
                  <h4>
                    <a href>CMS Development</a>
                  </h4>
                  <p>
                  Empowering your online presence with tailor-made CMS development solutions
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-world" />
                  </div>
                  <h4>
                    <a href>UI/UX Design</a>
                  </h4>
                  <p>
                  UI/UX design is the art of crafting seamless digital experiences that marry aesthetic appeal with intuitive functionality to elevate user satisfaction.

                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-slideshow" />
                  </div>
                  <h4>
                    <a href>SEO</a>
                  </h4>
                  <p>
                  SEO is the key to unlocking online visibility, driving organic traffic, and optimizing digital content for higher search engine rankings.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-arch" />
                  </div>
                  <h4>
                    <a href>Problem Solving</a>
                  </h4>
                  <p>
                  Problem solving is the art of navigating challenges with creativity and analytical thinking to discover effective solutions and achieve desired outcomes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Services Section */}
        {/* ======= Portfolio Section ======= */}
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>My Works</p>
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-web">Web</li>
                  <li data-filter=".filter-app">App</li>
                  {/* <li data-filter=".filter-card">Card</li> */}
                </ul>
              </div>
            </div>
            <div className="row portfolio-container">
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="./assets/img/portfolio/rooiboos.webp"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="./assets/img/portfolio/rooiboos.webp"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 1"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        className="portfolio-details-lightbox"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="./assets/img/portfolio/cardclub.webp"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="./assets/img/portfolio/cardclub.webp"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        className="portfolio-details-lightbox"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="./assets/img/portfolio/naseebi.webp"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="./assets/img/portfolio/naseebi.webp"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        className="portfolio-details-lightbox"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-4.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-4.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        className="portfolio-details-lightbox"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="./assets/img/portfolio/fazalshawl.webp"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Web 2</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-5.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        className="portfolio-details-lightbox"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/wedding.webp"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/wedding.webp"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        className="portfolio-details-lightbox"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-7.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-7.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 1"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        className="portfolio-details-lightbox"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-8.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-8.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        className="portfolio-details-lightbox"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="./assets/img/portfolio/lavande.webp"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="./assets/img/portfolio/lavande.webp"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        className="portfolio-details-lightbox"
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        {/* End Portfolio Section */}
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
              <p>Contact Me</p>
            </div>
            <div className="row mt-2">
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="info-box">
                  <i className="bx bx-map" />
                  <h3>My Address</h3>
                  <p>Johar Town ,Lahore,Pakistan</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                <div className="info-box">
                  <i className="bx bx-share-alt" />
                  <h3>Social Profiles</h3>
                  <div className="social-links">
                    <a href="#" className="twitter">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="#" className="facebook">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="#" className="instagram">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="#" className="google-plus">
                      <i className="bi bi-skype" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4 d-flex align-items-stretch">
                <div className="info-box">
                  <i className="bx bx-envelope" />
                  <h3>Email Me</h3>
                  <p>ammarsami734@gmail.com</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 d-flex align-items-stretch">
                <div className="info-box">
                  <i className="bx bx-phone-call" />
                  <h3>Call Me</h3>
                  <p>+923115797944</p>
                </div>
              </div>
            </div>
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form mt-4"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </section>
        {/* End Contact Section */}
        <div className="credits">
          Designed by <a href="#">Ammar Sami</a>
        </div>
      </div>
    </div>
  );
}

export default Main;
