import React from 'react';
import { Col, Row } from 'reactstrap';

import { Checkbox } from '../fields/Fields';
import styles from './privacyPoliciesAgreement.module.scss';

interface Props {
  label: JSX.Element;
  gdprNotes: React.ReactNode;
  colProps: object;
}

const PrivacyPoliciesAgreement = ({ label, gdprNotes, colProps }: Props) => (
  <>
    <Row className={styles.inputs}>
      <Col {...colProps}>
        <Checkbox name="privacyPoliciesConfirmed" label={label} required />
      </Col>
    </Row>
    {gdprNotes && (
      <Row className={styles.notes}>
        <Col {...colProps}>{gdprNotes}</Col>
      </Row>
    )}
  </>
);

export default PrivacyPoliciesAgreement;
