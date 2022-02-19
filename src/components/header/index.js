import "./index.css";
import "boxicons";


function Header(){
    return(
    <header> {/* cabeçalho e navbar são separados, pode ser reutilizado em outras paginas */}
          <div className="header-top-logo">
            <box-icon name='cube-alt' type='solid' size="md"/>
            <h1>spectra</h1>
          </div>

        <div className="header-top-buttom">
          <a href="#"><box-icon type='solid' name='user-circle'size="md"  animation='tada-hover'></box-icon></a>
          <box-icon name='log-out-circle' size="md" animation='tada-hover'></box-icon>
          </div>
      </header>
    );
}

export default Header;