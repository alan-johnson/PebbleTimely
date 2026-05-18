var Clay = require('@rebble/clay');
var clayConfig = require('./config.json');

// Runs inside the webview — no require() available; translations must be inline.
var customClay = function() {
    var self = this;

    var translations = {
        EN: {
            trans_connected: 'Linked',        trans_disconnected: 'No Link',
            trans_abbr_sunday: 'Su',  trans_abbr_monday: 'Mo',  trans_abbr_tuesday: 'Tu',
            trans_abbr_wedsday: 'We', trans_abbr_thursday: 'Th', trans_abbr_friday: 'Fr',
            trans_abbr_saturday: 'Sa',
            trans_january: 'January',   trans_february: 'February',  trans_march: 'March',
            trans_april: 'April',       trans_may: 'May',            trans_june: 'June',
            trans_july: 'July',         trans_august: 'August',      trans_september: 'September',
            trans_october: 'October',   trans_november: 'November',  trans_december: 'December',
            trans_sunday: 'Sunday',     trans_monday: 'Monday',      trans_tuesday: 'Tuesday',
            trans_wedsday: 'Wednesday', trans_thursday: 'Thursday',  trans_friday: 'Friday',
            trans_saturday: 'Saturday'
        },
        DA: {
            trans_connected: 'Forbundet',     trans_disconnected: 'Afbrudt',
            trans_abbr_sunday: 'Sø', trans_abbr_monday: 'Ma',  trans_abbr_tuesday: 'Ti',
            trans_abbr_wedsday: 'On', trans_abbr_thursday: 'To', trans_abbr_friday: 'Fr',
            trans_abbr_saturday: 'Lø',
            trans_january: 'Januar',    trans_february: 'Februar',   trans_march: 'Marts',
            trans_april: 'April',       trans_may: 'Maj',            trans_june: 'Juni',
            trans_july: 'Juli',         trans_august: 'August',      trans_september: 'September',
            trans_october: 'Oktober',   trans_november: 'November',  trans_december: 'December',
            trans_sunday: 'Søndag',     trans_monday: 'Mandag',      trans_tuesday: 'Tirsdag',
            trans_wedsday: 'Onsdag',    trans_thursday: 'Torsdag',   trans_friday: 'Fredag',
            trans_saturday: 'Lørdag'
        },
        NL: {
            trans_connected: 'Verbonden',     trans_disconnected: 'Geen link',
            trans_abbr_sunday: 'Zo', trans_abbr_monday: 'Ma',  trans_abbr_tuesday: 'Di',
            trans_abbr_wedsday: 'Wo', trans_abbr_thursday: 'Do', trans_abbr_friday: 'Vr',
            trans_abbr_saturday: 'Za',
            trans_january: 'Januari',   trans_february: 'Februari',  trans_march: 'Maart',
            trans_april: 'April',       trans_may: 'Mei',            trans_june: 'Juni',
            trans_july: 'Juli',         trans_august: 'Augustus',    trans_september: 'September',
            trans_october: 'Oktober',   trans_november: 'November',  trans_december: 'December',
            trans_sunday: 'Zondag',     trans_monday: 'Maandag',     trans_tuesday: 'Dinsdag',
            trans_wedsday: 'Woensdag',  trans_thursday: 'Donderdag', trans_friday: 'Vrijdag',
            trans_saturday: 'Zaterdag'
        },
        FI: {
            trans_connected: 'Kytketty',      trans_disconnected: 'Katkaistu',
            trans_abbr_sunday: 'Su', trans_abbr_monday: 'Ma',  trans_abbr_tuesday: 'Ti',
            trans_abbr_wedsday: 'Ke', trans_abbr_thursday: 'To', trans_abbr_friday: 'Pe',
            trans_abbr_saturday: 'La',
            trans_january: 'Tammikuu',  trans_february: 'Helmikuu',  trans_march: 'Maaliskuu',
            trans_april: 'Huhtikuu',    trans_may: 'Toukokuu',       trans_june: 'Kesäkuu',
            trans_july: 'Heinäkuu',     trans_august: 'Elokuu',      trans_september: 'Syyskuu',
            trans_october: 'Lokakuu',   trans_november: 'Marraskuu', trans_december: 'Joulukuu',
            trans_sunday: 'Sunnuntai',  trans_monday: 'Maanantai',   trans_tuesday: 'Tiistai',
            trans_wedsday: 'Keskiviikko', trans_thursday: 'Torstai', trans_friday: 'Perjantai',
            trans_saturday: 'Lauantai'
        },
        FR: {
            trans_connected: 'Connecté',      trans_disconnected: 'Sans lien',
            trans_abbr_sunday: 'Di', trans_abbr_monday: 'Lu',  trans_abbr_tuesday: 'Ma',
            trans_abbr_wedsday: 'Me', trans_abbr_thursday: 'Je', trans_abbr_friday: 'Ve',
            trans_abbr_saturday: 'Sa',
            trans_january: 'Janvier',   trans_february: 'Février',   trans_march: 'Mars',
            trans_april: 'Avril',       trans_may: 'Mai',            trans_june: 'Juin',
            trans_july: 'Juillet',      trans_august: 'Août',        trans_september: 'Septembre',
            trans_october: 'Octobre',   trans_november: 'Novembre',  trans_december: 'Décembre',
            trans_sunday: 'Dimanche',   trans_monday: 'Lundi',       trans_tuesday: 'Mardi',
            trans_wedsday: 'Mercredi',  trans_thursday: 'Jeudi',     trans_friday: 'Vendredi',
            trans_saturday: 'Samedi'
        },
        DE: {
            trans_connected: 'Verbunden',     trans_disconnected: 'Getrennt',
            trans_abbr_sunday: 'So', trans_abbr_monday: 'Mo',  trans_abbr_tuesday: 'Di',
            trans_abbr_wedsday: 'Mi', trans_abbr_thursday: 'Do', trans_abbr_friday: 'Fr',
            trans_abbr_saturday: 'Sa',
            trans_january: 'Januar',    trans_february: 'Februar',   trans_march: 'März',
            trans_april: 'April',       trans_may: 'Mai',            trans_june: 'Juni',
            trans_july: 'Juli',         trans_august: 'August',      trans_september: 'September',
            trans_october: 'Oktober',   trans_november: 'November',  trans_december: 'Dezember',
            trans_sunday: 'Sonntag',    trans_monday: 'Montag',      trans_tuesday: 'Dienstag',
            trans_wedsday: 'Mittwoch',  trans_thursday: 'Donnerstag', trans_friday: 'Freitag',
            trans_saturday: 'Samstag'
        },
        IT: {
            trans_connected: 'Connesso',      trans_disconnected: 'Sconnesso',
            trans_abbr_sunday: 'Do', trans_abbr_monday: 'Lu',  trans_abbr_tuesday: 'Ma',
            trans_abbr_wedsday: 'Me', trans_abbr_thursday: 'Gi', trans_abbr_friday: 'Ve',
            trans_abbr_saturday: 'Sa',
            trans_january: 'Gennaio',   trans_february: 'Febbraio',  trans_march: 'Marzo',
            trans_april: 'Aprile',      trans_may: 'Maggio',         trans_june: 'Giugno',
            trans_july: 'Luglio',       trans_august: 'Agosto',      trans_september: 'Settembre',
            trans_october: 'Ottobre',   trans_november: 'Novembre',  trans_december: 'Dicembre',
            trans_sunday: 'Domenica',   trans_monday: 'Lunedì',      trans_tuesday: 'Martedì',
            trans_wedsday: 'Mercoledì', trans_thursday: 'Giovedì',   trans_friday: 'Venerdì',
            trans_saturday: 'Sabato'
        },
        NO: {
            trans_connected: 'Tilkoblet',     trans_disconnected: 'Frakoblet',
            trans_abbr_sunday: 'Sø', trans_abbr_monday: 'Ma',  trans_abbr_tuesday: 'Ti',
            trans_abbr_wedsday: 'On', trans_abbr_thursday: 'To', trans_abbr_friday: 'Fr',
            trans_abbr_saturday: 'Lø',
            trans_january: 'Januar',    trans_february: 'Februar',   trans_march: 'Mars',
            trans_april: 'April',       trans_may: 'Mai',            trans_june: 'Juni',
            trans_july: 'Juli',         trans_august: 'August',      trans_september: 'September',
            trans_october: 'Oktober',   trans_november: 'November',  trans_december: 'Desember',
            trans_sunday: 'Søndag',     trans_monday: 'Mandag',      trans_tuesday: 'Tirsdag',
            trans_wedsday: 'Onsdag',    trans_thursday: 'Torsdag',   trans_friday: 'Fredag',
            trans_saturday: 'Lørdag'
        },
        PT: {
            trans_connected: 'Conectado',     trans_disconnected: 'Sem link',
            trans_abbr_sunday: 'Do', trans_abbr_monday: 'Sg',  trans_abbr_tuesday: 'Te',
            trans_abbr_wedsday: 'Qr', trans_abbr_thursday: 'Qi', trans_abbr_friday: 'Sx',
            trans_abbr_saturday: 'Sb',
            trans_january: 'Janeiro',   trans_february: 'Fevereiro', trans_march: 'Março',
            trans_april: 'Abril',       trans_may: 'Maio',           trans_june: 'Junho',
            trans_july: 'Julho',        trans_august: 'Agosto',      trans_september: 'Setembro',
            trans_october: 'Outubro',   trans_november: 'Novembro',  trans_december: 'Dezembro',
            trans_sunday: 'Domingo',    trans_monday: 'Segunda',     trans_tuesday: 'Terça',
            trans_wedsday: 'Quarta',    trans_thursday: 'Quinta',    trans_friday: 'Sexta',
            trans_saturday: 'Sábado'
        },
        RU: {
            trans_connected: 'Связан',        trans_disconnected: 'Отключен',
            trans_abbr_sunday: 'Вс', trans_abbr_monday: 'Пн',  trans_abbr_tuesday: 'Вт',
            trans_abbr_wedsday: 'Ср', trans_abbr_thursday: 'Чт', trans_abbr_friday: 'Пт',
            trans_abbr_saturday: 'Сб',
            trans_january: 'Январь',    trans_february: 'Февраль',   trans_march: 'Март',
            trans_april: 'Апрель',      trans_may: 'Май',            trans_june: 'Июнь',
            trans_july: 'Июль',         trans_august: 'Август',      trans_september: 'Сентябрь',
            trans_october: 'Октябрь',   trans_november: 'Ноябрь',   trans_december: 'Декабрь',
            trans_sunday: 'Воскресенье', trans_monday: 'Понедельник', trans_tuesday: 'Вторник',
            trans_wedsday: 'Среда',     trans_thursday: 'Четверг',   trans_friday: 'Пятница',
            trans_saturday: 'Суббота'
        },
        ES: {
            trans_connected: 'Conectado',     trans_disconnected: 'Sin link',
            trans_abbr_sunday: 'Do', trans_abbr_monday: 'Lu',  trans_abbr_tuesday: 'Ma',
            trans_abbr_wedsday: 'Mi', trans_abbr_thursday: 'Ju', trans_abbr_friday: 'Vi',
            trans_abbr_saturday: 'Sa',
            trans_january: 'Enero',     trans_february: 'Febrero',   trans_march: 'Marzo',
            trans_april: 'Abril',       trans_may: 'Mayo',           trans_june: 'Junio',
            trans_july: 'Julio',        trans_august: 'Agosto',      trans_september: 'Septiembre',
            trans_october: 'Octubre',   trans_november: 'Noviembre', trans_december: 'Diciembre',
            trans_sunday: 'Domingo',    trans_monday: 'Lunes',       trans_tuesday: 'Martes',
            trans_wedsday: 'Miércoles', trans_thursday: 'Jueves',    trans_friday: 'Viernes',
            trans_saturday: 'Sábado'
        },
        SV: {
            trans_connected: 'Ansluten',      trans_disconnected: 'Frånkoppl',
            trans_abbr_sunday: 'Sö', trans_abbr_monday: 'Må',  trans_abbr_tuesday: 'Ti',
            trans_abbr_wedsday: 'On', trans_abbr_thursday: 'To', trans_abbr_friday: 'Fr',
            trans_abbr_saturday: 'Lö',
            trans_january: 'Januari',   trans_february: 'Februari',  trans_march: 'Mars',
            trans_april: 'April',       trans_may: 'Maj',            trans_june: 'Juni',
            trans_july: 'Juli',         trans_august: 'Augusti',     trans_september: 'September',
            trans_october: 'Oktober',   trans_november: 'November',  trans_december: 'December',
            trans_sunday: 'Söndag',     trans_monday: 'Måndag',      trans_tuesday: 'Tisdag',
            trans_wedsday: 'Onsdag',    trans_thursday: 'Torsdag',   trans_friday: 'Fredag',
            trans_saturday: 'Lördag'
        }
    };

    var langItem = self.getItemByMessageKey('language');

    langItem.on('change', function() {
        var lang = langItem.get();
        var t = translations[lang];
        if (!t) { return; }
        Object.keys(t).forEach(function(key) {
            var item = self.getItemByMessageKey(key);
            if (item) { item.set(t[key]); }
        });
    });
};

var clay = new Clay(clayConfig, customClay, { autoHandleEvents: false });

var CLIMACON = {
  'cloud'            : '!',
  'cloud_day'        : '"',
  'cloud_night'      : '#',
  'rain'             : '$',
  'rain_day'         : '%',
  'rain_night'       : '&',
  'showers'          : "'",
  'showers_day'      : '(',
  'showers_night'    : ')',
  'downpour'         : '*',
  'downpour_day'     : '+',
  'downpour_night'   : ',',
  'drizzle'          : '-',
  'drizzle_day'      : '.',
  'drizzle_night'    : '/',
  'sleet'            : '0',
  'sleet_day'        : '1',
  'sleet_night'      : '2',
  'hail'             : '3',
  'hail_day'         : '4',
  'hail_night'       : '5',
  'flurries'         : '6',
  'flurries_day'     : '7',
  'flurries_night'   : '8',
  'snow'             : '9',
  'snow_day'         : ':',
  'snow_night'       : ';',
  'fog'              : '<',
  'fog_day'          : '=',
  'fog_night'        : '>',
  'haze'             : '?',
  'haze_day'         : '@',
  'haze_night'       : 'A',
  'wind'             : 'B',
  'wind_cloud'       : 'C',
  'wind_cloud_day'   : 'D',
  'wind_cloud_night' : 'E',
  'lightning'        : 'F',
  'lightning_day'    : 'G',
  'lightning_night'  : 'H',
// ---
  'sun'              : 'I',
   'set'             : 'J',
   'rise'            : 'K',
   'low'             : 'L',
   'lower'           : 'M',
  'moon'             : 'N',
   'new'             : 'O',
   'wax_cresc'       : 'P',
   'wax_quart'       : 'Q',
   'wax_gib'         : 'R',
   'full'            : 'S',
   'wane_cresc'      : 'T',
   'wane_quart'      : 'U',
   'wane_gib'        : 'V',
  'snowflake'        : 'W',
  'tornado'          : 'X',
  'thermometer'      : 'Y',
   'temp_low'        : 'Z',
   'temp_med-low'    : '[',
   'temp_med-high'   : "\\",
   'temp_high'       : ']',
   'temp_full'       : '^',
  'celsius'          : '`',
  'fahrenheit'       : '_',
  'compass'          : 'a',
   'north'           : 'b',
   'east'            : 'c',
   'south'           : 'd',
   'west'            : 'e',
  'umbrella'         : 'f',
  'sunglasses'       : 'g',
  'cloud_refresh'    : 'h',
  'cloud_up'         : 'i',
  'cloud_down'       : 'j'
};

var OWMclimacon= {
// Thunderstorm
  200 : CLIMACON['lightning'], // thunderstorm with light rain
  201 : CLIMACON['lightning'], // thunderstorm with rain
  202 : CLIMACON['lightning'], // thunderstorm with heavy rain
  210 : CLIMACON['lightning'], // light thunderstorm
  211 : CLIMACON['lightning'], // thunderstorm
  212 : CLIMACON['lightning'], // heavy thunderstorm
  221 : CLIMACON['lightning'], // ragged thunderstorm
  230 : CLIMACON['lightning'], // thunderstorm with light drizzle
  231 : CLIMACON['lightning'], // thunderstorm with drizzle
  232 : CLIMACON['lightning'], // thunderstorm with heavy drizzle
// Drizzle
  300 : CLIMACON['drizzle'], // light intensity drizzle
  301 : CLIMACON['drizzle'], // drizzle
  302 : CLIMACON['drizzle'], // heavy intensity drizzle
  310 : CLIMACON['drizzle'], // light intensity drizzle rain
  311 : CLIMACON['drizzle'], // drizzle rain
  312 : CLIMACON['drizzle'], // heavy intensity drizzle rain
  313 : CLIMACON['showers'], // shower rain and drizzle
  314 : CLIMACON['showers'], // heavy shower rain and drizzle
  321 : CLIMACON['showers'], // shower drizzle
// Rain
  500 : CLIMACON['rain'], // light rain
  501 : CLIMACON['rain'], // moderate rain
  502 : CLIMACON['downpour'], // heavy intensity rain
  503 : CLIMACON['downpour'], // very heavy rain
  504 : CLIMACON['downpour'], // extreme rain
  511 : CLIMACON['downpour'], // freezing rain
  520 : CLIMACON['showers'], // light intensity shower rain
  521 : CLIMACON['showers'], // shower rain
  522 : CLIMACON['showers'], // heavy intensity shower rain
  531 : CLIMACON['showers'], // ragged shower rain
// Snow
  600 : CLIMACON['snow'], // light snow
  601 : CLIMACON['snow'], // snow
  602 : CLIMACON['snow'], // heavy snow
  611 : CLIMACON['sleet'], // sleet
  612 : CLIMACON['sleet'], // shower sleet
  615 : CLIMACON['snow'], // light rain and snow
  616 : CLIMACON['snow'], // rain and snow
  620 : CLIMACON['snow'], // light shower snow
  621 : CLIMACON['snow'], // shower snow
  622 : CLIMACON['snow'], // heavy shower snow
// Atmosphere
  701 : CLIMACON['haze'], // mist
  711 : CLIMACON['haze'], // smoke
  721 : CLIMACON['haze'], // haze
  731 : CLIMACON['haze'], // Sand/Dust Whirls
  741 : CLIMACON['fog'], // Fog
  751 : CLIMACON['haze'], // sand
  761 : CLIMACON['haze'], // dust
  762 : CLIMACON['haze'], // VOLCANIC ASH
  771 : CLIMACON['wind'], // SQUALLS
  781 : CLIMACON['tornado'], // TORNADO
// Clouds
  800 : CLIMACON['sun'], // sky is clear
  801 : CLIMACON['cloud'], // few clouds
  802 : CLIMACON['cloud'], // scattered clouds
  803 : CLIMACON['cloud'], // broken clouds
  804 : CLIMACON['cloud'], // overcast clouds
// Extreme
  900 : CLIMACON['tornado'], // tornado
  901 : CLIMACON['tornado'], // tropical storm
  902 : CLIMACON['tornado'], // hurricane
  903 : CLIMACON['temp_low'], // cold
  904 : CLIMACON['temp_high'], // hot
  905 : CLIMACON['wind'], // windy
  906 : CLIMACON['hail'], // hail
// Additional
  950 : CLIMACON['set'], // Setting
  951 : CLIMACON['sun'], // Calm
  952 : CLIMACON['sun'], // Light breeze
  953 : CLIMACON['sun'], // Gentle Breeze
  954 : CLIMACON['sun'], // Moderate breeze
  955 : CLIMACON['sun'], // Fresh Breeze
  956 : CLIMACON['wind'], // Strong breeze
  957 : CLIMACON['wind'], // High wind, near gale
  958 : CLIMACON['wind'], // Gale
  959 : CLIMACON['wind'], // Severe Gale
  960 : CLIMACON['lightning'], // Storm
  961 : CLIMACON['lightning'], // Violent Storm
  962 : CLIMACON['tornado'], // Hurricane
};

var YWclimacon= {
  0 : CLIMACON['tornado'], //tornado
  1 : CLIMACON['tornado'], //tropical storm
  2 : CLIMACON['tornado'], //hurricane
  3 : CLIMACON['lightning'], //severe thunderstorms
  4 : CLIMACON['lightning'], //thunderstorms
  5 : CLIMACON['sleet'], //mixed rain and snow
  6 : CLIMACON['sleet'], //mixed rain and sleet
  7 : CLIMACON['sleet'], //mixed snow and sleet
  8 : CLIMACON['hail'], //freezing drizzle
  9 : CLIMACON['drizzle'], //drizzle
  10 : CLIMACON['hail'], //freezing rain
  11 : CLIMACON['showers'], //showers
  12 : CLIMACON['showers'], //showers
  13 : CLIMACON['snow'], //snow flurries
  14 : CLIMACON['snow'], //light snow showers
  15 : CLIMACON['snow'], //blowing snow
  16 : CLIMACON['snow'], //snow
  17 : CLIMACON['hail'], //hail
  18 : CLIMACON['sleet'], //sleet
  19 : CLIMACON['haze'], //dust
  20 : CLIMACON['fog'], //foggy
  21 : CLIMACON['haze'], //haze
  22 : CLIMACON['haze'], //smoky
  23 : CLIMACON['wind'], //blustery
  24 : CLIMACON['wind'], //windy
  25 : CLIMACON['temp_low'], //cold
  26 : CLIMACON['cloud'], //cloudy
  27 : CLIMACON['cloud_night'], //mostly cloudy (night)
  28 : CLIMACON['cloud_day'], //mostly cloudy (day)
  29 : CLIMACON['cloud_night'], //partly cloudy (night)
  30 : CLIMACON['cloud_day'], //partly cloudy (day)
  31 : CLIMACON['moon'], //clear (night)
  32 : CLIMACON['sun'], //sunny
  33 : CLIMACON['moon'], //fair (night)
  34 : CLIMACON['sun'], //fair (day)
  35 : CLIMACON['hail'], //mixed rain and hail
  36 : CLIMACON['temp_high'], //hot
  37 : CLIMACON['lightning'], //isolated thunderstorms
  38 : CLIMACON['lightning'], //scattered thunderstorms
  39 : CLIMACON['lightning'], //scattered thunderstorms
  40 : CLIMACON['showers'], //scattered showers
  41 : CLIMACON['snow'], //heavy snow
  42 : CLIMACON['snow'], //scattered snow showers
  43 : CLIMACON['snow'], //heavy snow
  44 : CLIMACON['cloud'], //partly cloudy
  45 : CLIMACON['lightning'], //thundershowers
  46 : CLIMACON['snow'], //snow showers
  47 : CLIMACON['lightning'], //isolated thundershowers
  3200 : CLIMACON['cloud_down'], //not available
};

function getWeatherFromLatLong(latitude, longitude) {
  var response;
  var woeid = -1;
  var query = encodeURI("select woeid from geo.placefinder where text=\""+latitude+","+longitude + "\" and gflags=\"R\"");
  var url = "http://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json";
  var req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.onload = function(e) {
    if (req.readyState == 4) {
      if (req.status == 200) {
        response = JSON.parse(req.responseText);
        if (response) {
          woeid = response.query.results.Result.woeid;
          getWeatherFromWoeid(woeid);
        }
      } else {
        console.log("Error fetching woeid for " + url);
      }
    }
  }
  req.send(null);
}

function getWeatherFromLocation(location_name) {
  var response;
  var woeid = -1;
  var query = encodeURI("select woeid from geo.places(1) where text=\"" + location_name + "\"");
  var url = "http://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json";
  var req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.onload = function(e) {
    if (req.readyState == 4) {
      if (req.status == 200) {
        response = JSON.parse(req.responseText);
        if (response) {
          woeid = response.query.results.place.woeid;
          getWeatherFromWoeid(woeid);
        }
      } else {
        console.log("Error fetching woeid for " + url);
      }
    }
  }
  req.send(null);
}

function getWeatherFromWoeid(woeid) {
  if (weatherFormat === 1) { units = "metric"; }
  var query = encodeURI("select item.condition from weather.forecast where woeid = " + woeid +
                        " and u = " + (weatherFormat ? "\"c\"" : "\"f\""));
  var url = "http://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json";

  var response;
  var req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.onload = function(e) {
    if (req.readyState == 4) {
      if (req.status == 200) {
        response = JSON.parse(req.responseText);
        if (response) {
          var condition = response.query.results.channel.item.condition;
          temperature = condition.temp;
          icon = YWclimacon[condition.code];
          console.log("YW Weather: " + temperature + "; " + icon + " = " + condition.text);
          sendWeather(Number(temperature), icon);
        }
      } else {
        console.log("Error");
      }
    }
  }
  req.send(null);
}

function sendWeather(temp, cond_icon) {
  if (isItNight() && cond_icon == CLIMACON['sun']) { cond_icon = getMoonIcon(); }
  if (cond_icon == CLIMACON['moon']) { cond_icon = getMoonIcon(); }
  console.log('Sending Weather: ' + temp + '  ' + cond_icon);
  Pebble.sendAppMessage({
    message_type: 106,
    weather_temp: temp,
    weather_cond: cond_icon,
  });
}

var locationOptions = { "timeout": 15000, "maximumAge": 60000, "enableHighAccuracy": false }; // 15 second timeout, allow 1 min cached
//var cachedLocationOptions = { "timeout": 0, "maximumAge": 600000, "enableHighAccuracy": false }; // allow 10 min cached
var locationWatcher;
var lastCoordinates;
var weatherFormat;

Pebble.addEventListener("ready", function (e) {
//    console.log("Connect! " + e.ready);
//    locationWatcher = window.navigator.geolocation.watchPosition(weatherLocationSuccess, locationError, locationOptions);
//    navigator.geolocation.clearWatch(locationWatcher);
    getWatchVersion();
});

Pebble.addEventListener('showConfiguration', function() {
    Pebble.openURL(clay.generateUrl());
});

function getWatchVersion() {
    Pebble.sendAppMessage({ message_type: 104 },
        function (e) {
            console.log("Sent watch version request with transactionId=" + e.data.transactionId);
        },
        function (e) {
            console.log("Unable to deliver watch version request message with transactionId=" + e.data.transactionId + " Error is: " + e.data.error.message);
        }
        );
}

function saveWatchVersion(e) {
    console.log("Watch Version: " + e.payload.send_watch_version);
    console.log("Config Version: " + e.payload.send_config_version);
    window.localStorage.version_watch = e.payload.send_watch_version;
    window.localStorage.version_config = e.payload.send_config_version;
}

function saveBatteryValue(e) {
    console.log("Battery: " + e.payload.send_batt_percent + "%, Charge: " + e.payload.send_batt_charging + ", Plugged: " + e.payload.send_batt_plugged);
/*
var currentdate = new Date();
var datetime = "Date: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
console.log(datetime);
*/
    // TO BE DONE - actually store these in localStorage along with a date object in some useful manner
}

function sendWeatherToWatch(e) {
    weatherFormat = e.payload.weather_fmt;
    window.navigator.geolocation.getCurrentPosition(weatherLocationSuccess, locationError, locationOptions);
}

function sendTimezoneToWatch() {
    var offsetQuarterHours = Math.floor(new Date().getTimezoneOffset() / 15);
    // UTC offset in quarter hours ... 48 (UTC-12) through -56 (UTC+14) are the valid ranges
    Pebble.sendAppMessage({ message_type: 103, timezone_offset: offsetQuarterHours },
        function (e) {
            console.log("Sent TZ message (" + offsetQuarterHours + ") with transactionId=" + e.data.transactionId);
        },
        function (e) {
            console.log("Unable to deliver TZ message with transactionId=" + e.data.transactionId + " Error is: " + e.data.error.message);
        }
        );
}

Pebble.addEventListener("appmessage", function (e) {
    //console.log("Received message: type " + e.payload.message_type)
    switch (e.payload.message_type) {
    case 100:
        saveBatteryValue(e);
        break;
    case 103:
        sendTimezoneToWatch();
        break;
    case 104:
        saveWatchVersion(e);
        sendTimezoneToWatch(); // a little bonus, since we know the watch is listening
        break;
    case 106:
        sendWeatherToWatch(e);
        break;
    }
});

function fetchOWMWeather(latitude, longitude) {
  var response;
  var req = new XMLHttpRequest();
//http://api.openweathermap.org/data/2.5/weather?lat=35.8415051596573&lon=-78.55771335780486&cnt=1&units=metric
//http://api.openweathermap.org/data/2.5/weather?lat=35.8415051596573&lon=-78.55771335780486&cnt=1&units=imperial
  var units = "imperial";
  if (weatherFormat === 1) { units = "metric"; }
  req.open('GET', "http://api.openweathermap.org/data/2.5/weather?" +
    "lat=" + latitude + "&lon=" + longitude + "&appid=fdc43ca42ea6a45d9c73a810f840aa55" + "&cnt=1" + "&units=" + units, true);
  req.onload = function(e) {
    if (req.readyState == 4) {
      if(req.status == 200) {
        //console.log('Weather Response: ' + req.responseText);
        response = JSON.parse(req.responseText);
        var temp, temp_min, temp_max, icon, city;
        if (response && response.weather && response.weather.length > 0) {
          var weatherResult = response;
          temp = Math.round(weatherResult.main.temp);
          temp_min = Math.round(weatherResult.main.temp_min);
          temp_max = Math.round(weatherResult.main.temp_max);
          cond_main = weatherResult.weather[0].main;
          cond_desc = weatherResult.weather[0].description;
          cond_icon = OWMclimacon[weatherResult.weather[0].id];
          city = weatherResult.name;

            console.log("OWM Weather: " + temp + "; " + cond_icon + " = " + cond_main + ", " + cond_desc);
/*
          console.log('temp: ' + temp);
          console.log('temp_min: ' + temp_min);
          console.log('temp_max: ' + temp_max);
          console.log('city:  ' + city);
          console.log('cond: ' + cond_main);
          console.log('cond_desc: ' + cond_desc);
          console.log('cond_icon: ' + cond_icon);
            weather_temp_min: temp_min,
            weather_temp_max: temp_max,
*/
          sendWeather(temp, cond_icon);
        } else {
          for(var i in dataObj) {
                console.log('dO:' + i + ' --- ' + dataObj[i]);
            }
        }

      } else {
        console.log("Error");
      }
    }
  }
  req.send(null);
}

function weatherLocationSuccess(pos) {
  lastCoordinates = pos.coords;
  //console.log('Weather: location found (' + lastCoordinates.latitude + ', ' + lastCoordinates.longitude + '): ');
  fetchOWMWeather(lastCoordinates.latitude, lastCoordinates.longitude); // OWM: Open Weather Map
  //getWeatherFromLatLong(lastCoordinates.latitude, lastCoordinates.longitude); // YW: Yahoo Weather
}

function locationError(err) {
  console.warn('Weather: location error (' + err.code + '): ' + err.message);
  sendWeather(998, CLIMACON['compass']);
}

function isItNight() {
  var now = new Date();
  var sunInfo = SunCalc.getTimes(now, lastCoordinates.latitude, lastCoordinates.longitude);
  var night = sunInfo.sunset < now || now < sunInfo.sunrise;
  return night;
}

function getMoonIcon() {
    var now = new Date();
    var moon = "N";
    var moonInfo = SunCalc.getMoonIllumination(now);
    //console.log("moon: " + moonInfo.fraction + "  " + moonInfo.angle);
    if (moonInfo.fraction <= 0.05) { moon = "O"; }
    else if (moonInfo.fraction >= 0.95) { moon = "S"; }
    else if (moonInfo.angle < 0) { // waxing
      if (moonInfo.fraction <= 0.35) { moon = "P"; }
      else if (moonInfo.fraction <= 0.65) { moon = "Q"; }
      else { moon = "R"; }
    } else { // waning
      if (moonInfo.fraction <= 0.35) { moon = "T"; }
      else if (moonInfo.fraction <= 0.65) { moon = "U"; }
      else { moon = "V"; }
    }
/*
[INFO    ] JS: Timely 2.2d: moon: 0.5988898806207668  1.623056404454204
new moon = 0.0, full moon = 1.0
angle - == waxing
angle + == waning
N = generic moon/night
O = new moon        0.0
P = waxing crescent 0.25 -
Q = waxing quarter  0.5  -
R = waxing gibbous  0.75 -
S = full moon       1.00
T = waning gibbous  0.75 +
	U = waning quarter  0.50 +
V = waning crescent 0.25 +
*/
    return moon;
}

Pebble.addEventListener('webviewclosed', function(e) {
    if (!e.response || e.response === '' || e.response === 'CANCELLED') { return; }
    var settings = clay.getSettings(e.response);
    // Radiogroup values are always strings; the watch reads them as uint8
    Object.keys(settings).forEach(function(key) {
        if (typeof settings[key] === 'string' && /^-?\d+$/.test(settings[key])) {
            settings[key] = parseInt(settings[key], 10);
        }
    });
    Pebble.sendAppMessage(settings,
        function(e) {
            console.log("Successfully delivered message with transactionId=" + e.data.transactionId);
        },
        function(e) {
            console.log("Unable to deliver message with transactionId=" + e.data.transactionId + " Error is: " + e.data.error.message);
        }
    );
});


/*
(c) 2011-2014, Vladimir Agafonkin
SunCalc is a JavaScript library for calculating sun/mooon position and light phases.
https://github.com/mourner/suncalc
*/

// SunCalc is declared here so it is accessible to isItNight() and getMoonIcon() above
var SunCalc;

(function () { "use strict";

// shortcuts for easier to read formulas

var PI = Math.PI,
    sin = Math.sin,
    cos = Math.cos,
    tan = Math.tan,
    asin = Math.asin,
    atan = Math.atan2,
    acos = Math.acos,
    rad = PI / 180;

// sun calculations are based on http://aa.quae.nl/en/reken/zonpositie.html formulas


// date/time constants and conversions

var dayMs = 1000 * 60 * 60 * 24,
    J1970 = 2440588,
    J2000 = 2451545;

function toJulian(date) {
    return date.valueOf() / dayMs - 0.5 + J1970;
}
function fromJulian(j) {
    return new Date((j + 0.5 - J1970) * dayMs);
}
function toDays(date) {
    return toJulian(date) - J2000;
}


// general calculations for position

var e = rad * 23.4397; // obliquity of the Earth

function getRightAscension(l, b) {
    return atan(sin(l) * cos(e) - tan(b) * sin(e), cos(l));
}
function getDeclination(l, b) {
    return asin(sin(b) * cos(e) + cos(b) * sin(e) * sin(l));
}
function getAzimuth(H, phi, dec) {
    return atan(sin(H), cos(H) * sin(phi) - tan(dec) * cos(phi));
}
function getAltitude(H, phi, dec) {
    return asin(sin(phi) * sin(dec) + cos(phi) * cos(dec) * cos(H));
}
function getSiderealTime(d, lw) {
    return rad * (280.16 + 360.9856235 * d) - lw;
}


// general sun calculations

function getSolarMeanAnomaly(d) {
    return rad * (357.5291 + 0.98560028 * d);
}
function getEquationOfCenter(M) {
    return rad * (1.9148 * sin(M) + 0.02 * sin(2 * M) + 0.0003 * sin(3 * M));
}
function getEclipticLongitude(M, C) {
    var P = rad * 102.9372; // perihelion of the Earth
    return M + C + P + PI;
}
function getSunCoords(d) {

    var M = getSolarMeanAnomaly(d),
        C = getEquationOfCenter(M),
        L = getEclipticLongitude(M, C);

    return {
        dec: getDeclination(L, 0),
        ra: getRightAscension(L, 0)
    };
}


SunCalc = {};


// calculates sun position for a given date and latitude/longitude

SunCalc.getPosition = function (date, lat, lng) {

    var lw = rad * -lng,
        phi = rad * lat,
        d = toDays(date),

        c = getSunCoords(d),
        H = getSiderealTime(d, lw) - c.ra;

    return {
        azimuth: getAzimuth(H, phi, c.dec),
        altitude: getAltitude(H, phi, c.dec)
    };
};


// sun times configuration (angle, morning name, evening name)

var times = [
    [-0.83, 'sunrise', 'sunset' ],
    [ -0.3, 'sunriseEnd', 'sunsetStart' ],
    [ -6, 'dawn', 'dusk' ],
    [ -12, 'nauticalDawn', 'nauticalDusk'],
    [ -18, 'nightEnd', 'night' ],
    [ 6, 'goldenHourEnd', 'goldenHour' ]
];

// adds a custom time to the times config

SunCalc.addTime = function (angle, riseName, setName) {
    times.push([angle, riseName, setName]);
};


// calculations for sun times

var J0 = 0.0009;

function getJulianCycle(d, lw) {
    return Math.round(d - J0 - lw / (2 * PI));
}
function getApproxTransit(Ht, lw, n) {
    return J0 + (Ht + lw) / (2 * PI) + n;
}
function getSolarTransitJ(ds, M, L) {
    return J2000 + ds + 0.0053 * sin(M) - 0.0069 * sin(2 * L);
}
function getHourAngle(h, phi, d) {
    return acos((sin(h) - sin(phi) * sin(d)) / (cos(phi) * cos(d)));
}


// calculates sun times for a given date and latitude/longitude

SunCalc.getTimes = function (date, lat, lng) {

    var lw = rad * -lng,
        phi = rad * lat,
        d = toDays(date),

        n = getJulianCycle(d, lw),
        ds = getApproxTransit(0, lw, n),

        M = getSolarMeanAnomaly(ds),
        C = getEquationOfCenter(M),
        L = getEclipticLongitude(M, C),

        dec = getDeclination(L, 0),

        Jnoon = getSolarTransitJ(ds, M, L);


    // returns set time for the given sun altitude
    function getSetJ(h) {
        var w = getHourAngle(h, phi, dec),
            a = getApproxTransit(w, lw, n);

        return getSolarTransitJ(a, M, L);
    }


    var result = {
        solarNoon: fromJulian(Jnoon),
        nadir: fromJulian(Jnoon - 0.5)
    };

    var i, len, time, angle, morningName, eveningName, Jset, Jrise;

    for (i = 0, len = times.length; i < len; i += 1) {
        time = times[i];

        Jset = getSetJ(time[0] * rad);
        Jrise = Jnoon - (Jset - Jnoon);

        result[time[1]] = fromJulian(Jrise);
        result[time[2]] = fromJulian(Jset);
    }

    return result;
};


// moon calculations, based on http://aa.quae.nl/en/reken/hemelpositie.html formulas

function getMoonCoords(d) { // geocentric ecliptic coordinates of the moon

    var L = rad * (218.316 + 13.176396 * d), // ecliptic longitude
        M = rad * (134.963 + 13.064993 * d), // mean anomaly
        F = rad * (93.272 + 13.229350 * d), // mean distance

        l = L + rad * 6.289 * sin(M), // longitude
        b = rad * 5.128 * sin(F), // latitude
        dt = 385001 - 20905 * cos(M); // distance to the moon in km

    return {
        ra: getRightAscension(l, b),
        dec: getDeclination(l, b),
        dist: dt
    };
}

SunCalc.getMoonPosition = function (date, lat, lng) {

    var lw = rad * -lng,
        phi = rad * lat,
        d = toDays(date),

        c = getMoonCoords(d),
        H = getSiderealTime(d, lw) - c.ra,
        h = getAltitude(H, phi, c.dec);

    // altitude correction for refraction
    h = h + rad * 0.017 / tan(h + rad * 10.26 / (h + rad * 5.10));

    return {
        azimuth: getAzimuth(H, phi, c.dec),
        altitude: h,
        distance: c.dist
    };
};


// calculations for illumination parameters of the moon,
// based on http://idlastro.gsfc.nasa.gov/ftp/pro/astro/mphase.pro formulas and
// Chapter 48 of "Astronomical Algorithms" 2nd edition by Jean Meeus
// (Willmann-Bell, Richmond) 1998.

SunCalc.getMoonIllumination = function (date) {

    var d = toDays(date),
        s = getSunCoords(d),
        m = getMoonCoords(d),

        sdist = 149598000, // distance from Earth to Sun in km

        phi = acos(sin(s.dec) * sin(m.dec) + cos(s.dec) * cos(m.dec) * cos(s.ra - m.ra)),
        inc = atan(sdist * sin(phi), m.dist - sdist * cos(phi));

    return {
        fraction: (1 + cos(inc)) / 2,
        angle: atan(cos(s.dec) * sin(s.ra - m.ra), sin(s.dec) * cos(m.dec)
            - cos(s.dec) * sin(m.dec) * cos(s.ra - m.ra))
    };
};

}());
