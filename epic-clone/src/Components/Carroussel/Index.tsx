import './Style.css'
import Card from "../MiniRef/Index";
import Bg from "../Bg/Index";
import { useState } from 'react';

type content = {
    img : string,
    title : string,
    info : string
}

var carroussel : content[] = [
    {
        img : "https://pbs.twimg.com/media/E-4lJkzVkAEXtBr.jpg",
        title : "God of War",
        info : "Jogo top do claitão"
    },
    {
        img : "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/14/gaming-gta5-cover.jpeg",
        title : "GTA V",
        info : ""
    },
    {
        img : "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Subnautica.jpg",
        title : "Sub Nautica",
        info : ""
    },
    {
        img : "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/14/gaming-gta5-cover.jpeg",
        title : "GTA V",
        info : ""
    },
    {
        img : "https://pbs.twimg.com/media/E-4lJkzVkAEXtBr.jpg",
        title : "God of War",
        info : "Jogo top do claitão"
    },

]


const Carroussel = () => {

    var [img,setImg] = useState(0);

    setTimeout(()=>{setImg(img + 1)}, 3000)
    
    if(img == carroussel.length)
    {
        img = 0;
    }

    return(
        <div className='cr'>
            <Bg img={carroussel[img].img} title={carroussel[img].title} info={carroussel[img].info}/>
            <div className="vComp">
                {carroussel.map(element => 
                    <Card img={element.img} title={element.title}/>

                )}

            </div>
        </div>
    )
}

export default Carroussel;