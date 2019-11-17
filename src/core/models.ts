import { InterceptorMethods } from "./enums";

export type Listener = (info: any) => void;

export interface IInterceptorCondition {
    method: InterceptorMethods;
    fn: (...elems: any) => boolean;
}

export interface IInterceptorAction {
    question: string;
    answer: string;
    challenge: string;
}

export interface IInterceptor {
    id: string;
    active: boolean,
    condition: IInterceptorCondition;
    action: IInterceptorAction;
}
