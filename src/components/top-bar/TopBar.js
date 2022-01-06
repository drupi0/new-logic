import { Navbar, Button } from "react-bootstrap";

function TopBar() {
  return (
    <Navbar className="p-1">
      <div className="ms-auto">
        <Button variant="link" className="me-1 text-decoration-none">
          Home
        </Button>
        <Button variant="link" className="me-1 text-decoration-none">
          Consents
        </Button>
      </div>
    </Navbar>
  );
}

export default TopBar;
