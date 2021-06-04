import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    //Llamar a la url para consumir la api
    window
      .fetch('api/avo')
      .then((response) => response.json())
      .then(
        //Desectruruamos la info del json
        ({ data, length }) => {
          setProductList(data)
        }
      )
  }, [])

  console.log(productList)
  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {productList.map((product) => {
        return <div>{product.name}</div>
      })}
    </div>
  )
}

export default HomePage
