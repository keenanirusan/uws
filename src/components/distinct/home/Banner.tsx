import './Banner.scss'

const Banner = () => {
	return (
		<>
			<div className='banner-container'>
				<div className='banner-content'>
					{/* Text */}
					<div className='banner-text'>
						<h1>Empowering Collaboration, Unifying Success.</h1>
						<p>
							Transforming teamwork with UnifiedWork Solutions: Simplify
							communication, streamline collaboration, and boost productivity
							across your organization.
						</p>
						<div className='banner-btn'>
							<button>Get in touch</button>
						</div>
					</div>
					{/* Image */}
					<div className='banner-img'>
						<img
							src={require('../../../assets/images/banner.png')}
							alt='People communication with one another'
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Banner
