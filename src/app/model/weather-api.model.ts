class WeatherMain {
    id: number;
    main: string;
    description: string;
    icon: string;
}

class TemperatureMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

class CloudsMain {
    all: number
}

class WindMain {
    speed: number;
    deg: number;
    gust: number;
}

class SysMain {
    pod: string;
}

class WeatherDetails {
    dt: string;
    main: TemperatureMain;
    weather: WeatherMain[];
    cloud: CloudsMain;
    wind: WindMain;
    visibility: number;
    pop: number
    sys: SysMain;
    dt_txt: string;
}

class Coordinates {
    lat: number;
    lon: number;
}

class CityMain {
    id: string;
    name: string;
    coord: Coordinates;
    country: string;
    population: number;
    timezon: number;
    sunrise: number;
    sunset: number;
}

export class WeatherAPI {
    cod: string;
    message: number;
    cnt: number;
    list: WeatherDetails[];
    city: CityMain;
}