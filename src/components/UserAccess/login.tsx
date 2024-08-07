import "../UserAccess/useraccess.css"

import { USER } from "../../util/types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usersAPI } from "../../restAPIs/users";

function LogInPage() {

    const navigate = useNavigate();
    const [users, setUsers] = useState<USER[]>([]);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(
        () => {
            const resp = usersAPI.get();
            resp.then((data: USER[]) => {
                setUsers(data)
            });

        }, [])

    const handleLogIn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()

        /*will need a section to check username and password agains current users to see if it matches.
          Otherwise, we will suggest they create a new account
          */
        const isNotEmpty = (str: string) => /^[^\s]+(\s+[^\s]+)*$/.test(str);

        if (!isNotEmpty(username) || !isNotEmpty(password)) {
            console.log('Username or password cannot be empty or contain empty spaces.');
        };

        //iterate through users and see if both username and password match
        users.map((user) => {
            if (username === user.username && password === user.password) {
                console.log('Logged In');
                //TODO:Where should the page lead when logged in.
            }
        });

        setUsername('');
        setPassword('');
    }

    const handleNewAccount = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        navigate('/SignUp');
    }

    return (
        <main className="user-pages">
            <p>This will be our Log In page</p>
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
                    onClick={(event) => handleLogIn(event)}
                >
                    Log In
                </button>
                <a href="/reset">Forgot password?</a>
                {/*Will need to be linked via React Router? so that it goes to a new account screen*/}
                <button
                    className="new-account"
                    onClick={(event) => handleNewAccount(event)}
                >
                    Create new account</button>
            </form>
        </main>
    )

}

export default LogInPage