import { InterceptorMethods } from "./enums";

export type Listener = (info: any) => void;

export interface IInterceptorCondition {
    method: InterceptorMethods;
    fn: (...elems: any) => boolean;
}

export interface IInterceptorAction {
    question: string;
    answer: string;
}

export interface IInterceptor {
    id: string;
    condition: IInterceptorCondition;
    action: IInterceptorAction;
}
