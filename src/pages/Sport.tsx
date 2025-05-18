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
        onClick={handleClick} href="../instructions/basket-bot-43.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/43.jpg"
          width="183"
          height="200"
        /><br /><big>Баскет-бот</big></a
      ><a
        onClick={handleClick} href="../instructions/velosipedist-44.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/44.jpg"
          width="189"
          height="200"
        /><br /><big>Велосипедист</big></a
      ><a
        onClick={handleClick} href="../instructions/velosipedist-45.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/45.jpg"
          width="200"
          height="175"
          vspace="13"
        /><br /><big>Велосипедист</big></a
      ><a
        onClick={handleClick} href="../instructions/velosipedisty-382.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/382.jpg"
          width="200"
          height="141"
          vspace="30"
        /><br /><big>Велосипедисты</big></a
      ><a
        onClick={handleClick} href="../instructions/velotrenazher-46.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/46.jpg"
          width="160"
          height="200"
        /><br /><big>Велотренажер</big></a
      ><a
        onClick={handleClick} href="../instructions/vratar-47.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/47.jpg"
          width="200"
          height="119"
          vspace="41"
        /><br /><big>Вратарь</big></a
      ><a
        onClick={handleClick} href="../instructions/vratar-48.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/48.jpg"
          width="200"
          height="114"
          vspace="43"
        /><br /><big>Вратарь</big></a
      ><a
        onClick={handleClick} href="../instructions/vratar-49.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/49.jpg"
          width="200"
          height="138"
          vspace="31"
        /><br /><big>Вратарь</big></a
      ><a
        onClick={handleClick} href="../instructions/vratar-50.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/50.jpg"
          width="200"
          height="157"
          vspace="22"
        /><br /><big>Вратарь</big></a
      ><a
        onClick={handleClick} href="../instructions/gimnast-476.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/476.jpg"
          width="150"
          height="200"
        /><br /><big>Гимнаст</big></a
      ><a
        onClick={handleClick} href="../instructions/golfist-51.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/51.jpg"
          width="142"
          height="200"
        /><br /><big>Гольфист</big></a
      ><a
        onClick={handleClick} href="../instructions/kot-na-velosipede-474.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/474.jpg"
          width="165"
          height="200"
        /><br /><big>Кот на велосипеде</big></a
      ><a
        onClick={handleClick} href="../instructions/lyzhnik-52.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/52.jpg"
          width="138"
          height="200"
        /><br /><big>Лыжник</big></a
      ><a
        onClick={handleClick} href="../instructions/lyzhnik-53.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/53.jpg"
          width="200"
          height="187"
          vspace="7"
        /><br /><big>Лыжник</big></a
      ><a
        onClick={handleClick} href="../instructions/lyzhnik-54.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/54.jpg"
          width="162"
          height="200"
        /><br /><big>Лыжник</big></a
      ><a
        onClick={handleClick} href="../instructions/lyzhnik-87.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/87.png"
          width="180"
          height="200"
        /><br /><big>Лыжник</big></a
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
        onClick={handleClick} href="../instructions/podtyagivanie-56.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/56.jpg"
          width="178"
          height="200"
        /><br /><big>Подтягивание</big></a
      ><a
        onClick={handleClick} href="../instructions/tantsor-57.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/57.jpg"
          width="200"
          height="197"
          vspace="2"
        /><br /><big>Танцор</big></a
      ><a
        onClick={handleClick} href="../instructions/shtangist-58.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/58.jpg"
          width="182"
          height="200"
        /><br /><big>Штангист</big></a
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
