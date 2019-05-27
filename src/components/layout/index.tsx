import React from 'react';

import Footer from './Footer';
import KoroSection from './KoroSection';
import Navbar from './Navbar/Navbar';

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
