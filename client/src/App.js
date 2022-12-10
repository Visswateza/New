function App(){

  function handleSubmit(e){
    e.preventDefault();
    console.log("Working");
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Enter transaction amount"/>
      <input type="text" placeholder="Enter transaction details"/>
      <input type="date" placeholder="Enter transaction date"/>
      <input type="submit" placeholder="Submit" value="Submit"/>
    </form>
  </div>
}

export default App;