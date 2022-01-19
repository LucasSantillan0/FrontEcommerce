import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* Navbar */}

      <div>
        {/* Carousel  component */}
        <h3>Carousel</h3> 
      </div>

      <div>
      {/* posts */}
      <Link to={'/cardid'}>
        <h4>Card</h4>
      </Link>
      </div>

      {/* Footer */}
    </div>
  )
}

export default Home
