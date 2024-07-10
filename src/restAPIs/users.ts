import { USER } from "../util/types";

const users_url = "https://retoolapi.dev/oa2xGx/users"

class UsersAPI {

    async get() {
        try {
            const resp = await fetch(users_url);
            const data = await resp.json();
            return data;
        }
        catch {
            console.log('Failed GET call');
        }
    };

    async getSingleUser(id: number) {
        try {
            const resp = await fetch(`${users_url}/${id}`);
            const data = await resp.json();
            return data;
        }
        catch {
            console.log('Failed GET call');
        }
    };


    async delete(id: number) {
        try {
            const resp = await fetch(`${users_url}/${id}`, {
                method: 'DELETE'
            });
            return resp;
        }
        catch {
            console.log('Failed DELETE call')
        }
    };

    async put(id: number, object: USER) {
        try {
            const resp = await fetch(`${users_url}/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(object)
            });
            return resp;
        }
        catch {
            console.log('Failed PUT call')
        }
    };

    async post(object: USER) {
        try {
            const resp = await fetch(users_url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(object)
            });
            return resp;
        }
        catch {
            console.log('Failed POST call')
        }
    }
}

export const usersAPI = new UsersAPI();