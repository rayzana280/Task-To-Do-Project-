import "../UserAccess/useraccess.css"
import { useState } from "react"

function Reset() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const updatePassword = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()

        /*will need a section to check username and password agains current users to see if it matches.
                  Otherwise, we will suggest they create a new account
                  */
        const isNotEmpty = (str: string) => /^[^\s]+(\s+[^\s]+)*$/.test(str);

        if (!isNotEmpty(username) || !isNotEmpty(password)) {
            console.log('Username or password cannot be empty or contain empty spaces.');
            return;
        }

        //TODO: Work on a function to update an entry on the JSON file.

        //UI cleanup
        setUsername('');
        setPassword('');
    }

    return (
        <main className="user-pages">
            <p>Password Reset Page</p>
            <form>
                <div className="labels">
                    <label>Current Username: </label>
                    <input
                        type="text"
                        onChange={(event) => setUsername(event.currentTarget.value)}
                        value={username}
                    />
                </div>
                <div className="labels">
                    <label>New Password:  </label>
                    <input
                        type="text"
                        onChange={(event) => setPassword(event.currentTarget.value)}
                        value={password}
                    />
                </div>
                <button
                    onClick={(event) => updatePassword(event)}
                >
                    Update Password
                </button>
            </form>
        </main>
    )

}

export default Reset