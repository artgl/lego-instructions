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
        onClick={handleClick} href="../instructions/venerina-muholovka-396.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/396.jpg"
          width="170"
          height="200"
        /><br /><big>Венерина мухоловка</big></a
      ><a
        onClick={handleClick} href="../instructions/savanna-408.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/408.jpg"
          width="188"
          height="200"
        /><br /><big>Саванна</big></a
      ><a
        onClick={handleClick} href="../instructions/tsvetok-419.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/419.jpg"
          width="198"
          height="200"
        /><br /><big>Цветок</big></a
      ><a
        onClick={handleClick} href="../instructions/tsvetok-i-pchela-470.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/470.png"
          width="180"
          height="200"
        /><br /><big>Цветок и пчела</big></a
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
