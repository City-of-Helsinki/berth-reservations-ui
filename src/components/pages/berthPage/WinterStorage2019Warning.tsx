import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Col, Container, Row } from 'reactstrap';

import { LocaleOpts } from '../../../types/intl';

import './winterStorage2019Warning.scss';

const ReleaseNote = ({ intl }: InjectedIntlProps) => {
  let title = 'Tiedote 7.10.2019';
  let desc1 =
    'Asiakaspalvelumme on ruuhkautunut uuden järjestelmän viivästymisen vuoksi. Sähköisellä hakemuksella voi hakea ainoastaan ruutupaikkoja (Rajasaari, Laivalahti, Iso-Sarvasto ja Porslahti). Ruutupaikat alkavat olla jo täynnä tälle kaudelle, mutta voit halutessasi jättää hakemuksen.';
  let desc2 =
    ' Nostojärjestyksessä täytettävien talvisäilytysalueiden paikkoja voi kysellä venepaikkavarauksista seuraavan toimintaohjeen mukaisesti:';
  let listTitle = 'TOIMINTAOHJE KAIKILLE NOSTOJÄRJESTYSALUEILLE HALUAVILLE:';
  let listItem1 =
    'Käy katsomassa onko haluamallasi nostojärjestysalueella tilaa veneellesi. Nostojärjestysalueita ovat LÄNNESSÄ Hernesaari, Pajalahti, Kaisaniemi ja Lähteelä IDÄSSÄ Ruusuniemi I ja II, Puotila, Marjaniemi, Strömsinlahti.';
  let listItem2 =
    'Kun löydät sopivan paikan, tule venepaikkavarauksiin maksamaan talvisäilytys (vain korttimaksut). Palvelemme arkisin klo 9-16, Paavo Nurmen kuja 1 E, 00250 Helsinki. Saat samalla talvisäilytykseen oikeuttavan tarran.';
  let listItem3 =
    'Nosta veneesi alueelle ja kiinnitä tarra näkyvälle paikalle telakointivälineeseen tai veneeseen.';
  let footer = null;

  // We opted for checking the language manually to make the component encapsulated because it's a one-timer component.
  switch (intl.locale) {
    case LocaleOpts.EN:
      title = 'Announcement for applicants of winter storage places of boats, 7.10.2019';
      desc1 =
        'Due to the introduction of a new system, customer service for berth reservations is backed up, and the processing of winter storage places on hoisting order areas is impossible to hold on schedule. Therefore, we will use the old practice for one more season.';
      desc2 = '';
      listTitle =
        'INSTRUCTIONS FOR THOSE WISHING TO STORE THEIR BOAT ON HOISTING ORDER AREAS, INCLUDING THOSE WHO ALREADY APPLIED FOR A PLACE ONLINE:';
      listItem1 =
        'Look for a suitable spot for your boat on the hoisting order area. The western hoisting order areas are Hernesaari, Pajalahti, Kaisaniemi, and Lähteelä, and the eastern ones are Ruusuniemi I and II, Puotila, Marjaniemi, and Strömsinlahti.';
      listItem2 =
        'Once you find a suitable place, come to the boat berth reservations office to pay for the winter storage (card payments only). We are open Mon–Fri 9–16 at Paavo Nurmen kuja 1 E, 00250 Helsinki. Once you have paid, you will receive a sticker proving your right for winter storage.';
      listItem3 =
        'Hoist your boat on the area and attach the sticker on a visible place on your boat or docking equipment.';
      footer = (
        <p>
          The application for client-specific square spaces remains online at{' '}
          <a href="https://venepaikat.hel.fi">venepaikat.hel.fi</a>. The number of square spaces is
          limited, and due to the large number of applicants, we cannot grant everyone a square
          space.
        </p>
      );
      break;
    case LocaleOpts.SV:
      title = 'Meddelande till sökande av vinterförvaringsplats för båt, 7.10.2019';
      desc1 =
        'Dröjsmål i ibruktagandet av ett nytt system orsakar rusning hos kundtjänsten vid Helsingfors stads båtplatsreservering. Därför lyckas handläggningen av vinterförvaringsansökningar för områdena som fylls upp i upptagningsordning inte enligt tidtabellen, så vi kommer ännu den här säsongen att återgå till tidigare praxis.';
      desc2 = '';
      listTitle =
        'ANVISNINGAR FÖR DIG SOM VILL HA EN PLATS I OMRÅDET SOM FYLLS UPP I UPPTAGNINGSORDNING, ÄVEN OM DU REDAN SÖKT DEN ELEKTRONISKT:';
      listItem1 =
        'Besök det önskade upptagningsordningsområdet för att se om det finns plats för din båt. Områden som fylls upp i upptagningsordning i väster är Ärtholmen, Smedjeviken, Kajsaniemi och Källviken och i öster Rosenudden I och II, Botby, Marudd, Strömsviken.';
      listItem2 =
        'Då du hittat en lämplig plats ska du komma till båtplatsreserveringen och betala vinterförvaringen (betalning endast med kort). Vi betjänar vardagar kl. 9–16, Paavo Nurmis gränd 1 E, 00250 Helsingfors. Du får samtidigt en dekal som berättigar till vinterförvaring.';
      listItem3 =
        'Ta upp båten i området och fäst dekalen på en synlig plats på båtbocken eller på båten.';
      footer = (
        <p>
          Ansökan om kundspecifika rutplatser sker fortsättningsvis elektroniskt på adressen{' '}
          <a href="https://venepaikat.hel.fi">venepaikat.hel.fi</a>. Antalet rutplatser är begränsat
          och på grund av det stora antalet sökande räcker platserna inte till alla.
        </p>
      );
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
            {desc2 && <p>{desc2}</p>}
            <strong>{listTitle}</strong>
            <ol className="vene-winter-storage-2019-warning__list">
              <li className="vene-winter-storage-2019-warning__list-item">{listItem1}</li>
              <li className="vene-winter-storage-2019-warning__list-item">{listItem2}</li>
              <li className="vene-winter-storage-2019-warning__list-item">{listItem3}</li>
            </ol>
            {footer}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default injectIntl(ReleaseNote);
