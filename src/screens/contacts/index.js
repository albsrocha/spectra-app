import React, { useState } from 'react';
import "boxicons"

import "./index.css"

function Contatos() {

    const [cad, setCad] = useState({}); // vamos usar para pegar mudanças nos campos

    const [dados, setDados] = useState([    // usado para pegar mais pessoas cadastradas e guardar
        { nome: "Alberto", email: "albsrocha@gmail.com", telefone: "(21) 98177-4852", whatsapp: "on" },
        { nome: "Ana", email: "ana@gmail.com", telefone: "(22) 99997-1852", whatsapp: "off" },
    ]);

    const handleCad = (event) => {    //função responsável por pegar alterações
        setCad({
            ...cad,
            [event.target.name]: event.target.value
        })
    }

    const handleDados = (e) => {  //função responsável por adicionar contatos
        setCad()
        dados.push(cad)

    }



    return (
        <div className="container">
            <div className="input-area">  {/* area de inserção dos cadastros */}
                <input
                    type="text"
                    className="input-type-text"
                    name="nome"
                    placeholder="Inserir nome completo"
                    autoComplete="off"
                    onChange={handleCad}
                />
                <input
                    type="email"
                    className="input-type-text"
                    name="email"
                    placeholder="Inserir e-mail "
                    autoComplete="off"
                    onChange={handleCad}
                />
                <input
                    type="tel"
                    className="input-type-text"
                    name="telefone"
                    placeholder="Inserir telefone"
                    autoComplete="off"
                    onChange={handleCad}
                />
                <div className="check">
                    <input
                        type="checkbox"
                        name="whatsapp"
                        onChange={handleCad}
                    />
                    <label for="whatsapp">Whatsapp</label>
                </div>

                <button className="btn" onClick={handleDados}> Cadastrar</button>

            </div>

            <div className="list-area">  {/* area de listagens dos cadastros */}
                <div className="tabela">
                    <span>nome</span>
                    <span>telefone</span>
                    <span>E-mail</span>
                    <span>Possui Whatsapp?</span>
                </div>

                {typeof dados !== "undefined" && dados.map((value) => (  //caso não tenha valor para não gerar erro

                    <div className="lista">
                        <span className="lista-data">{value.nome}</span>
                        <span className="lista-data">{value.email}</span>
                        <span className="lista-data">{value.telefone}</span>
                        <span className="lista-data"><input type="checkbox" defaultChecked={value.whatsapp} /> Whatsapp</span>
                        <box-icon name='trash-alt'></box-icon>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Contatos;