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
        onClick={handleClick} href="../instructions/bashennyi-kran-26.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/26.jpg"
          width="122"
          height="200"
        /><br /><big>Башенный кран</big></a
      ><a
        onClick={handleClick} href="../instructions/bashennyi-kran-336.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/336.png"
          width="194"
          height="200"
        /><br /><big>Башенный кран</big></a
      ><a
        onClick={handleClick} href="../instructions/bashennyi-kran-342.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/342.jpg"
          width="153"
          height="200"
        /><br /><big>Башенный кран</big></a
      ><a
        onClick={handleClick} href="../instructions/vilochnyi-pogruzchik-335.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/335.jpg"
          width="200"
          height="154"
          vspace="23"
        /><br /><big>Вилочный погрузчик</big></a
      ><a
        onClick={handleClick} href="../instructions/vilochnyi-pogruzchik-337.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/337.jpg"
          width="200"
          height="92"
          vspace="54"
        /><br /><big>Вилочный погрузчик</big></a
      ><a
        onClick={handleClick} href="../instructions/vilochnyi-pogruzchik-338.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/338.jpg"
          width="200"
          height="161"
          vspace="20"
        /><br /><big>Вилочный погрузчик</big></a
      ><a
        onClick={handleClick} href="../instructions/vilochnyi-pogruzchik-348.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/348.jpg"
          width="200"
          height="186"
          vspace="7"
        /><br /><big>Вилочный погрузчик</big>
        <div className="rem">77 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/gruzovik-340.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/340.jpg"
          width="200"
          height="134"
          vspace="33"
        /><br /><big>Грузовик</big>
        <div className="rem">244 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/gruzovik-482.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/482.jpg"
          width="176"
          height="200"
        /><br /><big>Грузовик</big></a
      ><a
        onClick={handleClick} href="../instructions/katok-341.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/341.jpg"
          width="189"
          height="200"
        /><br /><big>Каток</big></a
      ><a
        onClick={handleClick} href="../instructions/kombain-249.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/249.jpg"
          width="200"
          height="117"
          vspace="42"
        /><br /><big>Комбайн</big></a
      ><a
        onClick={handleClick} href="../instructions/kombain-250.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/250.jpg"
          width="200"
          height="195"
          vspace="3"
        /><br /><big>Комбайн</big></a
      ><a
        onClick={handleClick} href="../instructions/kombain-251.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/251.png"
          width="200"
          height="70"
          vspace="65"
        /><br /><big>Комбайн</big></a
      ><a
        onClick={handleClick} href="../instructions/kombain-252.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/252.jpg"
          width="200"
          height="155"
          vspace="23"
        /><br /><big>Комбайн</big></a
      ><a
        onClick={handleClick} href="../instructions/konteinernyi-pogruzchik-347.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/347.jpg"
          width="200"
          height="164"
          vspace="18"
        /><br /><big>Контейнерный погрузчик</big></a
      ><a
        onClick={handleClick} href="../instructions/kultivator-253.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/253.jpg"
          width="200"
          height="147"
          vspace="27"
        /><br /><big>Культиватор</big></a
      ><a
        onClick={handleClick} href="../instructions/pogruzchik-28.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/28.jpg"
          width="200"
          height="146"
          vspace="27"
        /><br /><big>Погрузчик</big></a
      ><a
        onClick={handleClick} href="../instructions/podemnik-349.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/349.jpg"
          width="200"
          height="84"
          vspace="58"
        /><br /><big>Подъемник</big></a
      ><a
        onClick={handleClick} href="../instructions/podemnyi-kran-334.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/334.jpg"
          width="157"
          height="200"
        /><br /><big>Подъемный кран</big></a
      ><a
        onClick={handleClick} href="../instructions/podemnyi-kran-343.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/343.jpg"
          width="200"
          height="142"
          vspace="29"
        /><br /><big>Подъемный кран</big></a
      ><a
        onClick={handleClick} href="../instructions/podemnyi-kran-344.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/344.jpg"
          width="155"
          height="200"
        /><br /><big>Подъемный кран</big></a
      ><a
        onClick={handleClick} href="../instructions/podemnyi-kran-346.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/346.jpg"
          width="200"
          height="138"
          vspace="31"
        /><br /><big>Подъемный кран</big></a
      ><a
        onClick={handleClick} href="../instructions/podemnik-29.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/29.jpg"
          width="169"
          height="200"
        /><br /><big>Подъёмник</big></a
      ><a
        onClick={handleClick} href="../instructions/pozharnaya-mashina-295.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/295.jpg"
          width="200"
          height="141"
          vspace="30"
        /><br /><big>Пожарная машина</big></a
      ><a
        onClick={handleClick} href="../instructions/pozharnaya-mashina-296.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/296.jpg"
          width="174"
          height="200"
        /><br /><big>Пожарная машина</big></a
      ><a
        onClick={handleClick} href="../instructions/portovyi-kran-345.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/345.jpg"
          width="200"
          height="179"
          vspace="11"
        /><br /><big>Портовый кран</big></a
      ><a
        onClick={handleClick} href="../instructions/ryhlilka-254.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/254.jpg"
          width="200"
          height="183"
          vspace="9"
        /><br /><big>Рыхлилка</big></a
      ><a
        onClick={handleClick} href="../instructions/samosval-350.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/350.jpg"
          width="200"
          height="183"
          vspace="9"
        /><br /><big>Самосвал</big></a
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
        onClick={handleClick} href="../instructions/snegohod-297.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/297.png"
          width="200"
          height="128"
          vspace="36"
        /><br /><big>Снегоход</big></a
      ><a
        onClick={handleClick} href="../instructions/snegohod-298.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/298.jpg"
          width="200"
          height="164"
          vspace="18"
        /><br /><big>Снегоход</big></a
      ><a
        onClick={handleClick} href="../instructions/traktor-33.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/33.jpg"
          width="200"
          height="134"
          vspace="33"
        /><br /><big>Трактор</big></a
      ><a
        onClick={handleClick} href="../instructions/traktor-255.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/255.jpg"
          width="200"
          height="114"
          vspace="43"
        /><br /><big>Трактор</big></a
      ><a
        onClick={handleClick} href="../instructions/traktor-256.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/256.jpg"
          width="200"
          height="192"
          vspace="4"
        /><br /><big>Трактор</big></a
      ><a
        onClick={handleClick} href="../instructions/traktor-257.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/257.jpg"
          width="200"
          height="198"
          vspace="1"
        /><br /><big>Трактор</big></a
      ><a
        onClick={handleClick} href="../instructions/traktor-258.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/258.png"
          width="200"
          height="91"
          vspace="55"
        /><br /><big>Трактор</big></a
      ><a
        onClick={handleClick} href="../instructions/traktor-259.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/259.jpg"
          width="200"
          height="133"
          vspace="34"
        /><br /><big>Трактор</big></a
      ><a
        onClick={handleClick} href="../instructions/traktor-525.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/525.jpg"
          width="200"
          height="198"
          vspace="1"
        /><br /><big>Трактор</big>
        <div className="rem">35 деталей</div></a
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
      ><a
        onClick={handleClick} href="../instructions/tyagach-260.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/260.jpg"
          width="200"
          height="114"
          vspace="43"
        /><br /><big>Тягач</big></a
      ><a
        onClick={handleClick} href="../instructions/tyagach-302.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/302.jpg"
          width="200"
          height="151"
          vspace="25"
        /><br /><big>Тягач</big></a
      ><a
        onClick={handleClick} href="../instructions/tyagach-303.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/303.jpg"
          width="200"
          height="187"
          vspace="7"
        /><br /><big>Тягач</big></a
      ><a
        onClick={handleClick} href="../instructions/uborochnaya-mashina-294.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/294.jpg"
          width="200"
          height="99"
          vspace="51"
        /><br /><big>Уборочная машина</big></a
      ><a
        onClick={handleClick} href="../instructions/uborochnaya-mashina-304.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/304.jpg"
          width="200"
          height="120"
          vspace="40"
        /><br /><big>Уборочная машина</big></a
      ><a
        onClick={handleClick} href="../instructions/evakuator-351.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/351.jpg"
          width="200"
          height="104"
          vspace="48"
        /><br /><big>Эвакуатор</big></a
      ><a
        onClick={handleClick} href="../instructions/ekskavator-261.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/261.jpg"
          width="200"
          height="75"
          vspace="63"
        /><br /><big>Экскаватор</big></a
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
