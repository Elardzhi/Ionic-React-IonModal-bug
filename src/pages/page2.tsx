import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {useHistory} from "react-router";

const Page2: React.FC = () => {

    const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>


          <h3>history.push to page 3 (with animation)</h3>
          <IonButton
            onClick={() => {
                history.push('/page3')
            }}
          >to Page 3</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Page2;
