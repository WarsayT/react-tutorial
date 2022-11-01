/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

export function Navigation() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/about/history">History</Link>
        <Link to="/contact">Contact</Link>
      </nav>
  )
}

function Home() {
  return (
    <div>
      <h1>My Website</h1>
    </div>
  )
}

export function About() {
  return(
    <div>
      <h1>About us</h1>
      <p>This is about us page</p>
      <Outlet />
    </div>
  )
}

export function History() {
  return (
    <div>
      <h1>Our History</h1>
      <p>Lorem ipsum is a strick lorem ipsum 1998.</p>
    </div>
  )
}

export function Contact() {
  return (
    <div>
      <h1>Contact us</h1>
    </div>
  )
}

export function App() {

  return (
      <Home />
  )
}
