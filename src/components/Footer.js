import Nav from "./Nav"

function Footer() {
  return (
      <footer className="footer">
        <Nav 
        textLinkFooter="Instagram" 
        hrefLinkFooter="https://www.instagram.com"
        />
        <p>Copyright &copy; 2023</p>
      </footer>
  );
};

export default Footer
