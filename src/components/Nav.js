import { NavLink } from "react-router-dom";

 
const Nav = (props) =>{

  const {isHeader, hrefLinkFooter, textLinkFooter} = props

  if(isHeader){
    return ( 
    <nav className="header__navbar">
      <NavLink to="/category/men's clothing" className="header__link">Men</NavLink>
      <NavLink to="/category/women's clothing" className="header__link">Women</NavLink>
      <NavLink to="/category/electronics" className="header__link">Electronics</NavLink>
      <NavLink to="/cart">
        <span className="material-icons">shopping_cart</span>
      </NavLink>
    </nav> )
  }else{
    return ( 
    <nav className="footer_navbar">
      <a href={hrefLinkFooter} className="footer__link">{textLinkFooter}</a>
    </nav>
    )
  }
}

export default Nav