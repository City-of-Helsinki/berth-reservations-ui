import { Trans, useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';

const getBerthReservationsLink = (language: string) => {
  switch (language) {
    case 'fi':
      return 'https://venepaikat.hel.fi/fi';
    case 'sv':
      return 'https://venepaikat.hel.fi/sv';
    case 'en':
      return 'https://venepaikat.hel.fi/en';
  }
};

const getBoatingInfoLink = (language: string) => {
  switch (language) {
    case 'fi':
      return 'https://hel.fi/veneily';
    case 'sv':
      return 'https://hel.fi/båtliv';
    case 'en':
      return 'https://hel.fi/boating';
  }
};

const WinterStorageNotice = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  return (
    <Container>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          <h3>{t('page.winter_storage.notice.title')}</h3>
          <p>
            <Trans
              i18nKey={'page.winter_storage.notice.paragraph1'}
              components={[
                <a
                  key={'wsNoticeParagraph1Link'}
                  href={getBerthReservationsLink(language)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  content
                </a>,
              ]}
            />
          </p>
          <p>
            <Trans
              i18nKey={'page.winter_storage.notice.paragraph2'}
              components={[
                <a
                  key={'wsNoticeParagraph2Link'}
                  href={getBoatingInfoLink(language)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  content
                </a>,
              ]}
            />
          </p>
          <p>{t('page.winter_storage.notice.paragraph3')}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default WinterStorageNotice;
