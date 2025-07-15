
import React, { useContext, useEffect, useState } from 'react'
import SimpleSlider from './SimpleSlider'
import { authContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const Home = () => {

  const [apiData, setApiData] = useState([])

   const {addToCart,search} = useContext(authContext)
  

  const apifetch = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=0')
    const data = await res.json()
    // console.log(data)
    setApiData(data.products)
  }

  const handleCart=(data)=>{
    addToCart(data)
  }

  // console.log(apiData)

  useEffect(() => {
    apifetch()
  }, [])

    //search function
const filterData = apiData.filter((ele)=>ele.title.toLowerCase().includes(search.toLowerCase()))
    return (
    <>
    <SimpleSlider/>
      <div className=' grid lg:grid-cols-4 m-10 gap-5'>
        {
          filterData.map((ele, i) => (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700" key={i}>
              <img className="rounded-t-lg text-center" src={ele.thumbnail} />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ele.title}</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.description}</p>

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$ {ele.price}</h5>
                <div className=' flex gap-10'>
                  <button onClick={()=>handleCart(ele)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add To Cart
                  </button>
                  <Link className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Home