import ProductCard from 'components/ProductCard';
import SearchButton from 'components/SearchButton';
import './index.css';

const Catalog = () => {
  return (
    <div className="catalog-home">
      <SearchButton />
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xxl-3">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
