import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
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
          Share Feedback
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
