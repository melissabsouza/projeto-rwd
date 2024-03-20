import './Style.css';
 
type props = {
    img: string,
    title: string
}
 
const Card = (props:props) => {
    return(
        <div className="card">
            <img id="cardImg" src={props.img}/>
            <h1 id="cardTxt">{props.title}</h1>
        </div>
    )
}
 
export default Card;