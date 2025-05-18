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
        onClick={handleClick} href="../instructions/x-wing-199.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/199.jpg"
          width="188"
          height="200"
        /><br /><big>X-wing</big></a
      ><a
        onClick={handleClick} href="../instructions/x-wing-200.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/200.jpg"
          width="200"
          height="115"
          vspace="43"
        /><br /><big>X-wing</big></a
      ><a
        onClick={handleClick} href="../instructions/x-wing-201.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/201.jpg"
          width="200"
          height="130"
          vspace="35"
        /><br /><big>X-wing</big></a
      ><a
        onClick={handleClick} href="../instructions/inoplanetyanin-432.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/432.jpg"
          width="172"
          height="200"
        /><br /><big>Инопланетянин</big></a
      ><a
        onClick={handleClick} href="../instructions/kosmicheskaya-gonka-234.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/234.jpg"
          width="200"
          height="127"
          vspace="37"
        /><br /><big>Космическая гонка</big></a
      ><a
        onClick={handleClick} href="../instructions/kosmicheskiy-boi-235.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/235.jpg"
          width="200"
          height="196"
          vspace="2"
        /><br /><big>Космический бой</big></a
      ><a
        onClick={handleClick} href="../instructions/kosmicheskiy-korabl-vostok-231.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/231.jpg"
          width="109"
          height="200"
        /><br /><big>Космический корабль Восток</big></a
      ><a
        onClick={handleClick} href="../instructions/kosmonavt-490.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/490.jpg"
          width="115"
          height="200"
        /><br /><big>Космонавт</big></a
      ><a
        onClick={handleClick} href="../instructions/lokator-243.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/243.jpg"
          width="195"
          height="200"
        /><br /><big>Локатор</big></a
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
        onClick={handleClick} href="../instructions/marsohod-237.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/237.jpg"
          width="185"
          height="200"
        /><br /><big>Марсоход</big></a
      ><a
        onClick={handleClick} href="../instructions/marsohod-238.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/238.jpg"
          width="200"
          height="162"
          vspace="19"
        /><br /><big>Марсоход</big></a
      ><a
        onClick={handleClick} href="../instructions/model-solnechnoi-sistemy-365.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/365.jpg"
          width="200"
          height="147"
          vspace="27"
        /><br /><big>Модель солнечной системы</big></a
      ><a
        onClick={handleClick} href="../instructions/planetohod-232.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/232.jpg"
          width="200"
          height="196"
          vspace="2"
        /><br /><big>Планетоход</big></a
      ><a
        onClick={handleClick} href="../instructions/planetohod-233.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/233.jpg"
          width="200"
          height="183"
          vspace="9"
        /><br /><big>Планетоход</big></a
      ><a
        onClick={handleClick} href="../instructions/planetohod-241.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/241.jpg"
          width="200"
          height="190"
          vspace="5"
        /><br /><big>Планетоход</big></a
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
        onClick={handleClick} href="../instructions/prishelets-484.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/484.jpg"
          width="130"
          height="200"
        /><br /><big>Пришелец</big></a
      ><a
        onClick={handleClick} href="../instructions/puskovaya-ustanovka-239.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/239.jpg"
          width="110"
          height="200"
        /><br /><big>Пусковая установка</big></a
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
        onClick={handleClick} href="../instructions/rover-240.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/240.jpg"
          width="200"
          height="184"
          vspace="8"
        /><br /><big>Ровер</big></a
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
        onClick={handleClick} href="../instructions/sputniki-242.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/242.jpg"
          width="122"
          height="200"
        /><br /><big>Спутники</big></a
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
