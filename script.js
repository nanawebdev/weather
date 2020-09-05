
var weatherIconsDay = {
    200: 'thunderstorm1',
    201: 'thunderstorm1',
    202: 'thunderstorm1',
    210: 'thunderstorm1',
    211: 'thunderstorm1',
    212: 'thunderstorm1',
    221: 'thunderstorm1',
    230: 'thunderstorm1',
    231: 'thunderstorm1',
    232: 'thunderstorm1',

    300: 'showerrain1',
    301: 'showerrain1',
    302: 'showerrain1',
    310: 'showerrain1',
    311: 'showerrain1',
    312: 'showerrain1',
    313: 'showerrain1',
    314: 'showerrain1',
    321: 'showerrain1',

    500: 'rain1',
    501: 'rain1',
    502: 'rain1',
    503: 'rain1',
    504: 'rain1',
    511: 'snow1',
    520: 'showerrain1',
    521: 'showerrain1',
    522: 'showerrain1',
    531: 'showerrain1',

    600: 'snow1',
    601: 'snow1',
    602: 'snow1',
    611: 'snow1',
    612: 'snow1',
    613: 'snow1',
    615: 'snow1',
    616: 'snow1',
    620: 'snow1',
    621: 'snow1',
    622: 'snow1png',

    701: 'smoke',
    711: 'smoke',
    721: 'smoke',
    731: 'smoke',
    741: 'smoke',
    751: 'smoke',
    761: 'smoke',
    762: 'smoke',
    771: 'smoke',
    781: 'smoke',

    800: 'clearsky1',
    801: 'fewclouds1',
    802: 'scatteredclouds1',
    803: 'brokenclouds1',
    804: 'brokenclouds1',



}

var weatherIconsNight = {
    200: 'thunderstorm2',
    201: 'thunderstorm2',
    202: 'thunderstorm2',
    210: 'thunderstorm2',
    211: 'thunderstorm2',
    212: 'thunderstorm2',
    221: 'thunderstorm2',
    230: 'thunderstorm2',
    231: 'thunderstorm2',
    232: 'thunderstorm2',

    300: 'showerrain2',
    301: 'showerrain2',
    302: 'showerrain2',
    310: 'showerrain2',
    311: 'showerrain2',
    312: 'showerrain2',
    313: 'showerrain2',
    314: 'showerrain2',
    321: 'showerrain2',

    500: 'rain2',
    501: 'rain2',
    502: 'rain2',
    503: 'rain2',
    504: 'rain2',
    511: 'snow2',
    520: 'showerrain2',
    521: 'showerrain2',
    522: 'showerrain2',
    531: 'showerrain2',

    600: 'snow2',
    601: 'snow2',
    602: 'snow2',
    611: 'snow2',
    612: 'snow2',
    613: 'snow2',
    615: 'snow2',
    616: 'snow2',
    620: 'snow2',
    621: 'snow2',
    622: 'snow2',

    701: 'smoke',
    711: 'smoke',
    721: 'smoke',
    731: 'smoke',
    741: 'smoke',
    751: 'smoke',
    761: 'smoke',
    762: 'smoke',
    771: 'smoke',
    781: 'smoke',

    800: 'clearsky2',
    801: 'fewclouds2',
    802: 'scatteredclouds2',
    803: 'brokenclouds2',
    804: 'brokenclouds2',

};
var API_KEY = '5c0dd7e9430af5befd25507b528a6e51';
var API_HOST = 'https://api.openweathermap.org/data/2.5';
var MOSCOW = {
    LAT: 55.751244,
    LON: 37.618423
};

var CITIES = {
    MOSCOW: { lat: 55.751244, lon: 37.618423, name: 'Москва' },
    KAZAN: { lat: 55.7823547, lon: 49.1242266, name: 'Казань' },
    SAMARA: { lat: 53.198627, lon: 50.113987, name: 'Самара' },
    ERZOVKA: { lat: 53.4985667, lon: 51.6599312, name: 'Ерзовка' },
    TAMBOV: { lat: 52.72879, lon: 41.45536, name: 'Тамбов' },
    ADLER: {lat: 43.452136, lon: 39.914160, name: 'Адлер'},
    SOCHI: {lat: 43.713341, lon: 39.580032, name: 'Сочи'},
    PETROZAVODSK: {lat:61.796110, lon: 34.349170, name: 'Петрозаводск'},
    KRASNAYAPOLYANA: {lat: 43.564655, lon: 40.106477, name:'Красная поляна'},
    ESTOSADOK: {lat:34.34917, lon:40.258395, name:'Эсто-садок'},
    CHERNAYAPIRAMIDA: {lat:43.646859, lon:40.265953, name: 'Черная пирамида'}

}

var url = new URL(API_HOST + '/onecall');
var params = {
    lat: MOSCOW.LAT,
    lon: MOSCOW.LON,
    exclude: 'minutely',
    appid: API_KEY,
};

Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

function getWeatherData() {
    fetch(url)
        .then(response => response.json())
        .then(data => apiData = data);
}

var apiData = {
    "lat": 55.75,
    "lon": 37.62,
    "timezone": "Europe/Moscow",
    "timezone_offset": 10800,
    "current": {
        "dt": 1596362275, // прогноз получен
        "sunrise": 1596332223, // рассвет
        "sunset": 1596389662, // закат
        "temp": 291.82, // текущая температура
        "feels_like": 288.5, // по ощущениям
        "pressure": 1009, // давление в гигапаскалях
        "humidity": 59, // относительная влажность воздуха
        "dew_point": 283.66, // точка росы
        "uvi": 5.53, // ультрафиолетовый индекс
        "clouds": 40, // количество облаков в процентах
        "visibility": 10000, // видимость в метрах
        "wind_speed": 5, // скорость ветра
        "wind_deg": 340, // направление ветра
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ]
    },
    "hourly": [
        {
            "dt": 1596358800,
            "temp": 291.82,
            "feels_like": 289.25,
            "pressure": 1009,
            "humidity": 59,
            "dew_point": 283.66,
            "clouds": 40,
            "visibility": 10000,
            "wind_speed": 3.93,
            "wind_deg": 352,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.42,
            "rain": {
                "1h": 0.19
            }
        },
        {
            "dt": 1596362400,
            "temp": 292.05,
            "feels_like": 289.12,
            "pressure": 1009,
            "humidity": 54,
            "dew_point": 282.55,
            "clouds": 43,
            "visibility": 10000,
            "wind_speed": 4.01,
            "wind_deg": 347,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.48,
            "rain": {
                "1h": 0.22
            }
        },
        {
            "dt": 1596366000,
            "temp": 292.79,
            "feels_like": 289.6,
            "pressure": 1010,
            "humidity": 48,
            "dew_point": 281.49,
            "clouds": 50,
            "visibility": 10000,
            "wind_speed": 4,
            "wind_deg": 351,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "pop": 0.66,
            "rain": {
                "1h": 0.15
            }
        },
        {
            "dt": 1596369600,
            "temp": 293.4,
            "feels_like": 290.13,
            "pressure": 1010,
            "humidity": 44,
            "dew_point": 280.77,
            "clouds": 60,
            "visibility": 10000,
            "wind_speed": 3.87,
            "wind_deg": 349,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.62
        },
        {
            "dt": 1596373200,
            "temp": 293.65,
            "feels_like": 290.46,
            "pressure": 1010,
            "humidity": 42,
            "dew_point": 280.31,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.61,
            "wind_deg": 340,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.42
        },
        {
            "dt": 1596376800,
            "temp": 293.6,
            "feels_like": 290.47,
            "pressure": 1010,
            "humidity": 42,
            "dew_point": 280.38,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.51,
            "wind_deg": 337,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.38
        },
        {
            "dt": 1596380400,
            "temp": 293.07,
            "feels_like": 289.53,
            "pressure": 1010,
            "humidity": 46,
            "dew_point": 281.24,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 4.38,
            "wind_deg": 346,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.3
        },
        {
            "dt": 1596384000,
            "temp": 291.91,
            "feels_like": 288.89,
            "pressure": 1011,
            "humidity": 53,
            "dew_point": 282.22,
            "clouds": 99,
            "visibility": 10000,
            "wind_speed": 3.99,
            "wind_deg": 353,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.22
        },
        {
            "dt": 1596387600,
            "temp": 291.13,
            "feels_like": 288.75,
            "pressure": 1011,
            "humidity": 55,
            "dew_point": 281.99,
            "clouds": 85,
            "visibility": 10000,
            "wind_speed": 3.02,
            "wind_deg": 356,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0.14
        },
        {
            "dt": 1596391200,
            "temp": 290.37,
            "feels_like": 288.33,
            "pressure": 1012,
            "humidity": 57,
            "dew_point": 281.98,
            "clouds": 72,
            "visibility": 10000,
            "wind_speed": 2.47,
            "wind_deg": 352,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0.1
        },
        {
            "dt": 1596394800,
            "temp": 289.77,
            "feels_like": 287.98,
            "pressure": 1012,
            "humidity": 61,
            "dew_point": 282.23,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.27,
            "wind_deg": 339,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596398400,
            "temp": 289.17,
            "feels_like": 287.6,
            "pressure": 1012,
            "humidity": 63,
            "dew_point": 282.34,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 1.92,
            "wind_deg": 328,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596402000,
            "temp": 288.76,
            "feels_like": 287.36,
            "pressure": 1012,
            "humidity": 64,
            "dew_point": 282.18,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 1.62,
            "wind_deg": 312,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596405600,
            "temp": 288.36,
            "feels_like": 286.6,
            "pressure": 1013,
            "humidity": 65,
            "dew_point": 281.88,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.09,
            "wind_deg": 302,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596409200,
            "temp": 288.01,
            "feels_like": 286.1,
            "pressure": 1013,
            "humidity": 65,
            "dew_point": 281.58,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.18,
            "wind_deg": 294,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596412800,
            "temp": 287.61,
            "feels_like": 285.67,
            "pressure": 1014,
            "humidity": 66,
            "dew_point": 281.45,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.17,
            "wind_deg": 290,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596416400,
            "temp": 287.29,
            "feels_like": 285.21,
            "pressure": 1014,
            "humidity": 67,
            "dew_point": 281.47,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.34,
            "wind_deg": 285,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596420000,
            "temp": 286.99,
            "feels_like": 284.78,
            "pressure": 1014,
            "humidity": 69,
            "dew_point": 281.51,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.58,
            "wind_deg": 286,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596423600,
            "temp": 287.21,
            "feels_like": 285.18,
            "pressure": 1014,
            "humidity": 69,
            "dew_point": 281.82,
            "clouds": 23,
            "visibility": 10000,
            "wind_speed": 2.4,
            "wind_deg": 290,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596427200,
            "temp": 288.1,
            "feels_like": 286.26,
            "pressure": 1015,
            "humidity": 66,
            "dew_point": 281.97,
            "clouds": 28,
            "visibility": 10000,
            "wind_speed": 2.19,
            "wind_deg": 290,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596430800,
            "temp": 289.65,
            "feels_like": 287.92,
            "pressure": 1015,
            "humidity": 60,
            "dew_point": 282.01,
            "clouds": 42,
            "visibility": 10000,
            "wind_speed": 2.05,
            "wind_deg": 285,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596434400,
            "temp": 291.2,
            "feels_like": 289.3,
            "pressure": 1015,
            "humidity": 54,
            "dew_point": 281.77,
            "clouds": 46,
            "visibility": 10000,
            "wind_speed": 2.26,
            "wind_deg": 290,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596438000,
            "temp": 292.4,
            "feels_like": 290.41,
            "pressure": 1015,
            "humidity": 49,
            "dew_point": 281.6,
            "clouds": 91,
            "visibility": 10000,
            "wind_speed": 2.27,
            "wind_deg": 282,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596441600,
            "temp": 293.55,
            "feels_like": 291.4,
            "pressure": 1015,
            "humidity": 45,
            "dew_point": 281.26,
            "clouds": 92,
            "visibility": 10000,
            "wind_speed": 2.43,
            "wind_deg": 277,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596445200,
            "temp": 294.6,
            "feels_like": 292.31,
            "pressure": 1015,
            "humidity": 41,
            "dew_point": 280.94,
            "clouds": 89,
            "visibility": 10000,
            "wind_speed": 2.48,
            "wind_deg": 265,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596448800,
            "temp": 295.52,
            "feels_like": 292.93,
            "pressure": 1015,
            "humidity": 38,
            "dew_point": 280.67,
            "clouds": 85,
            "visibility": 10000,
            "wind_speed": 2.81,
            "wind_deg": 252,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596452400,
            "temp": 296.32,
            "feels_like": 293.24,
            "pressure": 1015,
            "humidity": 36,
            "dew_point": 280.73,
            "clouds": 70,
            "visibility": 10000,
            "wind_speed": 3.49,
            "wind_deg": 247,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596456000,
            "temp": 296.32,
            "feels_like": 293.06,
            "pressure": 1015,
            "humidity": 37,
            "dew_point": 281.08,
            "clouds": 64,
            "visibility": 10000,
            "wind_speed": 3.88,
            "wind_deg": 245,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596459600,
            "temp": 296.38,
            "feels_like": 293.1,
            "pressure": 1015,
            "humidity": 37,
            "dew_point": 281.24,
            "clouds": 11,
            "visibility": 10000,
            "wind_speed": 3.93,
            "wind_deg": 245,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596463200,
            "temp": 296.29,
            "feels_like": 293.26,
            "pressure": 1015,
            "humidity": 38,
            "dew_point": 281.56,
            "clouds": 8,
            "visibility": 10000,
            "wind_speed": 3.68,
            "wind_deg": 241,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596466800,
            "temp": 295.79,
            "feels_like": 293.17,
            "pressure": 1015,
            "humidity": 42,
            "dew_point": 282.42,
            "clouds": 6,
            "visibility": 10000,
            "wind_speed": 3.45,
            "wind_deg": 247,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596470400,
            "temp": 294.91,
            "feels_like": 292.48,
            "pressure": 1015,
            "humidity": 46,
            "dew_point": 282.87,
            "clouds": 7,
            "visibility": 10000,
            "wind_speed": 3.39,
            "wind_deg": 254,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596474000,
            "temp": 294.01,
            "feels_like": 291.94,
            "pressure": 1015,
            "humidity": 49,
            "dew_point": 282.99,
            "clouds": 23,
            "visibility": 10000,
            "wind_speed": 2.92,
            "wind_deg": 251,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596477600,
            "temp": 292.91,
            "feels_like": 291.24,
            "pressure": 1016,
            "humidity": 53,
            "dew_point": 283.26,
            "clouds": 31,
            "visibility": 10000,
            "wind_speed": 2.41,
            "wind_deg": 238,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596481200,
            "temp": 292.26,
            "feels_like": 290.49,
            "pressure": 1016,
            "humidity": 56,
            "dew_point": 283.46,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 2.64,
            "wind_deg": 232,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596484800,
            "temp": 291.7,
            "feels_like": 289.87,
            "pressure": 1017,
            "humidity": 58,
            "dew_point": 283.41,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 2.73,
            "wind_deg": 232,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596488400,
            "temp": 290.95,
            "feels_like": 289.3,
            "pressure": 1017,
            "humidity": 62,
            "dew_point": 283.67,
            "clouds": 99,
            "visibility": 10000,
            "wind_speed": 2.59,
            "wind_deg": 231,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596492000,
            "temp": 290.4,
            "feels_like": 289.14,
            "pressure": 1017,
            "humidity": 65,
            "dew_point": 284,
            "clouds": 96,
            "visibility": 10000,
            "wind_speed": 2.1,
            "wind_deg": 232,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596495600,
            "temp": 290.2,
            "feels_like": 288.88,
            "pressure": 1018,
            "humidity": 66,
            "dew_point": 284.03,
            "clouds": 97,
            "visibility": 10000,
            "wind_speed": 2.2,
            "wind_deg": 238,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596499200,
            "temp": 289.7,
            "feels_like": 288.59,
            "pressure": 1018,
            "humidity": 69,
            "dew_point": 284.03,
            "clouds": 90,
            "visibility": 10000,
            "wind_speed": 1.98,
            "wind_deg": 231,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596502800,
            "temp": 289.25,
            "feels_like": 288.06,
            "pressure": 1018,
            "humidity": 71,
            "dew_point": 284.01,
            "clouds": 38,
            "visibility": 10000,
            "wind_speed": 2.1,
            "wind_deg": 227,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596506400,
            "temp": 288.82,
            "feels_like": 287.69,
            "pressure": 1018,
            "humidity": 73,
            "dew_point": 284.06,
            "clouds": 19,
            "visibility": 10000,
            "wind_speed": 2.02,
            "wind_deg": 222,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596510000,
            "temp": 289.12,
            "feels_like": 288.05,
            "pressure": 1018,
            "humidity": 72,
            "dew_point": 284.15,
            "clouds": 13,
            "visibility": 10000,
            "wind_speed": 1.96,
            "wind_deg": 228,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596513600,
            "temp": 290.22,
            "feels_like": 289.2,
            "pressure": 1018,
            "humidity": 67,
            "dew_point": 284.11,
            "clouds": 9,
            "visibility": 10000,
            "wind_speed": 1.87,
            "wind_deg": 230,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596517200,
            "temp": 291.68,
            "feels_like": 290.45,
            "pressure": 1019,
            "humidity": 60,
            "dew_point": 283.96,
            "clouds": 8,
            "visibility": 10000,
            "wind_speed": 2.07,
            "wind_deg": 219,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596520800,
            "temp": 293.2,
            "feels_like": 291.86,
            "pressure": 1019,
            "humidity": 55,
            "dew_point": 284.02,
            "clouds": 9,
            "visibility": 10000,
            "wind_speed": 2.27,
            "wind_deg": 203,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596524400,
            "temp": 294.59,
            "feels_like": 292.97,
            "pressure": 1019,
            "humidity": 50,
            "dew_point": 284,
            "clouds": 32,
            "visibility": 10000,
            "wind_speed": 2.61,
            "wind_deg": 195,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1596528000,
            "temp": 295.44,
            "feels_like": 293.45,
            "pressure": 1019,
            "humidity": 48,
            "dew_point": 284.15,
            "clouds": 66,
            "visibility": 10000,
            "wind_speed": 3.2,
            "wind_deg": 190,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        }
    ],
    "daily": [
        {
            "dt": 1596358800,
            "sunrise": 1596332223,
            "sunset": 1596389662,
            "temp": {
                "day": 291.82,
                "min": 288.78,
                "max": 292.8,
                "night": 288.78,
                "eve": 292.8,
                "morn": 291.82
            },
            "feels_like": {
                "day": 289.25,
                "night": 287.39,
                "eve": 289.35,
                "morn": 289.25
            },
            "pressure": 1009,
            "humidity": 59,
            "dew_point": 283.66,
            "wind_speed": 3.93,
            "wind_deg": 352,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 40,
            "pop": 0.62,
            "rain": 0.66,
            "uvi": 5.53
        },
        {
            "dt": 1596445200,
            "sunrise": 1596418736,
            "sunset": 1596475942,
            "temp": {
                "day": 294.6,
                "min": 287.21,
                "max": 296.32,
                "night": 290.95,
                "eve": 295.79,
                "morn": 287.21
            },
            "feels_like": {
                "day": 292.31,
                "night": 289.3,
                "eve": 293.17,
                "morn": 285.18
            },
            "pressure": 1015,
            "humidity": 41,
            "dew_point": 280.94,
            "wind_speed": 2.48,
            "wind_deg": 265,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 89,
            "pop": 0,
            "uvi": 5.45
        },
        {
            "dt": 1596531600,
            "sunrise": 1596505249,
            "sunset": 1596562219,
            "temp": {
                "day": 296.1,
                "min": 289.12,
                "max": 297.84,
                "night": 292.16,
                "eve": 297.08,
                "morn": 289.12
            },
            "feels_like": {
                "day": 294.07,
                "night": 291.4,
                "eve": 295.3,
                "morn": 288.05
            },
            "pressure": 1019,
            "humidity": 46,
            "dew_point": 284.2,
            "wind_speed": 3.24,
            "wind_deg": 188,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 78,
            "pop": 0,
            "uvi": 5.68
        },
        {
            "dt": 1596618000,
            "sunrise": 1596591763,
            "sunset": 1596648495,
            "temp": {
                "day": 298.17,
                "min": 290.29,
                "max": 299.96,
                "night": 294.01,
                "eve": 299.12,
                "morn": 290.29
            },
            "feels_like": {
                "day": 296.66,
                "night": 294.29,
                "eve": 297.6,
                "morn": 289.55
            },
            "pressure": 1020,
            "humidity": 42,
            "dew_point": 284.49,
            "wind_speed": 2.71,
            "wind_deg": 184,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 2,
            "pop": 0,
            "uvi": 5.51
        },
        {
            "dt": 1596704400,
            "sunrise": 1596678277,
            "sunset": 1596734769,
            "temp": {
                "day": 299.94,
                "min": 292.29,
                "max": 301.5,
                "night": 294.07,
                "eve": 298.96,
                "morn": 292.29
            },
            "feels_like": {
                "day": 299.35,
                "night": 294.39,
                "eve": 297.8,
                "morn": 292.79
            },
            "pressure": 1021,
            "humidity": 39,
            "dew_point": 285.1,
            "wind_speed": 1.59,
            "wind_deg": 274,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 80,
            "pop": 0.36,
            "uvi": 5.23
        },
        {
            "dt": 1596790800,
            "sunrise": 1596764792,
            "sunset": 1596821042,
            "temp": {
                "day": 297.57,
                "min": 291.42,
                "max": 298.4,
                "night": 291.42,
                "eve": 296.66,
                "morn": 292.45
            },
            "feels_like": {
                "day": 294.82,
                "night": 289.41,
                "eve": 293.63,
                "morn": 291.35
            },
            "pressure": 1022,
            "humidity": 42,
            "dew_point": 284.08,
            "wind_speed": 4.25,
            "wind_deg": 12,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 5,
            "pop": 0,
            "uvi": 5.64
        },
        {
            "dt": 1596877200,
            "sunrise": 1596851307,
            "sunset": 1596907313,
            "temp": {
                "day": 296.45,
                "min": 289.76,
                "max": 297.51,
                "night": 290.91,
                "eve": 296.36,
                "morn": 289.76
            },
            "feels_like": {
                "day": 293.25,
                "night": 289.05,
                "eve": 293.17,
                "morn": 287.45
            },
            "pressure": 1020,
            "humidity": 42,
            "dew_point": 282.88,
            "wind_speed": 4.51,
            "wind_deg": 31,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 100,
            "pop": 0.12,
            "uvi": 5.28
        },
        {
            "dt": 1596963600,
            "sunrise": 1596937822,
            "sunset": 1596993583,
            "temp": {
                "day": 294.1,
                "min": 288.11,
                "max": 294.77,
                "night": 288.29,
                "eve": 292.93,
                "morn": 288.11
            },
            "feels_like": {
                "day": 290.47,
                "night": 285.49,
                "eve": 288.86,
                "morn": 286.22
            },
            "pressure": 1019,
            "humidity": 46,
            "dew_point": 282.19,
            "wind_speed": 4.84,
            "wind_deg": 35,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": 18,
            "pop": 0,
            "uvi": 5.28
        }
    ]
}


// getWeatherData();

function KtoC(temp) {
    return Math.round(temp - 273.15);
}

function gPAtoMM(v) {
    return Math.round(v / 1.333);
}

function degreeToDirection(v) {
    if (v >= 45 && v < 135) {
        return 'Восточный';
    }
    if (v >= 135 && v < 225) {
        return 'Южный';
    }
    if (v >= 225 && v < 315) {
        return 'Западный';
    }
    if (v >= 315 || v < 45) {
        return 'Северный';
    }
}

function dayToString(day) {
    var dict = {
        0: 'Воскресенье',
        1: 'Понедельник',
        2: 'Вторник',
        3: 'Среда',
        4: 'Четверг',
        5: 'Пятница',
        6: 'Суббота',
    }
    return dict[day];
}

function tempToString(temp) {
    var cTemp = KtoC(temp);
    if (cTemp > 0) {
        return '+' + cTemp;
    }
    if (cTemp < 0) {
        return '-' + cTemp;
    }
    return cTemp;
}

function monthToString(month) {
    var dict = {
        7: 'августа'
    }
    return dict[month]
}

function getWeatherImage(hours, id) {
    if (hours >= 22 || hours < 6) {
        return 'source/weathertype/' + weatherIconsNight[id] + '.png'
    }

    return 'source/weathertype/' + weatherIconsDay[id] + '.png'
}

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        api: apiData,
        currentCity: 0,
        availableCities: [
            CITIES.MOSCOW,
            CITIES.KAZAN,
            CITIES.SAMARA,
            CITIES.ERZOVKA,
            CITIES.TAMBOV,
            CITIES.ADLER,
            CITIES.SOCHI,
            CITIES.PETROZAVODSK,
            CITIES.KRASNAYAPOLYANA,
            CITIES.ESTOSADOK,
            CITIES.CHERNAYAPIRAMIDA

        
        ]
    },
    watch: {
        'currentCity': {
            handler: function(cityIndex) {
                var city = this.availableCities[cityIndex];
                this.updateData({
                    lat: city.lat,
                    lon: city.lon,
                })
            }
        }
    },
    computed: {
        currentTemp() {
            return tempToString(this.api.current.temp);
        },
        currentTime() {
            var now = new Date(1000 * this.api.current.dt);
            var hours = now.getHours().toString().padStart(2, '0');
            var minutes = now.getMinutes().toString().padStart(2, '0');
            var seconds = now.getSeconds().toString().padStart(2, '0');

            var date = now.getDate().toString().padStart(2, 0);
            var month = now.getMonth().toString().padStart(2, 0);
            return `${date}.${month} ${hours}:${minutes}:${seconds}`;
        },
        currentPressure() {
            return gPAtoMM(this.api.current.pressure);
        },
        windPower() {
            return this.api.current.wind_speed;
        },
        windDirection() {
            return degreeToDirection(this.api.current.wind_deg);
        },
        humidity() {
            return this.api.current.humidity;
        },
        imageSrc() {
            var now = new Date(1000 * this.api.current.dt);
            var hoursNumber = now.getHours();

            return getWeatherImage(hoursNumber, this.api.current.weather[0].id)
        },
        feelsLike() {
            return tempToString(this.api.current.feels_like);
        },
        hourly() {
            return this.api.hourly.map(hour => {
                var date = new Date(1000 * hour.dt);
                var hoursNumber = date.getHours();
                var hours = date.getHours().toString().padStart(2, '0');
                var minutes = date.getMinutes().toString().padStart(2, '0');
                hour.time = hours + ':' + minutes;

                hour.temp = tempToString(hour.temp);

                hour.pressure = gPAtoMM(hour.pressure);

                hour.windDirection = degreeToDirection(hour.wind_deg);

                hour.windPower = hour.wind_speed;

                hour.imageSrc = getWeatherImage(hoursNumber, hour.weather[0].id);

                return hour
            })
        },
        days() {
            var days = [];
            var exists = {};

            this.hourly.forEach(hour => {
                var hourDay = new Date(1000 * hour.dt);
                var date = hourDay.getDate();
                var dateString = dayToString(hourDay.getDay()) + ', ' + hourDay.getDate() + ' ' + monthToString(hourDay.getMonth());
                if (!exists[date]) {

                    days.push({
                        date: dateString,
                        hourItems: [hour]
                    })
                    exists[date] = true;
                } else {
                    var day = days.find(v => v.date === dateString);
                    day.hourItems.push(hour)
                }
            })

            return days;
        },
        daily() {
            return this.api.daily.map(v => {
                var date = new Date(1000 * v.dt);
                var weekDay = dayToString(date.getDay());
                var weekDate = date.getDate() + ' ' + monthToString(date.getMonth());
                var imageSrc = getWeatherImage(11, v.weather[0].id);
                return {
                    weekDay: weekDay,
                    date: weekDate,
                    dayTemp: tempToString(v.temp.day),
                    nightTemp: tempToString(v.temp.night),
                    imageSrc: imageSrc,
                }
            })
        }
    },
    created: function() {
        // this.updateCurrentCity();
    },
    methods: {
        updateCurrentCity() {
            this.updateData({
                lat: this.availableCities[this.currentCity].lat,
                lon: this.availableCities[this.currentCity].lon,
            })
        },
        updateData({ lat, lon }) {
            var url = new URL(API_HOST + '/onecall');
            var params = {
                lat: lat,
                lon: lon,
                exclude: 'minutely',
                appid: API_KEY,
            };
            
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

            fetch(url)
                .then(response => response.json())
                .then(data => this.api = data);
        }
    }
})


let page = document.querySelector('.page');

let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function () {
    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme');
};

// КНОПКА НАВЕРХ
let upButton = document.querySelector ('.up-button')

window.onscroll = function() {
    let threshold = 1000;

    if (window.innerWidth < 768) {
        threshold = 500;
    }

    if (window.pageYOffset > threshold) {
        upButton.classList.add('shown')
    } else {
        upButton.classList.remove('shown')
    }
}

upButton.onclick = function () {
    window.scroll(0,0)
}

