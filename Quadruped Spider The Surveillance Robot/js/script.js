	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
    const gaugeElement = document.querySelector(".gauge");

    function setGaugeValue(gauge, value) {
      if (value < 0 || value > 1) {
        return;
      }
    
      gauge.querySelector(".gauge__fill").style.transform = `rotate(${value / 2}turn)`;
      gauge.querySelector(".gauge__cover").textContent = `${Math.round(value * 100)}%`;
    }
    
    setGaugeValue(gaugeElement, 0.03);
    