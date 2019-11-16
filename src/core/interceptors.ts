import { IInterceptor } from "./models";
import { InterceptorMethods } from "./enums";

export const interceptors: IInterceptor[] = [
    {
        condition: {
            method: InterceptorMethods.INTERCEPTOR_HREF,
            fn: (href) => {
                return Boolean(href.indexOf("register") >= 0 || href.indexOf("signup") >= 0);
            },
        },
        action: {
            question: "assa",
            answer: "asdasd",
        }
    },
    {
        condition: {
            method: InterceptorMethods.INTERCEPTOR_XPATH,
            fn: (document) => {
                return true;
            },
        },
        action: {
            question: "asdasd",
            answer: "asdas",
        }
    }
];
