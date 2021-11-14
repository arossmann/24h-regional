import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="bg-navbar">
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="Navbar" variant="pills">
                    <Nav.Link className="navlink" href="/">Startseite</Nav.Link>
                    <Nav.Link className="navlink" href="/about">Über</Nav.Link>
                    <Nav.Link className="navlink" href="/map">Karte</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </>

    )
}

export default Navigation;