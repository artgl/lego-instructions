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
        onClick={handleClick} href="../instructions/babochka-510.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/510.jpg"
          width="200"
          height="108"
          vspace="46"
        /><br /><big>Бабочка</big>
        <div className="rem">25 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/buldog-504.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/504.jpg"
          width="200"
          height="142"
          vspace="29"
        /><br /><big>Бульдог</big>
        <div className="rem">34 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/byk-505.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/505.jpg"
          width="169"
          height="200"
        /><br /><big>Бык</big>
        <div className="rem">19 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/betmobil-522.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/522.jpg"
          width="200"
          height="139"
          vspace="31"
        /><br /><big>Бэтмобиль</big>
        <div className="rem">50 деталей</div></a
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
        onClick={handleClick} href="../instructions/vertolet-496.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/496.jpg"
          width="200"
          height="143"
          vspace="29"
        /><br /><big>Вертолёт</big>
        <div className="rem">30 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/dzhip-523.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/523.jpg"
          width="200"
          height="173"
          vspace="14"
        /><br /><big>Джип</big>
        <div className="rem">45 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/krokodil-497.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/497.jpg"
          width="200"
          height="80"
          vspace="60"
        /><br /><big>Крокодил</big>
        <div className="rem">18 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/loshadka-506.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/506.jpg"
          width="170"
          height="200"
        /><br /><big>Лошадка</big>
        <div className="rem">25 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/lyagushka-498.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/498.jpg"
          width="200"
          height="97"
          vspace="52"
        /><br /><big>Лягушка</big>
        <div className="rem">29 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/motoroller-519.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/519.jpg"
          width="200"
          height="181"
          vspace="10"
        /><br /><big>Мотороллер</big>
        <div className="rem">44 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/mototsikl-517.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/517.jpg"
          width="200"
          height="166"
          vspace="17"
        /><br /><big>Мотоцикл</big>
        <div className="rem">43 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/muha-511.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/511.jpg"
          width="200"
          height="121"
          vspace="40"
        /><br /><big>Муха</big>
        <div className="rem">26 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/osminog-499.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/499.jpg"
          width="200"
          height="120"
          vspace="40"
        /><br /><big>Осьминог</big>
        <div className="rem">50 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/panda-503.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/503.jpg"
          width="137"
          height="200"
        /><br /><big>Панда</big>
        <div className="rem">15 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/parusnik-508.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/508.jpg"
          width="163"
          height="200"
        /><br /><big>Парусник</big>
        <div className="rem">26 деталей</div></a
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
        onClick={handleClick} href="../instructions/retromobil-524.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/524.jpg"
          width="200"
          height="157"
          vspace="22"
        /><br /><big>Ретромобиль</big>
        <div className="rem">59 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/rybka-500.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/500.jpg"
          width="200"
          height="93"
          vspace="54"
        /><br /><big>Рыбка</big>
        <div className="rem">15 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/sova-514.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/514.jpg"
          width="155"
          height="200"
        /><br /><big>Сова</big>
        <div className="rem">20 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/strekoza-512.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/512.jpg"
          width="200"
          height="129"
          vspace="36"
        /><br /><big>Стрекоза</big>
        <div className="rem">46 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/strekoza-513.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/513.jpg"
          width="200"
          height="98"
          vspace="51"
        /><br /><big>Стрекоза</big>
        <div className="rem">25 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/traktor-525.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/525.jpg"
          width="200"
          height="198"
          vspace="1"
        /><br /><big>Трактор</big>
        <div className="rem">35 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/tritsikl-520.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/520.jpg"
          width="200"
          height="176"
          vspace="12"
        /><br /><big>Трицикл</big>
        <div className="rem">28 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/tukan-515.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/515.jpg"
          width="200"
          height="122"
          vspace="39"
        /><br /><big>Тукан</big>
        <div className="rem">32 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/ulitka-501.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/501.jpg"
          width="200"
          height="152"
          vspace="24"
        /><br /><big>Улитка</big>
        <div className="rem">21 деталь</div></a
      ><a
        onClick={handleClick} href="../instructions/utka-516.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/516.jpg"
          width="200"
          height="189"
          vspace="6"
        /><br /><big>Утка</big>
        <div className="rem">27 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/cherepaha-502.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/502.jpg"
          width="200"
          height="131"
          vspace="35"
        /><br /><big>Черепаха</big>
        <div className="rem">16 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/chopper-521.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/521.jpg"
          width="200"
          height="177"
          vspace="12"
        /><br /><big>Чоппер</big>
        <div className="rem">42 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/yahta-509.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/509.jpg"
          width="164"
          height="200"
        /><br /><big>Яхта</big>
        <div className="rem">18 деталей</div></a
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
