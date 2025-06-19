document.addEventListener('DOMContentLoaded', function () {
    const projects = 
    
    [
        {
            projectName: "WebPage Temple",
            imageUrl: "../project/images/temple-project.png",
            width: "884px",
            height: "784px",
            htmlLogo: "../project/images/logos/html.png",
            altHtml: "HTML5 Logo",
            cssLogo: "../project/images/logos/css.png",
            altCss: "CSS Logo",
            jsLogo: "../project/images/logos/javascript.png",
            altJs: "JavaScript Logo",
            projectDescription: "Interactive section displaying and filtering information about LDS temples world wide, a hamburger type menu for navigation."
        },

        {

            projectName: "WebPage Place",
            imageUrl: "../project/images/place-project.png",
            width: "756px",
            height: "595px",
            htmlLogo: "../project/images/logos/html.png",
            altHtml: "HTML5 Logo",
            cssLogo: "../project/images/logos/css.png",
            altCss: "CSS Logo",
            jsLogo: "../project/images/logos/javascript.png",
            altJs: "JavaScript Logo",
            projectDescription: "This displays information about a place, providing accurate and relevant content about destination with weather details."

        }

    ];

    const container = document.querySelector('.container-project-box');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';


        const projectTitle = document.createElement('h2');
        projectTitle.textContent = project.projectName;
        projectCard.appendChild(projectTitle);


        const projectImage = document.createElement('img');
        projectImage.src = project.imageUrl;
        projectImage.width = project.width;
        projectImage.height = project.height;
        projectImage.alt = `${project.projectName} Image`;
        projectCard.appendChild(projectImage);


        const projectInfo = document.createElement('div');
        projectInfo.className = 'project-info';


        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.projectDescription;
        projectInfo.appendChild(projectDescription);


        const logosDiv = document.createElement('div');
        logosDiv.className = 'logos';


        const htmlLogo = document.createElement('img');
        htmlLogo.src = project.htmlLogo;
        htmlLogo.alt = project.altHtml;
        logosDiv.appendChild(htmlLogo);


        const cssLogo = document.createElement('img');
        cssLogo.src = project.cssLogo;
        cssLogo.alt = project.altCss;
        logosDiv.appendChild(cssLogo);


        const jsLogo = document.createElement('img');
        jsLogo.src = project.jsLogo;
        jsLogo.alt = project.altJs;
        logosDiv.appendChild(jsLogo);


        projectInfo.appendChild(logosDiv);
        projectCard.appendChild(projectInfo);
        container.appendChild(projectCard);

    });
    
});
