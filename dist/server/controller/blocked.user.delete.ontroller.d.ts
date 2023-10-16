export declare class BlockedUserDeleteController {
    constructor();
    blockedUserDelete(body: {
        userid: Number;
    }): Promise<{
        message: string;
    }>;
}
