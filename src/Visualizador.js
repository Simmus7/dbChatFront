import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Visualizador.css';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from "sweetalert2";

export class Visualizador extends Component {
    constructor(props){
        super(props)

        
        this.onChangeCodigo = this.onChangeCodigo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            codigo : '',
            mensajes: [],
            
        }
    }
    async onSubmit(e) {
        e.preventDefault();
 
        const codigo = {
            codigo: this.state.codigo
        }
        console.log(codigo.codigo)
        
        await axios.get('https://dbchatback2.herokuapp.com/mensaje', {params: codigo}).then( response => {
            this.setState({
                mensajes: response.data
            })

        })
    }

    onChangeCodigo (e) {
        console.log(this.state.codigo)
        let codigo = e.target.value
        var codigoInt = 0
        if(!isNaN(codigo) && codigo !== ''){
            codigoInt = parseInt(codigo)
        }
        this.setState({
            codigo: codigoInt
          })
    }

    render () {
        return (
        <div>
            <div className='container-visual'>
                <h1>
                    Visualiza tus mensajes
                </h1>
                <br/>
                <div className="form-container">
                    <Form className="signup-form" onSubmit={this.onSubmit}>
                        <Form.Group>
                            <div className='row'>
                                <div className='col-11'>
                                    <Form.Control className="name-input" type="text" placeholder="Código" id="codigo2" value={this.state.codigo}
                                        onChange={this.onChangeCodigo}>
                                    </Form.Control>
                                </div>
                                
                                <div className='col-md-1'>
                                    <Button className="submit-button" value="submit" type="submit">Consultar</Button>
                                </div>
                            </div>
                            <br/>
                        </Form.Group>
                    </Form>
                </div>
                <div>
                    {this.state.mensajes!=='No hay mensajes bajo ese código'? this.state.mensajes.map((m,i)=>(
                        <div key={m._id}><p>{i+1}. {m.mensaje}</p></div>
                    )) : <div>{this.state.mensajes}</div>}
                </div>
               
            </div>

        </div>
        )
    }
  
}