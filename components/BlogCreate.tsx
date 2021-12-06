import React, { useState } from 'react'
import { Button } from '@mui/material'
import { CreateBlog } from '../store/actions/actionsMain'
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import { useDispatch } from 'react-redux'
import 'antd/dist/antd.css';

const BlogCreate: any = () => {
    const [blogTitle, setBlogTitle] = useState("")
    const [blogDescription, setBlogDescription] = useState("")
    const [fileList, setFileList] = useState([])
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append("image", fileList[0].originFileObj)
        await dispatch(CreateBlog({ image: formData, blogdata: { blogTitle, blogDescription } }))

    }
    const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    console.log(fileList, "mmoishere")
    const dummyRequest: any = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess('ok')
        }, 0)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Blog Title</label>
                <input onChange={(e) => { setBlogTitle(e.target.value) }} type="text" placeholder="Enter The Title" />
            </div>
            <ImgCrop rotate aspect={2 / 1}>
                <Upload
                    multiple={false}
                    customRequest={dummyRequest}
                    listType="picture-card"
                    onChange={onChange}
                    onPreview={onPreview}

                >
                    {fileList.length < 5 && '+ Upload'}
                </Upload>
            </ImgCrop>
            <div className="mb-3">
                <label>Password</label>
                <input type="text" onChange={(e) => { setBlogDescription(e.target.value) }} placeholder="Description" />
            </div>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" onChange={(e) => { setChecked(e.target.checked) }} label="I agree to terms and conditions" />
				</Form.Group> */}
            {/* <Alert show={error} variant="danger">
					{error ? error : ""}
				</Alert> */}
            <button type="submit">
                Submit
            </button>
        </form>
    )
}

export default BlogCreate
