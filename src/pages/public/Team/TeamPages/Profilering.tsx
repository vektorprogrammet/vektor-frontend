import React from "react";
import TeamTemplate from "./TeamTemplate";

const Profilering = (): JSX.Element => {
    return (
        <div className="max-w-screen-lg mt-5 mb-20 mx-auto flex flex-col items-center">
            <TeamTemplate name="Profilering" mail="profilering.ntnu@vektorprogrammet.no"
            text="Profileringsteamet jobber for å gjøre Vektorprogrammet mer synlig gjennom sosiale medier."
            members={[{name: "Per Hjelle Solheim", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6172aab7e0211.jpeg", role: "Leder"},
            {name: "David Ramsvik", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6370f59dcadc0.jpeg", role: "Medlem"},
            {name: "Ingeborg Eldevik Rusaas", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6336cca326080.jpeg", role: "Medlem"},
            {name: "Gaute Eng Simonsen", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6232f4b08ace7.jpeg", role: "Medlem"},
            {name: "Nora Yttri", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6336d96dc66e2.jpeg", role: "Medlem"},
            {name: "Swati Soosaipillai", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6336b44383a84.jpeg", role: "Medlem"},
            {name: "Andreas Gidske", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/63615c4a25116.jpeg", role: "Medlem"},
            {name: "Hege Sæther", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/63ed048e0bb38.jpeg", role: "Medlem"},
            {name: "Malene Ytterdahl-Karlengen", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/64089ffa85abe.jpeg", role: "Medlem"}]}/>

            <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-20">
                Arbeidet vårt
            </div>

            <div className="font-sans text-lg text-black text-center m-5">
            Profileringsteamet har ansvar for å representere Vektorprogrammet utad. Dette innebærer å lage innhold og innlegg til sosiale medier,
            samt å nå ut til andre medier. Arbeidsoppgaver kan være å ta bilder på arrangementer, redigere bilder og videoer, intervjue vektorassistenter
            og teammedlemmer, lage promofilm og starte prosjekter man selv synes er spennende. Det som er spesielt for profileringsteamet er at det er
            åpent for individuell kreativitet, slik at vi kan ha en stor rolle i å forme hvordan Vektorprogrammet profileres. Du trenger ikke å ha noe
            erfaring med profileringsarbeid, film eller foto fra før.
            </div>

            <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-10">
            Sosialt i evaluering
            </div>

            <div className="font-sans text-lg text-black text-center m-5">
            Vi har hyggelige og spennende arrangementer både innad i teamet og sammen med de andre teamene i Vektorprogrammet. Vi i profileringsteamet er
            spesielt gode på tacokvelder, minigolf og hygge på kontoret. Det skjer også mye sosial på tvers av team, blant annet hytteturer, fester,
            tacokveld, 17.mai-feiring, åpent kontor, gokart, minigolf, bumperballs og LazerTag. Jevnlig utover semesteret arrangeres det TeamSosialt,
            der hvert team inviterer to andre team til en sosial sammenkomst.
            </div>

            <img
                src="https://vektorprogrammet.no/images/team_images/Profilering/IMG_9785.jpeg"
                className="md:max-w-3xl h-auto content-center mx-auto"
            />

            <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-10">
                Opptak
            </div>

            <div className="font-sans text-lg text-black text-center m-5">
            Arbeidsmengden som teammedlem i profileringsteamet er ca. 2 timer i uken. Den største delen av arbeidet gjøres under de møter med teamet.
            Det er ikke noe arbeid i eksamensperioden, men en del sosiale arrangementer man kan være med på hvis man ønsker det. 
            </div>

            <div className="grid md:grid-cols-2 ml-4 mr-4 mt-4">
                <div className="font-sans text-lg text-black place-content-start">
                    <div className="mb-2 mt-4">Som medlem får du:</div>
                    <ul className="ml-10 list-disc">
                        <li>ansvar for et område du selv velger, innen profileringen. Dette kan være, feks:
                            <ul className="ml-10 list-disc type-circle">
                                <li>sosiale medier</li>
                                <li>promofilm</li>
                                <li>innhold til sosiale medier (intervjuer av assistenter og teammedlemmer)</li>
                                <li>nå ut til andre medier, feks lokale studentaviser</li>
                                <li>utforming av flyers og plakater</li>
                            </ul>
                            <br/>
                        </li>
                        <li>bli med på å forme Vektorprogrammets ansikt utad</li>
                        <li>bli del av et sosialt og kreativt team</li>
                        <li>gode venner på tvers av linjer og team</li>
                        <li>gode erfaringer innen teamarbeid</li>
                        <li>et meningsfylt verv </li>
                        <li>få en relevant attest til senere jobbsøking</li>
                    </ul>

                    <div className="font-sans text-lg text-black m-5">
                        Søk profilering hvis du har lyst til å påvirke organsisajonen og bli del av en fantastisk gjeng!</div>
                    </div> 
                
                <img 
                    className="md:max-w-xl h-auto content-right mx-auto"
                    src="/images/team/ProfileringTor.png"/>
            </div>
    

            <div className="font-sans text-lg text-black m-5">
                Hvis du har noen spørsmål, er det bare å ta kontakt på <a 
                className="hover:underline text-vektor-darblue break-all" 
                href={`mailto:profilering.ntnu@vektorprogrammet.no`}>
                    profilering.ntnu@vektorprogrammet.no.
                </a>
            </div>


        </div>
    );
    
};

export default Profilering;

