import React from 'react';
import winterHeroImg from '../../../assets/images/hero_image_winter_storage.jpg';
import Hero from '../../common/hero/Hero';
import Layout from '../../layout/Layout';

const UnmarkedWinterStoragePage = () => {
  return (
    <Layout>
      <Hero title={`site.unmarkedWinterStorage.title`} bgUrl={winterHeroImg} bgPosition="center" />
    </Layout>
  );
};

export default UnmarkedWinterStoragePage;
