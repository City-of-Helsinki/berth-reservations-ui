import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import Company from '../tabs/Company';
import PrivatePerson from '../tabs/PrivatePerson';
import SectionSelector from './SectionSelector';

interface Props {
  tab: string;
}

const ApplicantDetails = ({ tab }: Props) => (
  <>
    <SectionSelector
      name="boat"
      sizes={{
        xs: 12,
        md: 4,
        lg: 3,
      }}
      types={[
        {
          label: 'form.boat_type_selector.private_person.label',
          tab: 'private-person',
          icon: 'individual',
        },
        {
          label: 'form.boat_type_selector.company.label',
          tab: 'company',
          icon: 'business',
        },
      ]}
    />
    <Container>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          {tab === 'private-person' && <PrivatePerson />}
          {tab === 'company' && <Company />}
        </Col>
      </Row>
    </Container>
  </>
);

export default ApplicantDetails;
