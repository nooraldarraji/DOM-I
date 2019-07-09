const siteContent = {
    "nav": {
        "navItem1": "Services",
        "navItem2": "Product",
        "navItem3": "Vision",
        "navItem4": "Features",
        "navItem5": "About",
        "navItem6": "Contact",
        "imgSrc": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "imgSrc": "img/header-img.png"
    },
    "mainContent": {
        "featuresH4": "Features",
        "featuresContent": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "aboutH4": "About",
        "aboutContent": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middleImgSrc": "img/mid-page-accent.jpg",
        "servicesH4": "Services",
        "servicesContent": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "productH4": "Product",
        "productContent": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "visionH4": "Vision",
        "visionContent": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contactH4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Added Features
siteContent.newFeatures = {
    "color": "#b0b0b0",
    "blog": "Blog",
    "timer": "Timer",
    "timerWeb": "timer.html"
}

// delete Object.assign(siteContent, {
//     [.mainContent]: siteContent.mainContent
// }).mainContent;

// console.log(.mainContent)

// Example: Update the img src for the logo
// l = logo
let l = document.getElementById("logo-img");
l.setAttribute('src', siteContent.nav.imgSrc)

// n = navigation bar
const n = document.querySelector('nav');
n.children[0].textContent = siteContent.nav.navItem1;
n.children[1].textContent = siteContent.nav.navItem2;
n.children[2].textContent = siteContent.nav.navItem3;
n.children[3].textContent = siteContent.nav.navItem4;
n.children[4].textContent = siteContent.nav.navItem5
n.children[5].textContent = siteContent.nav.navItem6;

// Cta header txt
const ctaH = document.querySelector('.cta-text h1')
ctaH.textContent = siteContent.cta.h1;

// Header img
const HI = document.getElementById("cta-img");
HI.setAttribute('src', siteContent.cta.imgSrc)

// b = button
const b = document.querySelector(".cta-text button");
b.textContent = siteContent.cta.button;

// SiteH4 = All site h4 elements
const siteH4 = document.querySelectorAll('h4')
siteH4[0].textContent = siteContent.mainContent.featuresH4;
siteH4[1].textContent = siteContent.mainContent.aboutH4;
siteH4[2].textContent = siteContent.mainContent.servicesH4;
siteH4[3].textContent = siteContent.mainContent.productH4;
siteH4[4].textContent = siteContent.mainContent.visionH4;

// Middle image
const MI = document.getElementById("middle-img");
MI.setAttribute('src', siteContent.mainContent.middleImgSrc);

// SiteP = All site p elements
const siteP = document.querySelectorAll('p')
siteP[0].textContent = siteContent.mainContent.featuresContent;
siteP[1].textContent = siteContent.mainContent.aboutContent;
siteP[2].textContent = siteContent.mainContent.servicesContent;
siteP[3].textContent = siteContent.mainContent.productContent;
siteP[4].textContent = siteContent.mainContent.visionContent;

// Contact h4
siteH4[5].textContent = siteContent.contact.contactH4;
// cp = Contact paragraphs 
siteP[5].textContent = siteContent.contact.address;
siteP[6].textContent = siteContent.contact.phone;
siteP[7].textContent = siteContent.contact.email;

// Footer Paragraph
siteP[8].textContent = siteContent.footer.copyright;

const blog = document.createElement('a');
const timer = document.createElement('a'); // HIW = How it works
blog.textContent = siteContent.newFeatures.blog;
timer.textContent = siteContent.newFeatures.timer;
timer.href = siteContent.newFeatures.timerWeb; // Timer Link
n.append(blog)
n.append(timer)
    // console.log(timer.src)
    // const getEl = document.getElementById("a");
    // timer.setAttribute('src', siteContent.newFeatures.timerWeb);

// Method to change nav color
// gn = Green nav & t = text
const gn = document.querySelectorAll('a')
gn.forEach(function(t) { t.style.color = siteContent.newFeatures.color });