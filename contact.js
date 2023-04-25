const contactLinks = [
    {
        id: 1,
        name: 'linkedin',
        icon: '<i class="fa-brands fa-linkedin-in "></i>',
        link: 'https://www.linkedin.com/in/wallace-wahong-o-a523a31b5/',
        color: '#0072b1'
    },
    {
        id: 2,
        name: 'Github',
        icon: '<i class="fa-brands fa-github  "></i>' ,
        link: 'https://github.com/wallacesintra',
        color: '#333'
    },
    {
        id: 3,
        name: 'email',
        icon: '<i class="fa-regular fa-envelope"></i>' ,
        link: 'mailto: otienowallace33@gmail.com',
        color: '#F4B400'
    },
    {
        id: 4,
        name: 'telephone',
        icon: '<i class="fa-solid fa-phone "></i>',
        link: 'tel: 795123407',
        color: 'rgb(95, 95, 252)'
    },
    {
        id: 5,
        name: 'WhatsApp',
        icon: '<i class="fa-brands fa-whatsapp "></i>',
        link: 'https://wa.me/<795123407',   
        color: '#075E54'
    }
]

contactLinks.forEach(item => {
    // const container = document.getElementById('contactsContainer');
    // Select the parent element
    var contactDiv = document.getElementById('contactsContainer');

// Create the contact item element
    var contactItemDiv = document.createElement("div");
    contactItemDiv.classList.add("contactItem");

// Create the WhatsApp icon element
   contactItemDiv.innerHTML = `${item.icon}`;

// Create the phone number element
   var phoneNumberParagraph = document.createElement("p");
   phoneNumberParagraph.textContent = `${item.name}`;

// Append the WhatsApp icon and phone number to the contact item element
//    contactItemDiv.appendChild(whatsappIcon);
   contactItemDiv.appendChild(phoneNumberParagraph);
   // background
   contactItemDiv.style.backgroundColor = `${item.color}`

// Append the contact item element to the contact parent element
   contactDiv.appendChild(contactItemDiv);

//    eventListener
   const links = `${item.link}`
   contactDiv.addEventListener('click', function(){
    window.location.href = links;
   })




})