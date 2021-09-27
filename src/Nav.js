import React , {useState , useEffect} from 'react'
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        })
        return () => {
            window.removeEventListener('scroll');
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo"
                src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
                alt="Netflix Logo" />
            
        </div>
    )
}

export default Nav
