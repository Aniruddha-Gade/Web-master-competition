import './Card.css'


const Card = ({ image, headline }) => {
    return (
        <div className='card-grid-container'>
            <div className='card-grid'>
                <div className='image-container'>
                    <img
                        src={image}
                        className='ApartmentImg'

                    />
                </div>

                <p className='headline'>
                    {headline}
                </p>

                <p>
                    123 Properties
                </p>
            </div>
        </div>
    )
}

export default Card