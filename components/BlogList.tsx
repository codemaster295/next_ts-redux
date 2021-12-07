import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getBlogData } from '../store/actions/actionsMain'
import BlogComponent from './BlogComponent'

const BlogList = (props) => {
  // const BlogData =useSelector(state=>{ state.blogDataReducer})
  // const BlogData: any = useSelector((state: any) => state)
  // const dispatch = useDispatch()
  return (
    <div>
      <div className="container mx-auto bg-white">
        <div className="grid grid-cols-5 gap-10">
          {props.blogDataReducer.map((data) => (
            <BlogComponent data={data} />
          ))}
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps , getBlogData)(BlogList)
