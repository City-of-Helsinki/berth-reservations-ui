import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';

import { LocalePush, withMatchParamsHandlers } from '../../common/utils/container';
import Hero from '../../common/hero/Hero';
import Layout from '../../common/layout/Layout';
import frontHeroImg from '../../assets/images/hero_image_front.jpg';

import './frontPage.scss';

type Props = {
  localePush: LocalePush;
} & RouteComponentProps;

const FrontPage = ({ localePush }: Props) => {
  const { i18n } = useTranslation();
  useLayoutEffect(() => window.scrollTo(0, 0), []);

  const trailerPaymentURL = new URL(process.env.REACT_APP_TRAILER_PAYMENT_URL ?? window.location.href);
  trailerPaymentURL.searchParams.set('language', i18n.language);

  return (
    <Layout>
      <Hero title="page.front.title" bgUrl={frontHeroImg} />
    </Layout>
  );
};

export default withMatchParamsHandlers(FrontPage);
