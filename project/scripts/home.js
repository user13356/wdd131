document.addEventListener('DOMContentLoaded', () => {

    const aboutMyself = document.querySelector('.about-myself');
    if (aboutMyself) {
        const aboutMyselfContent = `
            <h2>Web Development Career</h2>
            <p>
                In my current career I make use of PowerShell, scripting, reading error logs on servers and backup software.
            </p> 
            <p>
                Last year I was busy with a mentor program with Focus on ISO27001 information security auditing standard and doing a project with automating reports for clients infrastructure. 
            </p>     
            <p>
                In my day-to-day career I focus on VMware software defined datacentres and VEEAM enterprise software. 
            </p>
            <p>    
                
                Working with scripting and reading logs made me used to HTML coding and understanding of syntax.

            </p>
        `;
        aboutMyself.innerHTML = aboutMyselfContent;
    }

    const education = document.querySelector('.education');
    if (education) {
        const educationContent = `
            <h2>Education</h2>
            <p>
                Currently pursuing a Bachelor of Science in Software Development from Brigham Young University, These software skills are preparing me for my future career.
            </p>
            <p>
                My education
                Been learning about Python, C#, HTML and CSS to name a few.
            </p>
            <p>    
               I'm starting my Web Development Certificate and hope to complete my degree next year.
            </p>
            <p>
                Previously completed a National Certificate in Systems Support on NQF5.
            </p>
        `;
        education.innerHTML = educationContent;
    }
});
