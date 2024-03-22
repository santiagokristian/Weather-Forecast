import { WeatherTable } from "../../../model/weather-table.model";
import * as WeatherActions from "./weather-details.action";

interface State {

}


const initialWeather: WeatherTable = {
    city: '',
    country: '',
    weather: []
}

const initialState: State = {
    table: initialWeather
}

export function weatherDetailReducer(state: State = initialState, action: WeatherActions.weatherDetailsActions) {
    switch (action.type) {
        case WeatherActions.SELECT_WEATHER: {
            return action.payload;
        }
        case WeatherActions.REMOVE_WEATHER: {
            return {};
        }
        default:
            return state;
    }
}