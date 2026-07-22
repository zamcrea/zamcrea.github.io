// IL MOTORE JAVASCRIPT UNICO DI SCUOLAVVELOCE

// 1. Configurazione con il tuo NUOVO App ID che hai appena generato
const firebaseConfig = {
    apiKey: "AIzaSyChIqtIITrWPtsGt7t1GDpsiGjDCtVOnBU",
    authDomain: "scuolavveloce.firebaseapp.com",
    projectId: "scuolavveloce",
    storageBucket: "scuolavveloce.firebasestorage.app",
    messagingSenderId: "191133215574",
    appId: "1:191133215574:web:c35d117c9158bdad1ac4f7" // Inserito il codice nuovo!
};

// 2. La funzione dei tasti che invia i dati come testo puro (REST API)
function inviaRichiesta(tipo) {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const erroreDiv = document.getElementById('errore');
    const successoDiv = document.getElementById('successo');

    erroreDiv.style.display = "none";
    successoDiv.style.display = "none";

    if (!email || !password) {
        erroreDiv.innerText = "Inserisci sia l'email che la password!";
        erroreDiv.style.color = "#dc3545";
        erroreDiv.style.display = "block";
        return;
    }
    if (password.length  response.json())
    .then(data => {
        if (data.error) {
            erroreDiv.style.color = "#dc3545";
            if (data.error.message === "EMAIL_EXISTS") {
                erroreDiv.innerText = "Questa email esiste già! Clicca su Accedi.";
            } else if (data.error.message === "INVALID_PASSWORD" || data.error.message === "EMAIL_NOT_FOUND") {
                erroreDiv.innerText = "Email o password errate!";
            } else {
                erroreDiv.innerText = "Errore: " + data.error.message;
            }
        } else {
            erroreDiv.style.display = "none";
            localStorage.setItem("utenteLoggato", "true");
            
            if (tipo === 'registrati') {
                successoDiv.innerText = "🎉 Account creato con successo! Entrando...";
            } else {
                successoDiv.innerText = "🔓 Accesso eseguito! Caricamento...";
            }
            successoDiv.style.display = "block";
            
            setTimeout(() => {
                window.location.replace("index.html?v=" + Date.now());
            }, 1200);
        }
    })
    .catch(err => {
        erroreDiv.style.color = "#dc3545";
        erroreDiv.innerText = "Errore di rete. Controlla internet.";
    });
}

