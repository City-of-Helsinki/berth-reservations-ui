import { List } from 'immutable';
import React, { useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Button, Col, Container, Row } from 'reactstrap';
import winterHeroImg from '../../../assets/images/hero_image_winter_storage.jpg';
import { UnmarkedWinterFormValues, WinterStorageArea } from '../../../types/unmarkedWinterStorage';
import Hero from '../../common/hero/Hero';
import { Select } from '../../forms/Fields';
import KoroSection from '../../layout/koroSection/KoroSection';
import Layout from '../../layout/Layout';
import UnmarkedWinterStorageLegend from '../../legends/unmarkedWinterStorageLegend/UnmarkedWinterStorageLegend';
import { StepType } from '../../steps/step/Step';

import './unmarkedWinterStoragePage.scss';

export type UnmarkedWinterStoragePageProps = {
  initialValues: UnmarkedWinterFormValues;
  onSubmit: Function;
  steps: StepType[];
  winterStorageAreas: List<WinterStorageArea>;
};

const UnmarkedWinterStoragePage = ({
  initialValues,
  onSubmit,
  steps,
  winterStorageAreas,
}: UnmarkedWinterStoragePageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const getHeroContentLink = (locale: string) => {
    switch (locale) {
      case 'en':
        return 'https://www.hel.fi/helsinki/en/culture/recreation/boating/winter-storage/';
      case 'sv':
        return 'https://www.hel.fi/helsinki/sv/kultur-och-fritid/friluftsliv/botliv/vinterupplaggning/upplagsomraden/';
      default:
        return 'https://www.hel.fi/helsinki/fi/kulttuuri-ja-vapaa-aika/ulkoilu/veneily/veneiden-talvisailytys/nostojarjestyksessa/';
    }
  };

  const getAreaOptions = (areas: List<WinterStorageArea>) => {
    areas.reduce<JSX.Element[]>((acc, area) => {
      if (!area) return acc;
      return [
        ...acc,
        <option key={area.id} value={area.id}>
          {area.name}
        </option>,
      ];
    }, []);
  };

  const form = {
    initialValues,
    onSubmit,
    render: () => {
      return (
        <Row>
          <Col sm={6}>
            <Select
              id="area"
              name="area"
              label="form.unmarked_winter_storage.field.winter_storage_area.label"
              required
            >
              <option value="">-</option>
              {winterStorageAreas && getAreaOptions(winterStorageAreas)}
            </Select>
          </Col>
        </Row>
      );
    },
  };

  return (
    <Layout>
      <Hero
        title={`site.unmarked_winter_storage.title`}
        bgUrl={winterHeroImg}
        bgPosition="center"
      />
      <KoroSection
        top
        title={`hero.unmarked_winter_storage.title`}
        description={
          <>
            <p>{t('hero.unmarked_winter_storage.paragraph.first')}</p>
            <p>
              <Trans i18nKey={'hero.unmarked_winter_storage.paragraph.second'}>
                A <a href={getHeroContentLink(language)}>hel.fi</a> a. <br /> A
              </Trans>
            </p>
          </>
        }
      />
      <KoroSection color="fog" top>
        <UnmarkedWinterStorageLegend
          form={form}
          legend={{
            title: t('legend.unmarked_winter.title'),
            legend: t('legend.unmarked_winter.legend'),
          }}
          steps={steps}
        />
      </KoroSection>
      <Container>
        <Row>
          <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
            <div className="vene-unmarked-winter-storage-page__buttons">
              <Button className="vene-unmarked-winter-storage-page__button">Jatka</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default UnmarkedWinterStoragePage;