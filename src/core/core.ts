import { Listener, IInterceptor } from "./models";
import { interceptors } from "./interceptors";
import { InterceptorMethods } from "./enums";

export class Core {
    private fn: Listener = () => { };
    private lastHref: string;

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

    private startHrefInterceptors() {
        setInterval(() => { this.intercept(InterceptorMethods.INTERCEPTOR_HREF) }, 100);
    }

    private startXPathInterceptors() {
        const { MutationObserver } = window;

        const observer = new MutationObserver((mutations, observer) => {
            this.intercept(InterceptorMethods.INTERCEPTOR_XPATH);
        });
        observer.observe(document, {
            subtree: true,
            attributes: true
        });
    }

    private intercept(method: InterceptorMethods) {
        switch (method) {
            case InterceptorMethods.INTERCEPTOR_HREF:
                const newhref = window.location.href;
                if (newhref !== this.lastHref) {
                    const hrefInterceptors = interceptors.filter((x: IInterceptor) => x.condition.method === InterceptorMethods.INTERCEPTOR_HREF);
                    for (const interceptor of hrefInterceptors) {
                        if (interceptor.condition.fn(newhref)) {
                            this.fn(interceptor.action);
                        }
                    }
                }
                this.lastHref = window.location.href;
                break;
            case InterceptorMethods.INTERCEPTOR_XPATH:
                const xpathInterceptors = interceptors.filter((x: IInterceptor) => x.condition.method === InterceptorMethods.INTERCEPTOR_XPATH);
                for (const interceptor of xpathInterceptors) {
                    if (interceptor.condition.fn(document)) {
                        this.fn(interceptor.action);
                    }
                }
                break;
            default:
                break;
        }
    }
}
