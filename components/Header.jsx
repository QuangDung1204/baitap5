import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux"

function Hearder() {
    const { cart } = useSelector(store => store.cart)
    console.log(cart)
    return (
        <div>
            <div >
                <div className="">
                    <header className="">
                        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                            <div className="flex lg:flex-1">
                                <a href="/bt5" className="-m-1.5 p-1.5">
                                    <img className="h-10 w-auto" src="https://th.bing.com/th/id/R.0ad6be08c017c7028ea6bf222846198f?rik=8bBrwWQ5d6oAAQ&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2017%2f08%2fLogo-Audi.png&ehk=XVXFYXI%2bOps7gL32UszNe8ZspUD221KF0sfmtlFoJp4%3d&risl=&pid=ImgRaw&r=0" alt='' />
                                </a>
                            </div>
                            <div className="hidden lg:flex lg:gap-x-12">
                                <a href="/bt4/product" className="text-sm font-semibold leading-6 text-gray-900">Mẫu xe</a>
                                <a href="/bt4" className="text-sm font-semibold leading-6 text-gray-900">Chăm sóc khách hàng</a>
                                <a href="/bt4/about" className="text-sm font-semibold leading-6 text-gray-900">Liên hệ chúng tôi</a>
                            </div>
                            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                                <Link to="/bt4/login" className="text-sm font-semibold leading-6 text-gray-900">Đăng Nhập</Link>
                                <Link to={'/bt5/cart'} className='relative cursor-pointer'>
                                    <ShoppingCartIcon />
                                    <div className='absolute -top-[30%] -right-[1%] w-3 h-5 rounded-full bg-red-500 text-white text-center'>
                                        {cart.length ?? 0}
                                    </div>
                                </Link>
                            </div>
                        </nav>
                    </header>
                </div >


            </div>
        </div>


    )
}

export default Hearder
