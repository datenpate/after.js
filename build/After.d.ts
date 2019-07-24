import * as React from "react";
import { match as Match, RouteComponentProps } from "react-router-dom";
import { History, Location } from "history";
import { AsyncRouteProps } from "./types";
export interface AfterpartyProps extends RouteComponentProps<any> {
    history: History;
    location: Location;
    data?: Promise<any>[];
    routes: AsyncRouteProps[];
    match: Match<any>;
}
export interface AfterpartyState {
    data?: Promise<any>[];
    previousLocation: Location | null;
}
export declare const After: React.ComponentClass<Pick<AfterpartyProps, "data" | "routes">, any>;
