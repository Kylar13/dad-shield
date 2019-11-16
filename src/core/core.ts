import { Listener, IInterceptor, IInterceptorAction } from "./models";
import { interceptors } from "./interceptors";
import { InterceptorMethods } from "./enums";

export class Core {
    private fn: Listener = () => { };
    private lastHref: string;
    private history: string[] = [];

    constructor() {
        // bindings
        this.start = this.start.bind(this);
        this.registerListener = this.registerListener.bind(this);
    }

    public start() {
        this.startHrefInterceptors();
        this.startXPathInterceptors();
    }

    public registerListener(fn: Listener) {
        this.fn = fn;
    }

    private pushAction(interceptorId: string, action: IInterceptorAction) {
        if (!this.history.includes(interceptorId)) {
            this.fn(action);
            this.history.push(interceptorId);
        }
    }

    private startHrefInterceptors() {
        setInterval(() => {
            const newhref = window.location.href;
            if (newhref !== this.lastHref) {
                this.intercept(InterceptorMethods.INTERCEPTOR_HREF, newhref);
                this.lastHref = window.location.href;
            }
        }, 100);
    }

    private startXPathInterceptors() {
        const { MutationObserver } = window;

        const observer = new MutationObserver((mutations, observer) => {
            for (const mutation of mutations) {
                if ((mutation.target as any).id !== "modal-container") {
                    this.intercept(InterceptorMethods.INTERCEPTOR_XPATH, document);
                }
            }
        });
        observer.observe(document, {
            subtree: true,
            attributes: true,
            childList: true,
        });

        window.addEventListener("load", () => {
            this.intercept(InterceptorMethods.INTERCEPTOR_XPATH, document);
        })
    }

    private intercept(method: InterceptorMethods, extra: any) {
        switch (method) {
            case InterceptorMethods.INTERCEPTOR_HREF:
                const hrefInterceptors = interceptors.filter((x: IInterceptor) => x.condition.method === InterceptorMethods.INTERCEPTOR_HREF);
                for (const interceptor of hrefInterceptors) {
                    if (interceptor.condition.fn(extra)) {
                        this.pushAction(interceptor.id, interceptor.action);
                    }
                }
                break;
            case InterceptorMethods.INTERCEPTOR_XPATH:
                const xpathInterceptors = interceptors.filter((x: IInterceptor) => x.condition.method === InterceptorMethods.INTERCEPTOR_XPATH);
                for (const interceptor of xpathInterceptors) {
                    if (interceptor.condition.fn(extra)) {
                        this.pushAction(interceptor.id, interceptor.action);
                    }
                }
                break;
            default:
                break;
        }
    }
}
