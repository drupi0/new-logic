import { Button, Dropdown } from "react-bootstrap";

function Main() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Consent Form</h1>
      {/* <Form></Form> */}
      <FormAggreement lang="fr"></FormAggreement>
      <Button variant="light">Next &#8594;</Button>
    </div>
  );
}

function Form() {
  return (
    <form className="mt-4 d-flex flex-column align-items-start">
      <span className="ms-3 mb-1">Name</span>
      <input
        type="text"
        className="form-control"
        placeholder="Enter your name"
      />
      <span className="ms-3 mt-4 mb-1">Language</span>
      <Dropdown>
        <Dropdown.Toggle variant="light">Select Language</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>English</Dropdown.Item>
          <Dropdown.Item>French</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </form>
  );
}

function FormAggreement({ lang }) {
  const agreementText = {
    en: `You understand that by using the site or site services, you agree to be bound by this agreement. If you do not accept this agreement in its entirety, you must not access or use the
    site or the site services.
    
    Do you agree to this agreement? Please respond by saying "Yes" or "No".
  `,
    fr: `Vous comprenez qu'en utilisant le site ou les services du site, vous acceptez d'être lié par cet accord. Si vous n'acceptez pas cet accord dans son intégralité, vous ne devez pas accéder ou utiliser le
    site ou les services du site.
   
    Êtes-vous d'accord avec cet accord? Veuillez répondre en disant « Oui » ou « Non ».`,
  };

  return <div>{agreementText[lang]}</div>;
}

function Microphone() {}

export default Main;
