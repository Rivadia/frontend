import React from 'react';

import './styles/styles.css'

class Model extends React.Component{
  render(){
      return(
      <div class ="model">
        <header class="model_header">
          <h1 class="model_section-name" >Josué Israel Rivas Díaz
          </h1>
          <img class="model_avatar" src="https://media-exp1.licdn.com/dms/image/C4E03AQH94LwxokuBeQ/profile-displayphoto-shrink_800_800/0/1561072198656?e=1628726400&v=beta&t=BVl37qw_lx3mF02oo4O-3WaHT84iHXHcgeWs2Lfz3U8" alt="Foto de perfil" />
         
          <p class="model_header job">Game developer & Game Desing</p>

          <li>
            <ul>Numbre phone: 5537572085</ul>
            <ul>Email: rivadia@gmail.com</ul>
            <ul>Web page</ul>
          </li>

          <p>Priv paseo Madreperla Maz 53 Lt8  viv 149</p>
        </header>
      </div>)


  }
  
}

export default Model;