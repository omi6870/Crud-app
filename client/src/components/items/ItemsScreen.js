import './itemsScreen.css';
import { Link ,useParams} from 'react-router-dom';
import { MdFastfood} from "react-icons/md";
import axios from 'axios';
import { useEffect, useState   } from 'react';


const ItemsScreen = () => {
  const [items , setItem] =useState([])
  const {id}= useParams();

  const fetchItmes = async ()=> {
    const { data } =await axios.get(`/api/items/${id}`);
console.log(data);
    setItem(data);
  }


  useEffect(()=>{
fetchItmes();
  });


  return (
    
    <div className="s-main">
      <div className="item-screen">
    <div className="s-img">
       <img src={items.image} alt="img" />
    </div>
    <div className="s-logo">
           <Link to="/"><h3>FOODIE</h3></Link>
            <MdFastfood/>
            </div>
  <div className='s-label'>
    <div className="s-name">
        <h2>Item Name : {items.itemName}</h2>
    </div>
    <div className="s-price">
        <h2>Price : {items.price}</h2>
    </div>
    </div>
    </div>

    </div>
  )
}

export default ItemsScreen;