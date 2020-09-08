import React, { useState } from "react"
import Header from "../components/header"
import { navigate } from "gatsby"

const Index = ({ location }) => {
  const [name, setName] = useState('');
  
  const handleNavigateToPage2 = () => {
    navigate("/page2", { state: { name } })
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  
  
  return (
    <div>
      <Header />
      <hr />
      <h1>Page 1</h1>
      <label htmlFor="name">Name:</label>
      <br/>
      <input type="text" name="name" id="name" onChange={handleNameChange} value={name} />
      <h2>Location</h2>
      <pre>{JSON.stringify(location, null, 4)}</pre>
      <hr />
      <h1>With State Panel</h1>
      <p>
        <button onClick={handleNavigateToPage2}>Navigate to Page 2</button>
      </p>
      <p>
        <button>Navigate to Page 3</button>
      </p>
    </div>
  )
}

export default Index
