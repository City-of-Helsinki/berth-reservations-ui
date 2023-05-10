import './termsOfService.scss';

const TermsOfService = () => {
  return (
    <div className="vene-terms-of-service">
      <h1 className="vene-terms-of-service__heading">Trailerin kesäsäilytys Maksusopimus</h1>

      <h3 className="vene-terms-of-service__sub-heading">PALVELUN MAKSAMINEN JA KÄYTTÖ</h3>
      <p>
        Varattu trailerin kesäsäilytyspaikka on asiakkaan käytettävissä sopimuksessa määriteltynä aikana. Asiakkaalla
        tulee olla voimassa oleva venepaikan vuokrasopimus Helsingin kaupungin kanssa. Trailerin kesäsäilytys tällä
        maksulla on mahdollista merkityillä trailerin kesäsäilytysalueilla purjehduskaudella 10.6.-14.9. maksusuoritusta
        vastaavana vuonna. Trailerin voi kuitenkin viedä alueelle aikaisemmin, jos alueilla on tilaa ja säilyttää
        alueella siihen asti, kunnes nostaa veneensä vedestä talvisäilytystä varten.
      </p>

      <h3 className="vene-terms-of-service__sub-heading">MAKSAMINEN</h3>
      <p>
        Trailerin kesäsäilytys maksetaan välittömästi trailerin alueelle jättämisen jälkeen.Palvelun hinta sisältää
        arvonlisäveron. Mahdolliset lisäpalvelut eivät sisälly hintaan.
      </p>

      <h3 className="vene-terms-of-service__sub-heading">PERUUTUSOIKEUS</h3>
      <p>
        Palvelu katsotaan otetuksi käyttöön koko purjehduskaudelle,sillä hetkellä, kun traileri on viety
        säilytysalueelle. Maksua tai sen osaa ei palauteta, vaikka asiakas lopettaisi palvelun käytön ennen
        purjehduskauden päättymistä.
      </p>

      <h3 className="vene-terms-of-service__sub-heading">ASIAKKAAN VASTUU</h3>
      <p>
        Asiakas on vastuussa toimintansa turvallisuudesta. Asiakkaalle voidaan antaa velvoittavia palvelun järjestykseen
        ja ylläpitoon liittyviä tarkempia käyttö-ja turvallisuusohjeita paikallisesti. Asiakas sitoutuu noudattamaan
        venesatamasääntöjä.
      </p>

      <h3 className="vene-terms-of-service__sub-heading">PALVELUTARJOAJAN PERUUTUSOIKEUS JA SOPIMUKSEN PURKAMINEN</h3>
      <p>
        Jos palvelutarjoaja ei pysty ylivoimaisen esteen (force majeure) takia tarjoamaan varattua palvelua,
        palvelutarjoajalla on oikeus peruttaa asiakkaan trailerin kesäsäilytys. Palvelutarjoajan käyttäessä
        peruutusoikeuttaan asiakkaasta riippumattomista syistä, maksu palautetaan asiakkaalle
        kokonaisuudessaan.Palvelutarjoajalla on oikeus purkaa sopimus päättymään välittömästi, jos asiakas tai hänen
        seuralaisensa syyllistyy sellaiseen laiminlyöntiintai menettelyyn, mikä olennaisesti rikkoo tätä sopimusta,
        satamakiinteistön järjestyssääntöjä tai venesatamasääntöjä tai Suomen lakia, tai jos asiakas tai hänen
        seuralaisensa harjoittaa satamassa tai trailerin kesäsäilytysalueella rikollista, vaarallista tai muutoin
        sopimuksen vastaista tai sopimattomaksi katsottavaa toimintaa.Jos trailerin kesäsäilytys joudutaan keskeyttämään
        asiakkaan häiriökäyttäytymisen tai laiminlyönnin takia, maksuja ei palauteta.
        <br />
        Jos trailerin kesäsäilytys joudutaan keskeyttämään asiakkaan häiriökäyttäytymisen tai laiminlyönnin takia,
        maksuja ei palauteta.
      </p>

      <h3 className="vene-terms-of-service__sub-heading">VASTUUNRAJOITUKSET JA ERIMIELISYYKSIEN RATKAISEMINEN</h3>
      <p>
        Palveluntarjoaja ei vastaa peruuntumisesta tai keskeytymisestä aiheutuneista välillisistä vahingoista.
        Palveluntarjoaja ei vastaa virheestä tai viivästyksestä, jos se aiheutuu ylivoimaisesta esteestä.
        <br />
        Tätä sopimusta koskevat erimielisyydet ratkaistaan Helsingin käräjäoikeudessa. Kuluttaja-asiakas voi saattaa
        asian myös kuluttajariitalautakunnan käsiteltäväksi. Sopimukseen sovelletaan Suomen lakia.
      </p>

      <h3 className="vene-terms-of-service__sub-heading">SOPIMUKSEN VOIMAATULO</h3>
      <p>
        Maksamalla trailerin kesäsäilytyksen asiakas sitoutuu noudattamaan näitä sopimusehtoja sekä venesatamasääntöjä.
        Asiakas vastaa siitä, että myös hänen seuralaisensa noudattavat tämän sopimuksen ehtoja sekä venesatamasääntöjä.
      </p>

      <h3 className="vene-terms-of-service__sub-heading">MAKSAMINEN JA MAKSUTAVAT</h3>
      <p>
        Maksamiseen liittyvät tiedot löytyvät osoitteesta https://checkout.hel.fi/fi/information
        <br />
        Verkkosivusto (checkout.hel.fi) on Helsingin kaupungin Taloushallintopalveluliikelaitoksen (Talpan) tuottaman
        verkkokauppapalvelun kassa, jota kaupungin toimialat ja palvelut voivat käyttää osana omaa verkkokauppaansa.
      </p>
      <h3 className="vene-terms-of-service__sub-heading">MAKSUVAHVISTUS</h3>
      <p>
        Saat onnistuneesti maksetusta tilauksesta sähköpostitse kuitin sekä vahvistuksen maksusta. Mikäli
        sähköpostiviestiä ei tule noin 15 minuutin sisällä onnistuneesta maksusta, tarkista sähköpostisi
        roskapostikansio.
      </p>
    </div>
  );
};

export default TermsOfService;
