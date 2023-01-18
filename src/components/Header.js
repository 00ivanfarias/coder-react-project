import Nav from "./Nav";

const isHeader = true;

function Header() {
  return (
      <header className="header">
        <h1 className="header__title">Aspen</h1>
        <Nav isHeader={isHeader} /> 
      </header>
  );
};

export default Header
