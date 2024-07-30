document.querySelector('form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        event.preventDefault();
        alert('Tous les champs sont requis.');
    } else if (!validateEmail(email)) {
        event.preventDefault();
        alert('Adresse email invalide.');
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
