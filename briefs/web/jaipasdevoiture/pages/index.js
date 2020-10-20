import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Presentation from '../components/Presentation';
import Review from '../components/Review';
import CityList from '../components/CityList';

const cities = ["Nantes", "Limoges", "Tours", "Reims", "Lille", "Charleroi", "Liège", "Mâcon", "Montauban", "Quimper", "Caen", "Le Havre", "Dijon", "Strasbourg (bientôt)"];

const Index = () => {

  return (
    <main>
      <Header />
      <Navbar />

      <div id="carroussel">carroussel</div>

      <Presentation id="presentation" title="Qui somme nous" text="Créé en 1863, Jaipasdevoiture est une entreprise familiale de location de véhicule.Avant tout orienté vers la satisfaction du client, notre société s’est toujours efforcé deproposer un service personnalisé et de qualité. Nous nous somme toujours adapté àchaque changement des habitudes de consommation de nos clients.Jaipasdevoiture c’est plus de 2800 véhicules, de la voiture de tourisme au camionsemi-remorque en passant par le vélo électrique. Tout ce qu’il faut quelque soit votrebesoin ou vos envies." />

      <div id="localization">
        <Presentation id="localization-presentation" title="Où nous trouver" text="Vous pourrez trouver nos agences dans plus de 13 grandes villes de France et deBelgique." />


        <CityList cities={cities} id="localization-cities" />

        <div id="localization-map">
          <img src="/img/map.png" alt="map" />
        </div>
      </div>
      <Presentation id="keys" title="Chiffres clés" text={
        <div id="keys-grid">
          <div className="key-figure">plus de 100.000 clients satisfaits</div>
          <div className="key-figure">2800 véhicules</div>
          <div className="key-figure">157 ans</div>
          <div className="key-figure">50 employés</div>
          <div className="key-figure">13 agences</div>
          <div className="key-figure">1 passion</div>
        </div>
      } />

      <Presentation id="reviews" title="Avis clients" text={
        <div id="review-grid">
          <Review link="" rating={5} text="j'adore les voitures" user="micheline" />
          <Review link="" rating={4} text="trop cool la vie" user="jean jacqueq" />
          <Review link="" rating={3} text="vroom vroom" user="albert" />
        </div>
      } />
      <div id="partners">partners</div>
      <div id="contact">contacts</div>
    </main>
  );

}

export default Index;