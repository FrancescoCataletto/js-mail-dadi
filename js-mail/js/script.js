/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere (creare quindi una lista di utenti autorizzati),
stampa un messaggio appropriato sull’esito del controllo.

*/
const mailButton = document.getElementById("verifyButton");
mailButton.innerHTML = "Insert your email";

mailButton.addEventListener("click", function(){
    const userMail = prompt("Scrivi la tua mail");

    const mailOutput = document.getElementById("mailBox");

    const authorizedMailsArr = [
        "DomenicoAgostino@gmail.com",
        "MihaiBadia@gmail.com",
        "RiccardoBecattini@gmail.com",
        "ManuelBenini@gmail.com",
        "BrunoBernardini@gmail.com",
        "GuidoBuono@gmail.com",
        "PierluigiCancellaro@gmail.com",
        "FrancescoCataletto@gmail.com",
        "StefanoCravotta@gmail.com",
        "GiovanniCrispino@gmail.com",
        "GiancarloCroce@gmail.com",
        "EnricoDeStefano@gmail.com",
        "SilviaDugato@gmail.com",
        "CarloDuminucoDelMonte@gmail.com",
        "FrancescoErcoli@gmail.com",
        "LucaGaddini@gmail.com",
        "MarcoGagliano@gmail.com",
        "CristinaGasperini@gmail.com",
        "GabrieleGiusti@gmail.com",
        "ChiaraGrillo@gmail.com",
        "ManuelaIenuso@gmail.com",
        "MicheleIliescu@gmail.com",
        "KetevanJorjoliani@gmail.com",
        "RenatoLami@gmail.com",
        "DavideManciucca@gmail.com",
        "EmanueleMastronardi@gmail.com",
        "LucaMazzarini@gmail.com",
        "DanieleMonteleone@gmail.com",
        "SalvatoreOlivieri@gmail.com",
        "LeonardoPellegrini@gmail.com",
        "AgostinoPiquè@gmail.com",
        "DavidePizzolla@gmail.com",
        "AntonioPollo@gmail.com",
        "IvanRusso@gmail.com",
        "AmanjitSingh@gmail.com",
        "SebastianoVisco@gmail.com"
        ];

        let correctMail = false;

        for(let i = 0; i < authorizedMailsArr.length; i++){
            if(userMail === authorizedMailsArr[i]){
                correctMail = true;
            }
        }

        if(correctMail){
            mailOutput.append("Welcome!");
        }else{
            mailOutput.append("Please enter a valid Email.")
        }
})