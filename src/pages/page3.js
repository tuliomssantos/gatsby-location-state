import React from "react"
import Header from "../components/header"

const Page3 = ({ location }) => {
  return (
    <div>
      <Header />
      <h1>Page 3</h1>
      <h2>Location</h2>
      <pre>{JSON.stringify(location, null, 4)}</pre>
      <hr />
    </div>
  )
}

export default Page3
