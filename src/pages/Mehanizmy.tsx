import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useIonLoading } from '@ionic/react';
import handleClick1 from '../HandleClick';

export default (): React.FC => {

  const [presentLoader, dismissLoader] = useIonLoading();
  let handleClick = (e) => handleClick1(e, presentLoader, dismissLoader);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <center><IonTitle>Инструкции для Lego WeDo 2.0.</IonTitle></center>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
    <center>
    <div>
      <a
        onClick={handleClick} href="../instructions/avtomaticheskie-vorota-25.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/25.jpg"
          width="200"
          height="170"
          vspace="15"
        /><br /><big>Автоматические ворота</big></a
      ><a
        onClick={handleClick} href="../instructions/avtomaticheskie-vorota-362.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/362.jpg"
          width="200"
          height="107"
          vspace="47"
        /><br /><big>Автоматические ворота</big>
        <div className="rem">260 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/angel-364.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/364.jpg"
          width="200"
          height="163"
          vspace="19"
        /><br /><big>Ангел</big></a
      ><a
        onClick={handleClick} href="../instructions/android-363.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/363.jpg"
          width="200"
          height="176"
          vspace="12"
        /><br /><big>Андроид</big>
        <div className="rem">69 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/bankomat-367.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/367.jpg"
          width="200"
          height="120"
          vspace="40"
        /><br /><big>Банкомат</big></a
      ><a
        onClick={handleClick} href="../instructions/bankomat-368.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/368.jpg"
          width="198"
          height="200"
        /><br /><big>Банкомат</big></a
      ><a
        onClick={handleClick} href="../instructions/benzopila-352.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/352.png"
          width="200"
          height="141"
          vspace="30"
        /><br /><big>Бензопила</big></a
      ><a
        onClick={handleClick} href="../instructions/bespoleznaya-mashinka-369.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/369.jpg"
          width="200"
          height="155"
          vspace="23"
        /><br /><big>Бесполезная машинка</big></a
      ><a
        onClick={handleClick} href="../instructions/beshennye-fanaty-371.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/371.jpg"
          width="200"
          height="194"
          vspace="3"
        /><br /><big>Бешенные фанаты</big></a
      ><a
        onClick={handleClick} href="../instructions/beshennye-fanaty-372.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/372.jpg"
          width="200"
          height="186"
          vspace="7"
        /><br /><big>Бешенные фанаты</big></a
      ><a
        onClick={handleClick} href="../instructions/bilka-89.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/89.jpg"
          width="200"
          height="148"
          vspace="26"
        /><br /><big>Билка</big></a
      ><a
        onClick={handleClick} href="../instructions/bormashina-90.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/90.png"
          width="195"
          height="200"
        /><br /><big>Бормашина</big></a
      ><a
        onClick={handleClick} href="../instructions/velosiped-3-h-kolesnyi-518.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/518.jpg"
          width="200"
          height="157"
          vspace="22"
        /><br /><big>Велосипед 3-х колёсный</big>
        <div className="rem">35 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/ventilyator-375.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/375.jpg"
          width="153"
          height="200"
        /><br /><big>Вентилятор</big></a
      ><a
        onClick={handleClick} href="../instructions/ventilyator-376.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/376.jpg"
          width="91"
          height="200"
        /><br /><big>Вентилятор</big></a
      ><a
        onClick={handleClick} href="../instructions/ventilyator-379.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/379.jpg"
          width="139"
          height="200"
        /><br /><big>Вентилятор</big></a
      ><a
        onClick={handleClick} href="../instructions/ventilyator-404.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/404.jpg"
          width="200"
          height="121"
          vspace="40"
        /><br /><big>Вентилятор</big></a
      ><a
        onClick={handleClick} href="../instructions/veselyi-robot-377.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/377.jpg"
          width="200"
          height="139"
          vspace="31"
        /><br /><big>Весёлый робот</big></a
      ><a
        onClick={handleClick} href="../instructions/vesy-378.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/378.jpg"
          width="200"
          height="166"
          vspace="17"
        /><br /><big>Весы</big></a
      ><a
        onClick={handleClick} href="../instructions/volchok-380.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/380.jpg"
          width="200"
          height="156"
          vspace="22"
        /><br /><big>Волчок</big></a
      ><a
        onClick={handleClick} href="../instructions/gitara-381.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/381.jpg"
          width="108"
          height="200"
        /><br /><big>Гитара</big></a
      ><a
        onClick={handleClick} href="../instructions/dzhoistik-439.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/439.jpg"
          width="200"
          height="198"
          vspace="1"
        /><br /><big>Джойстик</big>
        <div className="rem">31 деталь</div></a
      ><a
        onClick={handleClick} href="../instructions/zheleznodorozhnyi-pogruzchik-247.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/247.jpg"
          width="200"
          height="95"
          vspace="53"
        /><br /><big>Железнодорожный погрузчик</big></a
      ><a
        onClick={handleClick} href="../instructions/zavarschik-chaya-385.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/385.jpg"
          width="108"
          height="200"
        /><br /><big>Заварщик чая</big></a
      ><a
        onClick={handleClick} href="../instructions/zemletryasenie-442.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/442.png"
          width="200"
          height="106"
          vspace="47"
        /><br /><big>Землетрясение</big></a
      ><a
        onClick={handleClick} href="../instructions/igrovoi-pistolet-361.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/361.png"
          width="200"
          height="144"
          vspace="28"
        /><br /><big>Игровой пистолет</big></a
      ><a
        onClick={handleClick} href="../instructions/kanatnaya-doroga-267.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/267.jpg"
          width="200"
          height="191"
          vspace="5"
        /><br /><big>Канатная дорога</big></a
      ><a
        onClick={handleClick} href="../instructions/kanatnaya-doroga-268.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/268.jpg"
          width="166"
          height="200"
        /><br /><big>Канатная дорога</big></a
      ><a
        onClick={handleClick} href="../instructions/karusel-203.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/203.jpg"
          width="200"
          height="179"
          vspace="11"
        /><br /><big>Карусель</big></a
      ><a
        onClick={handleClick} href="../instructions/karusel-204.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/204.jpg"
          width="200"
          height="179"
          vspace="11"
        /><br /><big>Карусель</big></a
      ><a
        onClick={handleClick} href="../instructions/karusel-205.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/205.jpg"
          width="200"
          height="199"
          vspace="1"
        /><br /><big>Карусель</big></a
      ><a
        onClick={handleClick} href="../instructions/karusel-206.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/206.jpg"
          width="192"
          height="200"
        /><br /><big>Карусель</big></a
      ><a
        onClick={handleClick} href="../instructions/kassa-387.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/387.jpg"
          width="200"
          height="119"
          vspace="41"
        /><br /><big>Касса</big></a
      ><a
        onClick={handleClick} href="../instructions/kassa-410.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/410.jpg"
          width="200"
          height="145"
          vspace="28"
        /><br /><big>Касса</big></a
      ><a
        onClick={handleClick} href="../instructions/katapulta-262.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/262.jpg"
          width="200"
          height="198"
          vspace="1"
        /><br /><big>Катапульта</big></a
      ><a
        onClick={handleClick} href="../instructions/katapulta-263.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/263.jpg"
          width="175"
          height="200"
        /><br /><big>Катапульта</big></a
      ><a
        onClick={handleClick} href="../instructions/katapulta-264.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/264.jpg"
          width="200"
          height="123"
          vspace="39"
        /><br /><big>Катапульта</big>
        <div className="rem">186 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/katapulta-265.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/265.jpg"
          width="179"
          height="200"
        /><br /><big>Катапульта</big></a
      ><a
        onClick={handleClick} href="../instructions/katapulta-266.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/266.png"
          width="200"
          height="120"
          vspace="40"
        /><br /><big>Катапульта</big></a
      ><a
        onClick={handleClick} href="../instructions/katapulta-dlya-ptits-485.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/485.jpg"
          width="200"
          height="158"
          vspace="21"
        /><br /><big>Катапульта для птиц</big></a
      ><a
        onClick={handleClick} href="../instructions/korobka-peredach-403.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/403.jpg"
          width="200"
          height="114"
          vspace="43"
        /><br /><big>Коробка передач</big></a
      ><a
        onClick={handleClick} href="../instructions/kosmicheskaya-gonka-234.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/234.jpg"
          width="200"
          height="127"
          vspace="37"
        /><br /><big>Космическая гонка</big></a
      ><a
        onClick={handleClick} href="../instructions/kpp-388.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/388.png"
          width="200"
          height="174"
          vspace="13"
        /><br /><big>КПП</big></a
      ><a
        onClick={handleClick} href="../instructions/kripper-39.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/39.jpg"
          width="170"
          height="200"
        /><br /><big>Криппер</big></a
      ><a
        onClick={handleClick} href="../instructions/lift-391.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/391.jpg"
          width="120"
          height="200"
        /><br /><big>Лифт</big></a
      ><a
        onClick={handleClick} href="../instructions/lift-392.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/392.jpg"
          width="172"
          height="200"
        /><br /><big>Лифт</big></a
      ><a
        onClick={handleClick} href="../instructions/lift-426.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/426.jpg"
          width="170"
          height="200"
        /><br /><big>Лифт</big></a
      ><a
        onClick={handleClick} href="../instructions/lokator-243.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/243.jpg"
          width="195"
          height="200"
        /><br /><big>Локатор</big></a
      ><a
        onClick={handleClick} href="../instructions/manipulyator-353.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/353.jpg"
          width="162"
          height="200"
        /><br /><big>Манипулятор</big></a
      ><a
        onClick={handleClick} href="../instructions/manipulyator-354.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/354.jpg"
          width="200"
          height="192"
          vspace="4"
        /><br /><big>Манипулятор</big></a
      ><a
        onClick={handleClick} href="../instructions/melnitsa-393.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/393.jpg"
          width="183"
          height="200"
        /><br /><big>Мельница</big></a
      ><a
        onClick={handleClick} href="../instructions/mikser-91.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/91.png"
          width="200"
          height="152"
          vspace="24"
        /><br /><big>Миксер</big></a
      ><a
        onClick={handleClick} href="../instructions/model-solnechnoi-sistemy-365.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/365.jpg"
          width="200"
          height="147"
          vspace="27"
        /><br /><big>Модель солнечной системы</big></a
      ><a
        onClick={handleClick} href="../instructions/neftyanoi-nasos-397.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/397.jpg"
          width="200"
          height="161"
          vspace="20"
        /><br /><big>Нефтяной насос</big></a
      ><a
        onClick={handleClick} href="../instructions/neftyanoi-nasos-398.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/398.jpg"
          width="197"
          height="200"
        /><br /><big>Нефтяной насос</big></a
      ><a
        onClick={handleClick} href="../instructions/penalti-55.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/55.jpg"
          width="200"
          height="174"
          vspace="13"
        /><br /><big>Пенальти</big></a
      ><a
        onClick={handleClick} href="../instructions/potentsiometr-400.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/400.jpg"
          width="200"
          height="125"
          vspace="38"
        /><br /><big>Потенциометр</big></a
      ><a
        onClick={handleClick} href="../instructions/press-92.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/92.jpg"
          width="200"
          height="145"
          vspace="28"
        /><br /><big>Пресс</big></a
      ><a
        onClick={handleClick} href="../instructions/printer-93.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/93.png"
          width="200"
          height="164"
          vspace="18"
        /><br /><big>Принтер</big></a
      ><a
        onClick={handleClick} href="../instructions/pugalo-401.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/401.jpg"
          width="145"
          height="200"
        /><br /><big>Пугало</big></a
      ><a
        onClick={handleClick} href="../instructions/radar-227.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/227.jpg"
          width="130"
          height="200"
        /><br /><big>Радар</big></a
      ><a
        onClick={handleClick} href="../instructions/radar-507.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/507.jpg"
          width="200"
          height="192"
          vspace="4"
        /><br /><big>Радар</big>
        <div className="rem">18 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/radio-402.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/402.jpg"
          width="182"
          height="200"
        /><br /><big>Радио</big></a
      ><a
        onClick={handleClick} href="../instructions/robo-ruka-355.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/355.jpg"
          width="200"
          height="129"
          vspace="36"
        /><br /><big>Робо-рука</big>
        <div className="rem">126 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/robo-ruka-356.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/356.jpg"
          width="200"
          height="192"
          vspace="4"
        /><br /><big>Робо-рука</big></a
      ><a
        onClick={handleClick} href="../instructions/robo-ruka-357.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/357.jpg"
          width="200"
          height="112"
          vspace="44"
        /><br /><big>Робо-рука</big></a
      ><a
        onClick={handleClick} href="../instructions/robo-ruka-358.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/358.jpg"
          width="200"
          height="126"
          vspace="37"
        /><br /><big>Робо-рука</big></a
      ><a
        onClick={handleClick} href="../instructions/robo-ruka-359.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/359.png"
          width="200"
          height="197"
          vspace="2"
        /><br /><big>Робо-рука</big></a
      ><a
        onClick={handleClick} href="../instructions/rychazhnyi-mehanizm-407.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/407.jpg"
          width="200"
          height="145"
          vspace="28"
        /><br /><big>Рычажный механизм</big>
        <div className="rem">59 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/sverlilnyi-stanok-94.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/94.png"
          width="200"
          height="163"
          vspace="19"
        /><br /><big>Сверлильный станок</big></a
      ><a
        onClick={handleClick} href="../instructions/svetofor-i-shlagbaum-389.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/389.jpg"
          width="200"
          height="94"
          vspace="53"
        /><br /><big>Светофор и шлагбаум</big></a
      ><a
        onClick={handleClick} href="../instructions/seif-409.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/409.jpg"
          width="200"
          height="157"
          vspace="22"
        /><br /><big>Сейф</big></a
      ><a
        onClick={handleClick} href="../instructions/signalizatsiya-463.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/463.jpg"
          width="200"
          height="117"
          vspace="42"
        /><br /><big>Сигнализация</big></a
      ><a
        onClick={handleClick} href="../instructions/sortirovschik-detalei-411.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/411.jpg"
          width="132"
          height="200"
        /><br /><big>Сортировщик деталей</big></a
      ><a
        onClick={handleClick} href="../instructions/spinner-412.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/412.jpg"
          width="200"
          height="136"
          vspace="32"
        /><br /><big>Спиннер</big>
        <div className="rem">70 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/stiv-41.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/41.jpg"
          width="188"
          height="200"
        /><br /><big>Стив</big></a
      ><a
        onClick={handleClick} href="../instructions/strelyauschaya-pushka-81.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/81.jpg"
          width="168"
          height="200"
        /><br /><big>Стреляющая пушка</big></a
      ><a
        onClick={handleClick} href="../instructions/strelyauschiy-puskatel-80.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/80.jpg"
          width="200"
          height="150"
          vspace="25"
        /><br /><big>Стреляющий пускатель</big></a
      ><a
        onClick={handleClick} href="../instructions/telegraf-416.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/416.jpg"
          width="200"
          height="165"
          vspace="18"
        /><br /><big>Телеграф</big></a
      ><a
        onClick={handleClick} href="../instructions/tokarnyi-stanok-95.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/95.jpg"
          width="200"
          height="95"
          vspace="53"
        /><br /><big>Токарный станок</big></a
      ><a
        onClick={handleClick} href="../instructions/turbo-ventilyator-34.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/34.jpg"
          width="141"
          height="200"
        /><br /><big>Турбо-вентилятор</big></a
      ><a
        onClick={handleClick} href="../instructions/udochka-360.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/360.png"
          width="200"
          height="175"
          vspace="13"
        /><br /><big>Удочка</big></a
      ><a
        onClick={handleClick} href="../instructions/udochka-530.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/530.jpg"
          width="200"
          height="115"
          vspace="43"
        /><br /><big>Удочка</big></a
      ><a
        onClick={handleClick} href="../instructions/funikuler-269.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/269.jpg"
          width="153"
          height="200"
        /><br /><big>Фуникулёр</big></a
      ><a
        onClick={handleClick} href="../instructions/shveinaya-mashina-96.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/96.jpg"
          width="197"
          height="200"
        /><br /><big>Швейная машина</big></a
      ><a
        onClick={handleClick} href="../instructions/shluz-471.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/471.png"
          width="200"
          height="112"
          vspace="44"
        /><br /><big>Шлюз</big>
        <div className="rem">62 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/yaschik-422.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/422.jpg"
          width="196"
          height="200"
        /><br /><big>Ящик</big></a
      ><a
        onClick={handleClick} href="../instructions/yaschik-423.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/423.jpg"
          width="200"
          height="175"
          vspace="13"
        /><br /><big>Ящик</big></a
      >

    </div>
    <hr />
    <p>
      <a href="../index.html">Вернуться в каталог (всего 527 инструкций).</a>
    </p>
      </center>
      </IonContent>
    </IonPage>
  );
};
