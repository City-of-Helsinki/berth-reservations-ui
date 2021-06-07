import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';

import './newApplication.scss';

const NewApplication = () => {
  const { t } = useTranslation();
  return (
    <Container className="vene-new-application">
      <Row>
        <Col sm={10}>
          <h3 className="vene-new-application__heading">{t('page.berth.switch_application.new.title')}</h3>
          <span>{t('page.berth.switch_application.new.info_text')}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default NewApplication;
