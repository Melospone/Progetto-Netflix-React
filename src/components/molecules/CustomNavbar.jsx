import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DropdownButtonCustom from '../atoms/DropdownButtonCustom';


function CustomNavbar() {
  return (
    <Navbar expand="lg" style={{backgroundColor: "#212529"}}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src="../src/assets/images/netflix_logo.png" width="100px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
            <Nav.Link href="#link" className="text-light">TV Shows</Nav.Link>
            <Nav.Link href="#link" className="text-light">TV Shows</Nav.Link>
            <Nav.Link href="#link" className="text-light">Movies</Nav.Link>
            <Nav.Link href="#link" className="text-light">Recently Added</Nav.Link>
            <Nav.Link href="#link" className="text-light">My List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="d-flex justify-content-end me-5 align-items-center">
        <div className="d-flex align-items-center">
          <div className="search-icon position-relative mt-2 me-4">
            <img src="../src/assets/images/magnifying-glass-solid.svg" alt="search" width="15px" />
          </div>
          <div className="d-flex position relative mt-2 me-4">
            <img src="../src/assets/images/kids_icon.png" alt="kids" width="30px"/>
          </div>
          <div className="d-flex position relative mt-2 me-4">
            <img src="../src/assets/images/bell-solid.svg" alt="bell" width="15px"/>
          </div>
        </div>
        <div className="mt-2">
          <DropdownButtonCustom/>
        </div>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;