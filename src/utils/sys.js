export default class {
    static os() {
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.indexOf("android") > -1) {
            return "android";
        }
        if (userAgent.indexOf("iphone") > -1 || userAgent.indexOf("ipad") > -1 || userAgent.indexOf("ipod") > -1) {
            return "ios";
        }
        if (userAgent.indexOf("safari") > -1) {
            return "safari";
        }
        return "other";
    }

    static isMobile() {
        const userAgent = navigator.userAgent.toLowerCase();
        return (
            userAgent.indexOf("android") > -1 ||
            userAgent.indexOf("iphone") > -1 ||
            userAgent.indexOf("ipad") > -1 ||
            userAgent.indexOf("ipod") > -1
        );
    }

    static length(object) {
        if (object === null) return 0;
        return object.length;
    }
}
