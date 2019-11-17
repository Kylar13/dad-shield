import { InterceptorMethods, ChallengeMethods } from "./enums";

export type Listener = (info: any) => void;

export interface IInterceptorCondition {
    method: InterceptorMethods;
    fn: (...elems: any) => boolean;
}

export interface IInterceptorAction {
    method: ChallengeMethods;
}

export interface IInterceptor {
    id: string;
    active: boolean,
    condition: IInterceptorCondition;
    action: IInterceptorAction;
}
