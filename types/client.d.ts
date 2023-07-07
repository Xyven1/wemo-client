export = WemoClient;
declare class WemoClient {
    static request(options: any, data: any): Promise<any>;
    static rgb2xy(r: any, g: any, b: any): number[];
    constructor(config: any);
    subscriptions: {};
    error: any;
    host: any;
    port: any;
    deviceType: any;
    UDN: any;
    callbackURL: any;
    device: any;
    services: {};
    soapAction(serviceType: any, action: any, body: any): Promise<any>;
    getEndDevices(): Promise<any[]>;
    setDeviceStatus(deviceId: any, capability: any, value: any): Promise<any>;
    getDeviceStatus(deviceId: any): Promise<{}>;
    setLightColor(deviceId: any, red: any, green: any, blue: any): Promise<any>;
    setBinaryState(value: any): Promise<any>;
    getBinaryState(): Promise<{
        BinaryState: any;
        brightness: any;
    }>;
    setBrightness(brightness: any): Promise<any>;
    getBrightness(): Promise<number>;
    setAttributes(attributes: any): Promise<any>;
    getAttributes(): Promise<{}>;
    getInsightParams(cb: any): Promise<{
        binaryState: any;
        instantPower: any;
        insightParams: {
            ONSince: any;
            OnFor: any;
            TodayONTime: any;
            TodayConsumed: any;
        };
    }>;
    _parseInsightParams(paramsStr: any): {
        binaryState: any;
        instantPower: any;
        insightParams: {
            ONSince: any;
            OnFor: any;
            TodayONTime: any;
            TodayConsumed: any;
        };
    };
    _onListenerAdded(eventName: any): void;
    _subscribe(serviceType: any): void;
    _verifyServiceSupport(serviceType: any): void;
    handleCallback(body: any): void;
}
declare namespace WemoClient {
    namespace EventServices {
        let insightParams: string;
        let statusChange: string;
        let attributeList: string;
        let binaryState: string;
    }
}
