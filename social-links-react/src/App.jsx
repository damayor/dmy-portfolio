import './App.css'
import SocialButton from './components/SocialButton'
import { socialNetworkLinks } from './data/SocialNetworkLinks'

function App() {


  return (
    <>
      <div className="card">
        <img src="/public/assets/images/avatar-jessica.jpeg" alt="" className="card__author-img" />
        
        <h1 className='card__author-name'>Jessica Randall</h1>
        <h3 className="card__author-location">London, United Kingdom</h3>
        <p className="card__author-description">"Front-end developer and avid reader."</p>
        
        {
          socialNetworkLinks.map( (element, index) => 
            <SocialButton key={index} textLabel={element.label} url={element.link}></SocialButton>
          )
        }
      </div>
     
      
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/damayor">David Mayo</a>.
      </div>
    </>
  )
}

export default App
