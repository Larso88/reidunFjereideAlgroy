import ospesong from "./../images/ospesong.jpeg";
import mellomMennesker from "./../images/mellomMennesker.jpeg";
import BookCardComponent from "../Components/BookCardComponent";

const Home = () => {
    return <div className={"flex flex-row"}>
        <BookCardComponent imageSource={mellomMennesker} altText="Mellom Mennesker"/>
        <div className={"border-2 border-red-300 w-1/3"}>
            <p className={"text-red-300"}>Ospesong kan nå fåes kjøpt hos en forhandler nær deg</p>
            <img className={""} src={ospesong} alt="Booken Ospesong"/>
        </div>
        <div className={"border-2 border-red-300 w-1/3"}></div>
        <div className={"border-2 border-red-300 w-1/3"}></div>
    </div>
}

export default Home;