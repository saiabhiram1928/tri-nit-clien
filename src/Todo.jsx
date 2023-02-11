const Todo = () => {
  const ref= useRef(null)
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const postData = {
      Todo : ref.current.value
    }
     const response = await fetch('http://localhost:3001/add-todo' ,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(postData)
     })

     console.log(response)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todo" id="todo" ref={ref} />
      <button type="submit">submit</button>

    </form>
  )
}
export default Todo