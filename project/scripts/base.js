document.addEventListener('DOMContentLoaded', () => 
    
    {
        
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');
    const socialContent = `

        <a href="https://github.com/user13356" target="_blank" title="GitHub"><img
                class="icon github-logo" src="../project/images/logos/github.png"
                alt="GitHub" /></a>
        <a href="https://x.com/#" target="_blank" title="X"><img class="icon x-logo"
                src="../project/images/logos/logo-x.png" alt="X logo" /></a>
        <a href="https://www.linkedin.com/in/cvans" target="_blank" title="LinkedIn"><img
                class="icon linkedin-logo" src="../project/images/logos/linkedin.png"
                alt="LinkedIn icon" /></a>
    `;

    menuButton.addEventListener('click', () => 
        
        {
        menuButton.classList.toggle('open');
        navigation.classList.toggle('open');});


    document.querySelectorAll('.intro-social, .social').forEach(div => {
        div.innerHTML = socialContent;});


    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

});
