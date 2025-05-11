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
        onClick={handleClick} href="../instructions/letauschiy-santa-85.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/85.jpg"
          width="200"
          height="151"
          vspace="25"
        /><br /><big>Летающий Санта</big></a
      ><a
        onClick={handleClick} href="../instructions/lyzhnik-santa-86.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/86.jpg"
          width="178"
          height="200"
        /><br /><big>Лыжник Санта</big>
        <div className="rem">109 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/novogodniy-parovoz-248.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/248.jpg"
          width="200"
          height="90"
          vspace="55"
        /><br /><big>Новогодний паровоз</big></a
      ><a
        onClick={handleClick} href="../instructions/novogodnyaya-elka-84.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/84.jpg"
          width="93"
          height="200"
        /><br /><big>Новогодняя ёлка</big>
        <div className="rem">157 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/novogodnyaya-elka-429.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/429.png"
          width="200"
          height="113"
          vspace="44"
        /><br /><big>Новогодняя ёлка</big></a
      ><a
        onClick={handleClick} href="../instructions/novogodnyaya-elka-491.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/491.jpg"
          width="192"
          height="200"
        /><br /><big>Новогодняя ёлка</big></a
      ><a
        onClick={handleClick} href="../instructions/olen-rudolf-82.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/82.jpg"
          width="200"
          height="148"
          vspace="26"
        /><br /><big>Олень Рудольф</big></a
      ><a
        onClick={handleClick} href="../instructions/olen-rudolf-494.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/494.jpg"
          width="128"
          height="200"
        /><br /><big>Олень Рудольф</big></a
      ><a
        onClick={handleClick} href="../instructions/olen-sven-527.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/527.jpg"
          width="200"
          height="168"
          vspace="16"
        /><br /><big>Олень Свен</big></a
      ><a
        onClick={handleClick} href="../instructions/povozka-santy-430.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/430.png"
          width="200"
          height="119"
          vspace="41"
        /><br /><big>Повозка Санты</big></a
      ><a
        onClick={handleClick} href="../instructions/santa-klaus-88.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/88.jpg"
          width="200"
          height="179"
          vspace="11"
        /><br /><big>Санта-Клаус</big>
        <div className="rem">98 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/fabrika-santy-83.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/83.jpg"
          width="136"
          height="200"
        /><br /><big>Фабрика Санты</big>
        <div className="rem">196 деталей</div></a
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
