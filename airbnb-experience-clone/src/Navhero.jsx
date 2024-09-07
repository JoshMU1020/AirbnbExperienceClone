import Hero from './Hero.jsx'
import logo from '../public/assets/airbnb-logo.png'

function Navhero() {
    return (
        <div className="navhero">
            <nav className='nav'>
                <img className='logo' src={logo}/>
            </nav>
            <Hero />
        </div>
    )
}

export default Navhero