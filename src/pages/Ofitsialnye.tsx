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
        onClick={handleClick} href="../instructions/ventilyator-433.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/433.png"
          width="163"
          height="200"
        /><br /><big>Вентилятор</big>
        <div className="rem">8 деталей</div></a
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
        onClick={handleClick} href="../instructions/vraschenie-drel-435.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/435.png"
          width="200"
          height="187"
          vspace="7"
        /><br /><big>Вращение (дрель)</big>
        <div className="rem">46 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/golovastik-436.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/436.png"
          width="200"
          height="133"
          vspace="34"
        /><br /><big>Головастик</big></a
      ><a
        onClick={handleClick} href="../instructions/gonochnyi-avtomobil-437.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/437.png"
          width="200"
          height="138"
          vspace="31"
        /><br /><big>Гоночный автомобиль</big>
        <div className="rem">52 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/dvizhenie-438.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/438.png"
          width="200"
          height="176"
          vspace="12"
        /><br /><big>Движение</big></a
      ><a
        onClick={handleClick} href="../instructions/dzhoistik-439.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/439.jpg"
          width="200"
          height="198"
          vspace="1"
        /><br /><big>Джойстик</big>
        <div className="rem">31 деталь</div></a
      ><a
        onClick={handleClick} href="../instructions/ezda-440.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/440.png"
          width="200"
          height="178"
          vspace="11"
        /><br /><big>Езда</big>
        <div className="rem">30 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/zahvat-441.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/441.png"
          width="200"
          height="98"
          vspace="51"
        /><br /><big>Захват</big></a
      ><a
        onClick={handleClick} href="../instructions/zemletryasenie-442.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/442.png"
          width="200"
          height="106"
          vspace="47"
        /><br /><big>Землетрясение</big></a
      ><a
        onClick={handleClick} href="../instructions/izgib-443.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/443.png"
          width="200"
          height="139"
          vspace="31"
        /><br /><big>Изгиб</big></a
      ><a
        onClick={handleClick} href="../instructions/katushka-444.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/444.png"
          width="200"
          height="133"
          vspace="34"
        /><br /><big>Катушка</big></a
      ><a
        onClick={handleClick} href="../instructions/kodi-447.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/447.png"
          width="200"
          height="133"
          vspace="34"
        /><br /><big>Коди</big>
        <div className="rem">21 деталь</div></a
      ><a
        onClick={handleClick} href="../instructions/kodi-s-datchikom-dvizheniya-445.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/445.png"
          width="200"
          height="132"
          vspace="34"
        /><br /><big>Коди с датчиком движения</big></a
      ><a
        onClick={handleClick} href="../instructions/kodi-s-datchikom-naklona-446.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/446.png"
          width="200"
          height="130"
          vspace="35"
        /><br /><big>Коди с датчиком наклона</big></a
      ><a
        onClick={handleClick} href="../instructions/kolebaniya-448.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/448.png"
          width="200"
          height="114"
          vspace="43"
        /><br /><big>Колебания</big></a
      ><a
        onClick={handleClick} href="../instructions/konveier-449.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/449.png"
          width="200"
          height="80"
          vspace="60"
        /><br /><big>Конвейер</big>
        <div className="rem">26 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/lift-450.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/450.png"
          width="200"
          height="155"
          vspace="23"
        /><br /><big>Лифт</big></a
      ><a
        onClick={handleClick} href="../instructions/lunohod-236.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/236.png"
          width="200"
          height="143"
          vspace="29"
        /><br /><big>Луноход</big></a
      ><a
        onClick={handleClick} href="../instructions/mailo-nauchnyi-vezdehod-455.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/455.png"
          width="200"
          height="104"
          vspace="48"
        /><br /><big>Майло (научный вездеход)</big></a
      ><a
        onClick={handleClick} href="../instructions/mailo-s-datchikom-naklona-451.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/451.png"
          width="200"
          height="117"
          vspace="42"
        /><br /><big>Майло с датчиком наклона</big></a
      ><a
        onClick={handleClick} href="../instructions/mailo-s-datchikom-peremescheniya-452.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/452.png"
          width="200"
          height="152"
          vspace="24"
        /><br /><big>Майло с датчиком перемещения</big></a
      ><a
        onClick={handleClick} href="../instructions/mailo-s-datchikom-peremescheniya-453.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/453.png"
          width="200"
          height="176"
          vspace="12"
        /><br /><big>Майло с датчиком перемещения</big></a
      ><a
        onClick={handleClick} href="../instructions/mailo-sovmestnaya-rabota-454.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/454.png"
          width="200"
          height="121"
          vspace="40"
        /><br /><big>Майло совместная работа</big></a
      ><a
        onClick={handleClick} href="../instructions/naklon-456.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/456.png"
          width="200"
          height="194"
          vspace="3"
        /><br /><big>Наклон</big></a
      ><a
        onClick={handleClick} href="../instructions/povorot-457.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/457.jpg"
          width="200"
          height="162"
          vspace="19"
        /><br /><big>Поворот</big></a
      ><a
        onClick={handleClick} href="../instructions/povorot-458.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/458.png"
          width="200"
          height="166"
          vspace="17"
        /><br /><big>Поворот</big></a
      ><a
        onClick={handleClick} href="../instructions/robo-ruka-358.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/358.jpg"
          width="200"
          height="126"
          vspace="37"
        /><br /><big>Робо-рука</big></a
      ><a
        onClick={handleClick} href="../instructions/robot-shpion-460.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/460.png"
          width="113"
          height="200"
        /><br /><big>Робот-шпион</big></a
      ><a
        onClick={handleClick} href="../instructions/rychag-461.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/461.png"
          width="200"
          height="139"
          vspace="31"
        /><br /><big>Рычаг</big>
        <div className="rem">20 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/samosval-462.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/462.png"
          width="200"
          height="129"
          vspace="36"
        /><br /><big>Самосвал</big></a
      ><a
        onClick={handleClick} href="../instructions/signalizatsiya-463.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/463.jpg"
          width="200"
          height="117"
          vspace="42"
        /><br /><big>Сигнализация</big></a
      ><a
        onClick={handleClick} href="../instructions/sputnik-464.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/464.png"
          width="200"
          height="171"
          vspace="15"
        /><br /><big>Спутник</big>
        <div className="rem">20 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/tolchok-465.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/465.png"
          width="200"
          height="98"
          vspace="51"
        /><br /><big>Толчок</big></a
      ><a
        onClick={handleClick} href="../instructions/tral-466.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/466.png"
          width="200"
          height="103"
          vspace="49"
        /><br /><big>Трал</big></a
      ><a
        onClick={handleClick} href="../instructions/tyanuschiy-robot-467.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/467.png"
          width="200"
          height="120"
          vspace="40"
        /><br /><big>Тянущий робот</big></a
      ><a
        onClick={handleClick} href="../instructions/ulitka-fonarik-468.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/468.png"
          width="200"
          height="120"
          vspace="40"
        /><br /><big>Улитка-фонарик</big>
        <div className="rem">11 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/hodba-469.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/469.png"
          width="200"
          height="161"
          vspace="20"
        /><br /><big>Ходьба</big></a
      ><a
        onClick={handleClick} href="../instructions/tsvetok-i-pchela-470.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/470.png"
          width="180"
          height="200"
        /><br /><big>Цветок и пчела</big></a
      ><a
        onClick={handleClick} href="../instructions/shluz-471.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/471.png"
          width="200"
          height="112"
          vspace="44"
        /><br /><big>Шлюз</big>
        <div className="rem">62 детали</div></a
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
