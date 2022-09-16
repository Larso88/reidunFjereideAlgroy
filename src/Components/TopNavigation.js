import {Link} from "react-router-dom";

const TopNavigation = () => {
    return (<div className={"m-8 border-b-2 border-red-300 p-4"}>
        <ul className={"w-full flex flex-row justify-between text-4xl text-red-300"}>
        <li>
           <Link to={"/"} > Hjem</Link>
        </li>
        <li>
            <Link to={"/poems"} > Diktsamlinger</Link>
        </li>
        <li>
            <Link  to={"/events"} >Arrangement</Link>
        </li>
        <li>
            <Link to={"/reidun"} >Om Reidun </Link>
        </li>
        <li>
            <Link to={"/contact"} >Kontakt</Link>
        </li>
        </ul>
    </div>)
}
export default TopNavigation;