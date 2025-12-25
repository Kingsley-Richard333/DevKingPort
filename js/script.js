const imageUpload = document.getElementById('imageUpload');
const portraitImage = document.getElementById('portraitImage');

imageUpload.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      portraitImage.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

(function () {
  const hamburger = document.getElementById('hamburger');
  const header = document.querySelector('header');
  const nav = document.getElementById('main-nav');

  if (!hamburger || !header || !nav) return;

  hamburger.addEventListener('click', () => {
    const open = header.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      header.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('click', (e) => {
    if (!header.classList.contains('open')) return;
    if (window.innerWidth > 900) return;
    if (nav.contains(e.target) || hamburger.contains(e.target)) return;
    header.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
})();

const container = document.querySelector('.grid-container');

container.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 768) {
        return;
    }

    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    const rotateY = offsetX / rect.width * -5;
    const rotateX = offsetY / rect.height * 5;

    container.style.transform = `
        perspective(1000px) 
        rotateX(${5 + rotateX}deg) 
        rotateY(${-5 + rotateY}deg)
    `;
});

container.addEventListener('mouseleave', () => {
    if (window.innerWidth <= 768) {
        return;
    }
    
    container.style.transform = `
        perspective(1000px) 
        rotateX(5deg) 
        rotateY(-5deg)
    `;
});

const bentoContainer = document.querySelector('.orbital-bento');
const bentoItems = document.querySelectorAll('.bento-item');

const isDesktop = () => window.innerWidth > 1024;

document.addEventListener('mousemove', (e) => {
    if (!isDesktop()) return;

    const rect = bentoContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);

    const containerRotateX = mouseY * -3;
    const containerRotateY = mouseX * 3;

    bentoContainer.style.transform = `perspective(1500px) rotateX(${containerRotateX}deg) rotateY(${containerRotateY}deg)`;

    bentoItems.forEach((item, index) => {
        const factor = (index + 1) * 2; 
        const itemX = mouseX * factor;
        const itemY = mouseY * factor;
        
        item.style.setProperty('--move-x', `${itemX}px`);
        item.style.setProperty('--move-y', `${itemY}px`);
    });
});

document.addEventListener('mouseleave', () => {
    bentoContainer.style.transform = `perspective(1500px) rotateX(0deg) rotateY(0deg)`;
    bentoItems.forEach(item => {
        item.style.setProperty('--move-x', `0px`);
        item.style.setProperty('--move-y', `0px`);
    });
});




function sendMail() {
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value
  };

  emailjs.send("service_vwxh1aa","template_r2agfzb",parms).then(alert("Message Sent Successfully"));
}
