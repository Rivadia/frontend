import React from 'react';

class ProfileModel extends React.Component {
    render(){
        return(
        
        <>
        <h1 className="profile_model_header">{this.props.encabezado}</h1> 
        <p className="profile_model_parrafo">{this.props.parrafo}</p>
        </>
        ) ;
    }

    
}

export default ProfileModel;
