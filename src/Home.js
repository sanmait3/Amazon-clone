import React from 'react';
import "./Home.css"
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

            {/* Component : Product */}
            {/* Props : Product id, title, price, rating, image */}
            <div className="home__row">
                <Product 
                    id="12321341" 
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses" 
                    price={11.96} 
                    rating={5} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" 
                />   

                <Product 
                    id="23445930" 
                    title="KUPPET Stand Mixer, 8-Speed Electric Mixer, Tilt-Head Food Mixer with Dough Hook, Wire Whip & Beater, 4.7QT Stainless Steel Bowl, White" 
                    price={89.99} 
                    rating={4} 
                    image="https://images-na.ssl-images-amazon.com/images/I/61AIbBDgDLL._AC_SL1500_.jpg" 
                />   
            </div>
            <div className="home__row">
                <Product 
                    id="3254354345" 
                    title="Fossil Gen 5 Carlyle Stainless Steel Touchscreen Smartwatch with Speaker, Heart Rate, GPS, NFC, and Smartphone Notifications" 
                    price={282.35} 
                    rating={4} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71ERfTd2-KL._AC_SX679._SX._UX._SY._UY_.jpg" 
                />   

                <Product 
                    id="23445930" 
                    title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal" 
                    price={18.99} 
                    rating={4} 
                    image="https://images-na.ssl-images-amazon.com/images/I/61IxWv3ecpL._AC_SL1000_.jpg" 
                />   

                <Product 
                    id="3254354345" 
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)" 
                    price={1039.00} 
                    rating={5} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg" 
                />   
            </div>

            <div className="home__row">
                <Product 
                    id="90829332" 
                    title="HP 600 G2 Desktop Computer PC, Intel i5, 16GB, 2TB, Windows 10 Pro, New 23.6 FHD V7 LED Monitor, Microsoft Office 365 Personal, New 16GB Flash Drive, Wireless Keyboard & Mouse, WiFi, DVD" 
                    price={539.99} 
                    rating={4} 
                    image="https://images-na.ssl-images-amazon.com/images/I/819PdLWL1WL._AC_SL1500_.jpg" 
                />   
            </div>

        </div>
    )
}

export default Home
