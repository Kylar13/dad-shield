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
            fn: (target) => {
                const search = document.evaluate("//input[@type=\"password\"]", target, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                return Boolean(search);
            },
        },
        action: {
            question: "asdasd",
            answer: "asdas",
        }
    }
];
