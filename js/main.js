// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  for (const link of links) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Add offset for header
        const headerOffset = 100;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  }
  
  // Header show/hide on scroll
  let lastScrollTop = 0;
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 200) {
      // Scrolling down
      header.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
  });
  
  // Add active class to current section in menu
  const sections = document.querySelectorAll('section');
  const menuItems = document.querySelectorAll('.menu a');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    
    menuItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href').substring(1) === current) {
        item.classList.add('active');
      }
    });
  });
  
  // Form submission
  const contactForm = document.querySelector('.contact-form form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // e.preventDefault();
      alert('Please send your message via email. Thank you! I will get back to you as soon as possible.');
      // contactForm.reset();
    });
  }
  
  // Animation des éléments au scroll
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  function checkIfInView() {
    const windowHeight = window.innerHeight;
    const windowTopPosition = window.scrollY;
    const windowBottomPosition = windowTopPosition + windowHeight;
    
    animateElements.forEach(element => {
      const elementHeight = element.offsetHeight;
      const elementTopPosition = element.offsetTop;
      const elementBottomPosition = elementTopPosition + elementHeight;
      
      // if ((elementBottomPosition >= windowTopPosition) && 
          // (elementTopPosition <= windowBottomPosition - elementHeight / 3)) {
        element.classList.add('visible');
      // }
    });
  }
  
  // Exécuter une fois pour les éléments qui sont déjà dans la vue au chargement
  setTimeout(checkIfInView, 100);
  
  // Puis à chaque scroll
  window.addEventListener('scroll', checkIfInView);
  
  // Menu mobile toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.menu');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
      
      if (menu.style.display === 'flex') {
        menu.style.position = 'absolute';
        menu.style.top = '100%';
        menu.style.left = '0';
        menu.style.right = '0';
        menu.style.backgroundColor = 'white';
        menu.style.flexDirection = 'column';
        menu.style.padding = '1rem';
        menu.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        menu.style.zIndex = '1000';
        
        const menuItems = menu.querySelectorAll('li');
        menuItems.forEach(item => {
          item.style.margin = '0.5rem 0';
          item.style.textAlign = 'center';
        });
      }
    });
  }
});
