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
            question: "INTERCEPTOR_HREF",
            answer: "asdasd",
        }
    },
    {
        condition: {
            method: InterceptorMethods.INTERCEPTOR_XPATH,
            fn: (document) => {
                const search = document.evaluate("//input[@type=\"password\"]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                return Boolean(search);
            },
        },
        action: {
            question: "INTERCEPTOR_XPATH",
            answer: "password",
        }
    },
    {
        condition: {
            method: InterceptorMethods.INTERCEPTOR_XPATH,
            fn: (document) => {
                const search = document.evaluate("//div[contains(@class, 'fbNubFlyout fbDockChatTabFlyout uiContextualLayerParent')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                return Boolean(search);
            },
        },
        action: {
            question: "INTERCEPTOR_XPATH",
            answer: "facebook chat",
        }
    }
];
