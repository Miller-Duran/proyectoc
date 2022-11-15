import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./registroPaquete.css";
import NavBarComp from "../../components/NavbarComp/NavbarComp";

const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      {/* <NavBarComp> </NavBarComp> */}
      <div className='sidenav'>
        <nav className="nav flex-column">
          {/* <a href=""> <img src="logo.svg" alt="logo" id="logo" /></a> */}
          {/* <a className="nav-link active" href="/">Inicio</a> */}
          <a href=""> <img src="o.png" width="200" height="100" alt="logo" id="logo"/></a>
          <a className="nav-link" href="registro-paquete">CREAR ORDEN</a>
          <a className="nav-link" href="seguimiento">ATUALIZAR ORDEN</a>
          <a className="nav-link" href="/">CERRAR SESION</a>
        </nav>
      </div>
      <div className="main">
        <header>
          {" "}
          <div className="Cabecera d-flex justify-content-center">
            {" "}
            <h1 className="h1 mt-3"> CREAR ORDEN</h1>{" "}
          </div>{" "}
        </header>
        <div className="cuadro"> </div>
        <div className="container">
          <Formik
            initialValues={{
              dimensionPaquete: "",
              ciudadPartida: "",
              ciudadDestino: "",
              remitente: "",
              direccionRecibe: "",
              pesoPaquete: "",
              envioRapido: "",
            }}
            validate={(valores) => {
              let errores = {};

              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              resetForm();
              console.log("Formulario enviado");
              cambiarFormularioEnviado(true);
              setTimeout(() => cambiarFormularioEnviado(false), 5000);
            }}
          >
            {({ errors }) => (
              <Form className="formulario">
                <form>
                  {/* <label> */}
                    {/* <h4> Ingrese descripcion del paquete: </h4> */}
                    {/* <input type="text" name="name" /> */}
                    {/* <textarea name="name"  cols="10" rows="3"></textarea> */}
                  <label for="start">Seleccione fecha:</label>
                  <input type="date" id="start" name="trip-start"
                  value="2018-07-22"
                  min="2018-01-01" max="2018-12-31"></input>

                  <label for="start">Seleccione hora:</label>
                  <input type="time" name="hora" min="18:00" max="21:00" step="3600" />
                  {/* </label> */}
                </form>
                <div>
                  <div className="enunciados">
                    {" "}
                    <label htmlFor="dimensionPaquete">
                      Dimensiones del paquete
                    </label>{" "}
                  </div>
                  <div className="campos">
                    {" "}
                    <Field
                      type="text"
                      id="dimensionPaquete"
                      name="dimensionPaquete"
                      placeholder="1x1 cm"
                    />{" "}
                  </div>
                  <ErrorMessage
                    name="dimensionPaquete"
                    component={() => (
                      <div className="error">{errors.dimensionPaquete}</div>
                    )}
                  />
                </div>

                <div>
                  <div className="enunciados">
                    {" "}
                    <label htmlFor="pesoPaquete">Peso del paquete</label>{" "}
                  </div>
                  <div className="campos">
                    {" "}
                    <Field
                      type="text"
                      id="pesoPaquete"
                      name="pesoPaquete"
                      placeholder="1kg"
                    />{" "}
                  </div>
                  <ErrorMessage
                    name="pesoPaquete"
                    component={() => (
                      <div className="error">{errors.pesoPaquete}</div>
                    )}
                  />
                </div>






                <div>
                  <div className="enunciados">
                    {" "}
                    <label htmlFor="ciudadPartida">Direccion de Recogida</label>{" "}
                  </div>
                  <div className="campos">
                    {" "}
                    <Field
                      type="text"
                      id="ciudadPartida"
                      name="ciudadPartida"
                      placeholder="mz i casa 89997"
                    />{" "}
                  </div>
                  <ErrorMessage
                    name="ciudadPartida"
                    component={() => (
                      <div className="error">{errors.ciudadPartida}</div>
                    )}
                  />
                </div>
                <div>
                  <div className="enunciados">
                    {" "}
                    <label htmlFor="ciudadDestino">Ciudad de Recogida</label>{" "}
                  </div>
                  <div className="campos">
                    <Field
                      type="text"
                      id="ciudadDestino"
                      name="ciudadDestino"
                      placeholder="Tunja"
                    />{" "}
                  </div>
                  <ErrorMessage
                    name="ciudadDestino"
                    component={() => (
                      <div className="error">{errors.ciudadDestino}</div>
                    )}
                  />
                </div>
                <div>
                  <div className="enunciados">
                    {" "}
                    <label htmlFor="remitente">Nombre Destinatario</label>{" "}
                  </div>
                  <div className="campos">
                    <Field
                      type="text"
                      id="remitente"
                      name="remitente"
                      placeholder="Pancracia Tocarruncho"
                    />{" "}
                  </div>
                  <ErrorMessage
                    name="remitente"
                    component={() => (
                      <div className="error">{errors.remitente}</div>
                    )}
                  />
                </div>


                <div>
                  <div className="enunciados">
                    {" "}
                    <label htmlFor="remitente">Cedula Destinatario</label>{" "}
                  </div>
                  <div className="campos">
                    <Field
                      type="text"
                      id="remitente"
                      name="remitente"
                      placeholder="12323233"
                    />{" "}
                  </div>
                  <ErrorMessage
                    name="remitente"
                    component={() => (
                      <div className="error">{errors.remitente}</div>
                    )}
                  />
                </div>


                <div>
                  <div className="enunciados">
                    {" "}
                    <label htmlFor="direccionRecibe">
                      Direccion de Entrega
                    </label>{" "}
                  </div>
                  <div className="campos">
                    <Field
                      type="text"
                      id="direccionRecibe"
                      name="direccionRecibe"
                      placeholder="fake street 123"
                    />{" "}
                  </div>
                  <ErrorMessage
                    name="direccionRecibe"
                    component={() => (
                      <div className="error">{errors.direccionRecibe}</div>
                    )}
                  />
                </div>

                <div>
                  <div className="enunciados">
                    {" "}
                    <label htmlFor="direccionRecibe">
                      Ciudad de Entrega
                    </label>{" "}
                  </div>
                  <div className="campos">
                    <Field
                      type="text"
                      id="direccionRecibe"
                      name="direccionRecibe"
                      placeholder="Bucaramanga"
                    />{" "}
                  </div>
                  <ErrorMessage
                    name="direccionRecibe"
                    component={() => (
                      <div className="error">{errors.direccionRecibe}</div>
                    )}
                  />
                </div>



               
                {/* <div>
                  <label htmlFor="EnvioRapido" >
                    
                    {" "}
                    Envio Rapido
                    <Field type="radio" name="envioRapido" value="Si" /> Si
                    <Field type="radio" name="envioRapido" value="No" /> No
                  </label>
                </div> */}
                <div class="contenedor">
               <button class="centrado" className='btn btn-dark'>crear</button>
                </div>
                {formularioEnviado && (
                  <p className="exito">Formulario enviado con exito!</p>
                )}
              </Form>
            )}
          </Formik>
        </div>

      </div>

    </>
  );
};

export default Formulario;
