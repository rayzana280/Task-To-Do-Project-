import { useEffect, useState } from 'react';
import { USER } from '../../util/types';
import '../UserAccess/useraccess.css'
import { usersAPI } from '../../restAPIs/users';

function UsersList() {

    const [users, setUsers] = useState<USER[]>([]);
    const [update, setUpdate] = useState(false)

    useEffect(
        () => {
            const resp = usersAPI.get();
            resp.then((data: USER[]) => {
                setUsers(data)
            });

        }, [update]);

    const deleteUser = async (id?: number) => {
        if (id === undefined) return;

        if (id > 3) {
            await usersAPI.delete(id);
            setUpdate(!update);
        } else {
            console.log('Cannot delete this user');
        }
    }

    return (
        <main className='user-pages'>
            <p>This will be a list of current users</p>
            <i>*Admins cannot be deleted</i>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    )
}

export default UsersList;