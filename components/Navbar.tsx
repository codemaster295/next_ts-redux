import { Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const userDataRedux: any = useSelector((state: any) => state.authReducer)
  let { userauthtoken } = userDataRedux
  return (
    <div className="container mx-auto">
      <div className="flex justify-between p-4">
        <span className="text-3xl tracking-widest font-bold">
          <Link href="/">BLOG</Link>
        </span>
        {!userauthtoken ? <ul className="flex items-center space-x-10">
          <li className="text-black"><Link href="/login">Login</Link></li>
          <li className="text-black"><Link href="/register">Signup</Link></li>
        </ul> :
          <ul>
            <li className="text-black"><Link href="/createblog" >Create</Link></li>
          </ul>

        }
      </div>
    </div>
  )
}

export default Navbar
