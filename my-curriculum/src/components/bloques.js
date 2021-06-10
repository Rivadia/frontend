import React from 'react';

import './styles/styles.css';
import ProfileModel from './profile';


class Model extends React.Component{
  render(){
      return(
      <div className ="model">
        <header className="model_header">
          <h1 className="model_section-name" >Josué Israel Rivas Díaz
          </h1>
          <img className="model_avatar" src="https://media-exp1.licdn.com/dms/image/C4E03AQH94LwxokuBeQ/profile-displayphoto-shrink_800_800/0/1561072198656?e=1628726400&v=beta&t=BVl37qw_lx3mF02oo4O-3WaHT84iHXHcgeWs2Lfz3U8" alt="Foto de perfil" />
         
          <p className="model_header job">Game developer & Game Desing</p>

          <li className="model_header dataList">
            <ul>Numbre phone: 5537572085</ul>
            <ul>Email: rivadia@gmail.com</ul>
            <ul>Web page</ul>
          </li>

          <p className="model_header direction">Priv paseo Madreperla Maz 53 Lt8  viv 149</p>
        </header>

        <body>
          
          <div className= "profile_model_container">
          <ProfileModel encabezado="Perfil" parrafo="Soy artista visual, diseñador y desarrollador de juegos, actualmente me dedico a forma jóvenes universitarios para ser futuros desarrolladores dentro de la industria del videojuego y la realidad aumentada. Apasionado de la tecnología y buscando abrirse camino en este mundo de formación acelerada" />
          </div>
             


        </body>
      </div>)


  }
  
}

export default Model;