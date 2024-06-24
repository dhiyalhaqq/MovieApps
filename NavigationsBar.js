import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">MOVIEAPPS</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#nowplaying">Now Playing</Nav.Link>
                        <Nav.Link href="#popular">Popular</Nav.Link>
                        <Nav.Link href="#topRated">Top Rated</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar