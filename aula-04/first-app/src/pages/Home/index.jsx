import React from 'react'
import { Link } from 'react-router-dom'
import { Count } from '../../components/Count'

const Home = () => {

  return <>
    <Link to="/app">Go app</Link>
    <Count />
  </>
}

export { Home }
