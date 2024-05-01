$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".navbar").addClass("navbar-scrolled");
    } else {
      $(".navbar").removeClass("navbar-scrolled");
    }
  });

  

  window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("nav").classList.add("navbar-opaque");
  } else {
    document.querySelector("nav").classList.remove("navbar-opaque");
  }
}


// Mettre à jour le texte "Votre note :" en fonction de la note sélectionnée
document.querySelectorAll('.rating input').forEach(input => {
  input.addEventListener('change', function() {
      let ratingLabel = document.getElementById('rating-label');
      let selectedRatingText = this.nextElementSibling.getAttribute('data-text');
      ratingLabel.textContent = "Votre note : " + selectedRatingText.toLowerCase();
  });
});



// animation css grid
document.addEventListener("DOMContentLoaded", function() {
  const titles = document.querySelectorAll(".icon-title");
  const texts = document.querySelectorAll(".icon-text");
  
  function fadeInElements() {
    titles.forEach(title => {
      if (isElementInViewport(title)) {
        title.classList.add("animate__animated", "animate__fadeInDown");
      }
    });
    
    texts.forEach(text => {
      if (isElementInViewport(text)) {
        text.classList.add("animate__animated", "animate__fadeInDown");
      }
    });
  }
  
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  fadeInElements();
  
  document.addEventListener("scroll", function() {
    fadeInElements();
  });
});




// animation js image et texte
const sections = document.querySelectorAll('.animate__animated');

const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeInLeft', 'visible');
      // Si l'entrée est une colonne de droite, affichez l'image après 2 secondes
      if (entry.target.classList.contains('right-column')) {
        setTimeout(() => {
          entry.target.querySelector('img').classList.add('visible');
        }, 2000);
      }
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

  // -------------


  // Gallerie
  $(document).ready(function() {
    // Ouvrir le modal lorsque vous cliquez sur un cercle
    $(".gallery-items").click(function() {
        var src = $(this).find("img").attr("src");
        $("#img01").attr("src", src);
        $("#myModal").show();
    });

    // Fermer le modal lorsque vous cliquez sur la croix
    $(".close").click(function() {
        $("#myModal").hide();
    });

    // Fermer le modal lorsque vous cliquez en dehors de l'image
    $(window).click(function(event) {
        if ($(event.target).hasClass("modal")) {
            $("#myModal").hide();
        }
    });
});
// ----------------------------------------

// contact

$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});


// recapcha
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche le comportement de soumission du formulaire par défaut

  // Affiche l'overlay
  document.getElementById("overlay").style.display = "block";

  // Affiche le reCAPTCHA
  document.getElementById("recaptchaContainer").style.display = "block";
});

// Callback lorsque le reCAPTCHA est validé
function onSubmit(token) {
  // Cache l'overlay et le reCAPTCHA
  document.getElementById("overlay").style.display = "none";
  document.getElementById("recaptchaContainer").style.display = "none";
  
  // Soumet le formulaire
  document.getElementById("myForm").submit();
}

// -----------------------------------------------------

// e-mail valide


document.addEventListener("DOMContentLoaded", function() {
  // Sélectionne le formulaire
  const form = document.getElementById("myForm");

  // Sélectionne le champ de l'e-mail
  const emailInput = document.getElementById("email");

  // Sélectionne l'overlay
  const overlay = document.getElementById("overlay");

  // Ajoute un écouteur d'événement pour la soumission du formulaire
  form.addEventListener("submit", function(event) {
    // Récupère la valeur de l'e-mail et retire les espaces blancs au début et à la fin
    const emailValue = emailInput.value.trim();

    // Vérifie si l'e-mail est valide en appelant la fonction isValidEmail
    if (!isValidEmail(emailValue)) {
      // Empêche la soumission du formulaire si l'e-mail n'est pas valide
      event.preventDefault();
      // Affiche une alerte demandant à l'utilisateur de saisir une adresse e-mail valide
      alert("Veuillez entrer une adresse e-mail valide.");
    }
  });

  // Fonction pour valider une adresse e-mail à l'aide d'une expression régulière
  function isValidEmail(email) {
    // Expression régulière pour valider l'e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Liste des domaines autorisés
    const allowedDomains = ['gmail.com', 'sfr.fr', 'yahoo.com', 'orange.fr', 'free.fr']; // Ajoute d'autres domaines au besoin
    
    // Vérifie si l'adresse e-mail correspond au modèle et si le domaine est autorisé
    if (emailPattern.test(email) && allowedDomains.some(domain => email.endsWith(domain))) {
      // Affiche l'overlay seulement si l'e-mail est valide
      overlay.style.display = "block";
      return true;
    } else {
      // Cache l'overlay si l'e-mail n'est pas valide
      overlay.style.display = "none";
      return false;
    }
  }
});

// -----------------------------------------------------------

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 0) { // 50 est la valeur de défilement à partir de laquelle la navbar descend
      navbar.classList.add('fixed-top'); // Ajoutez la classe fixed-top pour fixer la navbar en haut
  } else {
      navbar.classList.remove('fixed-top'); // Supprimez la classe fixed-top lorsque la navbar est en haut de la page
  }
});


window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var section1 = document.getElementById('section1');

    if (window.scrollY > section1.offsetHeight) { // Comparez le défilement avec la hauteur de la section 1
        navbar.classList.add('scrolled'); // Ajoutez la classe scrolled pour changer la couleur du texte
    } else {
        navbar.classList.remove('scrolled'); // Supprimez la classe scrolled lorsque vous remontez à la section 1
    }
});


