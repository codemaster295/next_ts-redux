import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";

import { Skeleton } from '@mui/material'
const ProductDetailComponent = ({ Product }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		dotsClass: "slick-dots slick-thumb",
		cssEase: "linear",
		// vertical: true,

		appendDots: (dots) => (
			<div
				style={{
					marginBottom: 34,
					width: "100%",
					display: "flex",
					justifyContent: "center",
					height: 20,
					alignItems: "flex-start",
				}}
			>
				<div
					onClick={(e) => {
						e.preventDefault();
					}}
					style={{ cursor: "default" }}
				>
					<ul className="discover-dots-ul"> {dots} </ul>
				</div>
			</div>
		),
		customPaging: (i) => <div className="dots-discover"></div>,
	};
	// console.log(Product.Images)
	return (
		<div className="mt-20">
			<Slider {...settings}>
				{Product && Product.Images.map((image) => (

					<div className="p-3 ">{image ? <Image className="object-contain" src={image} width={500} height={500} /> : <Skeleton variant="rectangular" width={"100%"} height={270} />}</div>
				))}
			</Slider>
		</div>
	)
}

export default ProductDetailComponent
