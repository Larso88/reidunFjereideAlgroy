import mellomMennesker from "../images/mellomMennesker.jpeg";

const BookCardComponent = (imageSource, altText, ) => {
    return <div className={"border-2 border-red-300 w-1/3"}>
        <p className={"text-3xl"}>Mellom Mennesker er nå i salg</p>
        <img className={""} src={imageSource} alt={altText}/>
    </div>
}

export default BookCardComponent;