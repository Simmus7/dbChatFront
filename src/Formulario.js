import React, { Component } from 'react';
import './Formulario.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from "sweetalert2";

export class Formulario extends Component {
    constructor(props){
        super(props)

        this.onChangeMensaje = this.onChangeMensaje.bind(this);
        this.onChangeCodigo = this.onChangeCodigo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            mensaje : '',
            codigo : '',
        }
    }

    async onSubmit(e) {
        e.preventDefault();
        const mensaje = {
            mensaje: this.state.mensaje,
            codigo: this.state.codigo
            
        }
        
        axios.post('https://dbchatback2.herokuapp.com/mensaje', mensaje).then( () => {
            Swal.fire({
            title: 'Mensaje agregado!'
          })
        })
        this.setState({
            mensaje: '',
            codigo: ''
          })


    }
    onChangeMensaje (e) {
        this.setState({
            mensaje: e.target.value
          })

    }
    onChangeCodigo (e) {
        this.setState({
            codigo: e.target.value
          })
    }

    render () {
        return (
            <div className='container-form'>
                <h1>
                    Registra tus mensajes
                </h1>
                <br/>
                <div className='row'>
                    <div className="form-container">
                        <Form className="signup-form" onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Control className="name-input" type="text" placeholder="Código" id="codigo" value={this.state.codigo}
                                    onChange={this.onChangeCodigo}>
                                </Form.Control>
                                <br/>
                                <textarea className="form-control" type="text" placeholder="Mensaje" id="mensaje" rows="3" value={this.state.mensaje}
                                    onChange={this.onChangeMensaje}>
                                </textarea>
                                <br/>
                                <Button className="submit-button" value="submit" type="submit">Enviar</Button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
    
}