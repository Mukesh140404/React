import React from 'react'
import Card from '../component/card'
import Imgcrd from '../component/Imgcrd'
import "./App.css"
function App() {
  const sizes = ["xs","s","m","xl"]
  let product_name = "Kurta Paijama"
  let price = 210
  let avialable = true
  return (
    <>
    <div class="flex w-full" id="cont">
    <Imgcrd src="./public/img1.jpg" text="Poki 1" desc="rank 2"/>
    <Imgcrd src="./public/new.png" text="Poki 2" desc="rank 4"/>
    <Imgcrd src="./public/new2.jpg" text="Poki 3" desc="rank 1"/>
    <Imgcrd src="./public/img1.jpg" text="Poki 1" desc="rank 2"/>
    <Imgcrd src="./public/new.png" text="Poki 2" desc="rank 4"/>
    <Imgcrd src="./public/new2.jpg" text="Poki 3" desc="rank 1"/>
    <Imgcrd src="./public/img1.jpg" text="Poki 1" desc="rank 2"/>
    <Imgcrd src="./public/new.png" text="Poki 2" desc="rank 4"/>
    <Imgcrd src="./public/new2.jpg" text="Poki 3" desc="rank 1"/>
    </div>
    <Card />
    <Card src = "./public/vite.svg" pd_name = {product_name} price = {price} avialable={avialable} sizes ={sizes} />
    <Card src = "./src/assets/react.svg" pd_name = {product_name} price = {price} avialable={false} sizes ={sizes.slice(1,3)} />
    </>
  )
}

export default App
