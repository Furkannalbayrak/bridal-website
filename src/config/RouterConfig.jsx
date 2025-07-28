import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Collection from '../components/Collection'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import ProductDetail from '../components/ProductDetail'
import Features from '../components/Features'
import FixHeader from '../components/FixHeader'

function RouterConfig() {
    return (
        <div>
            <Routes>
                <Route path='/' element={
                    <>
                        <Header />
                        <Hero />
                        <Collection /> 
                    </>
                } />

                <Route path="/gelinlik-modeli/:id"  element={
                    <>
                        <FixHeader/>
                        <ProductDetail/>
                    </>
                } />

            </Routes>
        </div>
    )
}

export default RouterConfig