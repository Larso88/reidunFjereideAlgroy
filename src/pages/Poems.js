import BookCardComponent from "../Components/BookCardComponent";
import mellomMennesker from "../images/mellomMennesker.jpeg";
import ospesong from "../images/ospesong.jpeg";

const Poems = () => {
    return         <div className="flex flex-row">
        <BookCardComponent pText={"Mellom Mennesker"} imageSource={mellomMennesker} altText={"Boka: 'Mellom menneske'"} />
        <BookCardComponent pText={"Osepsong"} imageSource={ospesong} altText={"Boka: 'Ospesong'"} />
    </div>
}
export default Poems;