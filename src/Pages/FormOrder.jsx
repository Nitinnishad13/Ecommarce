
import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const FormOrder = () => {

    const { user,setCart } = useContext(authContext)
    const navigate = useNavigate();
    const [showModel, setShowModel] = useState(false)

    

 

    if(showModel){
        setTimeout(() => {
            localStorage.removeItem('cart')
            setCart([])
           navigate('/home') 
        }, 2000);
        
    }
    

    return (
        <div className=' flex justify-center items-center h-screen'>
            <form className="w-1/2 shadow-2xl p-10 border-1 rounded-lg border-gray-400 ">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={user?user.name:''} />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Email
                        </label>
                        <input value={user?user.email:''} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" />
                    </div>
                </div>
                 <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            City
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            State
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                             </select> 
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>


                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                            Zip
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder={90210} />
                    </div>

                    {/* <button  className=' w-full bg-blue-500 p-2 mt-7 rounded-lg text-white font-bold'>Place Order</button> */}
                    <button onClick={()=>setShowModel(true)} id="openModal" type="button" className=' w-full bg-blue-500 p-2 mt-7 rounded-lg text-white font-bold'>
                    Place Order</button>
                </div>
            </form>


            {
                showModel && (
                    <div>
                <div id="modal">
                    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
                        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                            <div className="flex items-center pb-3 border-b border-gray-300">
                                <h3 className="text-slate-900 text-xl font-semibold flex-1 text-center">Order Summary</h3>
                                <svg id="closeIcon" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500" viewBox="0 0 320.591 320.591">
                                    <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" />
                                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" />
                                </svg>
                            </div>
                            <div className="my-6">
                                <p className="text-slate-600 text-2xl text-center font-bold leading-relaxed">Order Placed Successfully...</p>
                                <img width={'150px'} className=' m-auto mt-4'  src="https://th.bing.com/th/id/R.b06d686ce26a343b0210c0734a3e476b?rik=VqkDvvMjrKXeQA&riu=http%3a%2f%2fvvbuitenpost.nl%2fwp-content%2fuploads%2f2020%2f08%2f1200px-Check_green_icon.svg_.png&ehk=E6vz6UhdAPMLo28ia8J9KGIV6krXnRfv26BZu3nG1dA%3d&risl=&pid=ImgRaw&r=0" alt="" />
                            </div>
                            <div className="border-t border-gray-300 pt-6 flex justify-end gap-4">
                                <button type="button" className="px-4 py-2 rounded-lg text-white text-sm font-medium border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
                )
            }


        </div>
    )
}

export default FormOrder