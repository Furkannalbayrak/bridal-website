import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Collection from '../components/Collection'
import ProductDetail from '../components/ProductDetail'
import AllCollection from '../components/AllCollection'
import ScrollToTop from '../scrollSetting/ScrollToTop'

function RouterConfig() {
    return (
        <div>
            <ScrollToTop/>
            <Routes>
                <Route path='/' element={
                    <>
                        <Header />
                        <Hero />
                        <Collection />
                    </>
                } />

                <Route path="/gelinlik-modeli/:id" element={
                    <>
                        <Header />
                        <ProductDetail />
                    </>
                } />

                <Route path='tum-gelinlik-modelleri' element={
                    <>
                        <Header />
                        <AllCollection />
                    </>
                } />

                <Route path='tum-gelinlik-modelleri/:category/:modelName' element={
                    <>
                        <Header />
                        <AllCollection />
                    </>
                } />

            </Routes>
        </div>
    )
}

export default RouterConfig