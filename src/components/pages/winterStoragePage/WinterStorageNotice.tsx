import React from 'react';
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
            <Trans i18nKey={'page.winter_storage.notice.paragraph1'}>
              A <a href={getBerthReservationsLink(language)}>venepaikat.hel.fi</a> a.
            </Trans>
            {/*{t('page.winter_storage.notice.paragraph1', {
              link: (
                <a href={t('page.winter_storage.notice.paragraph1.link_url')}>
                  {t('page.winter_storage.notice.paragraph1.link_label')}
                </a>
              ),
            })}*/}
          </p>
          <p>
            <Trans i18nKey={'page.winter_storage.notice.paragraph2'}>
              A <a href={getBoatingInfoLink(language)}>hel.fi/veneily</a> a.
            </Trans>
          </p>
          <p>{t('page.winter_storage.notice.paragraph3')}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default WinterStorageNotice;
