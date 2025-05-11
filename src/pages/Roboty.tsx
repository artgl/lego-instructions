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
        onClick={handleClick} href="../instructions/at-at-191.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/191.jpg"
          width="200"
          height="138"
          vspace="31"
        /><br /><big>AT-AT</big></a
      ><a
        onClick={handleClick} href="../instructions/at-st-192.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/192.jpg"
          width="137"
          height="200"
        /><br /><big>AT-ST</big></a
      ><a
        onClick={handleClick} href="../instructions/at-st-193.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/193.jpg"
          width="95"
          height="200"
        /><br /><big>AT-ST</big></a
      ><a
        onClick={handleClick} href="../instructions/r2d2-194.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/194.jpg"
          width="173"
          height="200"
        /><br /><big>R2D2</big></a
      ><a
        onClick={handleClick} href="../instructions/r2d2-195.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/195.jpg"
          width="160"
          height="200"
        /><br /><big>R2D2</big></a
      ><a
        onClick={handleClick} href="../instructions/android-196.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/196.jpg"
          width="166"
          height="200"
        /><br /><big>Андроид</big></a
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
        onClick={handleClick} href="../instructions/annigilyator-15.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/15.jpg"
          width="197"
          height="200"
        /><br /><big>Аннигилятор</big></a
      ><a
        onClick={handleClick} href="../instructions/valli-4.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/4.jpg"
          width="200"
          height="174"
          vspace="13"
        /><br /><big>Валли</big>
        <div className="rem">107 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/valli-424.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/424.jpg"
          width="198"
          height="200"
        /><br /><big>Валли</big></a
      ><a
        onClick={handleClick} href="../instructions/verni-37.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/37.jpg"
          width="168"
          height="200"
        /><br /><big>Верни</big></a
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
        onClick={handleClick} href="../instructions/droideka-197.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/197.jpg"
          width="158"
          height="200"
        /><br /><big>Дройдека</big></a
      ><a
        onClick={handleClick} href="../instructions/zheleznyi-chelovek-526.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/526.jpg"
          width="139"
          height="200"
        /><br /><big>Железный человек</big></a
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
        onClick={handleClick} href="../instructions/robot-atlas-427.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/427.jpg"
          width="127"
          height="200"
        /><br /><big>Робот "Атлас"</big></a
      ><a
        onClick={handleClick} href="../instructions/robot-spot-428.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/428.jpg"
          width="200"
          height="165"
          vspace="18"
        /><br /><big>Робот "Спот"</big></a
      ><a
        onClick={handleClick} href="../instructions/robot-gitarist-38.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/38.jpg"
          width="133"
          height="200"
        /><br /><big>Робот-гитарист</big>
        <div className="rem">192 детали</div></a
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
        onClick={handleClick} href="../instructions/robot-shpion-460.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/460.png"
          width="113"
          height="200"
        /><br /><big>Робот-шпион</big></a
      ><a
        onClick={handleClick} href="../instructions/sumasshedshiy-musorschik-36.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/36.jpg"
          width="200"
          height="192"
          vspace="4"
        /><br /><big>Сумасшедший мусорщик</big>
        <div className="rem">86 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/tankbot-230.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/230.jpg"
          width="200"
          height="178"
          vspace="11"
        /><br /><big>Танкбот</big></a
      ><a
        onClick={handleClick} href="../instructions/tyanuschiy-robot-467.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/467.png"
          width="200"
          height="120"
          vspace="40"
        /><br /><big>Тянущий робот</big></a
      ><a
        onClick={handleClick} href="../instructions/shagauschiy-robot-16.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/16.jpg"
          width="191"
          height="200"
        /><br /><big>Шагающий робот</big></a
      ><a
        onClick={handleClick} href="../instructions/shagauschiy-robot-17.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/17.jpg"
          width="156"
          height="200"
        /><br /><big>Шагающий робот</big></a
      ><a
        onClick={handleClick} href="../instructions/shagauschiy-robot-18.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/18.jpg"
          width="187"
          height="200"
        /><br /><big>Шагающий робот</big></a
      ><a
        onClick={handleClick} href="../instructions/shagauschiy-robot-22.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/22.jpg"
          width="174"
          height="200"
        /><br /><big>Шагающий робот</big></a
      ><a
        onClick={handleClick} href="../instructions/shagauschiy-robot-24.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/24.jpg"
          width="104"
          height="200"
        /><br /><big>Шагающий робот</big>
        <div className="rem">303 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/shagauschiy-robot-42.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/42.jpg"
          width="187"
          height="200"
        /><br /><big>Шагающий робот</big>
        <div className="rem">61 деталь</div></a
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
