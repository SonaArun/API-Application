import axios from "axios";
import { useEffect,useState } from "react";
import { Card, Form, FormGroup, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export function EditUserPage(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState("");
    const navigate = useNavigate();
    const [premiumMember,setPremiumMember] = useState(false);
    const {userId}= useParams();
    const fetchUser = async ()=>{
        const response = await axios.get("http://localhost:8000/users/"+userId);
        const user = response.data;
        setName(user.name);
        setEmail(user.email);
        setAge(user.age);
        setPremiumMember(user.premiumMember);
    }
    useEffect(() => {fetchUser()}, [userId]);
    const updateUser = async(event)=>{
        event.preventDefault();
        const response = await axios.patch(
            "http://localhost:8000/users/"+userId,
            {
                name: name,
                email: email,
                age: parseInt(age),
                premiumMember: premiumMember
            }
        );
        const id = response.data.id;
        navigate("/users/"+id)
    }
    
    return <div className="row justify-content-center">
        <div className="col-md-4">
            <Card className="p-4">
            <Form onSubmit={updateUser}>
                <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" required placeholder="Enter name" value={name} onChange={(event) => setName(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required placeholder="example@mail.com" value={email} onChange={(event) => setEmail(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" required placeholder="Age"  value={age} onChange={(event) => setAge(event.target.value)}/>
                </Form.Group>
                <FormGroup className="mb-3">
                    <Form.Check type="checkbox" label="Premium User" checked={premiumMember} onChange={()=>setPremiumMember(!premiumMember)}/>
                </FormGroup>
                <Button variant="primary" type="submit">
                Save
                </Button>
            </Form>
            </Card>
        </div>
    </div>
}