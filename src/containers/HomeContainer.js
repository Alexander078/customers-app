import React from 'react'
//import { Link } from 'react-router-dom';
import AppFrame from '../components/AppFrame'
import CustomersActions from './../components/CustomersActions';
import { useHistory } from 'react-router-dom';

const HomeContainer = () => {

    const history = useHistory();

    const handleOnClick = () => {
        console.log("handleOnClick")        
        history.push('/customers')
    }
    return (
        <div>
            <AppFrame header='Home' body={
                <div>
                    Esta es la pantalla inicial
                   <CustomersActions>
                       <button onClick={handleOnClick}>Listado de Clientes</button>
                       
                   </CustomersActions>

                </div>
            } ></AppFrame>
        </div>
    )
}

export default HomeContainer
