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
        onClick={handleClick} href="../instructions/x-wing-199.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/199.jpg"
          width="188"
          height="200"
        /><br /><big>X-wing</big></a
      ><a
        onClick={handleClick} href="../instructions/x-wing-200.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/200.jpg"
          width="200"
          height="115"
          vspace="43"
        /><br /><big>X-wing</big></a
      ><a
        onClick={handleClick} href="../instructions/x-wing-201.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/201.jpg"
          width="200"
          height="130"
          vspace="35"
        /><br /><big>X-wing</big></a
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
        onClick={handleClick} href="../instructions/droideka-197.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/197.jpg"
          width="158"
          height="200"
        /><br /><big>Дройдека</big></a
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
