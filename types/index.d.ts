export = Wemo;
declare class Wemo {
    constructor(opts?: {});
    load: (setupUrl: any) => Promise<any>;
    discover(cb: any): void;
    _listen(): void;
    _handleRequest(req: any, res: any): void;
    getLocalInterfaceAddress(targetNetwork: any): any;
    getCallbackURL(opts?: {}): string;
    _callbackURL: string;
    client(device: any): any;
    #private;
}
declare namespace Wemo {
    namespace DEVICE_TYPE {
        let Bridge: string;
        let Switch: string;
        let Motion: string;
        let Maker: string;
        let Insight: string;
        let LightSwitch: string;
        let Dimmer: string;
        let Humidifier: string;
        let HeaterB: string;
    }
}
