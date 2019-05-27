import React from 'react';

import Footer from './footer/Footer';
import KoroSection from './koroSection/KoroSection';
import Navbar from './navbar/Navbar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Navbar />
    {children}
    <KoroSection top color="blue">
      <Footer />
    </KoroSection>
  </>
);

export default Layout;
