import { Navbar, Nav, Container } from 'react-bootstrap'
function Header() {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>ProShot</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
