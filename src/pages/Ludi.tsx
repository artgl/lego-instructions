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
        onClick={handleClick} href="../instructions/boi-s-medvedem-373.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/373.jpg"
          width="200"
          height="173"
          vspace="14"
        /><br /><big>Бой с медведем</big></a
      ><a
        onClick={handleClick} href="../instructions/valentinka-374.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/374.jpg"
          width="200"
          height="178"
          vspace="11"
        /><br /><big>Валентинка</big></a
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
        onClick={handleClick} href="../instructions/golfist-51.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/51.jpg"
          width="142"
          height="200"
        /><br /><big>Гольфист</big></a
      ><a
        onClick={handleClick} href="../instructions/gulliver-383.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/383.jpg"
          width="184"
          height="200"
        /><br /><big>Гулливер</big></a
      ><a
        onClick={handleClick} href="../instructions/dirizher-384.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/384.jpg"
          width="151"
          height="200"
        /><br /><big>Дирижер</big></a
      ><a
        onClick={handleClick} href="../instructions/indeets-202.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/202.jpg"
          width="163"
          height="200"
        /><br /><big>Индеец</big>
        <div className="rem">141 деталь</div></a
      ><a
        onClick={handleClick} href="../instructions/karlson-324.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/324.jpg"
          width="135"
          height="200"
        /><br /><big>Карлсон</big></a
      ><a
        onClick={handleClick} href="../instructions/kuznetsy-390.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/390.jpg"
          width="200"
          height="147"
          vspace="27"
        /><br /><big>Кузнецы</big></a
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
        onClick={handleClick} href="../instructions/mototsiklist-293.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/293.jpg"
          width="181"
          height="200"
        /><br /><big>Мотоциклист</big></a
      ><a
        onClick={handleClick} href="../instructions/muzykant-395.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/395.jpg"
          width="111"
          height="200"
        /><br /><big>Музыкант</big></a
      ><a
        onClick={handleClick} href="../instructions/povar-399.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/399.jpg"
          width="114"
          height="200"
        /><br /><big>Повар</big></a
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
        onClick={handleClick} href="../instructions/puteshestvenniki-370.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/370.jpg"
          width="200"
          height="169"
          vspace="16"
        /><br /><big>Путешественники</big></a
      ><a
        onClick={handleClick} href="../instructions/rodeo-405.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/405.jpg"
          width="132"
          height="200"
        /><br /><big>Родео</big></a
      ><a
        onClick={handleClick} href="../instructions/rybak-406.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/406.jpg"
          width="200"
          height="148"
          vspace="26"
        /><br /><big>Рыбак</big></a
      ><a
        onClick={handleClick} href="../instructions/rytsarskiy-turnir-418.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/418.jpg"
          width="200"
          height="110"
          vspace="45"
        /><br /><big>Рыцарский турнир</big></a
      ><a
        onClick={handleClick} href="../instructions/rytsar-na-kone-40.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/40.jpg"
          width="200"
          height="120"
          vspace="40"
        /><br /><big>Рыцарь на коне</big>
        <div className="rem">142 детали</div></a
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
        onClick={handleClick} href="../instructions/tantsor-413.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/413.jpg"
          width="142"
          height="200"
        /><br /><big>Танцор</big></a
      ><a
        onClick={handleClick} href="../instructions/tantsor-414.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/414.jpg"
          width="126"
          height="200"
        /><br /><big>Танцор</big></a
      ><a
        onClick={handleClick} href="../instructions/tantsy-415.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/415.jpg"
          width="151"
          height="200"
        /><br /><big>Танцы</big></a
      ><a
        onClick={handleClick} href="../instructions/turist-417.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/417.jpg"
          width="136"
          height="200"
        /><br /><big>Турист</big></a
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
        onClick={handleClick} href="../instructions/tsirkach-420.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/420.jpg"
          width="200"
          height="179"
          vspace="11"
        /><br /><big>Циркач</big></a
      ><a
        onClick={handleClick} href="../instructions/chelovek-s-telegoi-20.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/20.jpg"
          width="191"
          height="200"
        /><br /><big>Человек с телегой</big></a
      ><a
        onClick={handleClick} href="../instructions/shagauschiy-chelovek-21.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/21.jpg"
          width="200"
          height="186"
          vspace="7"
        /><br /><big>Шагающий человек</big></a
      ><a
        onClick={handleClick} href="../instructions/shahter-421.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/421.jpg"
          width="200"
          height="126"
          vspace="37"
        /><br /><big>Шахтёр</big></a
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
