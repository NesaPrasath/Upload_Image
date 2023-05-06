import { useEffect, useState } from 'react'
import PostItem from './Postitem'
import axios from 'axios'

const Post = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/post')
      .then(response => setData(response.data.post))
      .catch(error => console.log(error))
  }, [])

const postitem=()=>
{
  return data.map((data)=>
        {
          return <PostItem key={data._id} data={data}/>
        })
}

  return (
    <div className='post-container'>
      {data.length > 0 ? postitem() : <p>Loading...</p>}
    </div>
  )
}

export default Post