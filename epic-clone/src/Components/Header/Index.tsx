import globe from "../../assets/globe.png"
import userIcon from "../../assets/user.png"

import "./Style.css";
const Header = () => {
    return(
        <header className="epicHeader">
        <div className="rightSide">
            <nav>
                <ul>
                    <li>
                        <img width={35} src="https://www.seekpng.com/png/full/343-3436487_epic-games-logo-png.png"/><h1></h1>
                    </li>
                    <li><h1>STORE</h1></li>
                    <li>Distribuição</li>
                    <li>Suporte</li>
                    <li>Unreal Engine</li>
                </ul>
            </nav>
        </div>
        <div className="leftSide">
            <img width={20} height={20} src={globe}/>
            <img width={35} height={35} src={userIcon}/>
            <button>Download</button>
        </div>
        </header>
    )
}

export default Header;