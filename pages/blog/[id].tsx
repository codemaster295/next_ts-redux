import { useRouter } from 'next/router';
import { RichText } from 'prismic-reactjs';
import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { htmlSerializer } from '../../serializer';
import { getBlogById } from '../../store/actions/actionsMain'

const BlogDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const dispatch = useDispatch()
  const [blogData , setBlogData] = useState()
  useEffect(async()=>{
    const data = await dispatch(getBlogById(id))
    setBlogData(data.payload)
    console.log(data)
  },[])
  return (
    <div>
      <div className="space-y-5">
        {blogData && blogData.data ?
      <RichText
        render={blogData.data.description}
        htmlSerializer={htmlSerializer}
      />
        
    :""}
    </div>
    </div>
  )
}
function mapStateToProps(state) {
  return state;
}

export default BlogDetail
