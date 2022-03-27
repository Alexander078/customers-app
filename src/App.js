import {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import CustomersContainer from './containers/CustomersContainer';
import HomeContainer from './containers/HomeContainer';


class App extends Component {

  renderHome = () => <h1>Home</h1>

  renderCustomerContainer = () => <h1>Customer Contianer</h1>

  renderCustomerListContainer = () => <h1>Customer List Contianer</h1>

  renderCustomerNewContainer = () => <h1>Customer New Contianer</h1>
 
  
  render() { 
    
  return (
    <Router>
      
      <div>
      <Route exact path="/"  component= {HomeContainer}/>
      <Route exact path="/customers" component={CustomersContainer} />
      <Switch>
        <Route path="/customers/new" component={this.renderCustomerNewContainer} />   
        <Route path="/customers/:dni" component={this.renderCustomerContainer} />      
      </Switch>           
      </div>     
     
    </Router>
  ) }
}

export default App;
