import { useEffect, useState } from "react";

export default function Users(){
    const [users, setUsers] = useState([]);
    const items = [];

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data));
    },[]);

    return(
        <>
            {items.length == 0 ? <h5>No Items</h5> : <h5>Some Items exist</h5>}
            <h3>Users List</h3>
            <ul>
            {users.map(user=>(
                <li key={user.id}>{user.name}</li>
            ))}
            </ul>
        </>
    )
}