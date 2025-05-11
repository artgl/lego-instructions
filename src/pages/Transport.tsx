import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import handleClick from '../HandleClick';

export default (): React.FC => {

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
        onClick={handleClick} href="../instructions/avtobus-270.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/270.jpg"
          width="200"
          height="159"
          vspace="21"
        /><br /><big>Автобус</big></a
      ><a
        onClick={handleClick} href="../instructions/avtobus-271.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/271.jpg"
          width="200"
          height="161"
          vspace="20"
        /><br /><big>Автобус</big></a
      ><a
        onClick={handleClick} href="../instructions/avtobus-272.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/272.jpg"
          width="200"
          height="126"
          vspace="37"
        /><br /><big>Автобус</big></a
      ><a
        onClick={handleClick} href="../instructions/veselyi-avtopoezd-475.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/475.jpg"
          width="200"
          height="175"
          vspace="13"
        /><br /><big>Весёлый автопоезд</big></a
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
        onClick={handleClick} href="../instructions/lokomotiv-244.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/244.jpg"
          width="200"
          height="149"
          vspace="26"
        /><br /><big>Локомотив</big></a
      ><a
        onClick={handleClick} href="../instructions/monorels-245.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/245.jpg"
          width="200"
          height="128"
          vspace="36"
        /><br /><big>Монорельс</big></a
      ><a
        onClick={handleClick} href="../instructions/monorels-246.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/246.jpg"
          width="200"
          height="177"
          vspace="12"
        /><br /><big>Монорельс</big></a
      ><a
        onClick={handleClick} href="../instructions/novogodniy-parovoz-248.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/248.jpg"
          width="200"
          height="90"
          vspace="55"
        /><br /><big>Новогодний паровоз</big></a
      ><a
        onClick={handleClick} href="../instructions/skorostnoi-poezd-32.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/32.jpg"
          width="200"
          height="193"
          vspace="4"
        /><br /><big>Скоростной поезд</big></a
      ><a
        onClick={handleClick} href="../instructions/trolleibus-300.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/300.jpg"
          width="195"
          height="200"
        /><br /><big>Троллейбус</big></a
      ><a
        onClick={handleClick} href="../instructions/trolleibus-301.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/301.jpg"
          width="187"
          height="200"
        /><br /><big>Троллейбус</big></a
      ><a
        onClick={handleClick} href="../instructions/funikuler-269.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/269.jpg"
          width="153"
          height="200"
        /><br /><big>Фуникулёр</big></a
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
