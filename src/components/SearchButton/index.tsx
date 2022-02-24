import './index.css';

const SearchButton = () => {
  return (
    <div className="search-button-container">
      <div>
        <input placeholder='Digite sua busca'></input>
        <button className="btn">BUSCAR</button>
      </div>
    </div>
  );
};

export default SearchButton;
