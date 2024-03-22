import { Action, ActionReducerMap } from "@ngrx/store";
import * as fromWeather from '../modules/home/store/weather-details.reducer'
import { AppState } from "@auth0/auth0-angular";
export const appReducer: ActionReducerMap<AppState, any> = {
    weather: fromWeather.weatherDetailReducer,
};