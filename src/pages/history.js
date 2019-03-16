import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import HistoryBox from '../components/historyBox'

import B_Zelinka from '../../static/images/history/B_Zelinka.jpg'
import F_Kubicek from '../../static/images/history/F_Kubicek.jpg'
import S_Hrabe from '../../static/images/history/S_Hrabe.jpg'
import M_Losos from '../../static/images/history/M_Losos.jpg'

const history = {
  hrabe: {
    name: `Prof. RNDr. Sergěj Hrabě, DrSc.`,
    date: `*16. 7. 1899 v Moskvě, †29. 3. 1984 v Brně`,
    description: `Významný československý zoolog a hydrobiolog, dlouholetý pedagog a poválečný ředitel Zoologického ústavu PřF MU v Brně. Absolvent PřF UK v Praze, renomovaný specialista na morfologii, systematiku a ekologii skupiny Oligochaeta (pro vědu popsal 88 nových druhů), odborník i na další skupiny bezobratlých – I. díl Klíče zvířeny ČSR (1954) nejen editoval, ale sepsal i některé kapitoly – a věnoval se též ichtyologii (mj. spoluautor Klíče našich ryb, 1953). V obecné limnologii se zaměřil na bentickou faunu tatranských jezer, podle níž zavedl jejich typologii. Především však založil brněnskou hydrobiologickou školu, orientovanou na výzkum tekoucích vod a údolních nádrží, čímž určil směřování pracoviště na desítky let dopředu.`
  },
  zelinka: {
    name: `RNDr. Miloš Zelinka, CSc.`,
    date: `*15. 5. 1925 ve Vsetíně, †31. 8. 2010 v Brně`,
    description: `Český limnolog a zoolog, absolvent PřF MU, žák S. Hraběte, pracoval nejprve ve VÚV TGM, roku 1965 přešel na katedru zoologie PřF MU v Brně. Zpočátku studoval vodárenské nádrže a organické znečištění tekoucích vod, vždy prosazoval týmovou spolupráci hydrochemiků, zoologů a algologů, patřil k průkopníkům metod hodnocení jakosti vod dle saprobity a zavedení této metodiky do vodohospodářské praxe. Spoluautor první učebnice aplikované Hydrobiologie pro vodohospodáře (Zelinka a Sládeček, 1964). Celoživotně se věnoval též řádu jepic, unikátní byly mj. jeho práce o produkci jepic v pstruhových potocích.`
  },
  losos: {
    name: `RNDr. Bohumil Losos, CSc.`,
    date: `*2. 10. 1926 ve Velké Bíteši , †10. 9. 2002 v Brně`,
    description: `Brněnský hydrobiolog a ichtyolog, absolvent PřF MU, žák S. Hraběte, dlouholetý správce Hydrobiologické stanice VŠZ v Lednici (1951–1968) a poté pedagog PřF MU v Brně. Věnoval se ekologii a taxonomii pakomárů (např. Klíč k určení larev pakomárovitých, 1996), studiu pstruhových a parmových úseků toků (jejich produkci, znečistění a kolísání průtoku) i aplikovanému výzkumu potravy ryb, vlivu hnojení či toxicity herbicidů. Spoluautor první české učebnice Ekologie živočichů (1984).`
  },
  kubicek: {
    name: `Prof. RNDr. František Kubíček, CSc.`,
    date: `*8. 4. 1929 v Hradci nad Moravicí`,
    description: `Významný český limnolog, absolvent biologie a geografie, dlouholetý pedagog a emeritní profesor PřF MU v Brně. Žák S. Hraběte a jeden z nejvýznamnějších představitelů brněnské hydrobiologické školy, spoluzakladatel a dlouholetý vedoucí hydrobiologického oddělení. V rámci IBP se s celým týmem zapojil do výzkumu produkčních poměrů pstruhových toků, později se věnoval zejména studiu řek ovlivněných údolními nádržemi. Jeho široký záběr jej často přivedl take ke studiu hydrobiologických problémů vodohospodářské praxe: např. limnologie údolních nádrží a jejich oživení, produkčních poměrů v čistých a znečištěných tocích, hodnocení jakosti povrchových vod, vlivu regulací a minimálních průtoků, zabýval se i metodikou odběru vzorků a jejich zpracováním. Spoluinicioval také sérii konferencí Říční dno (River Bottom). Především však byl vynikajícím, přátelským a oblíbeným pedagogem s velkou odbornou i morální autoritou a s nezaměnitelným smyslem pro humor.`
  },
  opravilova: {
    name: `Doc. RNDr. Věra Opravilová, CSc.`,
    date: `*9. 11. 1934 v Olomouci`,
    description: `Zooložka a hydrobioložka, žačka S. Hraběte, absolventka a dlouholetá pedagožka PřF MU v Brně. Věnovala se převážně limnologii tekoucích vod, specializovala se zejména na vodní bezobratlé mikroskopických rozměrů – např. krytenky (Testaceolobosia), nálevníky (Ciliophora), slunivky (Heliozoa), vířníky (Rotifera), břichobrvky (Gastrotricha) či želvušky (Tardigrada), jejichž determinaci donedávna, i v důchodovém věku, zajišťovala.`
  }
}

const History = () => {
  return (
    <Layout>
      <>
        <HistoryBox history={history.hrabe} img={S_Hrabe} />
        <HistoryBox history={history.zelinka} img={B_Zelinka} reverse />
        <HistoryBox history={history.losos} img={M_Losos} />
        <HistoryBox history={history.kubicek} img={F_Kubicek} reverse />
        <HistoryBox history={history.opravilova} reverse />
      </>
    </Layout>
  )
}

History.propTypes = {}

export default History

