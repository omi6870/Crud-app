
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LandingPage from './components/screens/LandingPage';
import {Route , Routes} from "react-router-dom";
import MyItems from './components/items/MyItems';
import LoginScreen from './components/login/LoginScreen';
import RegisterScreen from './components/register/RegisterScreen';
import ItemsScreen from './components/items/ItemsScreen';
import CreateItem from './components/items/CreateItem';
import SingleItem from './components/items/SingleItem';
import { useState } from 'react';

function App() {


  const [search ,setSearch] = useState("")
  console.log(search);
  return (
    <>
    <Header setSearch={setSearch}/>
  
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/myitems' element={<MyItems  search={search}/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      <Route path='/itemsScreen/:id' element={<ItemsScreen/>}/>
      <Route path='/createitems' element={<CreateItem/>}/>
      <Route path='/item/:id' element={<SingleItem/>}/>

    </Routes>
   
    <Footer/>
    
    </>
  );
}

export default App;
