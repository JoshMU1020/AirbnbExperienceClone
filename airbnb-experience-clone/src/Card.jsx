import star from '../public/assets/star.png'

function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    const coverImage = new URL(`../public/assets/${props.coverImg}`, import.meta.url).href;
    return (
        <div className='card'>
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="profile" src={coverImage} alt="Current Experience Reference Photo." />
            <div className='card-stats '>
                <img className='star' src={star} alt="star icon." />
                <span className="grey">{props.stats.rating} ({props.stats.reviewCount}) • {props.location}</span>
            </div>
            <h2 className="review">{props.title}</h2>
            <p><span className='cost'>{'From $' + props.price}</span> / person</p>
        </div>
    )
}

export default Card