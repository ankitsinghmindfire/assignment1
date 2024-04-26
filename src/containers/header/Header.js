import SearchBar from "material-ui-search-bar";

import "./Header.css";

const Header = ({}) => {
  return (
    <div className="headerContainer">
      <h2 className="headerProduct">Grab a Product</h2>
      <div className="searchContainer">
        <SearchBar
          value={""}
          onChange={() => {}}
          onRequestSearch={() => {}}
          placeholder="Search for different Products and Brands"
          style={{
            borderRadius: "24px",
            width: "268px",
            backgroundColor: "#f0f0f0",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
