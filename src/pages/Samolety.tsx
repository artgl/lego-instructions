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
        onClick={handleClick} href="../instructions/aeroplan-308.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/308.jpg"
          width="166"
          height="200"
        /><br /><big>Аэроплан</big>
        <div className="rem">61 деталь</div></a
      ><a
        onClick={handleClick} href="../instructions/aeroplan-309.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/309.jpg"
          width="200"
          height="122"
          vspace="39"
        /><br /><big>Аэроплан</big></a
      ><a
        onClick={handleClick} href="../instructions/aeroplan-310.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/310.jpg"
          width="200"
          height="186"
          vspace="7"
        /><br /><big>Аэроплан</big></a
      ><a
        onClick={handleClick} href="../instructions/biplan-311.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/311.jpg"
          width="161"
          height="200"
        /><br /><big>Биплан</big></a
      ><a
        onClick={handleClick} href="../instructions/vertolet-284.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/284.jpg"
          width="200"
          height="152"
          vspace="24"
        /><br /><big>Вертолёт</big></a
      ><a
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
        onClick={handleClick} href="../instructions/vertolet-313.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/313.jpg"
          width="200"
          height="137"
          vspace="32"
        /><br /><big>Вертолёт</big></a
      ><a
        onClick={handleClick} href="../instructions/vertolet-314.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/314.jpg"
          width="200"
          height="151"
          vspace="25"
        /><br /><big>Вертолёт</big></a
      ><a
        onClick={handleClick} href="../instructions/vertolet-315.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/315.jpg"
          width="137"
          height="200"
        /><br /><big>Вертолёт</big></a
      ><a
        onClick={handleClick} href="../instructions/vertolet-316.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/316.jpg"
          width="200"
          height="114"
          vspace="43"
        /><br /><big>Вертолёт</big></a
      ><a
        onClick={handleClick} href="../instructions/vertolet-317.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/317.jpg"
          width="200"
          height="175"
          vspace="13"
        /><br /><big>Вертолёт</big></a
      ><a
        onClick={handleClick} href="../instructions/vertolet-319.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/319.jpg"
          width="200"
          height="163"
          vspace="19"
        /><br /><big>Вертолёт</big></a
      ><a
        onClick={handleClick} href="../instructions/vertolet-320.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/320.jpg"
          width="200"
          height="134"
          vspace="33"
        /><br /><big>Вертолёт</big></a
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
        onClick={handleClick} href="../instructions/vertolet-322.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/322.jpg"
          width="200"
          height="183"
          vspace="9"
        /><br /><big>Вертолёт</big></a
      ><a
        onClick={handleClick} href="../instructions/vertolet-434.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/434.png"
          width="200"
          height="94"
          vspace="53"
        /><br /><big>Вертолёт</big></a
      ><a
        onClick={handleClick} href="../instructions/vertolet-496.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/496.jpg"
          width="200"
          height="143"
          vspace="29"
        /><br /><big>Вертолёт</big>
        <div className="rem">30 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/gidroplan-214.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/214.jpg"
          width="200"
          height="136"
          vspace="32"
        /><br /><big>Гидроплан</big></a
      ><a
        onClick={handleClick} href="../instructions/gidroplan-215.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/215.jpg"
          width="200"
          height="109"
          vspace="46"
        /><br /><big>Гидроплан</big>
        <div className="rem">155 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/dvuhvintovoi-vertolet-318.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/318.jpg"
          width="200"
          height="124"
          vspace="38"
        /><br /><big>Двухвинтовой вертолёт</big>
        <div className="rem">316 деталей</div></a
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
        onClick={handleClick} href="../instructions/kvadrokopter-325.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/325.jpg"
          width="200"
          height="135"
          vspace="33"
        /><br /><big>Квадрокоптер</big></a
      ><a
        onClick={handleClick} href="../instructions/samolet-31.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/31.jpg"
          width="200"
          height="138"
          vspace="31"
        /><br /><big>Самолёт</big></a
      ><a
        onClick={handleClick} href="../instructions/samolet-326.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/326.jpg"
          width="184"
          height="200"
        /><br /><big>Самолёт</big></a
      ><a
        onClick={handleClick} href="../instructions/samolet-327.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/327.jpg"
          width="200"
          height="167"
          vspace="17"
        /><br /><big>Самолёт</big></a
      ><a
        onClick={handleClick} href="../instructions/samolet-328.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/328.jpg"
          width="200"
          height="145"
          vspace="28"
        /><br /><big>Самолёт</big></a
      ><a
        onClick={handleClick} href="../instructions/samolet-329.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/329.jpg"
          width="200"
          height="125"
          vspace="38"
        /><br /><big>Самолёт</big></a
      ><a
        onClick={handleClick} href="../instructions/samolet-330.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/330.jpg"
          width="200"
          height="166"
          vspace="17"
        /><br /><big>Самолёт</big></a
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
        onClick={handleClick} href="../instructions/samolet-332.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/332.jpg"
          width="200"
          height="175"
          vspace="13"
        /><br /><big>Самолёт</big></a
      ><a
        onClick={handleClick} href="../instructions/samolet-333.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/333.jpg"
          width="200"
          height="89"
          vspace="56"
        /><br /><big>Самолёт</big></a
      ><a
        onClick={handleClick} href="../instructions/samolet-na-virazhah-529.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/529.jpg"
          width="200"
          height="182"
          vspace="9"
        /><br /><big>Самолёт на виражах</big></a
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
