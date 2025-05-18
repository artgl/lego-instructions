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
        onClick={handleClick} href="../instructions/batiskaf-212.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/212.jpg"
          width="158"
          height="200"
        /><br /><big>Батискаф</big></a
      ><a
        onClick={handleClick} href="../instructions/batiskaf-213.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/213.jpg"
          width="200"
          height="178"
          vspace="11"
        /><br /><big>Батискаф</big></a
      ><a
        onClick={handleClick} href="../instructions/gondola-216.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/216.jpg"
          width="200"
          height="166"
          vspace="17"
        /><br /><big>Гондола</big></a
      ><a
        onClick={handleClick} href="../instructions/kater-217.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/217.jpg"
          width="200"
          height="130"
          vspace="35"
        /><br /><big>Катер</big></a
      ><a
        onClick={handleClick} href="../instructions/kater-218.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/218.jpg"
          width="200"
          height="88"
          vspace="56"
        /><br /><big>Катер</big></a
      ><a
        onClick={handleClick} href="../instructions/korabl-220.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/220.jpg"
          width="200"
          height="164"
          vspace="18"
        /><br /><big>Корабль</big></a
      ><a
        onClick={handleClick} href="../instructions/korabl-221.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/221.jpg"
          width="200"
          height="163"
          vspace="19"
        /><br /><big>Корабль</big></a
      ><a
        onClick={handleClick} href="../instructions/korabl-v-shtorm-222.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/222.jpg"
          width="200"
          height="123"
          vspace="39"
        /><br /><big>Корабль в шторм</big></a
      ><a
        onClick={handleClick} href="../instructions/lodka-223.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/223.jpg"
          width="200"
          height="157"
          vspace="22"
        /><br /><big>Лодка</big></a
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
        onClick={handleClick} href="../instructions/piratskiy-korabl-219.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/219.jpg"
          width="200"
          height="153"
          vspace="24"
        /><br /><big>Пиратский корабль</big>
        <div className="rem">208 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/piratskiy-korabl-224.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/224.jpg"
          width="200"
          height="155"
          vspace="23"
        /><br /><big>Пиратский корабль</big></a
      ><a
        onClick={handleClick} href="../instructions/yahta-225.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/225.jpg"
          width="161"
          height="200"
        /><br /><big>Яхта</big></a
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
