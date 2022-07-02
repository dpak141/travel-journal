export default function Card(props){
    return(
        <div className="cards">
            <img className="card__img"
            src={props.item.imageUrl} alt="place-img" />
            <div className="card__list">
                <p className="card__location">{props.item.location} <span className="google-maps">View on Google Maps</span></p>
                <h2 className="card__title">{props.item.title}</h2>
                <p className="card__date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card__info">{props.item.description}</p>
            </div>

        </div>
    )
} 


