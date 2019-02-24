import { Injectable } from '@angular/core';
import { ErettsegiModel } from './erettsegi-model';
import { ErettsegiTipusModel } from './erettsegi-tipus-model';
import { ErettsegiTipusService } from './erettsegi-tipus.service';
import { ErettsegiSzintModel } from './erettsegi-szint-model';
import { ErettsegiSzintService } from './erettsegi-szint.service';
//import { ErettsegiSzoftverModel } from './erettsegi-szoftver-model';
//import { ErettsegiSzoftverModelService } from './erettsegi-szoftver.service';

@Injectable({
  providedIn: 'root'
})
export class ErettsegiService {
  private _erettsegi: ErettsegiModel[];

  constructor(private _erettsegiTipusService: ErettsegiTipusService,
              private _erettsegiSzintService: ErettsegiSzintService ) {
    this._erettsegi = this.getMockData();
  }

  getAllErettsegi() {
    return this._erettsegi.map(erettsegi => {
      return {
        ...erettsegi,
        tipus: this._erettsegiTipusService.getErettsegiTipusById(erettsegi.tipusId),
        szint: this._erettsegiSzintService.getErettsegiSzintById(erettsegi.szintId)
      }
    });
  }

  getErettsegiById(id: number) {
    this._erettsegi = this.getAllErettsegi();
    const e = this._erettsegi.filter(x => x.id === +id);
    return e.length > 0 ? e[0] : new ErettsegiModel(ErettsegiModel.emptyErettsegi);
  }

  update(param: ErettsegiModel) {
    //e-nélkül is megváltozik a kötés [()] miatt a tartalma.
    //de a tananyagban nagyon erőltették.
    this._erettsegi = this._erettsegi
      .map( er => er.id == param.id ? {...param} : er );

    console.log('ErettsegiModel', this.getAllErettsegi());
  }

  create(param: ErettsegiModel) {
    //console.log('param:',param);
    this._erettsegi = [
      ...this._erettsegi,
      {
      ...param,
      id: this.getMaxId()+1,
      }
    ];
    //console.log('erettsegi',this._erettsegi);

  }

  private getMaxId() {
    return this._erettsegi.reduce((x,y) => x.id > y.id?x:y).id;
  }

  private getMockData() {
    return [
      new ErettsegiModel({
      'id': 1,
      'cim': 'Atlétika',
      'leiras': 'Az atlétika a legrégibb, legnagyobb múltú sportág, amely a természetes mozgásokat, a gyaloglást, a futást, az ugrást és a dobást öleli fel. Ebben a feladatban az atlétikai sportágakat bemutató dokumentumot kell elkészítenie az alábbi leírás és minta alapján. Az elkészítéséhez használja fel az ismerteto.txt UTF-8 kódolású szövegállományt!',
      'feladatUrl': 'http://dload.oktatas.educatio.hu/erettsegi/feladatok_2017osz_kozep/k_inf_17okt_fl.pdf',
      'forrasUrl': 'https://www.oktatas.hu/bin/content/dload/erettsegi/feladatok_2017osz_kozep/k_inffor_17okt_fl.zip',
      'video': 'https://www.youtube.com/embed/videoseries?list=PLZrvEtlbdYapyw_5HknWRHfkQuDVfN6DY',
      'megjegyzes': 'Valami ami szeretnék hozzáfűzni...',
      'bejegyzesKeszult': '2019-02-10', //Date
      'erettsegiIdopont': '2017-05-17', //Date
      'tipusId': 1,
      'szintId': 1
      }),
      new ErettsegiModel({
      'id': 2,
      'cim': 'Gumiabroncs',
      'leiras': 'Az autó és a gumiabroncs egymástól elválaszthatatlan technikai találmány. Ebben a feladatban a gumiabroncs történetét bemutató dokumentumot kell elkészítenie az alábbi leírás és minta alapján. Az elkészítéséhez használja fel a gumitortenet.txt, a vulkanizalas.txt és a fajtak.txt UTF-8 kódolású szövegállományt A dokumentumba beszúrandó képek: dunlop.jpg, goodyear.jpg, szerkezet.jpg.',
      'feladatUrl': 'https://www.oktatas.hu/bin/content/dload/erettsegi/feladatok_2018tavasz_kozep/k_inf_18maj_fl.pdf',
      'forrasUrl': 'https://www.oktatas.hu/bin/content/dload/erettsegi/feladatok_2018tavasz_kozep/k_inffor_18maj_fl.zip',
      'video': 'https://www.youtube.com/embed/videoseries?list=PLZrvEtlbdYarDaQDbl3W9DReCbZmV916i',
      'megjegyzes': 'Valami ami szeretnék hozzáfűzni...',
      'bejegyzesKeszult': '2019-02-09', //Date
      'erettsegiIdopont': '2018-05-17', //Date
      'tipusId': 1,
      'szintId': 1
      }),
      new ErettsegiModel({
      'id': 3,
      'cim': 'Balatoni komp',
      'leiras': 'A Balatonon a Szántód és Tihany között járó kompon évente több százezer ember és jármű kel át. Az átkelés csak akkor szünetel, ha befagy a tó. Ebben a feladatban a balatoni kompközlekedést bemutató kétoldalas tájékoztatót kell elkészítenie az alábbi leírás és minta alapján. A tájékoztató elkészítéséhez használja fel a kompszov.txt UTF-8 kódolású szövegállományt!',
      'feladatUrl': 'https://www.oktatas.hu/bin/content/dload/erettsegi/feladatok_2017tavasz_kozep/k_inf_17maj_fl.pdf',
      'forrasUrl': 'https://www.oktatas.hu/bin/content/dload/erettsegi/feladatok_2017tavasz_kozep/k_inffor_17maj_fl.zip',
      'video': 'https://www.youtube.com/embed/videoseries?list=PLZrvEtlbdYarHW3Wh8F0XB0Ayuv0CGST2',
      'megjegyzes': 'Valami ami szeretnék hozzáfűzni...',
      'bejegyzesKeszult': '2019-02-08', //Date
      'erettsegiIdopont': '2017-05-18', //Date
      'tipusId': 1,
      'szintId': 1
      }),
      new ErettsegiModel({
      'id': 4,
      'cim': 'Étlap',
      'leiras': 'Az éttermekben a kínálat jelentős része állandó, amelyet időszakonként helyi specialitásokkal egészítenek ki. A Halász étteremben a halételeket cserélik hetente.',
      'feladatUrl': 'https://dari.oktatas.hu/kir/erettsegi/okev_doc/erettsegi_2013/e_infma_13maj_fl.pdf',
      'forrasUrl': 'http://dari.oktatas.hu/kir/erettsegi/okev_doc/erettsegi_2013/e_infmafor_13maj_fl.zip',
      'video': 'https://www.youtube.com/embed/V_W98YLfwnU',
      'megjegyzes': 'Valami ami szeretnék hozzáfűzni...',
      'bejegyzesKeszult': '2019-02-07', //Date
      'erettsegiIdopont': '2013-05-13', //Date
      'tipusId': 1,
      'szintId': 2
      }),
      new ErettsegiModel({
      'id': 5,
      'cim': 'Halogének',
      'leiras': 'A kémia szakkörre egy diák rövid összefoglalót készít a halogén elemekről. Ebben kell segítenie neki egy bemutató elkészítésével. A prezentáció szövegét a halogenek.txt UTF-8 kódolású szöveges állományban találja. A bemutató elkészítéséhez a következő képeket kell használnia: lombik.png, veszelyes.jpg, fluor.jpg, klor.jpg, brom.jpg és jod.jpg.',
      'feladatUrl': 'http://dload.oktatas.educatio.hu/erettsegi/feladatok_2017osz_kozep/k_inf_17okt_fl.pdf',
      'forrasUrl': 'https://www.oktatas.hu/bin/content/dload/erettsegi/feladatok_2017osz_kozep/k_inffor_17okt_fl.zip',
      'video': 'https://www.youtube.com/embed/videoseries?list=PLZrvEtlbdYaqtG97NL9LSW5S_RJ4M1K56',
      'megjegyzes': 'Valami ami szeretnék hozzáfűzni...',
      'bejegyzesKeszult': '2019-02-09', //Date
      'erettsegiIdopont': '2017-10-25', //Date
      'tipusId': 2,
      'szintId': 1
      }),
      new ErettsegiModel({
      'id': 6,
      'cim': 'Vírusok',
      'leiras': 'A fertőző vírusos betegségek ellen gyakran védőoltásokkal védekezünk. Magyarországon a gyerekek tizenöt hónapos korukban kapják meg az MMR oltást. Az oltás három betegség: a kanyaró, a mumpsz és a rubeola ellen véd. Ezen vírusok rövid bemutatására készítsen egy interaktív bemutatót az alábbi leírás és a minta alapján!',
      'feladatUrl': 'https://www.oktatas.hu/pub_bin/dload/kozoktatas/erettsegi/feladatok2010tavasz/k_info_10maj_fl.pdf',
      'forrasUrl': 'https://www.oktatas.hu/pub_bin/dload/kozoktatas/erettsegi/feladatok2010tavasz/k_infofor_10maj_fl.zip',
      'video': 'https://www.youtube.com/embed/videoseries?list=PLZrvEtlbdYarY7akAXiUN1Wofk3uH-NZ-',
      'megjegyzes': 'Valami ami szeretnék hozzáfűzni...',
      'bejegyzesKeszult': '2019-02-08', //Date
      'erettsegiIdopont': '2010-05-17', //Date
      'tipusId': 2,
      'szintId': 1
      }),
      new ErettsegiModel({
      'id': 7,
      'cim': 'Parlagfű',
      'leiras': 'Az allergiaszezon legveszélyesebb növénye a parlagfű. Pollenjeinek megjelenésére a nyári időszakban kell számítani. Készítsen weblapot a parlagfű és a terjedése elleni védekezés bemutatására a következő minta és leírás szerint! A feladatban két weboldalt és egy képet kell majd elkészítenie.',
      'feladatUrl': 'http://dload.oktatas.educatio.hu/erettsegi/feladatok_2017tavasz_kozep/k_inf_17maj_fl.pdf',
      'forrasUrl': 'https://www.oktatas.hu/bin/content/dload/erettsegi/feladatok_2017tavasz_kozep/k_inffor_17maj_fl.zip',
      'video': 'https://www.youtube.com/embed/videoseries?list=PLZrvEtlbdYaqH3DCQGYhLVaJQRKpccRfj',
      'megjegyzes': 'Valami ami szeretnék hozzáfűzni...',
      'bejegyzesKeszult': '2019-02-10', //Date
      'erettsegiIdopont': '2017-05-18', //Date
      'tipusId': 3,
      'szintId': 1
      }),
      new ErettsegiModel({
      'id': 8,
      'cim': 'Népautók',
      'leiras': 'Az videó elején a 2013. májusi magyar nyelvű érettségi adatbázis-kezelés feladat tipikus problémáiról van szó. A XX. századi technikai fejlődés egyik mozgatója és ugyanakkor eredménye a nagyfokú motorizáció. A folyamat – mennyiségileg – akkor lépett nagyot előre, amikor megjelentek a népautók. Bár neve alapján valójában csak a német Volkswagen „bogár” volt az, de a francia Citroën „kacsa” és az olasz Fiat 500 ugyanolyan fontos lépcső volt az autózás mindennapossá válásában.',
      'feladatUrl': 'https://www.oktatas.hu/kozneveles/erettsegi/feladatsorok_vizsgatargyankent/!DARI_ErettsegiFeladatsorok/oh.php?id=letoltes&tema=erettsegi&f=erettsegi_2014/oktober/e_inf_14okt_fl.pdf',
      'forrasUrl': 'https://www.oktatas.hu/kozneveles/erettsegi/feladatsorok_vizsgatargyankent/!DARI_ErettsegiFeladatsorok/oh.php?id=letoltes&tema=erettsegi&f=erettsegi_2014/oktober/e_inffor_14okt_fl.zip',
      'video': 'https://www.youtube.com/embed/8-ghoHcDOuI',
      'megjegyzes': 'Valami ami szeretnék hozzáfűzni...',
      'bejegyzesKeszult': '2019-02-09', //Date
      'erettsegiIdopont': '2014-10-17', //Date
      'tipusId': 3,
      'szintId': 2
      }),
      new ErettsegiModel({
      'id': 9,
      'cim': 'Szarka',
      'leiras': 'A webszerkesztés feladatot a Microsoft SharePoint Designer 2007 programmal oldottam meg. A képek szerkesztését Paint-ben. Készítsen weblapot a városokban egyre gyakoribb madár, a szarka bemutatására a következő minta és leírás szerint! A feladatban két weboldalt és egy képet kell majd elkészítenie',
      'feladatUrl': 'https://www.oktatas.hu/kozneveles/erettsegi/feladatsorok_vizsgatargyankent/!DARI_ErettsegiFeladatsorok/oh.php?id=letoltes&tema=erettsegi&f=erettsegi_2013/k_inf_13maj_fl.pdf',
      'forrasUrl': 'https://www.oktatas.hu/kozneveles/erettsegi/feladatsorok_vizsgatargyankent/!DARI_ErettsegiFeladatsorok/oh.php?id=letoltes&tema=erettsegi&f=erettsegi_2013/k_inffor_13maj_fl.zip',
      'video': 'https://www.youtube.com/embed/86CQylKlAO8',
      'megjegyzes': 'Valami ami szeretnék hozzáfűzni...',
      'bejegyzesKeszult': '2019-02-09', //Date
      'erettsegiIdopont': '2013-05-21', //Date
      'tipusId': 3,
      'szintId': 1
      })
    ];
  }
}
