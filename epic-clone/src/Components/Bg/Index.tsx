
import './Style.css';

type props = {
    img: string,
    title: string,
    info: string
}
const Bg = (props:props) => {
    return(
        <div style={{backgroundImage: `url(${props.img})`}} className="imgGrandona">
            <div className='content'>
                <h1>{props.title}</h1>
                <h3>{props.info}</h3>
                <button>ir para o jogo</button>
            </div>
        </div>
    )
}

export default Bg;