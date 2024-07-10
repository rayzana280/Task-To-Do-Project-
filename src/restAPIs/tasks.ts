import { TASK } from "../util/types";

const tasks_url = "https://retoolapi.dev/7RIpDi/tasks"

class TasksAPI {

    async get() {
        try {
            const resp = await fetch(tasks_url);
            const data = await resp.json();
            return data;
        }
        catch {
            console.log('Failed GET call');
        }
    };

    async getSingleTask(id: number) {
        try {
            const resp = await fetch(`${tasks_url}/${id}`);
            const data = await resp.json();
            return data;
        }
        catch {
            console.log('Failed GET call');
        }
    };


    async delete(id: number) {
        try {
            const resp = await fetch(`${tasks_url}/${id}`, {
                method: 'DELETE'
            });
            return resp;
        }
        catch {
            console.log('Failed DELETE call')
        }
    };

    async put(id: number, object: TASK) {
        try {
            const resp = await fetch(`${tasks_url}/${id}`, {
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

    async post(object: TASK) {
        try {
            const resp = await fetch(tasks_url, {
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

export const tasksAPI = new TasksAPI();