import React, { Fragment, useState, useRef, useEffect } from "react";
import "../../pages/Seguimiento/seguimiento.css";

export function Seguimiento() {
  return (
    <Fragment>
      <div className='sidenav'>
        <nav className="nav flex-column">
          {/* <a href="/"> <img src="logo.svg" alt="logo" id="logo"/></a>
          <a className="nav-link active" href="/">Inicio</a>
          <a className="nav-link" href="registro-paquete">CREAR ORDEN</a>
          <a className="nav-link" href="seguimiento">ACTUALIZAR ORDEN</a> */}

          <a href=""> <img src="o.png" width="200" height="100" alt="logo" id="logo"/></a>
          <a className="nav-link" href="registro-paquete">CREAR ORDEN</a>
          <a className="nav-link" href="seguimiento">ACTUALIZAR ORDEN</a>
          <a className="nav-link" href="/">CERAR SESION</a>
          </nav>
      </div>
      <div className='main'>
      <blockquote className="blockquote text-center">

        <div className='container my-5 pb-3'>
          <h1 >ACTUALIZAR ORDEN</h1>
        </div>
        <div className='container py-5 parrafo'>
          <p>INGRESE LA ORDEN QUE DESEA ACTUALIZAR</p>
          <input type="text" placeholder="BUSCAR" />
          <button className="btn btn-dark ms-3" >Buscar</button>
        </div>
        <div className='container px-auto py-5'>
        <table className="table">
          <thead className="table-active">
            <tr>
              <th scope='col' className="fw-normal parrafo2">Numero envio</th>
              <th scope='col'className="fw-normal parrafo2"> Fecha de Solicitud</th>
              <th scope='col' className="fw-normal parrafo2">Ciudad Entrega</th>
              <th scope='col' className="fw-normal parrafo2">Direccion Entrega</th>
              <th scope='col' className="fw-normal parrafo2">Estado</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <th scope='row'className="fw-normal parrafo2">1035236598</th>
                <th className="fw-normal parrafo2">22/09/2022</th>
                <th className="fw-normal parrafo2">Medellin</th>
                <th className="fw-normal parrafo2">Bogota</th>
                <th className="fw-normal parrafo2">Completado</th>
              </tr>
          </tbody>
        </table>
        </div>
        <div className='container my-5 parrafo'>
        
        <button className='btn btn-dark'>ACTUALIZAR</button>
        </div>  
      </blockquote>
    </div>
 
  </Fragment>

  );
}

export default Seguimiento;