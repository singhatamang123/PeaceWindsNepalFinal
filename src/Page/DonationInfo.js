import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCreditCard, FaMobileAlt } from 'react-icons/fa';

const DonateInfo = () => {
  const fadeInOutAnimation = {
    animation: 'fadeInOut 4s ease-in-out infinite',
    '@keyframes fadeInOut': {
      '0%, 100%': {
        opacity: 0,
      },
      '50%': {
        opacity: 1,
      },
    },
  };

  const bankDetailsStyle = {
    background: '#f9f9f9',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    ...fadeInOutAnimation,
  };

  const lineSeparatorStyle = {
    width: '100%',
    borderBottom: '2px solid #ddd',
    margin: '20px 0',
  };

  return (
    <div id="donate">
      <h2
        style={{
          fontSize: '2.5em',
          color: '#e74c3c',
          textAlign: 'center',
          marginBottom: '1.5em',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
        }}
      >
        "Make a Difference with Your Contribution"
      </h2>

      <Container fluid className="py-5" style={bankDetailsStyle}>
        <Row className="mt-4">
          <Col md={12}>
            <Card className="bank-card bg-transparent border-0">
              <Card.Body>
                <h4 className="text-dark" style={{ fontWeight: 'bold' }}>Bank Transfer Details</h4>
                <p className="text-dark">
                  Your generous donation will directly support our initiatives. Please use the following details for bank transfers:
                </p>
                <ul className="list-unstyled">
                  <li><strong>Account Name:</strong> PEACE WINDS NEPAL</li>
                  <li><strong>Account Number:</strong> 01201017503699</li>
                  <li><strong>Bank:</strong> NABIL BANK</li>
                  <li><strong>Branch:</strong> POKHARA NEWROAD BRANCH</li>
                </ul>
              </Card.Body>
            </Card>
            <div style={lineSeparatorStyle}></div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <Card className="bank-card bg-transparent border-0">
              <Card.Body>
                <h4 className="text-dark" style={{ fontWeight: 'bold' }}>Donate via Credit Card</h4>
                <p className="text-dark">
                  Securely contribute using your credit card. Your transaction is encrypted for utmost security.
                </p>
                <FaCreditCard size={40} color="#3498db" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bank-card bg-transparent border-0">
              <Card.Body>
                <h4 className="text-dark" style={{ fontWeight: 'bold' }}>Donate via Mobile</h4>
                <p className="text-dark">
                  Conveniently make a contribution using your mobile wallet. Scan the QR code or use the provided ID.
                </p>
                <FaMobileAlt size={40} color="#2ecc71" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DonateInfo;
