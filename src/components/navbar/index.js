import "./index.css";
import React,{useState} from "react";

function Navbar() {

    const[atv,setAtv] = useState(false);  //para setar valor com o clique do dropdown menu mobile

    const mudarEstado = () =>{  //para ajustar o clique do dropdown menu mobile
        setAtv(!atv)
    }

    return (
        <>
        <div className="menu"> {/* menu escondido para telas menores que 900px */}
        <label for="btmenu" onClick={mudarEstado}>&#9776;</label>

        </div>
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Contatos</a>
                    <ul>
                        <li><a href="#">Frequentes</a></li>
                        <li><a href="#">Grupos</a></li>
                        <li><a href="#">Empresas</a></li>
                    </ul>
                </li>
                <li><a href="#">Agenda</a>
                    <ul>
                        <li><a href="#">Novo</a></li>
                        <li><a href="#">Eventos</a></li>
                        <li><a href="#">Grupos</a></li>
                    </ul>
                </li>
                <li><a href="#">Configurações</a>
                    <ul>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Suporte</a></li>
                        <li><a href="#">Geral</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </>
    );

}

export default Navbar;