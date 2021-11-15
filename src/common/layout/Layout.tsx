import * as React from 'react';

import Footer from './footer/Footer';
import KoroSection from './koroSection/KoroSection';
import Navbar from './navbar/Navbar';

import './layout.scss';

interface Props {
  disableNav?: boolean;
  children: React.ReactNode;
}

const Layout = ({ disableNav, children }: Props) => (
  <div className="vene-layout">
    <Navbar disableNav={disableNav} />
    <main id="main">{children}</main>
    <KoroSection top color="blue">
      <Footer />
    </KoroSection>
  </div>
);

export default Layout;
