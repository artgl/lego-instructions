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
        onClick={handleClick} href="../instructions/akula-116.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/116.jpg"
          width="175"
          height="200"
        /><br /><big>Акула</big></a
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
        onClick={handleClick} href="../instructions/byk-106.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/106.jpg"
          width="200"
          height="165"
          vspace="18"
        /><br /><big>Бык</big></a
      ><a
        onClick={handleClick} href="../instructions/byk-119.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/119.jpg"
          width="192"
          height="200"
        /><br /><big>Бык</big></a
      ><a
        onClick={handleClick} href="../instructions/byk-120.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/120.jpg"
          width="200"
          height="116"
          vspace="42"
        /><br /><big>Бык</big></a
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
        onClick={handleClick} href="../instructions/gekkon-27.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/27.jpg"
          width="200"
          height="198"
          vspace="1"
        /><br /><big>Геккон</big></a
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
        onClick={handleClick} href="../instructions/gorilla-121.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/121.jpg"
          width="200"
          height="145"
          vspace="28"
        /><br /><big>Горилла</big></a
      ><a
        onClick={handleClick} href="../instructions/gorilla-122.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/122.jpg"
          width="200"
          height="156"
          vspace="22"
        /><br /><big>Горилла</big></a
      ><a
        onClick={handleClick} href="../instructions/gorilla-123.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/123.jpg"
          width="186"
          height="200"
        /><br /><big>Горилла</big></a
      ><a
        onClick={handleClick} href="../instructions/dvuhgolovyi-drakon-129.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/129.jpg"
          width="200"
          height="117"
          vspace="42"
        /><br /><big>Двухголовый дракон</big></a
      ><a
        onClick={handleClick} href="../instructions/drakon-74.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/74.jpg"
          width="129"
          height="200"
        /><br /><big>Дракон</big></a
      ><a
        onClick={handleClick} href="../instructions/drakon-125.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/125.jpg"
          width="152"
          height="200"
        /><br /><big>Дракон</big></a
      ><a
        onClick={handleClick} href="../instructions/drakon-126.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/126.jpg"
          width="200"
          height="127"
          vspace="37"
        /><br /><big>Дракон</big>
        <div className="rem">166 деталей</div></a
      ><a
        onClick={handleClick} href="../instructions/drakon-143.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/143.jpg"
          width="200"
          height="153"
          vspace="24"
        /><br /><big>Дракон</big></a
      ><a
        onClick={handleClick} href="../instructions/drakosha-109.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/109.jpg"
          width="200"
          height="200"
        /><br /><big>Дракоша</big></a
      ><a
        onClick={handleClick} href="../instructions/zhiraf-127.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/127.jpg"
          width="200"
          height="180"
          vspace="10"
        /><br /><big>Жираф</big></a
      ><a
        onClick={handleClick} href="../instructions/zayats-128.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/128.jpg"
          width="177"
          height="200"
        /><br /><big>Заяц</big></a
      ><a
        onClick={handleClick} href="../instructions/zayats-155.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/155.jpg"
          width="200"
          height="124"
          vspace="38"
        /><br /><big>Заяц</big></a
      ><a
        onClick={handleClick} href="../instructions/zayats-s-molotkom-386.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/386.jpg"
          width="200"
          height="104"
          vspace="48"
        /><br /><big>Заяц с молотком</big></a
      ><a
        onClick={handleClick} href="../instructions/zmeya-130.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/130.jpg"
          width="200"
          height="110"
          vspace="45"
        /><br /><big>Змея</big></a
      ><a
        onClick={handleClick} href="../instructions/zmeya-131.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/131.jpg"
          width="200"
          height="122"
          vspace="39"
        /><br /><big>Змея</big></a
      ><a
        onClick={handleClick} href="../instructions/king-kong-76.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/76.jpg"
          width="184"
          height="200"
        /><br /><big>Кинг-Конг</big></a
      ><a
        onClick={handleClick} href="../instructions/kit-133.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/133.jpg"
          width="200"
          height="147"
          vspace="27"
        /><br /><big>Кит</big></a
      ><a
        onClick={handleClick} href="../instructions/kot-135.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/135.jpg"
          width="172"
          height="200"
        /><br /><big>Кот</big></a
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
        onClick={handleClick} href="../instructions/kot-i-mysh-136.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/136.jpg"
          width="200"
          height="149"
          vspace="26"
        /><br /><big>Кот и мышь</big></a
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
        onClick={handleClick} href="../instructions/krab-137.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/137.jpg"
          width="194"
          height="200"
        /><br /><big>Краб</big></a
      ><a
        onClick={handleClick} href="../instructions/krokodil-138.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/138.jpg"
          width="200"
          height="93"
          vspace="54"
        /><br /><big>Крокодил</big></a
      ><a
        onClick={handleClick} href="../instructions/krokodil-139.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/139.jpg"
          width="200"
          height="89"
          vspace="56"
        /><br /><big>Крокодил</big>
        <div className="rem">462 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/krokodil-140.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/140.jpg"
          width="200"
          height="118"
          vspace="41"
        /><br /><big>Крокодил</big></a
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
        onClick={handleClick} href="../instructions/lev-142.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/142.jpg"
          width="200"
          height="141"
          vspace="30"
        /><br /><big>Лев</big></a
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
        onClick={handleClick} href="../instructions/lisa-145.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/145.jpg"
          width="200"
          height="154"
          vspace="23"
        /><br /><big>Лиса</big></a
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
        onClick={handleClick} href="../instructions/loshad-146.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/146.jpg"
          width="200"
          height="109"
          vspace="46"
        /><br /><big>Лошадь</big></a
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
        onClick={handleClick} href="../instructions/lyagushka-147.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/147.jpg"
          width="200"
          height="178"
          vspace="11"
        /><br /><big>Лягушка</big>
        <div className="rem">82 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/lyagushka-148.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/148.jpg"
          width="200"
          height="162"
          vspace="19"
        /><br /><big>Лягушка</big></a
      ><a
        onClick={handleClick} href="../instructions/lyagushka-149.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/149.jpg"
          width="200"
          height="149"
          vspace="26"
        /><br /><big>Лягушка</big></a
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
        onClick={handleClick} href="../instructions/lyagushki-150.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/150.jpg"
          width="200"
          height="102"
          vspace="49"
        /><br /><big>Лягушки</big></a
      ><a
        onClick={handleClick} href="../instructions/medved-112.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/112.jpg"
          width="126"
          height="200"
        /><br /><big>Медведь</big></a
      ><a
        onClick={handleClick} href="../instructions/nosorog-152.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/152.jpg"
          width="200"
          height="173"
          vspace="14"
        /><br /><big>Носорог</big></a
      ><a
        onClick={handleClick} href="../instructions/obezyana-153.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/153.jpg"
          width="200"
          height="181"
          vspace="10"
        /><br /><big>Обезьяна</big></a
      ><a
        onClick={handleClick} href="../instructions/obezyana-154.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/154.jpg"
          width="60"
          height="200"
        /><br /><big>Обезьяна</big></a
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
        onClick={handleClick} href="../instructions/pashalnyi-zayats-528.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/528.jpg"
          width="131"
          height="200"
        /><br /><big>Пасхальный заяц</big></a
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
        onClick={handleClick} href="../instructions/ryba-169.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/169.jpg"
          width="200"
          height="177"
          vspace="12"
        /><br /><big>Рыба</big></a
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
        onClick={handleClick} href="../instructions/slon-173.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/173.jpg"
          width="200"
          height="200"
        /><br /><big>Слон</big></a
      ><a
        onClick={handleClick} href="../instructions/slon-174.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/174.jpg"
          width="200"
          height="141"
          vspace="30"
        /><br /><big>Слон</big>
        <div className="rem">170 деталей</div></a
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
        onClick={handleClick} href="../instructions/sobaka-168.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/168.jpg"
          width="200"
          height="163"
          vspace="19"
        /><br /><big>Собака</big></a
      ><a
        onClick={handleClick} href="../instructions/sobaka-175.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/175.jpg"
          width="194"
          height="200"
        /><br /><big>Собака</big></a
      ><a
        onClick={handleClick} href="../instructions/sobaka-176.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/176.jpg"
          width="192"
          height="200"
        /><br /><big>Собака</big></a
      ><a
        onClick={handleClick} href="../instructions/sfinks-105.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/105.jpg"
          width="200"
          height="154"
          vspace="23"
        /><br /><big>Сфинкс</big>
        <div className="rem">302 детали</div></a
      ><a
        onClick={handleClick} href="../instructions/tigr-180.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/180.jpg"
          width="200"
          height="163"
          vspace="19"
        /><br /><big>Тигр</big></a
      ><a
        onClick={handleClick} href="../instructions/tom-i-dzherri-181.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/181.jpg"
          width="200"
          height="126"
          vspace="37"
        /><br /><big>Том и Джерри</big></a
      ><a
        onClick={handleClick} href="../instructions/ulitka-182.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/182.jpg"
          width="178"
          height="200"
        /><br /><big>Улитка</big></a
      ><a
        onClick={handleClick} href="../instructions/ulitka-183.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/183.jpg"
          width="200"
          height="197"
          vspace="2"
        /><br /><big>Улитка</big></a
      ><a
        onClick={handleClick} href="../instructions/ulitka-184.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/184.jpg"
          width="198"
          height="200"
        /><br /><big>Улитка</big></a
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
        onClick={handleClick} href="../instructions/fitnes-kot-35.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/35.jpg"
          width="150"
          height="200"
        /><br /><big>Фитнес-кот</big></a
      ><a
        onClick={handleClick} href="../instructions/hameleon-187.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/187.jpg"
          width="200"
          height="148"
          vspace="26"
        /><br /><big>Хамелеон</big></a
      ><a
        onClick={handleClick} href="../instructions/cherepaha-189.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/189.jpg"
          width="200"
          height="107"
          vspace="47"
        /><br /><big>Черепаха</big></a
      ><a
        onClick={handleClick} href="../instructions/cherepaha-190.pdf"
        target="_blank"
        className="man"
        ><img
          src="../instructions/images/190.jpg"
          width="200"
          height="113"
          vspace="44"
        /><br /><big>Черепаха</big></a
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
