import MusicPlayer from "../MusicPlayer/MusicPlayer"
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='flex py-2.5'
            data-aos="fade-up"
            data-aos-anchor-placement="center-center">
            <li className="transform hover:translate-x-1 transition-transform duration-500 ease-in-out">
                <Link to='/'>main</Link>
            </li>
            <li className="transform hover:translate-x-1 transition-transform duration-500 ease-in-out">
                <Link to='/list'>list</Link>
            </li>
            <li className="transform hover:translate-x-1 transition-transform duration-500 ease-in-out">
                <Link to='/added'>added</Link>
            </li>
        </nav>
    )
}

export default Nav