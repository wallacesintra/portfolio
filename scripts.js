function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
// contact links

const linkedIn = document.getElementById("linkedIn");
linkedIn.addEventListener("click", function(){
    window.location.href="https://www.linkedin.com/in/wallace-wahong-o-a523a31b5/";
})

const gitHub = document.getElementById('gitHub');
gitHub.addEventListener("click", function(){
    window.location.href = "https://github.com/wallacesintra";
})

// --------------------------------container project-------------//
const projectsArray = [
    {
        id: 1,
        title: "HR Management System Mobile Application",
        image: "images/hrispreview.png",
        liveDemo: "https://play.google.com/store/apps/details?id=com.netbotgroup.hris&pcampaignid=web_share",
        codeLink: "https://github.com/wallacesintra/",
        description: "HRIS is a KMP application that enhance HR operations with efficient, user-friendly software\n" +
            "designed to streamline and automate human resource tasks."

    },

    {
        id: 2,
        title: "printing company website",
        image: "images/eastEvent.png",
        liveDemo: "https://eastgenerals.netlify.app",
        codeLink: "https://github.com/wallacesintra/east-general-web",
        description: "A website for printing and branding company to market their products, and a way for their customers to view their services."

    },
    {
        id: 3,
        title: "Location-based chat android application",
        image: "images/close.png",
        liveDemo: "https://github.com/wallacesintra/Close/blob/main/docs/previews/app-debug.apk",
        codeLink: "https://github.com/wallacesintra/Close",
        description: "Close is a real time messaging and location sharing android application. It reimagines social\n" +
            "networking by prioritizing physical proximity for meaningful interactions."

    },
]

// const projectContainer = document.getElementById('projects');
const projectContainer = document.getElementById('projects')



var projectRenderItem = projectsArray.map((item) => {
    return(
    `<div class="projectItem">
        <div class="projectPic">
            <img src= ${item.image} alt="web snippet">
        </div>
        <div class="projectDetails">
            <h1>${item.title}</h1>
            <p>${item.description}</p>
            <div class="codes">
                <a href=${item.codeLink} target="_blank">view code</a>
                <a href=${item.liveDemo} target="_blank">live demo</a>
            </div>
        </div>
    </div>`
    )
})

projectContainer.innerHTML = projectRenderItem
