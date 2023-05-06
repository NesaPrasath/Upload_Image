import { useState } from "react";
import axios from "axios"

const Form=()=>
{
  const [formData,setformData]=useState({
    title: '',
    message: '',
    tags: '',
    file: '',
  })
  
  const handleChange=(e)=>
  {
    setformData({...formData,[e.target.name]:e.target.value})
  }
  
  const handleFilechange=(e)=>
  {
    setformData({...formData,file:e.target.files[0]})
    console.log(formData.file)
    // const filereader=new FileReader()
    // filereader.readAsDataURL(e.target.files[0])
    // filereader.onload=()=>
    // {
    //   setformData({...formData,file:filereader.result.replace("data:", "").replace(/^.+,/, "")})
    // }
    // console.log(formData)
    // console.log(filereader.result+" hello")
  }
  
  const handleclear = () => {
      const formInputs = document.querySelectorAll(".form-data");
      formInputs.forEach((input) => {
        input.value = "";
      });
      console.log("clear working");
  };
    
  const handlesubmit=async(e)=>
  {
    e.preventDefault()
    const formdata=new FormData()
    formdata.append('title',formData.title)
    formdata.append('message',formData.message)
    formdata.append('tags',formData.tags)
    formdata.append('selectedfile',formData.file)
    console.log(formData)
    const resp=await axios.post('http://localhost:5000/api/post',formdata)
    handleclear()
  }

  return <div className="side-bar">
        <h2>Form content</h2>
        <form onSubmit={handlesubmit}>
            <input type={"text"} placeholder="title"className="form-data" name="title" onChange={handleChange}/><br/><br/>
            <textarea placeholder="Message" className="form-data" name="message" onChange={handleChange}/><br/><br/>
            <input type={"text"} placeholder="tags"className="form-data" name="tags" onChange={handleChange}/><br/><br/>
            <input type="file" className="form-data" onChange={handleFilechange} name="file"/><br/>
            <input type={"submit"} className="gud-btn"/>
        </form>
        <button className="red-btn" onClick={handleclear}>clear</button>
    </div>
}

export default Form