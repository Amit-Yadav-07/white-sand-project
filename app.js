const toggleBtn = document.querySelector('.toggle-btn');
const NavLinkContainer = document.querySelector('.nav-links-container');
toggleBtn.addEventListener('click', () => {
    NavLinkContainer.classList.toggle('active')

})

