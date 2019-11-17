import { IInterceptor } from "./models";
import { InterceptorMethods, ChallengeMethods } from "./enums";

export const interceptors: IInterceptor[] = [
    {
        id: "registerurl",
        active: true,
        condition: {
            method: InterceptorMethods.INTERCEPTOR_HREF,
            fn: (href) => {
                return Boolean(href.indexOf("register") >= 0 || href.indexOf("signup") >= 0);
            },
        },
        action: {
            method: ChallengeMethods.PASSWORD,
        }
    },
    {
        id: "passwordfield",
        active: true,
        condition: {
            method: InterceptorMethods.INTERCEPTOR_XPATH,
            fn: (target) => {
                const search = document.evaluate("//input[@type=\"password\"]", target, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                return Boolean(search === document.activeElement);
            },
        },
        action: {
            method: ChallengeMethods.PASSWORD,
        }
    },
    {
        id: "facebook chat",
        active: true,
        condition: {
            method: InterceptorMethods.INTERCEPTOR_XPATH,
            fn: (document) => {
                const search = document.evaluate("//div[contains(@class, 'fbNubFlyout fbDockChatTabFlyout uiContextualLayerParent')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                return Boolean(search);
            },
        },
        action: {
            method: ChallengeMethods.CHAT,
        }
    }
];
