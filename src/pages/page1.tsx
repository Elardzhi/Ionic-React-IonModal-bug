import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {useHistory} from "react-router";

const Page1: React.FC = () => {

    const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>


          <h3>history.replace to page 2 (no animation)</h3>
          <IonButton
            onClick={() => {
                history.replace('/page2')
            }}
          >to Page 2</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Page1;
