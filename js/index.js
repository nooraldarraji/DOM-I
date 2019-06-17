const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// l = logo
let l = document.getElementById("logo-img");
l.setAttribute('src', siteContent["nav"]["img-src"])

// n = navigation bar
const n = document.querySelector('nav');
n.children[0].textContent = siteContent.nav["nav-item-1"];
n.children[1].textContent = siteContent.nav["nav-item-2"];
n.children[2].textContent = siteContent.nav["nav-item-3"];
n.children[3].textContent = siteContent.nav["nav-item-4"];
n.children[4].textContent = siteContent.nav["nav-item-5"];
n.children[5].textContent = siteContent.nav["nav-item-6"];

// Cta header txt
const ctaH = document.querySelector('.cta-text h1')
ctaH.textContent = siteContent.cta.h1;

// Header img
const HI = document.getElementById("cta-img");
HI.setAttribute('src', siteContent.cta["img-src"])

// b = button
const b = document.querySelector(".cta-text button");
b.textContent = siteContent.cta.button;

// SiteH4 = All site h4 elements
const siteH4 = document.querySelectorAll('h4')
siteH4[0].textContent = siteContent["main-content"]["features-h4"];
siteH4[1].textContent = siteContent["main-content"]["about-h4"];
siteH4[2].textContent = siteContent["main-content"]["services-h4"];
siteH4[3].textContent = siteContent["main-content"]["product-h4"];
siteH4[4].textContent = siteContent["main-content"]["vision-h4"];

// Middle image
const MI = document.getElementById("middle-img");   
MI.setAttribute('src', siteContent["main-content"]["middle-img-src"]); // "middle-img-src": "img/mid-page-accent.jpg",

// SiteP = Site paragraphs
const siteP = document.querySelectorAll('p')
siteP[0].textContent = siteContent["main-content"]["features-content"];
siteP[1].textContent = siteContent["main-content"]["about-content"];
siteP[2].textContent = siteContent["main-content"]["services-content"];
siteP[3].textContent = siteContent["main-content"]["product-content"];
siteP[4].textContent = siteContent["main-content"]["vision-content"];