
import React, { useState, useEffect } from 'react';

// import Header from './components/header';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getAmazonData();

  }, [])

  const getAmazonData = async () => {

    const data = await fetch("http://localhost:3000/products");
    const response = await data.json();
    console.log(response);
    setData(response);
  }
  return (
   
    <div className="container">
      <div className="row">
        {
          data.map(ele => (
            <div class="card-deck">
            <div class="card">
              <div className="row">
                <div className="col-4">
                  <img src={ele.image} class="img-fluid p-5" alt="..." />
                  </div>
                <div className="col-8"> 
                  <div class="card-body">
                  <h5 class="card-title">{ele.brand}</h5>
                  <p className="card-text"> Rating:{ele.rating}</p>
                  <p className="card-text"> Price:{ele.price}</p>
                  <p className="card-text"> Offer Price:{ele.offerprice}</p>
                </div>
                </div>
              </div>
            </div>
          </div>

         
            
          ))
        }
      </div>
    </div>
  );
}

export default App;
