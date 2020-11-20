import React, {Component, Fragment} from 'react';
import './App.css';
import Card from './components/card/Card';

class App extends Component{
  render(){
    return (
      <div className="contenedor">
  
      {/** Tarjeta */}
      <Card />
  
      {/** Contenedor Boton Abrir Formulario */}
      <div class="contenedor-btn">
        <button class="btn-abrir-formulario" id="btn-abrir-formulario">
          <i class="fas fa-plus"></i>
        </button>
      </div>
  
      {/** Formulario */}
      <form action="" id="formulario-tarjeta" class="formulario-tarjeta">
        <div class="grupo">
          <label for="inputNumero">Número Tarjeta</label>
          <input type="text" id="inputNumero" maxlength="19" autocomplete="off" />
        </div>
        <div class="grupo">
          <label for="inputNombre">Nombre</label>
          <input type="text" id="inputNombre" maxlength="19" autocomplete="off" />
        </div>
        <div class="flexbox">
          <div class="grupo expira">
            <label for="selectMes">Expiracion</label>
            <div class="flexbox">
              <div class="grupo-select">
                <select name="mes" id="selectMes">
                  <option disabled selected>Mes</option>
                </select>
                <i class="fas fa-angle-down"></i>
              </div>
              <div class="grupo-select">
                <select name="year" id="selectYear">
                  <option disabled selected>Año</option>
                </select>
                <i class="fas fa-angle-down"></i>
              </div>
            </div>
          </div>
  
          <div class="grupo ccv">
            <label for="inputCCV">CCV</label>
            <input type="text" id="inputCCV" maxlength="3" />
          </div>
        </div>
        <button type="submit" class="btn-enviar">
          Enviar
        </button>
      </form>
    </div>
    );
  }
}

export default App;
