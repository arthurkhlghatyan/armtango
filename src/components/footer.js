import React from 'react';
import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaViber,
  FaWhatsapp,
} from 'react-icons/fa';

const captureProfileLink = () => {
  window.getOutboundLink('https://www.facebook.com/arthur.khlghatyan.1');
  return false;
};

const captureBookNowClick = () => {
  getOutboundLink(
    'https://docs.google.com/forms/d/e/1FAIpQLSe8pL_3YiNJZbFwPC1gtCggzjHjid14rbZnDXJRYbFzYsBi_w/viewform'
  );
  return false;
};

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col sm={12} md={4} lg={4} className="mt-4 mb-1">
          <h5 className="font-weight-bold text-uppercase mb-4">
            #ArmTangoFest2019
          </h5>
          <p>
            Maestros, tangueras, tangueros, and DJs from all over the world will join us for this inaugural Tango Festival in Armenia – the ancient land at the crossroads of East and West. 
          </p>
        </Col>
        <Col sm={12} md={4} lg={4} className="mt-4 mb-1">
          <h5 className="font-weight-bold text-uppercase mb-4">
            Contact
          </h5>
          <p>
            <FaEnvelope />
            &nbsp;
            tango.inarmenia@gmail.com
          </p>
          <p>
            <FaPhone />
            &nbsp;
            <FaViber />
            &nbsp;
            <FaWhatsapp />
            &nbsp;
            +374 95889933
          </p>
          <p>
            <FaFacebook />
            &nbsp;
            <a
              rel="noopener"
              target="_blank"
              href="https://www.facebook.com/armtangofest">
              @armtangofest
            </a>
          </p>
        </Col>
        <Col sm={12} md={4} lg={4} className="mt-4 mb-1">
          <h5 className="font-weight-bold text-uppercase mb-4">
            Useful links
          </h5>
          <p>
            <Link to="/calendar">
              Calendar
            </Link>
          </p>
          <p>
            <a
              rel="noopener"
              onClick={captureBookNowClick}
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8pL_3YiNJZbFwPC1gtCggzjHjid14rbZnDXJRYbFzYsBi_w/viewform">
              Book now
            </a>
          </p>
          <p>
            <a
              rel="noopener"
              target="_blank"
              href="https://www.facebook.com/events/279299639637976/">
              Join Event on Facebook
            </a>
          </p>
          <p>
            <a
              rel="noopener"
              target="_blank"
              href="https://www.facebook.com/profilepicframes/?selected_overlay_id=2342257539386495">
              Use Facebook frame
            </a>
          </p>
          <p>
            <a
              rel="noopener"
              target="_blank"
              href="https://www.facebook.com/lavida.tango.yerevan">
              Tango School Facebook page
            </a>
          </p>
        </Col>
      </Row>
    </Container>
    <div className="footer-copyright text-center py-4">
      <div>© 2019 Copyright: ArmTangoFest2019</div>
      <div>
        Developed by
        &nbsp;
        <a
          rel="noopener"
          onClick={captureProfileLink}
          href="https://www.facebook.com/arthur.khlghatyan.1">Arthur K.</a>
      </div>
    </div>
  </footer>
);

export default Footer;
