import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css"
export function ListUserPage(){
  const [data, setData]  = useState([]);
  const fetchUsers =async ()=>{
    const response = await axios.get("http://localhost:8000/users")
    setData(response.data);
  }

  useEffect(() => {
    fetchUsers();
  },[])

  const deleteUser = (user) => {
    axios.delete(
      "http://localhost:8000/users/"+user.id
    ).then(()=>{
      alert(user.name + " Deleted!");
      fetchUsers();
    })
  }
    return <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        data.map(
          (user, index) => <tr key={index}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>
            <Link to={"/users/"+user.id}>
              <Button varient="primary" size="sm">View</Button>
            </Link>
            <Link to={"/users/"+user.id+"/edit"}>
              <Button className="btn-info align" size="sm">Edit</Button>
            </Link>
            <Button className="btn-danger align" size="sm" onClick={()=>deleteUser(user)}>Delete</Button>
          </td>
        </tr>
        )
      }
    </tbody>
  </Table>
}