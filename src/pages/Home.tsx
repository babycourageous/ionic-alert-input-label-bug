import * as React from 'react'
import { IonAlert, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [showAlert, setShowAlert] = React.useState(false)
  const [presentAlert] = useIonAlert()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton
          onClick={() =>
            presentAlert({
              header: 'Share your feedback',
              buttons: [
                {
                  text: 'Cancel',
                  role: 'cancel',
                },
                {
                  text: 'Share',
                },
              ],
              inputs: [
                {
                  name: 'feedback',
                  label: 'Feedback',
                },
              ],
            })
          }
        >
          Alert Hook
        </IonButton>
        <IonButton onClick={() => setShowAlert(true)}>Inline Alert</IonButton>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Inline Alert"
        buttons={['OK']}
        inputs={[{
          label: 'Inline input'
        }]}
      />
      </IonContent>
    </IonPage>
  );
};

export default Home;
