import { Container , Grid, Typography} from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between p-4">
        <span  className="text-2xl tracking-widest">
          <Link href="/">MEBLOGRN</Link>
        </span>
        <ul className="flex items-center space-x-10">
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/register">Signup</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
