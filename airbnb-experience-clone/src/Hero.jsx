import refImg from '../public/assets/photo-grid.png'
function Hero() {
    return (
        <div>
            <img className='photo-grid' src={refImg} />
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-content">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}

export default Hero