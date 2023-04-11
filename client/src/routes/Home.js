import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home(props) {
  const [itemStatus, setItemStatus] = useState(" Posted ");
  const location = useLocation();
 
  function buyItem() {
    alert('Are you sure you want to do buy this item?');
    setItemStatus(" Sold ");
  }

  function removeItem() {
    alert('Are you sure you want to do remove this item?');
    setItemStatus(" Removed ");
  }

  return (
  
    <div className="product">
     {location.state?.itemName.length >0  && 
        <div key={location.state.itemName} className="productCard">
          
                <img src={URL.createObjectURL(location.state.image)} alt="product-img" className="productImage"></img>
            
          <div>
            <h3 className="productName">{location.state.itemName}</h3>
            <p>{location.state.itemDescription}</p>
            <span>Price: {location.state.itemPrice} ETH </span>
            <div className="productTime">
              Pick up Location : {location.state.itemPickupLocation}
            </div>
            <h4>Status:{itemStatus} </h4>
          </div>
          <div>
            <button className="button" onClick={buyItem}>
              Buy
            </button>
            <button className="button" onClick={removeItem}>
              Remove
            </button>
          </div>
        </div>
}

    </div>
  );
}
