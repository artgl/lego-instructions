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
        onClick={handleClick} href="../instructions/voin-sumo-97.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/97.jpg"
          width="166"
          height="200"
        /><br /><big>Воин (сумо)</big></a
      ><a
        onClick={handleClick} href="../instructions/gladiator-98.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/98.png"
          width="200"
          height="191"
          vspace="5"
        /><br /><big>Гладиатор</big></a
      ><a
        onClick={handleClick} href="../instructions/dvizhenie-po-linii-107.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/107.jpg"
          width="165"
          height="200"
        /><br /><big>Движение по линии</big></a
      ><a
        onClick={handleClick} href="../instructions/dvizhenie-po-linii-108.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/108.jpg"
          width="200"
          height="148"
          vspace="26"
        /><br /><big>Движение по линии</big></a
      ><a
        onClick={handleClick} href="../instructions/dvuhmotornaya-platforma-101.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/101.jpg"
          width="200"
          height="180"
          vspace="10"
        /><br /><big>Двухмоторная платформа</big></a
      ><a
        onClick={handleClick} href="../instructions/dvuhmotornyi-robot-102.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/102.jpg"
          width="200"
          height="133"
          vspace="34"
        /><br /><big>Двухмоторный робот</big></a
      ><a
        onClick={handleClick} href="../instructions/zigzag-110.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/110.jpg"
          width="183"
          height="200"
        /><br /><big>ЗигЗаг</big></a
      ><a
        onClick={handleClick} href="../instructions/zimniy-issledovatel-103.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/103.jpg"
          width="200"
          height="147"
          vspace="27"
        /><br /><big>Зимний исследователь</big>
        <div className="rem">131 деталь</div></a
      ><a
        onClick={handleClick} href="../instructions/povorachivauschiy-robot-114.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/114.jpg"
          width="187"
          height="200"
        /><br /><big>Поворачивающий робот</big></a
      ><a
        onClick={handleClick} href="../instructions/povoroty-i-liniya-113.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/113.jpg"
          width="200"
          height="185"
          vspace="8"
        /><br /><big>Повороты и линия</big></a
      ><a
        onClick={handleClick} href="../instructions/robot-sumoist-99.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/99.jpg"
          width="200"
          height="125"
          vspace="38"
        /><br /><big>Робот-сумоист</big></a
      ><a
        onClick={handleClick} href="../instructions/robot-sumoist-100.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/100.jpg"
          width="200"
          height="98"
          vspace="51"
        /><br /><big>Робот-сумоист</big></a
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
