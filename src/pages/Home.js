import NewsHeader from "../Components/NewsHeader";
import reidunImg  from "../images/reidunImg.png";

const Home = () => {

    return <div>
            <NewsHeader />
            <section className={"flex w-full flex-row"}>
                <div className={"basis-1/5"}></div>
                <div className={"basis-3/5 relative"}>
                    <p className={"text-2xl bg-gradient-to-b from-dark-grey to-light-grey text-transparent bg-clip-text w-7/12 ml-20 text-center z-0"}>
                        Hjarteleg velkommen til Reidun Fjereide Algrøy sin eigen stad på nettet, blyantstreken.no. <br/>
                        Her kan du lese smakebitar frå Reidun sine dikt og betraktningar. <br/>
                        Du kan også bestille bøker på epost. <br/> Husk å skrive antall bøker, fullt namn og adresse i eposten.<br/>

                        Reidun Fjereide Algrøy er busett vest på Sotra, der hav møter land. <br/>
                        Ho har gjeve ut boka «Mellom menneske» som er dikt i nynorsk språkbunad. <br/>
                        Reidun er oppvaksen på Sotra, og arbeider som kunstnar. <br/>
                        I tillegg til dikt og forteljingar har ho i ei tid drive med skulptørverksemd. <br/>
                        Reidun er fascinert over naturen og menneska, og likar å skildre det eine i det andre. <br/>

                        Boka «Mellom menneske» er hennar fyrste bok, og her finn ein mykje livsvisdom gjennom vakre ord og setningar. <br/>
                        Ho har også gjeve ut diktboka «Ospesong» og romanen «Trollspeglar».
                    </p>
                    <img className={"absolute top-0 right-0 rounded-3xl z-10 w-1/2"} src={reidunImg} alt="Bilde av Reidun"/>
                </div>
                <div className={"basis-1/5"}></div>
            </section>

    </div>
}



export default Home;