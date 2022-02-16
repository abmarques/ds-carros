import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Navbar from 'components/Navbar';
import './index.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-top-card-container">
          <div className="home-content-container">
            <div className="home-card-content-title">
              <h1>O carro perfeito para você</h1>
            </div>
            <div className="home-card-content-subtitle">
              <h6>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </h6>
            </div>
          </div>
          <div className="home-card-content-image-container">
            <MainImage />
          </div>
        </div>

        <div className="home-bottom-content-container">
          <div className="home-bottom-content-button">
            <button className='b'>VER CATÁLOGO</button>
          </div>
          <div className="home-bottom-content-text">
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
