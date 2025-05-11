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
        onClick={handleClick} href="../instructions/annigilyator-15.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/15.jpg"
          width="197"
          height="200"
        /><br /><big>Аннигилятор</big></a
      ><a
        onClick={handleClick} href="../instructions/bolotohod-19.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/19.jpg"
          width="175"
          height="200"
        /><br /><big>Болотоход</big></a
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
        onClick={handleClick} href="../instructions/chelovek-s-telegoi-20.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/20.jpg"
          width="191"
          height="200"
        /><br /><big>Человек с телегой</big></a
      ><a
        onClick={handleClick} href="../instructions/shagauschee-suschestvo-23.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/23.jpg"
          width="200"
          height="176"
          vspace="12"
        /><br /><big>Шагающее существо</big></a
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
      ><a
        onClick={handleClick} href="../instructions/shagauschiy-chelovek-21.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/21.jpg"
          width="200"
          height="186"
          vspace="7"
        /><br /><big>Шагающий человек</big></a
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
