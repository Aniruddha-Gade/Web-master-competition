
import Card from "./components/Card/Card.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
// import './index.css'
import ApartmentImg from '../src/assets/Home-Apartment-Badge-by-novita007.png'

function App() {


  return (
    <div className='app-container'>
      <Navbar />

      <Hero />

      <div className="green-container">
        <div className="green-box">
          <input
            type="text"
            placeholder="Search Keyword"
            className="input-field"
          />


          <select className="input-field" name="Property Type" id="Property Type">
            <option value="volvo">Property Type</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>

          <select className="input-field" name="Property Type" id="Property Type">
            <option value="volvo">Location</option>
          </select>

          <button className="search-btn">
            Serach
          </button>
        </div>
      </div>


      <div className="property-container">
        <div className="property-container-second">
          <h1 className="property-headline">
            Property Types
          </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing
            elit.<br/> Iure reprehenderit quaerat rerum? Nisi mollitia
            officiis voluptatibus enim tenetur, exercitationem nemo.
          </p>
        </div>

        <div className="card-contaienr grid grid-cols-4">
          <Card image={ApartmentImg} headline={"Apartment"} />
          <Card image={ApartmentImg} headline={"Apartment"} />
          <Card image={ApartmentImg} headline={"Apartment"} />
          <Card image={ApartmentImg} headline={"Apartment"} />
          <Card image={ApartmentImg} headline={"Apartment"} />
          <Card image={ApartmentImg} headline={"Apartment"} />
          <Card image={ApartmentImg} headline={"Apartment"} />
           <Card image={ApartmentImg} headline={"Apartment"} />
         
        </div>

      </div>

    </div>
  )
}

export default App
