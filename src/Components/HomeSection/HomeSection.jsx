import { Avatar, Button } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import ImageIcon from '@mui/icons-material/Image'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import * as Yup from 'yup'
import TweetCard from './TweetCard'

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required")
})

const HomeSection = () => {
    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const handleSubmit = (values) => {
        console.log("values", values)
    }

    const formik = useFormik({
        initialValues: {
            content: "",
            image: ""
        },
        onSubmit: handleSubmit,
        validationSchema,
    })

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0];
        formik.setFieldValue("image", imgUrl);
        setSelectedImage(imgUrl);
        setUploadingImage(false);
    }

    return (
        <div className='space-y-5'>
            <section>
                <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
            </section>
            <section className={'pb-10 bg-gray-300 p-6 rounded-lg'}>
                <div className='flex space-x-5'>
                    <Avatar alt='username' src="/default-profile-picture1-768x768-modified.png" />
                    <div className='w-full'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='border-b-2 border-white-300'>
                                <input
                                    type='text'
                                    name='content'
                                    placeholder='What is on your mind?'
                                    className='border-none outline-none text-xl bg-transparent w-full'
                                    {...formik.getFieldProps("content")}
                                />
                                {formik.errors.content && formik.touched.content && (
                                    <span className='text-red-500'>{formik.errors.content}</span>
                                )}
                            </div>
                            <div className='flex justify-between items-center mt-5'>
                                <div className='flex space-x-5 items-center'>
                                    <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                        <ImageIcon className='text-[#1d9bf0]' />
                                        <input
                                            type='file'
                                            name='imagefile'
                                            className='hidden'
                                            onChange={handleSelectImage}
                                        />
                                    </label>
                                    <FmdGoodIcon className='text-[#1d9bf0]' />
                                    <TagFacesIcon className='text-[#1d9bf0]' />
                                </div>
                                <div>
                                    <Button
                                        sx={{ width: "100%", borderRadius: "29px", paddingY: "8px", paddingX: "20px", bgcolor: "#1e88e5" }}
                                        variant='contained'
                                        type='submit'
                                    >
                                        Tweet
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className={'w-full'}>
                {[1,1,1,1].map((item)=><TweetCard/>)}
            </section>
        </div>
    )
}

export default HomeSection
