# MeteoLive
Mostra il meteo in tempo reale in tutto il mondo


Un'app sviluppata per android che permette tramite una barra di ricerca di trovare il meteo delle citta nel mondo.

API utilizzate sono di OpenWeatherMap
NB. all'interno di questo progetto non è presente la cartella config e il file apis.js

./config/apis.js


Basta creare una cartella all'interno del progetto dal nome 

config

e un file di nome 

apis.js


all'interno deve essere presente una struttura cosi :

export default {
    baseUrlMeteoAttuale : "http://api.openweathermap.org/data/2.5/weather?q=",
    key : "la tua key di openweather",
    icons : "http://openweathermap.org/img/wn/"
} 
