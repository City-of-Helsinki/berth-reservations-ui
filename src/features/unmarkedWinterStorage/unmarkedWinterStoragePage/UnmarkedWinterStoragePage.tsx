import { List } from 'immutable';
import React, { useLayoutEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Button, Col, Row } from 'reactstrap';

import winterHeroImg from '../../../assets/images/hero_image_winter_storage.jpg';
import { UnmarkedWinterFormValues, WinterStorageArea } from '../types';
import { LocalePush } from '../../../common/utils/container';
import Hero from '../../../common/hero/Hero';
import { Select } from '../../../common/fields/Fields';
import KoroSection from '../../../common/layout/koroSection/KoroSection';
import Layout from '../../../common/layout/Layout';
import UnmarkedWinterStorageLegend from './unmarkedWinterStorageLegend/UnmarkedWinterStorageLegend';
import { StepType } from '../../../common/steps/step/Step';

import './unmarkedWinterStoragePage.scss';

export type UnmarkedWinterStoragePageProps = {
  initialValues: UnmarkedWinterFormValues;
  localePush: LocalePush;
  onSubmit: (values: UnmarkedWinterFormValues) => void;
  steps: StepType[];
  winterStorageAreas: List<WinterStorageArea>;
};

const UnmarkedWinterStoragePage = ({
  initialValues,
  localePush,
  onSubmit,
  steps,
  winterStorageAreas,
}: UnmarkedWinterStoragePageProps) => {
  useLayoutEffect(() => window.scrollTo(0, 0), []);
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

  const getAreaOptions = (areas: List<WinterStorageArea>) =>
    areas.reduce<JSX.Element[]>((acc, area) => {
      if (!area) return acc;
      return [
        ...acc,
        <option key={area.id} value={area.id}>
          {area.name}
        </option>,
      ];
    }, []);

  const moveToForm = async () => {
    await localePush('/unmarked-winter-storage/form/registered-boat');
  };

  const form = {
    initialValues,
    onSubmit,
    render: () => (
      <Row>
        <Col sm={6}>
          <Select
            id="chosenAreas"
            name="chosenAreas"
            label="form.unmarked_winter_storage.field.winter_storage_area.label"
            required
          >
            <option value="">-</option>
            {winterStorageAreas && getAreaOptions(winterStorageAreas)}
          </Select>
        </Col>
      </Row>
    ),
  };

  return (
    <Layout>
      <Hero title={`site.unmarked_winter_storage.title`} bgUrl={winterHeroImg} bgPosition="center" />
      <KoroSection
        top
        title={`hero.unmarked_winter_storage.title`}
        description={
          <>
            <p>{t('hero.unmarked_winter_storage.paragraph.first')}</p>
            <p>
              <Trans
                i18nKey={'hero.unmarked_winter_storage.paragraph.second'}
                components={[
                  <a
                    key={'unmarkedWsHeroContentLink'}
                    href={getHeroContentLink(language)}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    content
                  </a>,
                ]}
              />
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
      <div className="vene-unmarked-winter-storage-page__buttons">
        <Button
          className="vene-unmarked-winter-storage-page__button"
          disabled={initialValues?.chosenAreas === undefined}
          onClick={moveToForm}
        >
          {t('form.wizard.button.continue')}
        </Button>
      </div>
    </Layout>
  );
};

export default UnmarkedWinterStoragePage;
