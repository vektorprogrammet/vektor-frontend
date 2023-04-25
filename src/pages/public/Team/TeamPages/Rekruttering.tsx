import React from "react";
import TeamTemplate from "./TeamTemplate";

const Rekruttering = (): JSX.Element => {
    return (
        <div className="max-w-screen-lg mt-5 mb-20 mx-auto flex flex-col items-center">
            <TeamTemplate name="Rekruttering" mail="rekruttering.ntnu@vektorprogrammet.no"
            text="I rekruttering jobber vi med å skaffe nye vektorassistenter." 
            members = {[{name: "Astrid Bugge", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/63f4de1b4f69f.jpeg", role : "Leder"},
            {name: "David Ramsvik", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6370f59dcadc0.jpeg", role: "Medlem"},
            {name: "Andreas Hope Pedersen", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/63626f2ba192b.jpeg", role: "Medlem"},
            {name: "Sander Nicolai Andersen", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/63606f1344a57.jpeg", role: "Medlem"},
            {name: "Andreas Gidske", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/63615c4a25116.jpeg", role: "Medlem"},
            {name: "Jeanette Fjeldstad", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/623208c0b7cff.jpeg", role: "Medlem"},
            {name: "Odin Nilsen", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/63615c0f67d3a.jpeg", role: "Medlem"},
            {name: "Christian Bjørnaas", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/63f4df5c666ec.jpeg", role: "Medlem"},
            {name: "Marcus Espås", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/63f4de8dc156f.jpeg", role: "Medlem"},
            {name: "Varvara Subbotina", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/63f4e0222a371.jpeg", role: "Medlem"},
            {name: "Kristine Hamre", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/63f4eefce7706.jpeg", role: "Medlem"}]}/>
            
            <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-20">
                Arbeidet vårt
            </div>

            <div className="grid md:grid-cols-2 ml-4 mr-4 items-center">
                <div className="font-sans text-lg text-black place-content-start my-5">
                    <ul className="ml-10 list-disc">
                        <li>Stå på stand</li>  
                        <li>Bleste i forelesninger</li> 
                        <li>Intervjue nye søkere</li> 
                        <li>Planlegge forberedelse-kurs</li>
                        <li>Planlegge sosiale arrangementer</li>
                        <li>Planlegge faglige arrangementer</li>    
                    </ul>
                </div> 
                
                <img 
                    className="md:max-w-l max-h-80 content-right my-5 mx-auto"
                    src="/images/team/RekrutteringTor.png"/>
            </div>

            <div className="font-sans text-lg text-black place-self-start text-left m-5">
            Det at vi er i rekrutteringsteamet betyr at vi har en mer intens periode i januar og august,
            men har det roligere resten av semesteret. I tillegg til rekrutteringsperioden har vi også ansvar
            for de sosiale og faglige arrangementene Vektorprogrammet arrangerer. De sosiale arrangementene
            kan være alt fra assistentfesten til go-cart eller grilling i parken. Blant de faglige
            arrangementene vi har hatt er foredrag med James Grime, Colin Wright, Newton programleder
            og Farmen-kjendisdeltager Stian Sandø. 
            </div>

            <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-10">
                Sosialt i Rekruttering 
            </div>
            <div className="font-sans text-lg text-black place-self-start text-left m-5">
            Vi er kanskje det teamet som liker å møtes oftest utenom vervet. Her finner vi på mye sprell
            og fanteri. Dette strekker seg fra fantastiske vors og uforglemmelige hytteturer til litt mer
            rolige og avslappede sushikvelder. Vi har også mye kontakt via vår gruppechat på snap hvor
            dagens (og nattens) festligheter deles hyppig. 
            </div>
            
            <div className="object-contains m-3">
                <img className="md:max-w-2xl h-auto content-center mx-auto"
                src="https://vektorprogrammet.no/images/team_images/313096245_1158050458440674_2660066729317743376_n.jpg"/>
            </div>

            <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-10">
                Opptak
            </div>
            
            <div className="font-sans text-lg text-black place-self-start m-3 mt-5 text-left">
            Vi i rekrutteringsteamet trenger stadig nye medlemmer. Så er du blid, hyggelig og utadvent, og har lyst på et givende og
            sosialt verv ved siden av studiene, ikke nøl med å ta kontakt!
            </div>

            <div className="font-sans text-lg text-black place-self-start m-3 text-left">
                Er det noe mer du lurer på er det bare å sende mail til <a 
                className="hover:underline text-vektor-darblue break-all" 
                href={`mailto:rekruttering.ntnu@vektorprogrammet.no`}>
                    rekruttering.ntnu@vektorprogrammet.no
                </a>
            </div>

            <div className="font-sans text-lg text-black place-self-start m-3 text-left">
            Hilsen oss i rekruttering!
            </div>

        </div>


        
    );
};

export default Rekruttering;