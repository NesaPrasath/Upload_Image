import { Outlet } from 'react-router';
import '../App.css';
const Navbar=()=>
{
    return <div>
        <nav><h1>Memories</h1></nav>
        <Outlet/>
    </div>
}

export default Navbar