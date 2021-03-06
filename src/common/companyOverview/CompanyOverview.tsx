import { Col, Row } from 'reactstrap';

import './companyOverview.scss';

interface Props {
  companyName: string;
  businessId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  municipality: string;
}

const CompanyOverview = ({
  companyName,
  businessId,
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
  zipCode,
  municipality,
}: Props) => (
  <>
    <Row className="vene-company__contact-section">
      <Col md={12}>
        {companyName}
        <br />
        {businessId}
      </Col>
    </Row>
    <Row className="vene-company__contact-section">
      <Col md={12}>
        {address}
        <br />
        {zipCode}
        <br />
        {municipality}
      </Col>
    </Row>
    <Row className="vene-company__contact-section">
      <Col md={12}>
        {firstName} {lastName}
        <br />
        {email}
        <br />
        {phoneNumber}
      </Col>
    </Row>
  </>
);

export default CompanyOverview;
