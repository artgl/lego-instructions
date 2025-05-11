import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <center><IonTitle>Инструкции для Lego WeDo 2.0</IonTitle></center>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
    <nav>
      <ul>
        <li>
          <a href="teams/avtomobili-mototsikly-2" className="lst"
            >Автомобили, мотоциклы [47]</a
          >
        </li>
        <li>
          <a href="teams/voennaya-tehnika-20" className="lst"
            >Военная техника [16]</a
          >
        </li>
        <li><a href="teams/dinozavry-15" className="lst">Динозавры [20]</a></li>
        <li><a href="teams/zhivotnye-6" className="lst">Животные [80]</a></li>
        <li>
          <a href="teams/zvezdnye-voiny-18" className="lst"
            >Звездные войны [10]</a
          >
        </li>
        <li><a href="teams/korabli-19" className="lst">Корабли [14]</a></li>
        <li><a href="teams/kosmos-4" className="lst">Космос [23]</a></li>
        <li><a href="teams/ludi-8" className="lst">Люди [34]</a></li>
        <li><a href="teams/mehanizmy-9" className="lst">Механизмы [88]</a></li>
        <li>
          <a href="teams/mini-modeli-25" className="lst">Мини-модели [30]</a>
        </li>
        <li>
          <a href="teams/modeli-bez-smarthaba-1" className="lst"
            >Модели без смартхаба [5]</a
          >
        </li>
        <li>
          <a href="teams/modeli-dlya-sorevnovaniy-17" className="lst"
            >Модели для соревнований [12]</a
          >
        </li>
        <li><a href="teams/nasekomye-22" className="lst">Насекомые [26]</a></li>
        <li>
          <a href="teams/novogodnie-16" className="lst">Новогодние [12]</a>
        </li>
        <li>
          <a href="teams/ofitsialnye-instruktsii-lego-24" className="lst"
            >Официальные инструкции LEGO [40]</a
          >
        </li>
        <li><a href="teams/ptitsy-21" className="lst">Птицы [20]</a></li>
        <li><a href="teams/rasteniya-23" className="lst">Растения [4]</a></li>
        <li>
          <a href="teams/risuuschie-modeli-5" className="lst"
            >Рисующие модели [9]</a
          >
        </li>
        <li><a href="teams/roboty-3" className="lst">Роботы [29]</a></li>
        <li>
          <a href="teams/samolety-vertolety-11" className="lst"
            >Самолёты, вертолёты [32]</a
          >
        </li>
        <li>
          <a href="teams/spetstehnika-10" className="lst">Спецтехника [46]</a>
        </li>
        <li><a href="teams/sport-14" className="lst">Спорт [20]</a></li>
        <li><a href="teams/transport-12" className="lst">Транспорт [14]</a></li>
        <li><a href="teams/shagauschie-7" className="lst">Шагающие [16]</a></li>
        <li>
          <a href="teams/novye-instruktsii-New" className="lst"
            >Новые инструкции [59]</a
          >
        </li>
      </ul>
    </nav>

      </IonContent>
    </IonPage>
  );
};

export default Home;
