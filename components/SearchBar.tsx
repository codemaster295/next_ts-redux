import { Search } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getSearchData, getUserAuthToken } from '../store/actions/actionsMain';


const SearchBar = () => {
  const [search, setSearch] = useState("")
  const dispatch = useDispatch()
  const userDataRedux: any = useSelector((state: any) => state.authReducer)
  let { userauthtoken } = userDataRedux
  const handleSearch = async () => {
    let token = await dispatch(getUserAuthToken([]))
    if (!userauthtoken) {
      toast.error("please sign in ")
    }
    else if (userDataRedux.token !== null) {
      const data = await dispatch(getSearchData({ search }))
    }
    else {
      toast.error("please sign in")
    }
  }
  return (
    <div className="container mx-auto mt-2">
      <div className="relative flex items-center justify-end">
        <input onChange={(e) => { setSearch(e.target.value) }} className="bg-gray-100 w-full px-5 py-5 outline-none  " type="text" name="search" id="search_bar" />
        <Search onClick={handleSearch} className="absolute mr-2 text-pink-500" />
      </div>
    </div>
  )
}

export default SearchBar
