import React, { useState } from 'react'
import Feature from '../../components/Feature/Feature'
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero'
import Products from '../../components/Products/Products'
import {product_data,product_dataTwo} from '../../components/Products/Data';


const Home = () => {
    return (
        <div>
            <Hero />
            <Products heading='Choose Your Favourite' linkTo='View All' scrollId='Pizzas' data={product_data}/>
            <Feature/>
            <Products heading='Sweet Treats for You' linkTo='View All' scrollId='Deserts' data={product_dataTwo}/>
            <Footer/>
        </div>
    )
}

export default Home
