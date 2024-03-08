import { IRoutePlugin, RoutePlugin } from "../Route/RoutePlugin";
import { InputRouteSchema, RouteSchema } from "../Route/type";
export declare class InputRouteHelper implements IRoutePlugin {
    createPlugin(): RoutePlugin;
    convertInput(input: InputRouteSchema, out: RouteSchema, parentSchema?: InputRouteSchema): RouteSchema;
    convertParameter(schema: InputRouteSchema, parentSchema?: InputRouteSchema): {
        parameters: import("../Route/type").RouteParameter | {
            query: {};
        } | undefined;
        url: string | undefined;
        method: string | undefined;
    };
    isAPI(schema: InputRouteSchema): boolean;
    getType(value: any): string;
    isWrapperRepsonse(response: Object): boolean;
}
