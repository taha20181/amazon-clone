import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
          <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Hero Image" />
      </div>
      
      <div className="home__row">

        <Product
        id="74505014" 
        title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
        price={199900}
        rating={4}
        image="https://images-eu.ssl-images-amazon.com/images/I/41Y2Vs8NgSL._AC_US160_.jpg"
        />

        <Product
        id = "0F056655" 
        title="Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
        price={598}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SX679_.jpg"
         />

      </div>

      <div className="home__row">
        <Product
          id = "34985402"
          title = "New Apple Watch SE (GPS + Cellular, 40mm) - Space Gray Aluminium Case with Charcoal Sport Loop"
          price = {399}
          rating = {4}
          image = "https://images-na.ssl-images-amazon.com/images/I/81BLUF2lwnL._AC_SX679_.jpg"
        />

        <Product
          id = "95055602"
          title = "Apple Airpods Pro with Active Noice Cancellation"
          price = {229}
          rating = {3}
          image = "https://images-na.ssl-images-amazon.com/images/I/71bhWgQK-cL._AC_SX679_.jpg" 
        />

        <Product
          id = "95903301" 
          title="Apple Pencil (2nd Generation)"
          price={129.39}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/41S3MKU9TjL._SX679_.jpg"
        />

      </div>

      <div className="home__row">

        <Product
          id = "57871016" 
          title="Apple iPhone 11 Pro Max (64GB) - Space Grey"
          price={500.00}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61tuQdl2yLL._SX679_.jpg"
        />
          
        <Product
          id = "94430012"
          title = "Apple iPod Touch (32 GB) - Blue (Latest Model)"
          price = {199}
          rating = {3}
          image = "https://images-na.ssl-images-amazon.com/images/I/81CNbIFaA4L._AC_SX679_.jpg" 
        />
        
      </div>


      <div className="home__row">

      <Product
          id = "12192442" 
          title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 3.1GHz 6-core 10th-Generation Intel Core i5 Processor, 256GB SSD Storage)"
          price={199900}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71XyLsP7WjL._SX679_.jpg"
        />

      <Product
        id = "57389401"
        title = "Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
        price={10000}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SX679_.jpg" 
      />

      <Product
        id = "96901123"
        title = "Apple TV 4K (32 GB, Latest Model)"
        price = {179}
        rating = {4}
        image = "https://images-na.ssl-images-amazon.com/images/I/51Y-Dulc3bL._AC_SX679_.jpg" 
      />
      
      </div>

    </div>
  )
}

export default Home
