import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Navbar from 'components/Navbar';
import './index.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-top-card-container">
          <div className="home-content-text-container">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
        <div className="home-bottom-card-container">
          <button type="button" className="btn">
            VER CATÁLOGO
          </button>
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </>
  );
};

export default Home;
