import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { useIonLoading } from '@ionic/react';
import { appBaseDirectory, appFilesDirectoryName } from './AppConsts';
import Home from './pages/Home';
import AutoMoto from './pages/AutoMoto';
import Dinozavry from './pages/Dinozavry';
import Korabli from './pages/Korabli';
import Kosmos from './pages/Kosmos';
import Ludi from './pages/Ludi';
import Mehanizmy from './pages/Mehanizmy';
import MiniModels from './pages/MiniModels';
import ModeliBezSmarthaba from './pages/ModeliBezSmarthaba';
import ModeliDlyaSorevnovaniy from './pages/ModeliDlyaSorevnovaniy';
import Nasekomye from './pages/Nasekomye';
import Novogodnie from './pages/Novogodnie';
import Novye from './pages/Novye';
import Ofitsialnye from './pages/Ofitsialnye';
import Ptitsy from './pages/Ptitsy';
import Rasteniya from './pages/Rasteniya';
import Risuuschie from './pages/Risuuschie';
import Roboty from './pages/Roboty';
import Samolety from './pages/Samolety';
import Shagauschie from './pages/Shagauschie';
import Spetstehnika from './pages/Spetstehnika';
import Sport from './pages/Sport';
import Transport from './pages/Transport';
import VoennayaTehnika from './pages/VoennayaTehnika';
import Zhivotnye from './pages/Zhivotnye';
import ZvezdnyeVoiny from './pages/ZvezdnyeVoiny';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  let load = async () => {
    try
    {
      console.log(`Creating ${appFilesDirectoryName} directory`);
      await Filesystem.mkdir({
        directory: appBaseDirectory,
        path: appFilesDirectoryName,
        recursive: true
      });
    }
    catch (e)
    {
      console.log(e);
    }
  }
  load();

  return (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route exact path="/index.html">
          <Redirect to="/home" />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/teams/avtomobili-mototsikly-2">
          <AutoMoto />
        </Route>

        <Route exact path="/teams/voennaya-tehnika-20">
          <VoennayaTehnika />
        </Route>

        <Route exact path="/teams/dinozavry-15">
          <Dinozavry />
        </Route>

        <Route exact path="/teams/zhivotnye-6">
          <Zhivotnye />
        </Route>

        <Route exact path="/teams/zvezdnye-voiny-18">
          <ZvezdnyeVoiny />
        </Route>

        <Route exact path="/teams/korabli-19">
          <Korabli />
        </Route>

        <Route exact path="/teams/kosmos-4">
          <Kosmos />
        </Route>

        <Route exact path="/teams/ludi-8">
          <Ludi />
        </Route>

        <Route exact path="/teams/mehanizmy-9">
          <Mehanizmy />
        </Route>

        <Route exact path="/teams/mini-modeli-25">
          <MiniModels />
        </Route>

        <Route exact path="/teams/modeli-bez-smarthaba-1">
          <ModeliBezSmarthaba />
        </Route>

        <Route exact path="/teams/modeli-dlya-sorevnovaniy-17">
          <ModeliDlyaSorevnovaniy />
        </Route>

        <Route exact path="/teams/nasekomye-22">
          <Nasekomye />
        </Route>

        <Route exact path="/teams/novogodnie-16">
          <Novogodnie />
        </Route>

        <Route exact path="/teams/ofitsialnye-instruktsii-lego-24">
          <Ofitsialnye />
        </Route>

        <Route exact path="/teams/ptitsy-21">
          <Ptitsy />
        </Route>

        <Route exact path="/teams/rasteniya-23">
          <Rasteniya />
        </Route>

        <Route exact path="/teams/risuuschie-modeli-5">
          <Risuuschie />
        </Route>

        <Route exact path="/teams/roboty-3">
          <Roboty />
        </Route>

        <Route exact path="/teams/samolety-vertolety-11">
          <Samolety />
        </Route>

        <Route exact path="/teams/spetstehnika-10">
          <Spetstehnika />
        </Route>

        <Route exact path="/teams/sport-14">
          <Sport />
        </Route>

        <Route exact path="/teams/transport-12">
          <Transport />
        </Route>

        <Route exact path="/teams/shagauschie-7">
          <Shagauschie />
        </Route>

        <Route exact path="/teams/novye-instruktsii-New">
          <Novye />
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  )
};

export default App;
