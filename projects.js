// nav
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

const projectsArray = [
    {
        id: 1,
        title: "printing company website",
        image: "images/eastEvent.png",
        liveDemo: "https://eastgenerals.netlify.app",
        codeLink: "https://github.com/wallacesintra/east-general-web",
        description: "A website for a printing and branding Company to showcase their products, and a way for their customers to view their services."

    },
    {
        id: 1,
        title: "photography website",
        image: "images/artsyFrame.png",
        liveDemo: "https://artsyframes.netlify.app",
        codeLink: "https://github.com/wallacesintra/photography-website",
        description: "A portfolio website for a photography company for clients to view the company's projects. "

    }
]

const projectContainer = document.querySelector(".projects");


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
