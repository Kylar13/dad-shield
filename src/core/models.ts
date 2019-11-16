export type Listener = (info: any) => void;

export interface IInterceptorCondition {
    method: string;
    fn: (...elems: any) => boolean;
}

export interface IInterceptorAction {
    question: string;
    answer: string;
}

export interface IInterceptor {
    condition: IInterceptorCondition;
    action: IInterceptorAction;
}
