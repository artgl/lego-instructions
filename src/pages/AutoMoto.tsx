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
    <p>Всего 47 инструкций.</p>
    <div>
      <a onClick={handleClick}
        href="../instructions/avtomobil-287.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/287.jpg"
          width="200"
          height="144"
          vspace="28"
        /><br /><big>Автомобиль</big></a
      ><a onClick={handleClick}
        href="../instructions/avtomobil-288.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/288.jpg"
          width="200"
          height="156"
          vspace="22"
        /><br /><big>Автомобиль</big></a
      ><a onClick={handleClick}
        href="../instructions/avtomobil-289.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/289.jpg"
          width="200"
          height="108"
          vspace="46"
        /><br /><big>Автомобиль</big></a
      ><a onClick={handleClick}
        href="../instructions/avtomobil-gelik-425.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/425.jpg"
          width="200"
          height="156"
          vspace="22"
        /><br /><big>Автомобиль "Гелик"</big></a
      ><a onClick={handleClick}
        href="../instructions/avtomobil-tesla-273.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/273.jpg"
          width="200"
          height="121"
          vspace="40"
        /><br /><big>Автомобиль Тесла</big>
        <div className="rem">56 деталей</div></a
      ><a onClick={handleClick}
        href="../instructions/baggi-274.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/274.jpg"
          width="200"
          height="146"
          vspace="27"
        /><br /><big>Багги</big>
        <div className="rem">118 деталей</div></a
      ><a onClick={handleClick}
        href="../instructions/baggi-275.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/275.jpg"
          width="200"
          height="154"
          vspace="23"
        /><br /><big>Багги</big>
        <div className="rem">82 детали</div></a
      ><a onClick={handleClick}
        href="../instructions/baggi-472.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/472.jpg"
          width="200"
          height="169"
          vspace="16"
        /><br /><big>Багги</big></a
      ><a onClick={handleClick}
        href="../instructions/betmobil-207.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/207.jpg"
          width="200"
          height="154"
          vspace="23"
        /><br /><big>Бэтмобиль</big></a
      ><a onClick={handleClick}
        href="../instructions/betmobil-208.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/208.jpg"
          width="200"
          height="159"
          vspace="21"
        /><br /><big>Бэтмобиль</big></a
      ><a onClick={handleClick}
        href="../instructions/betmobil-209.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/209.jpg"
          width="200"
          height="158"
          vspace="21"
        /><br /><big>Бэтмобиль</big></a
      ><a onClick={handleClick}
        href="../instructions/betmobil-210.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/210.jpg"
          width="200"
          height="136"
          vspace="32"
        /><br /><big>Бэтмобиль</big></a
      ><a onClick={handleClick}
        href="../instructions/betmobil-211.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/211.jpg"
          width="200"
          height="133"
          vspace="34"
        /><br /><big>Бэтмобиль</big>
        <div className="rem">60 деталей</div></a
      ><a onClick={handleClick}
        href="../instructions/betmobil-522.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/522.jpg"
          width="200"
          height="139"
          vspace="31"
        /><br /><big>Бэтмобиль</big>
        <div className="rem">50 деталей</div></a
      ><a onClick={handleClick}
        href="../instructions/vnedorozhnik-276.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/276.jpg"
          width="200"
          height="167"
          vspace="17"
        /><br /><big>Внедорожник</big>
        <div className="rem">83 детали</div></a
      ><a onClick={handleClick}
        href="../instructions/vnedorozhnik-277.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/277.jpg"
          width="200"
          height="163"
          vspace="19"
        /><br /><big>Внедорожник</big></a
      ><a onClick={handleClick}
        href="../instructions/vnedorozhnik-285.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/285.jpg"
          width="200"
          height="111"
          vspace="45"
        /><br /><big>Внедорожник</big></a
      ><a onClick={handleClick}
        href="../instructions/gonochnyi-avtomobil-278.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/278.jpg"
          width="200"
          height="112"
          vspace="44"
        /><br /><big>Гоночный автомобиль</big></a
      ><a onClick={handleClick}
        href="../instructions/gonochnyi-avtomobil-279.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/279.jpg"
          width="200"
          height="150"
          vspace="25"
        /><br /><big>Гоночный автомобиль</big></a
      ><a onClick={handleClick}
        href="../instructions/gonochnyi-avtomobil-280.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/280.jpg"
          width="200"
          height="134"
          vspace="33"
        /><br /><big>Гоночный автомобиль</big></a
      ><a onClick={handleClick}
        href="../instructions/gonochnyi-avtomobil-281.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/281.jpg"
          width="200"
          height="152"
          vspace="24"
        /><br /><big>Гоночный автомобиль</big></a
      ><a onClick={handleClick}
        href="../instructions/gonochnyi-avtomobil-282.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/282.jpg"
          width="200"
          height="136"
          vspace="32"
        /><br /><big>Гоночный автомобиль</big></a
      ><a onClick={handleClick}
        href="../instructions/gonochnyi-avtomobil-283.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/283.jpg"
          width="200"
          height="113"
          vspace="44"
        /><br /><big>Гоночный автомобиль</big></a
      ><a onClick={handleClick}
        href="../instructions/gonochnyi-avtomobil-437.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/437.png"
          width="200"
          height="138"
          vspace="31"
        /><br /><big>Гоночный автомобиль</big>
        <div className="rem">52 детали</div></a
      ><a onClick={handleClick}
        href="../instructions/gruzovik-339.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/339.jpg"
          width="200"
          height="152"
          vspace="24"
        /><br /><big>Грузовик</big></a
      ><a onClick={handleClick}
        href="../instructions/dzhip-2.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/2.jpg"
          width="200"
          height="135"
          vspace="33"
        /><br /><big>Джип</big></a
      ><a onClick={handleClick}
        href="../instructions/dzhip-523.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/523.jpg"
          width="200"
          height="173"
          vspace="14"
        /><br /><big>Джип</big>
        <div className="rem">45 деталей</div></a
      ><a onClick={handleClick}
        href="../instructions/dragster-286.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/286.jpg"
          width="200"
          height="97"
          vspace="52"
        /><br /><big>Драгстер</big></a
      ><a onClick={handleClick}
        href="../instructions/kabriolet-1.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/1.jpg"
          width="200"
          height="130"
          vspace="35"
        /><br /><big>Кабриолет</big></a
      ><a onClick={handleClick}
        href="../instructions/limuzin-480.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/480.jpg"
          width="200"
          height="129"
          vspace="36"
        /><br /><big>Лимузин</big></a
      ><a onClick={handleClick}
        href="../instructions/mashinka-111.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/111.jpg"
          width="200"
          height="190"
          vspace="5"
        /><br /><big>Машинка</big></a
      ><a onClick={handleClick}
        href="../instructions/monstrtrak-290.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/290.jpg"
          width="200"
          height="188"
          vspace="6"
        /><br /><big>Монстртрак</big></a
      ><a onClick={handleClick}
        href="../instructions/motoroller-519.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/519.jpg"
          width="200"
          height="181"
          vspace="10"
        /><br /><big>Мотороллер</big>
        <div className="rem">44 детали</div></a
      ><a onClick={handleClick}
        href="../instructions/mototsikl-291.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/291.jpg"
          width="200"
          height="162"
          vspace="19"
        /><br /><big>Мотоцикл</big></a
      ><a onClick={handleClick}
        href="../instructions/mototsikl-292.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/292.jpg"
          width="200"
          height="101"
          vspace="50"
        /><br /><big>Мотоцикл</big></a
      ><a onClick={handleClick}
        href="../instructions/mototsikl-394.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/394.jpg"
          width="200"
          height="148"
          vspace="26"
        /><br /><big>Мотоцикл</big></a
      ><a onClick={handleClick}
        href="../instructions/mototsikl-517.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/517.jpg"
          width="200"
          height="166"
          vspace="17"
        /><br /><big>Мотоцикл</big>
        <div className="rem">43 детали</div></a
      ><a onClick={handleClick}
        href="../instructions/mototsiklist-293.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/293.jpg"
          width="181"
          height="200"
        /><br /><big>Мотоциклист</big></a
      ><a onClick={handleClick}
        href="../instructions/retromobil-524.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/524.jpg"
          width="200"
          height="157"
          vspace="22"
        /><br /><big>Ретромобиль</big>
        <div className="rem">59 деталей</div></a
      ><a onClick={handleClick}
        href="../instructions/rover-30.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/30.jpg"
          width="199"
          height="200"
        /><br /><big>Ровер</big></a
      ><a onClick={handleClick}
        href="../instructions/superkar-299.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/299.jpg"
          width="200"
          height="135"
          vspace="33"
        /><br /><big>Суперкар</big></a
      ><a onClick={handleClick}
        href="../instructions/tritsikl-520.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/520.jpg"
          width="200"
          height="176"
          vspace="12"
        /><br /><big>Трицикл</big>
        <div className="rem">28 деталей</div></a
      ><a onClick={handleClick}
        href="../instructions/formula-1-305.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/305.jpg"
          width="200"
          height="134"
          vspace="33"
        /><br /><big>Формула-1</big></a
      ><a onClick={handleClick}
        href="../instructions/hammer-306.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/306.jpg"
          width="200"
          height="131"
          vspace="35"
        /><br /><big>Хаммер</big>
        <div className="rem">176 деталей</div></a
      ><a onClick={handleClick}
        href="../instructions/hot-rod-307.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/307.jpg"
          width="200"
          height="132"
          vspace="34"
        /><br /><big>Хот-род</big></a
      ><a onClick={handleClick}
        href="../instructions/chopper-521.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/521.jpg"
          width="200"
          height="177"
          vspace="12"
        /><br /><big>Чоппер</big>
        <div className="rem">42 детали</div></a
      ><a onClick={handleClick}
        href="../instructions/evakuator-351.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/351.jpg"
          width="200"
          height="104"
          vspace="48"
        /><br /><big>Эвакуатор</big></a
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
