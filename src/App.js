import { Navbar, Container, Nav} from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListUserPage } from "./components/ListUserPage"
import { AddUserPage } from "./components/AddUserPage"
import { EditUserPage } from "./components/EditUserPage"
import { ViewUserPage } from "./components/ViewUserPage"
export default function App() {
  return <BrowserRouter>
  <div>
    <Navbar  className="navbar navbar-expand-sm bg-primary navbar-dark" varient="dark">
      <Container>
        <Navbar.Brand href="/">API Application</Navbar.Brand>
        <Nav className="float-right">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/add">Add New</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Container className="pt-5">
      <Routes>
        <Route index element={<ListUserPage/>}/>
        <Route path="add" element={<AddUserPage/>}/>
        <Route path="users/:userId/edit" element={<EditUserPage/>}/>
        <Route path="users/:userId" element={<ViewUserPage/>}/>
        
      </Routes>
    </Container>
  </div>
  </BrowserRouter>
}
