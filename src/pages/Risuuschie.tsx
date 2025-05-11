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
        onClick={handleClick} href="../instructions/risovalka-7.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/7.jpg"
          width="200"
          height="130"
          vspace="35"
        /><br /><big>Рисовалка</big></a
      ><a
        onClick={handleClick} href="../instructions/risovalka-9.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/9.jpg"
          width="200"
          height="194"
          vspace="3"
        /><br /><big>Рисовалка</big></a
      ><a
        onClick={handleClick} href="../instructions/risuuschaya-akula-6.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/6.jpg"
          width="200"
          height="173"
          vspace="14"
        /><br /><big>Рисующая акула</big></a
      ><a
        onClick={handleClick} href="../instructions/risuuschaya-ovtsa-8.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/8.jpg"
          width="167"
          height="200"
        /><br /><big>Рисующая овца</big>
        <div className="rem">115 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/spirograf-10.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/10.jpg"
          width="200"
          height="135"
          vspace="33"
        /><br /><big>Спирограф</big></a
      ><a
        onClick={handleClick} href="../instructions/spirograf-11.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/11.jpg"
          width="196"
          height="200"
        /><br /><big>Спирограф</big>
        <div className="rem">665 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/hudozhnik-12.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/12.jpg"
          width="138"
          height="200"
        /><br /><big>Художник</big></a
      ><a
        onClick={handleClick} href="../instructions/yaitsebot-13.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/13.jpg"
          width="200"
          height="109"
          vspace="46"
        /><br /><big>Яйцебот</big></a
      ><a
        onClick={handleClick} href="../instructions/yaitsebot-14.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/14.jpg"
          width="200"
          height="150"
          vspace="25"
        /><br /><big>Яйцебот</big></a
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
