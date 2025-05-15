import { useTranslation } from 'react-i18next';
import { Container } from 'reactstrap';

import './hero.scss';
import DiscontinuationNotice from '../discontinuationNotice/DiscontinuationNotice';

interface Props {
  title: string;
  bgUrl: string;
  bgPosition?: string;
}

const Hero = ({ title, bgUrl, bgPosition }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <DiscontinuationNotice />
      <div className="vene-hero" style={{ backgroundImage: `url(${bgUrl})`, backgroundPosition: bgPosition }}>
        <Container>
          <h1 className="vene-hero__title">{t(title)}</h1>
        </Container>
      </div>
    </>
  );
};

export default Hero;
