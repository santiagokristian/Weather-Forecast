import { WeatherAPI } from "./weather-api.model";

export class WeatherDetails {
    id: number;
    date: Date;
    temp: number;
    description: string;
    main: string;
    pressure: number;
    humidity: number;
}

export class WeatherTable {
    city: string;
    country: string;
    weather: WeatherDetails[]
}


export function parseWeatherTableData(data: WeatherAPI) {
    const tableDetails: WeatherTable = { city: data.city.name, country: data.city.country, weather: [] }
    data.list.map((data, index) => {
        const details: WeatherDetails = {
            id: index,
            date: new Date(data.dt_txt),
            temp: data.main.temp,
            description: data.weather[0].description,
            main: data.weather[0].main,
            pressure: data.main.pressure,
            humidity: data.main.humidity
        }
        tableDetails.weather.push(details)
    });

    return tableDetails;
}