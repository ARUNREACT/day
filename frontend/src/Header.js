import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header()
{
	return(
		<div>
			<Navbar bg="dark" data-bs-theme="dark">
		        <Container>
		          <Navbar.Brand href="/">Day Plan</Navbar.Brand>
		          <Nav className="me-auto navbar_wrapper">
		            <Link to="/register">Register</Link>
		            <Link to="/login"className="pl-2">Login</Link>
		          </Nav>
		        </Container>
		    </Navbar>
		</div>
	)
}

export default Header