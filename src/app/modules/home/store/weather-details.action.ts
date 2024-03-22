import { Action } from "@ngrx/store";
import { WeatherTable } from "../../../model/weather-table.model";

export const SELECT_WEATHER = "SELECT_WEATHER";
export const REMOVE_WEATHER = "REMOVE_WEATHER";

export class setSelectedWeather implements Action {
    readonly type = SELECT_WEATHER;
    constructor(public payload: WeatherTable) { }
}

export class resetWeather implements Action {
    readonly type = REMOVE_WEATHER;
    constructor(){}
}

export type weatherDetailsActions = | setSelectedWeather | resetWeather