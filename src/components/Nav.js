function Nav(props){
  
  const {isHeader, textLinkFooter, hrefLinkFooter} = props

  if(isHeader){
    return (
      <nav className="header__navbar"> 
      <a className="header__link" href="#">Home</a>
      <a className="header__link" href="#">Category</a>
      <a className="header__link" href="#">Contact Us</a>
      <span className="material-icons">shopping_cart </span>
    </nav>
  );
  }else{
    return (
      <nav className="header__navbar"> 
      <a href={hrefLinkFooter}>{textLinkFooter}</a>
    </nav>
  );
  }
    
};

export default Nav