import "../UserAccess/useraccess.css"
import { useState } from "react"

import { usersAPI } from "../../restAPIs/users";


function SignUpPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitNewUser = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()

        /*will need a section to check username and password agains current users to see if it matches.
                  Otherwise, we will suggest they create a new account
                  */
        const isNotEmpty = (str: string) => /^[^\s]+(\s+[^\s]+)*$/.test(str);

        if (!isNotEmpty(username) || !isNotEmpty(password)) {
            console.log('Username or password cannot be empty or contain empty spaces.');
        }

        usersAPI.post({
            username: username,
            password: password
        })

        //UI cleanup
        setUsername('');
        setPassword('');
    }

    return (
        <main className="user-pages">
            <p>This will be our Sign Up page</p>
            <form>
                <div className="labels">
                    <label>Username: </label>
                    <input
                        type="text"
                        onChange={(event) => setUsername(event.currentTarget.value)}
                        value={username}
                    />
                </div>
                <div className="labels">
                    <label>Password:  </label>
                    <input
                        type="text"
                        onChange={(event) => setPassword(event.currentTarget.value)}
                        value={password}
                    />
                </div>
                <button
                    onClick={(event) => submitNewUser(event)}
                >Submit</button>
            </form>
        </main>
    )

}

export default SignUpPage