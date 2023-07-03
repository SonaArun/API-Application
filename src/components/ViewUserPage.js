import axios from "axios";
import { useEffect, useState } from "react";
import {Card, Table} from "react-bootstrap";
import { useParams } from "react-router-dom";
export function ViewUserPage(){
    const {userId}= useParams();
    const [user, setUser] = useState(undefined);
    const fetchUser = async ()=>{
        const response = await axios.get("http://localhost:8000/users/"+userId);
        setUser(response.data);
    }
    useEffect(() => {fetchUser()}, [userId]);
    if( user === undefined)
    return <div>Loading!!!</div>;
    return <Card>
        <Table>
            <tbody>
                <tr>
                    <td>ID</td>
                    <td>{userId}</td>
                </tr>
                <tr>
                    <td>NAME</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>EMAIL</td>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <td>AGE</td>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <td>PREMIUM USER</td>
                    <td>{user.premiumMember ? "Yes" : "No"}</td>
                </tr>
            </tbody>
        </Table>
    </Card>
}