import axios from "axios"
import { Link} from "react-router-dom"

const PostItem=({data})=>
{
    const handledelete=(e)=>
    {
        console.log(data._id)
        axios.delete(`http://localhost:5000/api/post/${data._id}`)
    }
    return <div className="post-item">
        <img src={`http://localhost:5000/${data.selectedfile}`} alt="post-image"></img>
        <section className="post-part">
        <h3>{data.title}</h3>
        <p>{data.message.substring(0,150)}...</p>
        <section className="post-btn">
        <Link to={`/post/${data._id}`}><button className="gud-btn" >view more</button></Link>
        <button className="red-btn" onClick={handledelete}>delete</button>
        </section>
        </section>
    </div>
}

export default PostItem