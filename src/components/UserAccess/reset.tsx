import { useNavigate } from "react-router-dom";
import { usersAPI } from "../../restAPIs/users";
import { USER } from "../../util/types";
import "../UserAccess/useraccess.css"
import { useEffect, useState } from "react"

function Reset() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const [users, setUsers] = useState<USER[]>([]);

    const navigate = useNavigate();

    useEffect(
        () => {
            const resp = usersAPI.get();
            resp.then((data: USER[]) => {
                setUsers(data)
            });

        }, []);



    const updatePassword = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()

        /*will need a section to check username and password agains current users to see if it matches.
                  Otherwise, we will suggest they create a new account
                  */
        const isNotEmpty = (str: string) => /^[^\s]+(\s+[^\s]+)*$/.test(str);

        if (!isNotEmpty(username)) {
            console.log('Username cannot be empty or contain empty spaces.');
            return;
        }

        //TODO: if successful change page should route to log in page.

        users.map((user) => {
            if (user.username === username) {
                console.log('Password changed!');
                //TODO:Need to change the password

                user.id && usersAPI.put(user.id, {
                    username: user.username,
                    password: password
                })

                navigate('/login')
            }
        })



        //TODO: display a message saying the below if no the username input does not match any of the current users.
        console.log('No user found.');

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