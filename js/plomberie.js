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

