import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {useHistory} from "react-router";

const Page4: React.FC = () => {

    const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page 4</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>


          <h3>history.replace to page 1 (no animation)</h3>
          <IonButton
            onClick={() => {
                history.replace('/page1')
            }}
          >to Page 1</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Page4;
