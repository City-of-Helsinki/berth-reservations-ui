import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import { LocaleOpts } from '../../../types/intl';

import './winterStorage2019Warning.scss';

const ReleaseNote = ({ intl }: InjectedIntlProps) => {
  const title = 'Tiedote 7.10.2019';
  const desc1 =
    'Asiakaspalvelumme on ruuhkautunut uuden järjestelmän viivästymisen vuoksi. Sähköisellä hakemuksella voi hakea ainoastaan ruutupaikkoja (Rajasaari, Laivalahti, Iso-Sarvasto ja Porslahti). Ruutupaikat alkavat olla jo täynnä tälle kaudelle, mutta voit halutessasi jättää hakemuksen.';
  const desc2 =
    ' Nostojärjestyksessä täytettävien talvisäilytysalueiden paikkoja voi kysellä venepaikkavarauksista seuraavan toimintaohjeen mukaisesti:';
  const listTitle = 'TOIMINTAOHJE KAIKILLE NOSTOJÄRJESTYSALUEILLE HALUAVILLE:';
  const listItem1 =
    'Käy katsomassa onko haluamallasi nostojärjestysalueella tilaa veneellesi. Nostojärjestysalueita ovat LÄNNESSÄ Hernesaari, Pajalahti, Kaisaniemi ja Lähteelä IDÄSSÄ Ruusuniemi I ja II, Puotila, Marjaniemi, Strömsinlahti.';
  const listItem2 =
    'Kun löydät sopivan paikan, tule venepaikkavarauksiin maksamaan talvisäilytys (vain korttimaksut). Palvelemme arkisin klo 9-16, Paavo Nurmen kuja 1 E, 00250 Helsinki. Saat samalla talvisäilytykseen oikeuttavan tarran.';
  const listItem3 =
    'Nosta veneesi alueelle ja kiinnitä tarra näkyvälle paikalle telakointivälineeseen tai veneeseen.';

  // We opted for checking the language manually to make the component encapsulated because it's a one-timer component.
  switch (intl.locale) {
    case LocaleOpts.EN:
      break;
    case LocaleOpts.SV:
      break;
    default:
      break;
  }

  return (
    <Container>
      <Row>
        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
          <div className="vene-winter-storage-2019-warning">
            <h3>{title}</h3>
            <p>{desc1}</p>
            <p>{desc2}</p>
            <strong>{listTitle}</strong>
            <ol className="vene-winter-storage-2019-warning__list">
              <li className="vene-winter-storage-2019-warning__list-item">{listItem1}</li>
              <li className="vene-winter-storage-2019-warning__list-item">{listItem2}</li>
              <li className="vene-winter-storage-2019-warning__list-item">{listItem3}</li>
            </ol>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default injectIntl(ReleaseNote);
