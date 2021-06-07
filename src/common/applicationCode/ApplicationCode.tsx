import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';

import { Text } from '../fields/Fields';

import './applicationCode.scss';

const ApplicationCode = () => {
  const { t } = useTranslation();
  return (
    <div className="vene-application-code">
      <h5>{t('form.overview.field.application_code.title')}</h5>
      <Row>
        <Col sm={6}>
          <Text name={`applicationCode`} placeholder={`form.overview.field.application_code.placeholder`} />
        </Col>
      </Row>
      <Row>
        <Col sm={10}>
          <span>{t(`form.overview.field.application_code.description`)}</span>
        </Col>
      </Row>
    </div>
  );
};

export default ApplicationCode;
