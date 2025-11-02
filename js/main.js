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
      e.preventDefault();

      const wasValid = contactForm.reportValidity();
      if (!wasValid) {
        return;
      }

      const name = contactForm.querySelector('#name')?.value.trim() || '';
      const email = contactForm.querySelector('#email')?.value.trim() || '';
      const message = contactForm.querySelector('#message')?.value.trim() || '';
      const websiteField = contactForm.querySelector('#website')?.value.trim();

      if (websiteField) {
        return; // Honeypot triggered, silently abort submission.
      }

      const subject = encodeURIComponent(`Website contact from ${name || 'Unknown'} (${email || 'no email'})`);

      const introLine = introSegments.length
        ? `Hello, Dr. Ertural!\nI wish you the utmost wonderful day. My name is ${name} and you can reach me at ${email}.`
        : 'Hello, Dr. Ertural!\nI wish you the utmost wonderful day. I am reaching out via your website contact form.';

      let bodyText = `${introLine}\nI hope this message finds you well. I would appreciate your attention to the following inquiry:\n${message || '[No inquiry text was provided.]'}\n`;

      if (email) {
        bodyText += `Feel free to respond directly at ${email}.\n`;
      }

      bodyText += `Thank you very much for your time and consideration.\n\nKind regards,\n${name || 'A website visitor'}`;

      const body = encodeURIComponent(bodyText);
      const mailtoLink = `mailto:christina.ertural@quantumchemist.de?subject=${subject}&body=${body}`;

      const alertLines = [
        'Please send your message via email. Thank you! I will get back to you as soon as possible. \nAfter you click "OK", your email client will open with a pre-filled email.',
        '',
        `Your stats:\nForm validation result: ${wasValid ? 'valid' : 'invalid'}.`,
        name ? `Your name was: ${name}` : 'No name provided.',
        email ? `Your email was: ${email}` : 'No email provided.',
        message ? `Your message was:\n${message}` : 'No message provided.'
      ];

      alert(alertLines.join('\n'));
      window.location.href = mailtoLink;
      contactForm.reset();
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
