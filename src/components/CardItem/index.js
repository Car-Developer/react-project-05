import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, imgUrl, description, className} = cardDetails
  return (
    <li className={`card ${className}`}>
      <div className="details">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <div className="container">
        <div>
          <img src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
