import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  const isHeader = true;

  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">Aspen</h1>
      </Link>
      <Nav isHeader={isHeader} />
    </header>
  );
};

export default Header;
