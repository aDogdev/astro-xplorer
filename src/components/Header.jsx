import "./Header.css";

function Header() {
  return (
    <header>
      <h1 className="logo">
        Space<span>X</span>plorer
      </h1>
      <button>Theme</button>
      <form className="search-form">
        <input type="search" placeholder="Starlink, Falcon, Galaxy..."></input>
        <select name="" id="">
          <option></option>
        </select>
        <input type="date" />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export { Header };
