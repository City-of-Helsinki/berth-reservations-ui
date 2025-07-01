import { useTranslation } from 'react-i18next';
import { Container } from 'reactstrap';

import './hero.scss';

interface Props {
  title: string;
  bgUrl: string;
  bgPosition?: string;
}

const Hero = ({ title, bgUrl, bgPosition }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="vene-hero" style={{ backgroundImage: `url(${bgUrl})`, backgroundPosition: bgPosition }}>
      <Container>
        <h1 className="vene-hero__title">{t(title)}</h1>
      </Container>
    </div>
  );
};

export default Hero;
