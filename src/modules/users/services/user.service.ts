import { RESTDataSource } from 'apollo-datasource-rest';

class UserService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.USERS_URL;
    }

    getUser(id: string) {
        return this.get(`/${id}`);
    }

    jwt(email: string, password: string) {
        return this.post('/login', {
            email,
            password,
        });
    }

    register(input: any) {
        return this.post('/register', {
            ...input,
        });
    }

    verify(token: string) {
        return this.post(
            '/verify',
            {},
            {
                headers: {
                    authorization: token,
                },
            }
        );
    }
}

export const userService = new UserService();
