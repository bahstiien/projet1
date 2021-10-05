document
  .querySelector('#contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    let erreur;
    let name = document.querySelector('#name');
    let prenom = document.querySelector('#prenom');
    let email = document.querySelector('#email');
    let message = document.querySelector('#message');

    if (!message.value) {
      erreur  = 'Veuillez saisir votre message !';
    }

    if (!email.value) {
      erreur = 'Veuillez saisir votre émail !';
    }

    if (!prenom.value) {
      erreur = 'Veuillez saisir votre prénom !';
    }

    if (!name.value) {
      erreur = 'Veuillez saisir votre nom !';
    }

    if (erreur) {
      event.preventDefault();
      document.querySelector('#erreur').innerHTML = erreur;
    } else {
      alert('Nous vous remercions pour votre message !');
    }
  });

  //translate
  let currentLanguage = "fr";

const switchLanguageBtn = document.querySelector('#btnLangage');
switchLanguageBtn.addEventListener('click', function() {
   if(currentLanguage === "fr"){
       currentLanguage = "en"; 
   }
   else {
       currentLanguage = "fr";
   }
    i18n.changeLanguage(currentLanguage);
});
