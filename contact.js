// nav
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

const contactLinks = [
    {
        id: 1,
        name: 'Wallace Wahongo ',
        icon: '<i class="fa-brands fa-linkedin-in "></i>',
        link: 'https://www.linkedin.com/in/wallace-wahong-o-a523a31b5/',
        color: '#0072b1'
    },
    {
        id: 2,
        name: 'wallacesintra',
        icon: '<i class="fa-brands fa-github  "></i>' ,
        link: 'https://github.com/wallacesintra',
        color: '#333'
    },
    {
        id: 6,
        name: '@wallacesintra',
        icon: '<i class="fa-brands fa-x-twitter"></i>',
        link: 'https://twitter.com/wallacesintra',   
        color: '#14171A'
    },
    {
        id: 3,
        name: 'otienowallace33@gmail.com',
        icon: '<i class="fa-regular fa-envelope"></i>' ,
        link: 'mailto: otienowallace33@gmail.com',
        color: '#F4B400'
    },
    {
        id: 4,
        name: '+254795123407',
        icon: '<i class="fa-solid fa-phone "></i>',
        link: 'tel: 795123407',
        color: 'rgb(95, 95, 252)'
    },
    {
        id: 5,
        name: '+254795123407',
        icon: '<i class="fa-brands fa-whatsapp "></i>',
        link: 'https://wa.me/<795123407',   
        color: '#075E54'
    }

]

contactLinks.forEach(item => {
// Select the parent element
    var contactDiv = document.getElementById('contactsContainer');
// Create the contact item element
    var contactItemDiv = document.createElement("div");
    contactItemDiv.classList.add("contactItem");
// Create the icon element
   contactItemDiv.innerHTML = `${item.icon}`;
   // background
   contactItemDiv.style.backgroundColor = `${item.color}` ;
   contactItemDiv.style.cursor = "pointer";
   //  eventListener
   contactItemDiv.addEventListener('click', function(){
    window.location.href = `${item.link}`;
   })
// Append the contact item element to the contact parent element
   contactDiv.appendChild(contactItemDiv);
})
