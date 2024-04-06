import logo from "../../Img/logo.png";
function Header() {
  return (
    <header>
    
      <nav>
          <img src={logo} alt="logo-tech-do-bem" />
          <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Exames</a></li>
          <li><a href="#">Doações</a></li>
          </ul>
          <div className="nav-svg">
            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><rect y="11" width="24" height="2" rx="1"/><rect y="4" width="24" height="2" rx="1"/><rect y="18" width="24" height="2" rx="1"/></svg>
          </div>
      </nav>
        
    </header>
  );
}

export default Header;
