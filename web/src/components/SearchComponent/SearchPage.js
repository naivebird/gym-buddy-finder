import Navbar from "../Navbar/NavBar";
import "./SearchPage.css"
import searchLogo from './search-svgrepo-com.svg'



const handleSearch = (labelOptionValue) => {
  //...
  console.log(labelOptionValue);
};

function SearchPage({ onLogout }) {
  const user = JSON.parse(window.localStorage.getItem("user"));

  return (
    <div className="home-page">
      <Navbar user={user} onLogout={onLogout} />
      <div className="search-bar-wrapper">
        <div>
      <div className="search-bar"
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "500px",
          display: "flex",
          justifyContent: "start",
          gap: "0.5em",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Add this line for box shadow
        }}
      >

        <img src={searchLogo} alt="looking-glass" height={16} width={16} />
        <input
          type="text"
          // value={query}
          // onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            border: 'none',
            zIndex: "1",
          }}
        />
        </div>
      </div>
    </div>
    </div>
  );
}

export default SearchPage;
