import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';
import { Berths } from '../../../types/berths';
import Agreement from '../fragments/Agreement';
import Newsletter from '../fragments/Newsletter';
import { WithBoatType } from '../Selects';
import StyledContainer from '../StyledContainer';
import OverviewInfo from './OverviewInfo';

type Props = {
  values?: {
    boat_name: string;
    boat_registration_number: string;
    boat_type: string;
    boat_model: string;
    boat_width: number;
    boat_length: number;
    boat_draught: number;
    boat_weight: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    zip_code: string;
    municipality: string;
  };
  selectedBerths: Berths;
  tabs: string[];
} & WithBoatType;

const Submit = ({
  values = {
    boat_name: '',
    boat_registration_number: '',
    boat_type: '',
    boat_model: '',
    boat_width: 0,
    boat_length: 0,
    boat_draught: 0,
    boat_weight: 0,
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    address: '',
    zip_code: '',
    municipality: ''
  },
  selectedBerths,
  tabs,
  boatTypes
}: Props) => (
  <Container>
    <Row>
      <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
        <StyledContainer>
          <OverviewInfo
            selectedBerths={selectedBerths}
            tabs={tabs}
            values={values}
            boatTypes={boatTypes}
          />
          <FormattedMessage tagName="h5" id="form.overview.header.receivable_items.title" />
          <Newsletter />
          <FormattedMessage tagName="h3" id="form.overview.header.agreement.title" />
          <Agreement />
        </StyledContainer>
      </Col>
    </Row>
  </Container>
);

export default Submit;
