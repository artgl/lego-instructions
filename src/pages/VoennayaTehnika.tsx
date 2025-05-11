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
        onClick={handleClick} href="../instructions/vertolet-312.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/312.jpg"
          width="200"
          height="200"
        /><br /><big>Вертолёт</big>
        <div className="rem">143 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/vertolet-321.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/321.jpg"
          width="200"
          height="108"
          vspace="46"
        /><br /><big>Вертолёт</big></a
      ><a
        onClick={handleClick} href="../instructions/istrebitel-323.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/323.jpg"
          width="200"
          height="98"
          vspace="51"
        /><br /><big>Истребитель</big></a
      ><a
        onClick={handleClick} href="../instructions/katapulta-262.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/262.jpg"
          width="200"
          height="198"
          vspace="1"
        /><br /><big>Катапульта</big></a
      ><a
        onClick={handleClick} href="../instructions/katapulta-263.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/263.jpg"
          width="175"
          height="200"
        /><br /><big>Катапульта</big></a
      ><a
        onClick={handleClick} href="../instructions/katapulta-264.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/264.jpg"
          width="200"
          height="123"
          vspace="39"
        /><br /><big>Катапульта</big>
        <div className="rem">186 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/katapulta-265.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/265.jpg"
          width="179"
          height="200"
        /><br /><big>Катапульта</big></a
      ><a
        onClick={handleClick} href="../instructions/katapulta-266.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/266.png"
          width="200"
          height="120"
          vspace="40"
        /><br /><big>Катапульта</big></a
      ><a
        onClick={handleClick} href="../instructions/katapulta-dlya-ptits-485.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/485.jpg"
          width="200"
          height="158"
          vspace="21"
        /><br /><big>Катапульта для птиц</big></a
      ><a
        onClick={handleClick} href="../instructions/katusha-226.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/226.jpg"
          width="200"
          height="199"
          vspace="1"
        /><br /><big>Катюша</big></a
      ><a
        onClick={handleClick} href="../instructions/pushka-228.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/228.jpg"
          width="200"
          height="123"
          vspace="39"
        /><br /><big>Пушка</big></a
      ><a
        onClick={handleClick} href="../instructions/radar-227.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/227.jpg"
          width="130"
          height="200"
        /><br /><big>Радар</big></a
      ><a
        onClick={handleClick} href="../instructions/samolet-331.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/331.jpg"
          width="200"
          height="117"
          vspace="42"
        /><br /><big>Самолёт</big></a
      ><a
        onClick={handleClick} href="../instructions/tank-229.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/229.jpg"
          width="200"
          height="139"
          vspace="31"
        /><br /><big>Танк</big></a
      ><a
        onClick={handleClick} href="../instructions/tank-488.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/488.jpg"
          width="200"
          height="121"
          vspace="40"
        /><br /><big>Танк</big></a
      ><a
        onClick={handleClick} href="../instructions/hammer-306.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/306.jpg"
          width="200"
          height="131"
          vspace="35"
        /><br /><big>Хаммер</big>
        <div className="rem">176 деталей</div></a
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
