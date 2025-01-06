import React from 'react'

const App = () => {
  var x = "GreatStack";

  let array = ["User1", "User2", "User3", "User4", "User5"]
  return (
    <div>
      {x}
      {array.map((user) => { return <h2>{user}</h2> })}
    </div>
  )
}

export default App;