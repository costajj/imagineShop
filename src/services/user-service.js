import UserModel from '../schema/user-schema.js';

export class UserService {

    constructor() {

    }

    async create(user) {
        await UserModel.create(user);
    }
}