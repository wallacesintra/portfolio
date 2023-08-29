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

// --------------------------------container project
const projectsArray = [
    {
        id: 1,
        title: "printing company website",
        image: "images/eastEvent.png",
        liveDemo: "https://eastgenerals.netlify.app",
        codeLink: "https://github.com/wallacesintra/east-general-web",
        description: "A website for printing and branding company to market their products, and a way for their customers to view their services."

    },
    {
        id: 1,
        title: "photography website",
        image: "images/artsyFrame.png",
        liveDemo: "https://artsyframes.netlify.app",
        codeLink: "https://github.com/wallacesintra/photography-website",
        description: "A portofolio website for a photography company, clients are enable to view the company's projects. "

    }
]

const projectContainer = document.getElementById('projects');

projectsArray.forEach(item => {

// Select the parent element
    var projectsDiv = document.querySelector(".projects");

// Create the project item element
    var projectItemDiv = document.createElement("div");
    projectItemDiv.classList.add("projectItem");

// Create the project pic element
    var projectPicDiv = document.createElement("div");
    projectPicDiv.classList.add("projectPic");

// Create the image element
    var imgElement = document.createElement("img");
    imgElement.src = `${item.image}`;
    imgElement.alt = "web snippet";

// Append the image to the project pic element
    projectPicDiv.appendChild(imgElement);

// Create the project details element
    var projectDetailsDiv = document.createElement("div");
    projectDetailsDiv.classList.add("projectDetails");
// title
   var projectTitle = document.createElement("h1");
   projectTitle.textContent = `${item.title}`;
// Create the project description element
   var descriptionParagraph = document.createElement("p");
   descriptionParagraph.textContent = `${item.description}`;

// Append the description to the project details element
   projectDetailsDiv.appendChild(projectTitle);
   projectDetailsDiv.appendChild(descriptionParagraph);
   

// Create the codes element
   var codesDiv = document.createElement("div");
   codesDiv.classList.add("codes");

// Create the view code link element
   var viewCodeLink = document.createElement("a");
   viewCodeLink.href = `${item.codeLink}`;
   viewCodeLink.target = '_blank';
   viewCodeLink.textContent = "view code";

// Create the live demo link element
   var liveDemoLink = document.createElement("a");
   liveDemoLink.href = `${item.liveDemo}`;
   liveDemoLink.target = '_blank';
   liveDemoLink.textContent = "live demo";

// Append the links to the codes element
   codesDiv.appendChild(viewCodeLink);
   codesDiv.appendChild(liveDemoLink);

// Append the project pic, details, and codes elements to the project item element
   projectItemDiv.appendChild(projectPicDiv);
   projectItemDiv.appendChild(projectDetailsDiv);
   projectDetailsDiv.appendChild(codesDiv);

// Append the project item element to the projects parent element
   projectsDiv.appendChild(projectItemDiv);

})
