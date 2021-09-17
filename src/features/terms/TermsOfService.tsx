import './termsOfService.scss';

const TermsOfService = () => {
  return (
    <div className="vene-terms-of-service">
      <h1 className="vene-terms-of-service__heading">Trailerin kesäsäilytys Maksusopimus</h1>

      <h3 className="vene-terms-of-service__sub-heading">PALVELUN MAKSAMINEN JA KÄYTTÖ</h3>
      <p>
        Varattu trailerin kesäsäilytyspaikka on asiakkaan käytettävissä sopimuksessa määriteltynä aikana. Asiakkaalla
        tulee olla voimassa oleva venepaikan vuokrasopimus Helsingin kaupungin kanssa. Trailerin kesäsäilytys tällä
        maksulla on mahdollista merkityillä trailerin kesäsäilytysalueilla purjehduskaudella 10.6.-14.9.2021. Traileria
        voi säilyttää alueella siihen asti, kunnes nostaa veneensä vedestä talvisäilytystä varten.
      </p>

      <h3 className="vene-terms-of-service__sub-heading">MAKSAMINEN</h3>
      <p>
        Trailerin kesäsäilytys maksetaan välittömästi ja viimeistään silloin, kun vene nostetaan vedestä talvisäilytystä
        varten. Maksu täytyy suorittaa kokonaisuudessaan 31.12.2021 mennessä. Palvelun hinta sisältää arvonlisäveron.
        Mahdolliset lisäpalvelut eivät sisälly hintaan.
      </p>

      <h3 className="vene-terms-of-service__sub-heading">PERUUTUSOIKEUS</h3>
      <p>Maksu on sitova. Maksua ei palauteta käyttämättä jääneen palvelun perusteella.</p>

      <h3 className="vene-terms-of-service__sub-heading">ASIAKKAAN VASTUU</h3>
      <p>
        Asiakas on vastuussa toimintansa turvallisuudesta. Asiakkaalle voidaan antaa velvoittavia palvelun järjestykseen
        ja ylläpitoon liittyviä tarkempia käyttö- ja turvallisuusohjeita paikallisesti. Asiakas sitoutuu noudattamaan
        venesatamasääntöjä.
      </p>

      <h3 className="vene-terms-of-service__sub-heading">PALVELUTARJOAJAN PERUUTUSOIKEUS JA SOPIMUKSEN PURKAMINEN</h3>
      <p>
        Jos palvelutarjoaja ei pysty ylivoimaisen esteen (force majeure) takia tarjoamaan varattua palvelua,
        palvelutarjoajalla on oikeus peruttaa asiakkaan trailerin kesäsäilytys. Palvelutarjoajan käyttäessä
        peruutusoikeuttaan asiakkaasta riippumattomista syistä, maksu palautetaan asiakkaalle kokonaisuudessaan.
        Palvelutarjoajalla on oikeus purkaa sopimus päättymään välittömästi, jos asiakas tai hänen seuralaisensa
        syyllistyy sellaiseen laiminlyöntiin tai menettelyyn, mikä olennaisesti rikkoo tätä sopimusta, satamakiinteistön
        järjestyssääntöjä tai venesatamasääntöjä tai suomen lakia, tai jos asiakas tai hänen seuralaisensa harjoittaa
        satamassa tai trailerin kesäsäilytysalueella rikollista, vaarallista tai muutoin sopimuksen vastaista tai
        sopimattomaksi katsottavaa toimintaa. Jos trailerin kesäsäilytys joudutaan keskeyttämään asiakkaan
        häiriökäyttäytymisen tai laiminlyönnin takia, maksuja ei palauteta.
      </p>

      <h3 className="vene-terms-of-service__sub-heading">VASTUUNRAJOITUKSET JA ERIMIELISYYKSIEN RATKAISEMINEN</h3>
      <p>
        Palveluntarjoaja ei vastaa peruuntumisesta tai keskeytymisestä aiheutuneista välillisistä vahingoista.
        Palveluntarjoaja ei vastaa virheestä tai viivästyksestä, jos se aiheutuu ylivoimaisesta esteestä. Tätä sopimusta
        koskevat erimielisyydet ratkaistaan Helsingin käräjäoikeudessa. Kuluttaja-asiakas voi saattaa asian myös
        kuluttajariitalautakunnan käsiteltäväksi. Sopimukseen sovelletaan Suomen lakia.
      </p>

      <h3 className="vene-terms-of-service__sub-heading">SOPIMUKSEN VOIMAATULO</h3>
      <p>
        Maksamalla trailerin kesäsäilytyksen asiakas sitoutuu noudattamaan näitä sopimusehtoja sekä venesatamasääntöjä.
        Asiakas vastaa siitä, että myös hänen seuralaisensa noudattavat tämän sopimuksen ehtoja sekä venesatamasääntöjä.
        Helsingissä 9/2021.
      </p>

      <h3 className="vene-terms-of-service__sub-heading">MAKSAMINEN</h3>
      <p>
        Hinta sisältää arvolisäveron. Kertalippu maksetaan verkossa ja maksutapahtumaa koskevat tiedot välitetään
        salattua yhteyttä käyttäen. Maksunvälittäjänä toimii VismaPay (PayByWay Oy, y-tunnus 2486559-4). VismaPay
        välittää maksut Helsingin kaupungille, jolloin tiliotteellasi maksun saajana näkyy VismaPay tai Paybyway Oy.
      </p>

      <h3 className="vene-terms-of-service__sub-heading">MAKSUTAVAT</h3>
      <p>
        Voit maksaa varauksen verkkopankkitunnuksilla, Lompakko-sovelluksilla tai maksukorteilla (credit/debit).
        Käytettävissä ovat seuraavat maksutavat: Osuuspankki, Nordea, Danske Bank, Oma Säästöpankki, Säästöpankki,
        Aktia, Paikallisosuuspankit, S-Pankki, Handelsbanken, Ålandsbanken, MobilePay, Masterpass, Visa-, Visa Debit-,
        Visa Electron-, MasterCard- ja Debit MasterCard –kortit, MobilePay, Pivo.
      </p>

      <h3 className="vene-terms-of-service__sub-heading">MAKSUVAHVISTUS</h3>
      <p>Saat automaattisen sähköpostiviestin onnistuneesta maksusta.</p>

      <h3 className="vene-terms-of-service__sub-heading">PERUUTUS</h3>
      <p>Maksua ei palauteta käyttämättä jääneen trailerin kesäsäilytyksen perusteella.</p>
    </div>
  );
};

export default TermsOfService;
