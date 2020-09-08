import React, { useState } from "react"
import Header from "../components/header"

const handleStateFromLocation = location => {
  if (
    location &&
    (location !== null) !== undefined &&
    location.state !== null &&
    location.state !== undefined &&
    "name" in location.state
  ) {
    return location.state.name
  } else {
    return ""
  }
}

const Page2 = ({ location }) => {
  const [name, setName] = useState(handleStateFromLocation(location))

  const handleNameChange = e => {
    setName(e.target.value)
  }

  return (
    <div>
      <Header />
      <hr />
      <h1>Page 2</h1>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleNameChange}
        value={name}
      />
      <h2>Location</h2>
      <pre>{JSON.stringify(location, null, 4)}</pre>

      <hr />
    </div>
  )
}

export default Page2
