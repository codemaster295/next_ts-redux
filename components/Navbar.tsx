import { Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthToken } from '../store/actions/actionsMain'

const Navbar = () => {
  const dispatch = useDispatch()
  useEffect(async () => {
    let token = await dispatch(getUserAuthToken([]))
  }, [])
  const userDataRedux: any = useSelector((state: any) => state.authReducer)
  let { userauthtoken } = userDataRedux
  console.log(userauthtoken, userDataRedux)
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
            <li className="text-black"><Link href="/createblog" ><button className="button text-white px-4 py-2 rounded-md shadow-2xl font-semibold">Create</button></Link></li>

          </ul>

        }
      </div>
    </div>
  )
}

export default Navbar
