import { Col, Row } from 'reactstrap';

import LabelValuePair from '../../../../../common/labelValuePair/LabelValuePair';

export interface OldBerthInfoProps {
  harborName: string;
  pier?: string | null;
  berthNumber: string;
  reasonTitle?: string | null;
}

const OldBerthInfo = ({ harborName, pier, berthNumber, reasonTitle }: OldBerthInfoProps) => {
  return (
    <Row>
      <Col xs={12}>
        <LabelValuePair label="page.berth.switch_application.form.current_harbour_area.label" value={harborName} />

        <LabelValuePair label="page.berth.switch_application.form.pier.title" value={pier} />

        <LabelValuePair label="page.berth.switch_application.form.berth.title" value={berthNumber} />

        <LabelValuePair label="page.berth.switch_application.reason.title" value={reasonTitle} />
      </Col>
    </Row>
  );
};

export default OldBerthInfo;
