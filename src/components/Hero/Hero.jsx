
import "./Hero.css"
import heroImg from "../../assets/hero-img.jpg"
const Hero = () => {
    return (
        <div className="hero-container">
            <div className=''>
                <div className="hero-second-container">
                    <h1 className="hero-headline">
                        Find A <span className="hero-span">Perfect Home</span> To Live With Your Famiy
                    </h1>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Mollitia voluptates sed obcaecati amet
                        exercitationem quae!
                    </p>

                    <button className="add-property-btn">
                        Get Started
                    </button>

                </div>

            </div>

                <div className="image-container">
                    <img
                        src={heroImg}
                        className="hero-img"
                    />
                </div>


        </div>
    )
}

export default Hero