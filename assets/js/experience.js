AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "SDET II",
    cardImage: "assets/images/experience-page/Planful.png",
    place: "Planful, Hyderabad",
    time: "(Mar, 2021 - present)",
    desp: "<li>Worked on Finance Domain.</li> <li>Involved in resolving Jenkins build failure</li> <li>Created various utility on top of automation framework.</li><li>Involved in checking network tabs to check response to reduce bug fix time.</li><li>Developed a good understanding of framework and clean code</li><li>Worked on API testing using Postman and Restassured</li>",
  },
  {
    title: "Consultant",
    cardImage: "assets/images/experience-page/Deloitte.jpg",
    place: "Deloitte, Hyderabad",
    time: "(Mar, 2019 - Feb, 2021)",
    desp: "<li>Tested Unemployment Insurance project for US government (Manual as well as Automation).</li><li>Involved in demo delivery to stakeholders.</li><li>Involved in checking application logs to find root cause of issue to reduce bug fix time.</li>",
  },
  {
    title: "Senior Systems Engineer",
    cardImage: "assets/images/experience-page/Infosys.jpg",
    place: "Infosys, Pune",
    time: "(Nov, 2015 - Feb, 2019)",
    desp: "<li>Worked on the various projects in automation as well as manual testing.</li><li>Created automation framework from scratch.</li><li>Involved in various types of testing viz. SIT, Adhoc, Exploratory, Blackbox, Whitebox, Smoke, Sanity, Regression.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Prayas Youth Forum",
    cardImage: "assets/images/experience-page/Prayas.jpg",
    description:
      "Have participated as volunteer for Computer Literacy program in a village.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Jenkins Slack Integration",
    subtitle: "Participant",
    image: "assets/images/experience-page/Hackathon.jpg",
    desp: "Integrated Jenkins and Slack to send out execution report",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
