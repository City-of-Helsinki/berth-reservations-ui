import { Col, Row } from 'reactstrap';

import LabelValuePair from '../../../../../common/labelValuePair/LabelValuePair';

export interface OldBerthInfoProps {
  berth: string;
  reasonTitle?: string | null;
}

const OldBerthInfo = ({ berth, reasonTitle }: OldBerthInfoProps) => {
  return (
    <Row>
      <Col xs={12}>
        <LabelValuePair label="page.berth.switch_application.form.berth.title" value={berth} />
        <LabelValuePair label="page.berth.switch_application.reason.title" value={reasonTitle} />
      </Col>
    </Row>
  );
};

export default OldBerthInfo;
