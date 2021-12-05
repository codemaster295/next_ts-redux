import { Search } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSearchData } from '../store/actions/actionsMain';


const SearchBar = () => {
  const [search , setSearch] = useState("")
  const dispatch = useDispatch()
  const handleSearch = async()=>{
    const data = await dispatch(getSearchData({search}))
  }
  return (
    <div className="container mx-auto mt-2">
      <div className="relative flex items-center justify-end">
        <input onChange={(e)=>{setSearch(e.target.value)}} className="bg-gray-100 w-full px-5 py-5 outline-none  " type="text"  name="search" id="search_bar" />
        <Search onClick={handleSearch} className="absolute mr-2 text-pink-500" />
      </div>
    </div>
  )
}

export default SearchBar
