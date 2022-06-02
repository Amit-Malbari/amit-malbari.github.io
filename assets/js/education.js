AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Scrum Foundation Professional Certificate",
    cardImage: "assets/images/education-page/Certiprof.jpg",
    moocLink: "https://www.credly.com/badges/d5eba32a-b53e-49c4-9bcc-68092b0ece32",
  },
  {
    title: "Lifelong Learning",
    cardImage: "assets/images/education-page/Certiprof.jpg",
    moocLink: "https://www.credly.com/badges/416e66c1-32bc-465b-bb10-683e9d896162?source=linked_in_profile",
  },
  {
    title: "Scrum Fundamentals Certified",
    cardImage: "assets/images/education-page/Scrumstudy.jpg",
    moocLink: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-AmitMalbari-893949.pdf",
  },
  {
    title: "Docker Essentials: A Developer Introduction",
    cardImage: "assets/images/education-page/IBM.jpeg",
    moocLink: "https://www.credly.com/badges/ac5331f4-94ae-478a-a8ef-c1274fda2347?source=linked_in_profile",
  },
  {
    title: "Postman Student Expert",
    cardImage: "assets/images/education-page/Postman.jpg",
    moocLink: "https://badgr.com/backpack/badges/6095613919ec4775322603cc",
  },
  {
    title: "JAVA",
    cardImage: "assets/images/education-page/HackerRank.png",
    moocLink: "https://www.hackerrank.com/certificates/3f412726d041",
  },
  
  {
    title: "Problem Solving",
    cardImage: "assets/images/education-page/HackerRank.png",
    moocLink: "https://www.hackerrank.com/certificates/b4e19e3584b9",
  },
  {
    title: "SQL Basic",
    cardImage: "assets/images/education-page/HackerRank.png",
    moocLink: "https://www.hackerrank.com/certificates/09937dc4e8da",
  },
  {
    title: "SQL Intermediate",
    cardImage: "assets/images/education-page/HackerRank.png",
    moocLink:
      "https://www.hackerrank.com/certificates/365fd1e759b1",
  },
  {
    title: "Javascript",
    cardImage: "assets/images/education-page/HackerRank.png",
    moocLink: "https://www.hackerrank.com/certificates/72d8085caa19",
  },
  {
    title: "Selenium Webdriver with Docker, Jenkins & AWS",
    cardImage: "assets/images/education-page/udemy.jpg",
    moocLink: "https://www.udemy.com/certificate/UC-bac415ae-953b-47ed-9a6f-a4224284f61d/",
  },
  {
    title: "Rest API Testing",
    cardImage: "assets/images/education-page/udemy.jpg",
    moocLink:
      "https://www.udemy.com/certificate/UC-bdab98f0-c83a-4c79-aea8-572dcd326066/",
  },
  {
    title: "Rest API Testing",
    cardImage: "assets/images/education-page/udemy.jpg",
    moocLink:
      "https://www.udemy.com/certificate/UC-bdab98f0-c83a-4c79-aea8-572dcd326066/",
  },
  {
    title: "Gradle",
    cardImage: "assets/images/education-page/udemy.jpg",
    moocLink:
      "https://www.udemy.com/certificate/UC-87e3078b-34df-4d4d-8fc8-18faefbb5d0d/",
  },
  {
    title: "GIT",
    cardImage: "assets/images/education-page/udemy.jpg",
    moocLink:
      "https://www.udemy.com/certificate/UC-dc44d5bb-90be-4415-af09-e9b88d1b49f6/",
  },
  {
    title: "Regular Epression",
    cardImage: "assets/images/education-page/udemy.jpg",
    moocLink:
      "https://www.udemy.com/certificate/UC-ca1ba452-292e-4901-aaa7-ffc81c15900f/",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
