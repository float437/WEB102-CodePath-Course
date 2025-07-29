import './HomePage.css'
import homeImage from '../assets/crewmates.43d07b24.png'

const HomePage = () => {
    return(
        <>
            <div className="header">
                <h1>Welcome to the Crewmate Creator!</h1>
                {/* <Link to="/"><button className="headerBtn"> Explore Challenges 🔍  </button></Link>
                <Link to="/new"><button className="headerBtn"> Submit Challenge 🏆 </button></Link>  */}
            </div>
            <h3 className='headerSubText'>Here is where you can create your very own set of crewmates </h3>
            <img src={homeImage}></img>
        </>
    )
}

export default HomePage;
