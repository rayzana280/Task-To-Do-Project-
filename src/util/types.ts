interface TASK {
    prompt: string,
    category: string
}

interface USER {
    id?: number,
    username: string,
    password: string
}


interface DATA {
    tasks: Array<TASK>
    users: Array<USER>
}


export type { TASK, USER, DATA }