import { IInterceptor } from "./models";

export const interceptors: IInterceptor[] = [
    {
        condition: {
            method: "href",
            fn: (href) => {
                return Boolean(href.indexOf("register") >= 0 || href.indexOf("signup") >= 0);
            },
        },
        action: {
            question: "assa",
            answer: "asdasd"
        }
    }
];
