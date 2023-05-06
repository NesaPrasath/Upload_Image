import { Link , useParams} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
const Memory=()=>
{
    const {id}=useParams()
    const [data,setData]=useState({})

    useEffect(()=>
    {
        axios.get(`http://localhost:5000/api/post/${id}`)
        .then(response=>{
            setData(response.data.post)
        })
        .catch(err=>console.log(err))
    },[id])
    if(data.length===0)
    {
        return <div><p>Loading...</p></div>
    }
    else
    {
        return <div className="memory">
        <img className="memory-img" src={`http://localhost:5000/${data.selectedfile}`} alt="image"/>
        <section>
            <section className="memory-section">
                <label className="memory-label">Title</label>
                <p>{data.title}</p>
            </section>
            <section className="memory-section">
                <label className="memory-label">Tags</label>
                <p>#nature</p>
            </section>
            <section className="memory-section">
                <label className="memory-label">Created At</label>
                <p>{data.createdAt}</p>
            </section>
            <section className="memory-section">
                <label className="memory-label">Description</label>
                <p>{data.message}</p>
            </section>
            <Link to={'/'}><button className="black-btn">Back</button></Link>
        </section>
    </div>
    }
}

export default Memory