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
        onClick={handleClick} href="../instructions/artroplevra-71.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/71.jpg"
          width="200"
          height="85"
          vspace="58"
        /><br /><big>Артроплевра</big></a
      ><a
        onClick={handleClick} href="../instructions/godzilla-72.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/72.jpg"
          width="200"
          height="144"
          vspace="28"
        /><br /><big>Годзилла</big></a
      ><a
        onClick={handleClick} href="../instructions/golova-dinozavra-73.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/73.jpg"
          width="196"
          height="200"
        /><br /><big>Голова динозавра</big></a
      ><a
        onClick={handleClick} href="../instructions/dimetrodon-59.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/59.jpg"
          width="200"
          height="169"
          vspace="16"
        /><br /><big>Диметродон</big></a
      ><a
        onClick={handleClick} href="../instructions/dinozavr-492.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/492.jpg"
          width="200"
          height="127"
          vspace="37"
        /><br /><big>Динозавр</big></a
      ><a
        onClick={handleClick} href="../instructions/zauropod-60.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/60.jpg"
          width="200"
          height="149"
          vspace="26"
        /><br /><big>Зауропод</big></a
      ><a
        onClick={handleClick} href="../instructions/zauropod-75.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/75.png"
          width="200"
          height="130"
          vspace="35"
        /><br /><big>Зауропод</big></a
      ><a
        onClick={handleClick} href="../instructions/meganevra-65.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/65.jpg"
          width="200"
          height="167"
          vspace="17"
        /><br /><big>Меганевра</big></a
      ><a
        onClick={handleClick} href="../instructions/miolaniya-67.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/67.jpg"
          width="200"
          height="152"
          vspace="24"
        /><br /><big>Миолания</big></a
      ><a
        onClick={handleClick} href="../instructions/neizvestnyi-dinozavr-69.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/69.jpg"
          width="200"
          height="126"
          vspace="37"
        /><br /><big>Неизвестный динозавр</big>
        <div className="rem">64 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/parazaurolof-64.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/64.jpg"
          width="200"
          height="122"
          vspace="39"
        /><br /><big>Паразауролоф</big></a
      ><a
        onClick={handleClick} href="../instructions/pleziozavr-61.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/61.jpg"
          width="200"
          height="114"
          vspace="43"
        /><br /><big>Плезиозавр</big></a
      ><a
        onClick={handleClick} href="../instructions/pteranodon-63.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/63.jpg"
          width="200"
          height="132"
          vspace="34"
        /><br /><big>Птеранодон</big></a
      ><a
        onClick={handleClick} href="../instructions/pterodaktil-77.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/77.jpg"
          width="200"
          height="133"
          vspace="34"
        /><br /><big>Птеродактиль</big></a
      ><a
        onClick={handleClick} href="../instructions/pterodaktil-78.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/78.jpg"
          width="200"
          height="143"
          vspace="29"
        /><br /><big>Птеродактиль</big></a
      ><a
        onClick={handleClick} href="../instructions/stegozavr-62.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/62.jpg"
          width="200"
          height="104"
          vspace="48"
        /><br /><big>Стегозавр</big></a
      ><a
        onClick={handleClick} href="../instructions/tehnozavr-70.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/70.jpg"
          width="200"
          height="176"
          vspace="12"
        /><br /><big>Технозавр</big></a
      ><a
        onClick={handleClick} href="../instructions/tiranozavr-68.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/68.jpg"
          width="200"
          height="128"
          vspace="36"
        /><br /><big>Тиранозавр</big></a
      ><a
        onClick={handleClick} href="../instructions/tiranozavr-79.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/79.jpg"
          width="200"
          height="143"
          vspace="29"
        /><br /><big>Тиранозавр</big>
        <div className="rem">146 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/tritseratops-66.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/66.jpg"
          width="200"
          height="149"
          vspace="26"
        /><br /><big>Трицератопс</big></a
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
