import React from "react"
import { createContext, useEffect, useState } from "react"
import toast from "react-hot-toast"

export const authContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [cart, setCart] = useState([])
    const [search, setSearch] = useState('')
    // console.log(user)

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
        if (loggedInUser) {
            setUser(loggedInUser)
        }
         const retreiveCart =   JSON.parse(localStorage.getItem('cart')) || []
        if(retreiveCart){
            setCart(retreiveCart)
        }

    }, [])
    console.log(cart)

    const login = (email, password) => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user && user.email === email && user.password === password) {
            toast.success('User LoggedIn Successfully..')
            localStorage.setItem('loggedInUser', JSON.stringify(user))
            setUser(user)
        }
        else {
            toast.error('Invalid Credentials..')
        }
    }

    const logout=()=>{
        localStorage.removeItem('loggedInUser')
        setUser(null)
    }
    const addToCart =(cartItem)=>{
        const existingCart = JSON.parse(localStorage.getItem('cart'))||[]
        const updatedCart = [...existingCart,cartItem]
        localStorage.setItem('cart',JSON.stringify(updatedCart))
        toast.success(`${cartItem.title} Added to cart..`) 
        setCart(updatedCart)
    }


    return (
        <div>
            <authContext.Provider value={{login,user,logout,addToCart,cart,setCart,search,setSearch}} >
                {children}
            </authContext.Provider>
        </div>
    )
}
