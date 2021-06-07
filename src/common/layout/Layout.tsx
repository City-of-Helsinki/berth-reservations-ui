import * as React from 'react';

import Footer from './footer/Footer';
import KoroSection from './koroSection/KoroSection';
import Navbar from './navbar/Navbar';

import './layout.scss';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className="vene-layout">
    <Navbar />
    <main id="main">{children}</main>
    <KoroSection top color="blue">
      <Footer />
    </KoroSection>
  </div>
);

export default Layout;
