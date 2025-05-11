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
        onClick={handleClick} href="../instructions/kakadu-132.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/132.jpg"
          width="131"
          height="200"
        /><br /><big>Какаду</big></a
      ><a
        onClick={handleClick} href="../instructions/pelikan-161.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/161.jpg"
          width="200"
          height="139"
          vspace="31"
        /><br /><big>Пеликан</big></a
      ><a
        onClick={handleClick} href="../instructions/pelikan-473.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/473.jpg"
          width="200"
          height="163"
          vspace="19"
        /><br /><big>Пеликан</big></a
      ><a
        onClick={handleClick} href="../instructions/pingvin-483.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/483.jpg"
          width="127"
          height="200"
        /><br /><big>Пингвин</big></a
      ><a
        onClick={handleClick} href="../instructions/povorachivauschayasya-utka-115.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/115.jpg"
          width="200"
          height="163"
          vspace="19"
        /><br /><big>Поворачивающаяся утка</big></a
      ><a
        onClick={handleClick} href="../instructions/popugai-163.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/163.jpg"
          width="200"
          height="159"
          vspace="21"
        /><br /><big>Попугай</big></a
      ><a
        onClick={handleClick} href="../instructions/ptenets-v-yaitse-431.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/431.jpg"
          width="200"
          height="113"
          vspace="44"
        /><br /><big>Птенец в яйце</big></a
      ><a
        onClick={handleClick} href="../instructions/ptentsy-164.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/164.jpg"
          width="200"
          height="152"
          vspace="24"
        /><br /><big>Птенцы</big>
        <div className="rem">114 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/ptitsa-144.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/144.jpg"
          width="200"
          height="156"
          vspace="22"
        /><br /><big>Птица</big></a
      ><a
        onClick={handleClick} href="../instructions/ptitsa-166.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/166.jpg"
          width="200"
          height="141"
          vspace="30"
        /><br /><big>Птица</big></a
      ><a
        onClick={handleClick} href="../instructions/ptitsa-mashet-krylyami-165.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/165.jpg"
          width="200"
          height="153"
          vspace="24"
        /><br /><big>Птица машет крыльями</big></a
      ><a
        onClick={handleClick} href="../instructions/ptitsy-167.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/167.jpg"
          width="200"
          height="149"
          vspace="26"
        /><br /><big>Птицы</big></a
      ><a
        onClick={handleClick} href="../instructions/sova-177.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/177.jpg"
          width="200"
          height="165"
          vspace="18"
        /><br /><big>Сова</big></a
      ><a
        onClick={handleClick} href="../instructions/sova-514.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/514.jpg"
          width="155"
          height="200"
        /><br /><big>Сова</big>
        <div className="rem">20 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/straus-487.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/487.jpg"
          width="200"
          height="183"
          vspace="9"
        /><br /><big>Страус</big></a
      ><a
        onClick={handleClick} href="../instructions/tantsuuschie-ptitsy-179.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/179.jpg"
          width="162"
          height="200"
        /><br /><big>Танцующие птицы</big></a
      ><a
        onClick={handleClick} href="../instructions/tukan-515.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/515.jpg"
          width="200"
          height="122"
          vspace="39"
        /><br /><big>Тукан</big>
        <div className="rem">32 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/utka-185.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/185.jpg"
          width="177"
          height="200"
        /><br /><big>Утка</big>
        <div className="rem">89 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/utka-186.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/186.jpg"
          width="194"
          height="200"
        /><br /><big>Утка</big></a
      ><a
        onClick={handleClick} href="../instructions/utka-516.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/516.jpg"
          width="200"
          height="189"
          vspace="6"
        /><br /><big>Утка</big>
        <div className="rem">27 деталей</div></a
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
