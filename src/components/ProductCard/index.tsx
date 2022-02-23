import ProductImg from 'assets/images/product.png';
import './index.css';

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="top-card-container">
        <img src={ProductImg} alt="Imagem do Carro"></img>
      </div>
      <div className="bottom-card-container">
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <button className="btn">COMPRAR</button>
      </div>
    </div>
  );
};

export default ProductCard;
