
const BookCardComponent = ({imageSource, altText, pText}) => {
    console.log(altText, imageSource, pText)

    return <div className={"border-2 border-light-gold w-1/2 flex flex-col content-center justify-center p-5"}>
                <img className={"max-w-xs m-5"} src={imageSource} alt={altText}/>
                <p className={"text-xl "}>{pText}</p>

    </div>
}

export default BookCardComponent;