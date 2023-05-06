import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Navbar from '../component/navbar'
import Main from './Main'
import Memory from '../component/Memory'

const SharedLayout=()=>
{
    return <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' Component={Navbar}>
                <Route index Component={Main}/>
                <Route path='/post/:id' Component={Memory}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
}

export default SharedLayout