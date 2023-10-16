import { Controller, Get } from '@nestjs/common'

@Controller()
export class BlockedUserPostController {
    constructor() {}

    @Get('/api/admin/blocked')
    public async blockedUser {
        try {

        } catch(err) {
            throw new Error(err)
        }
    }
}