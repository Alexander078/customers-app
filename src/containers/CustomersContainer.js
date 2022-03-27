import React from 'react'
import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame'
import CustomersList from './../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import { useHistory } from 'react-router-dom';


const customers = [
    {
       "dni": "270000000",
       "name" : "Juan Perez",
       "age" : 37 
    },
    {
        "dni": "300000000",
        "name" : "Otro",
        "age" : 35 
     },
     {
        "dni": "330000000",
        "name" : "Luis Martinez",
        "age" : 32 
     }
];




const CustomersContainer = props => {

    const history = useHistory()

    
    const handleAddNew = () => {
         history.push('/customers/new')
     }

    const renderBody = customers => (
       <div>
            <CustomersList customers={customers} urlPath={'customers/'} />
            <CustomersActions> 
            <button onClick={handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>    
       </div>   
      
    )
    return (
        <div>
            <AppFrame header={'Listado de Clientes'} body={ renderBody(customers)}></AppFrame>
            
        </div>
    )
}

CustomersContainer.propTypes = {

}

export default CustomersContainer
