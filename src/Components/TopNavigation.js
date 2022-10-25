import {Link} from "react-router-dom";

const TopNavigation = () => {
    return (<div className={"m-8 border-b-2 border-light-grey p-4"}>
        <ul className={"w-full flex flex-row justify-between text-4xl"}>
        <li>
           <Link to={"/"} className={"text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-brown to-light-gold"} > Hjem</Link>
        </li>
        <li>
            <Link to={"/poems"} className={"text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-brown to-light-gold"}> Diktsamlinger</Link>
        </li>
        <li>
            <Link  to={"/events"} className={"text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-brown to-light-gold"}>Arrangement</Link>
        </li>
        <li>
            <Link to={"/reidun"} className={"text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-brown to-light-gold"}>Om Reidun </Link>
        </li>
        <li>
            <Link to={"/contact"} className={"text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-brown to-light-gold"}>Kontakt</Link>
        </li>
        </ul>
    </div>)
}
export default TopNavigation;