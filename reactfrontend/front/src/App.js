import React from 'react';
import { Route } from "react-router-dom";


import Home from './components/Home';
import LoginCredentials from './components/Listing/Login';
import Host from './components/Listing/Register';
import ListingInput from './components/Listing/ListingInput';


 function App () {
 
   return (
     <div>
      
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={LoginCredentials} />
      <Route path="/register" component={Host}/>
      <Route path="/listing" component={ListingInput}/>

     </div>
   );
 }

    
export default App;