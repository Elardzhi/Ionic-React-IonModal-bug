import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

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

/* Theme variables */
import './theme/variables.css';
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from './pages/page3';
import Page4 from "./pages/page4";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/page1" component={Page1} exact={true} />
        <Route path="/page2" component={Page2} exact={true} />
        <Route path="/page3" component={Page3} exact={true} />
        <Route path="/page4" component={Page4} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/page1" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
