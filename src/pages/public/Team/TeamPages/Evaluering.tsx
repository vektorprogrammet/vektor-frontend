import React from "react";
import TeamTemplate from "./TeamTemplate";

const Evaluering = (): JSX.Element => {
    return (
        <div className="max-w-screen-lg mt-5 mb-20 mx-auto flex flex-col items-center">
            <TeamTemplate name="Evaluering" mail="evaluering.ntnu@vektorprogrammet.no" 
            text="Vi sender ut spørreundersøkelser, lager statistikk av dem og skriver så semester- og årsrapporter." 
            members={[{ name: "Hannes Witt", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/634926da1a3a6.jpeg", role: "Leder"},
            {name: "Emma Dyvesveen Myrbekk", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/634926c5a6400.jpeg", role: "Medlem"},
            {name: "Tinus Øen", image: "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/63492623842a1.jpeg", role: "Medlem"},
            {name: "Maja Christine Stahl", image: "https://vektorprogrammet.no/media/cache/profile_img/images/defaultProfile.png", role: "Medlem"}]}/>
            
            <img
                src="https://vektorprogrammet.no/images/team_images/Evaluering/Teambildet.jpg"
                className="md:max-w-2xl h-auto content-center mx-auto m-3 mt-20"
            />
            <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-10">
            Arbeidet vårt
            </div>

            <div className="font-sans text-lg text-black text-center m-5">
            Evalueringsteamet lager hovedsaklig spørreundersøkelser for vektorassistenter, elever, lærere, samt foreldre som deltok på semesterets foreldrekurs. Å få 
            tilbakemeldinger gjennom disse undersøkelsene er viktig for å kunne forbedre Vektorprogrammet. Når vi får svar på undersøkelsene, bruker vi statistikken fra 
            undersøkelsene til å skrive rapporter. På denne måten får vi en god oversikt over hva som fungerer bra ved Vektorprogrammet og hva som bør forbedres til neste 
            semester. På slutten av hvert semester skriver vi en rapport som oppsummerer arbeidet til Vektorprogrammet gjort foregående semester og mål for det neste semesteret. 
            Vi skriver også en promorapport som sendes til sponsorer av Vektorprogrammet for å vise hva vi har oppnådd gjennom året. Når denne rapporten lages bruker vi InDesign.
            </div>

            <div className="flex flex-wrap justify-center sm:space-x-8 ml-4 mr-4">
                <div className="m-auto object-contain">
                    <img
                        src="https://vektorprogrammet.no/images/team_images/trapp_bygg.jpg"
                        className="max-h-80 sm:max-w-md content-center mx-auto m-3 mt-15"
                    />
                </div>

                <div className="object-contain">
                    <img
                        src="https://vektorprogrammet.no/images/team_images/trapp_park.jpg"
                        className="max-h-96 sm:max-w-xs content-center mx-auto m-3 mt-15"
                    />
                </div>
            </div>
            
            <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-10">
            Sosialt i evaluering
            </div>

            <div className="font-sans text-lg text-black text-center m-5">
            Vi har hyggelige og spennende arrangementer både innad i teamet og sammen med de andre teamene i Vektorprogrammet. 
            Vi i evaluering har vært ute og spist sammen, og arrangert pizza- og spillkveld. Det skjer også mye sosialt på tvers av team, 
            blant annet hytteturer, tema-fester, 17.mai-feiring, Gokart og LazerTag. Jevnlig utover semesteret arrangeres det TeamSosial, 
            der hvert team inviterer to andre team til en sosial sammenkomst.  
            </div>

            
            
            
            
            
            <img className="md:max-w-xl h-auto content-center mx-auto" src="/public/images/team/EvalueringTor.png"></img>
        </div>
   );
};

export default Evaluering;