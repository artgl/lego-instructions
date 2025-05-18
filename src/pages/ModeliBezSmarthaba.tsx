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
        onClick={handleClick} href="../instructions/dzhip-2.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/2.jpg"
          width="200"
          height="135"
          vspace="33"
        /><br /><big>Джип</big></a
      ><a
        onClick={handleClick} href="../instructions/kabriolet-1.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/1.jpg"
          width="200"
          height="130"
          vspace="35"
        /><br /><big>Кабриолет</big></a
      ><a
        onClick={handleClick} href="../instructions/podveshennyi-kosmicheskiy-korabl-3.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/3.jpg"
          width="160"
          height="200"
        /><br /><big>Подвешенный космический корабль</big></a
      ><a
        onClick={handleClick} href="../instructions/tyagach-5.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/5.jpg"
          width="200"
          height="183"
          vspace="9"
        /><br /><big>Тягач</big>
        <div className="rem">69 деталей</div></a
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
