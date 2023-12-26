function Post(props) {
    return (
      <div className="flex justify-center m-7">
        <div className="border-2 mt-4  border-gray-500 p-2">
       <img className="w-[400px]"  src={props.image}/>
       <h1>{props.title}</h1>
        </div>
      </div>
    )
  }
  
  export default Post