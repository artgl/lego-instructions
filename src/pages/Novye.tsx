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
        onClick={handleClick} href="../instructions/babochka-510.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/510.jpg"
          width="200"
          height="108"
          vspace="46"
        /><br /><big>Бабочка</big>
        <div className="rem">25 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/baggi-472.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/472.jpg"
          width="200"
          height="169"
          vspace="16"
        /><br /><big>Багги</big></a
      ><a
        onClick={handleClick} href="../instructions/buldog-504.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/504.jpg"
          width="200"
          height="142"
          vspace="29"
        /><br /><big>Бульдог</big>
        <div className="rem">34 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/byk-505.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/505.jpg"
          width="169"
          height="200"
        /><br /><big>Бык</big>
        <div className="rem">19 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/betmobil-522.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/522.jpg"
          width="200"
          height="139"
          vspace="31"
        /><br /><big>Бэтмобиль</big>
        <div className="rem">50 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/velosiped-3-h-kolesnyi-518.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/518.jpg"
          width="200"
          height="157"
          vspace="22"
        /><br /><big>Велосипед 3-х колёсный</big>
        <div className="rem">35 деталей</div></a
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
        onClick={handleClick} href="../instructions/veselyi-avtopoezd-475.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/475.jpg"
          width="200"
          height="175"
          vspace="13"
        /><br /><big>Весёлый автопоезд</big></a
      ><a
        onClick={handleClick} href="../instructions/gimnast-476.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/476.jpg"
          width="150"
          height="200"
        /><br /><big>Гимнаст</big></a
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
        onClick={handleClick} href="../instructions/dzhip-523.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/523.jpg"
          width="200"
          height="173"
          vspace="14"
        /><br /><big>Джип</big>
        <div className="rem">45 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/dinozavr-492.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/492.jpg"
          width="200"
          height="127"
          vspace="37"
        /><br /><big>Динозавр</big></a
      ><a
        onClick={handleClick} href="../instructions/zheleznyi-chelovek-526.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/526.jpg"
          width="139"
          height="200"
        /><br /><big>Железный человек</big></a
      ><a
        onClick={handleClick} href="../instructions/zhuk-477.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/477.jpg"
          width="200"
          height="163"
          vspace="19"
        /><br /><big>Жук</big></a
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
        onClick={handleClick} href="../instructions/kosmonavt-490.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/490.jpg"
          width="115"
          height="200"
        /><br /><big>Космонавт</big></a
      ><a
        onClick={handleClick} href="../instructions/kot-i-myshka-493.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/493.jpg"
          width="200"
          height="103"
          vspace="49"
        /><br /><big>Кот и мышка</big></a
      ><a
        onClick={handleClick} href="../instructions/kot-na-velosipede-474.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/474.jpg"
          width="165"
          height="200"
        /><br /><big>Кот на велосипеде</big></a
      ><a
        onClick={handleClick} href="../instructions/krokodil-478.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/478.jpg"
          width="200"
          height="131"
          vspace="35"
        /><br /><big>Крокодил</big></a
      ><a
        onClick={handleClick} href="../instructions/krokodil-497.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/497.jpg"
          width="200"
          height="80"
          vspace="60"
        /><br /><big>Крокодил</big>
        <div className="rem">18 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/letuchaya-mysh-479.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/479.jpg"
          width="200"
          height="160"
          vspace="20"
        /><br /><big>Летучая мышь</big></a
      ><a
        onClick={handleClick} href="../instructions/limuzin-480.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/480.jpg"
          width="200"
          height="129"
          vspace="36"
        /><br /><big>Лимузин</big></a
      ><a
        onClick={handleClick} href="../instructions/loshadka-506.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/506.jpg"
          width="170"
          height="200"
        /><br /><big>Лошадка</big>
        <div className="rem">25 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/loshadka-s-telezhkoi-495.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/495.jpg"
          width="200"
          height="145"
          vspace="28"
        /><br /><big>Лошадка с тележкой</big></a
      ><a
        onClick={handleClick} href="../instructions/loshad-481.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/481.jpg"
          width="200"
          height="143"
          vspace="29"
        /><br /><big>Лошадь</big></a
      ><a
        onClick={handleClick} href="../instructions/lyagushka-498.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/498.jpg"
          width="200"
          height="97"
          vspace="52"
        /><br /><big>Лягушка</big>
        <div className="rem">29 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/motoroller-519.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/519.jpg"
          width="200"
          height="181"
          vspace="10"
        /><br /><big>Мотороллер</big>
        <div className="rem">44 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/mototsikl-517.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/517.jpg"
          width="200"
          height="166"
          vspace="17"
        /><br /><big>Мотоцикл</big>
        <div className="rem">43 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/muha-511.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/511.jpg"
          width="200"
          height="121"
          vspace="40"
        /><br /><big>Муха</big>
        <div className="rem">26 деталей</div></a
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
        onClick={handleClick} href="../instructions/osminog-499.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/499.jpg"
          width="200"
          height="120"
          vspace="40"
        /><br /><big>Осьминог</big>
        <div className="rem">50 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/panda-503.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/503.jpg"
          width="137"
          height="200"
        /><br /><big>Панда</big>
        <div className="rem">15 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/parusnik-508.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/508.jpg"
          width="163"
          height="200"
        /><br /><big>Парусник</big>
        <div className="rem">26 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/pashalnyi-zayats-528.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/528.jpg"
          width="131"
          height="200"
        /><br /><big>Пасхальный заяц</big></a
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
        onClick={handleClick} href="../instructions/prishelets-484.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/484.jpg"
          width="130"
          height="200"
        /><br /><big>Пришелец</big></a
      ><a
        onClick={handleClick} href="../instructions/radar-507.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/507.jpg"
          width="200"
          height="192"
          vspace="4"
        /><br /><big>Радар</big>
        <div className="rem">18 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/retromobil-524.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/524.jpg"
          width="200"
          height="157"
          vspace="22"
        /><br /><big>Ретромобиль</big>
        <div className="rem">59 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/rybka-500.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/500.jpg"
          width="200"
          height="93"
          vspace="54"
        /><br /><big>Рыбка</big>
        <div className="rem">15 деталей</div></a
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
      ><a
        onClick={handleClick} href="../instructions/slon-486.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/486.jpg"
          width="200"
          height="171"
          vspace="15"
        /><br /><big>Слон</big></a
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
        onClick={handleClick} href="../instructions/strekoza-512.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/512.jpg"
          width="200"
          height="129"
          vspace="36"
        /><br /><big>Стрекоза</big>
        <div className="rem">46 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/strekoza-513.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/513.jpg"
          width="200"
          height="98"
          vspace="51"
        /><br /><big>Стрекоза</big>
        <div className="rem">25 деталей</div></a
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
        onClick={handleClick} href="../instructions/tritsikl-520.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/520.jpg"
          width="200"
          height="176"
          vspace="12"
        /><br /><big>Трицикл</big>
        <div className="rem">28 деталей</div></a
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
        onClick={handleClick} href="../instructions/udochka-530.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/530.jpg"
          width="200"
          height="115"
          vspace="43"
        /><br /><big>Удочка</big></a
      ><a
        onClick={handleClick} href="../instructions/ulitka-501.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/501.jpg"
          width="200"
          height="152"
          vspace="24"
        /><br /><big>Улитка</big>
        <div className="rem">21 деталь</div></a
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
      ><a
        onClick={handleClick} href="../instructions/fenek-489.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/489.jpg"
          width="200"
          height="143"
          vspace="29"
        /><br /><big>Фенек</big></a
      ><a
        onClick={handleClick} href="../instructions/cherepaha-502.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/502.jpg"
          width="200"
          height="131"
          vspace="35"
        /><br /><big>Черепаха</big>
        <div className="rem">16 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/chopper-521.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/521.jpg"
          width="200"
          height="177"
          vspace="12"
        /><br /><big>Чоппер</big>
        <div className="rem">42 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/yahta-509.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/509.jpg"
          width="164"
          height="200"
        /><br /><big>Яхта</big>
        <div className="rem">18 деталей</div></a
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
