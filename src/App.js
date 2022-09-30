import React, {useEffect} from 'react'
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment'
import Orders from './components/Orders'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

  const promise = loadStripe('pk_test_51LnSRtSIO53InZctqLzKIS9cRfpF2sfxtOfl4gkg7nhidjiXL0QYFjl0pP0zdtSwiDoM8aEejokhVSG9NfB3NnHZ00pIENIacj')

function App() {

  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>' , authUser);

      if(authUser){
        //the user just logged in // the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/orders" element={[<Header/>,<Orders/>]} />
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />,<Checkout/>]} />
          <Route path="/payment" element={[<Header />,<Elements stripe={promise}><Payment/></Elements>]} />
          <Route path = "/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
