document.addEventListener('DOMContentLoaded', () => {

  const cvBtn = document.querySelector("#cv-btn");
  const cvBtn2 = document.querySelector("#cv-btn2");
  const contact = document.querySelector('.contact');
  const mailContact = document.querySelector("#mailContact");
  const btnMenu = document.querySelector('.burger-menu');

  //Cargando los listeners necesarios
  loadEventListeners ();

  function loadEventListeners () {
    cvBtn.addEventListener('click', () => {
      cvBtn.href = "../files/hermcode-cv.pdf";
      cvBtn.download = 'hermcode-cv.pdf';
    });
    cvBtn2.addEventListener('click', () => {
      cvBtn2.href = "../files/hermcode-cv.pdf";
      cvBtn2.download = 'hermcode-cv.pdf';
    });
    mailContact.addEventListener('click', () => {
      
      copyToClipboard();
      showNotification();
    });


  }

  function copyToClipboard() {
    var r = document.createRange();
    r.selectNode(document.getElementById('mailContact'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }
  function showNotification() {
    const notification = document.createElement('div');
    // const icon = notification.createElement('i');
    notification.classList.add('notification');
    notification.textContent = ' Correo copiado al portapapeles';
    // icon.classList.add('bx bxs-copy-alt');
    notification.innerHTML = "<i class='bx bx-check' ></i>" + ' Email copied';

    contact.insertBefore(notification, document.querySelector('.span'));

    setTimeout(() => {
      notification.classList.add('visible');

      setTimeout(() => {
        notification.classList.remove('visible');
        notification.remove();
      }, 1500);
    } );
  }
  
});