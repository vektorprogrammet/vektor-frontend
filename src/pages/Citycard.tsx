import React, {useRef, useState} from 'react'
import ApplyCard from './ApplyReg'
import NoApplyCard from "./NoApplyCard";

enum City {
    OSLO = "Oslo",
    BERGEN = "Bergen",
    TRONDHEIM = "Trondheim",
    ÅS = "Ås"
}

export default function ParentComponent() {

    const [city, setCity] = useState<City>(City.TRONDHEIM)



    return (
        <div className="flex-col h-screen w-screen flex items-center justify-center">
            <span className=" border-solid border-2 border-vektor-darkblue w-content" >
                <div className="divide-y divide-vektor-darkblue ">
                    <span className="flex justify-center ">
                        <CityButton onChooseCity={setCity} city={City.TRONDHEIM} isActive={city == City.TRONDHEIM} />
                        <CityButton onChooseCity={setCity} city={City.OSLO} isActive={city == City.OSLO}/>
                        <CityButton onChooseCity={setCity} city={City.ÅS} isActive={city == City.ÅS}/>
                        <CityButton onChooseCity={setCity} city={City.BERGEN} isActive={city == City.BERGEN}/>
                        </span>


                    <div className="text-center">

                        {/*Use ApplyCard when users can apply and NoApllyCard when it is locked*/}

                        <ApplyCard cities={city}/>

                    </div>

                </div>
            </span>
        </div>
    )
}


type ChildProps = {
    onChooseCity: (variable: City)=>void;
    city: City;
    isActive: boolean;
}

//setSelected(prevState =>({tab1:"black"}))

const CityButton = ({onChooseCity, city, isActive}: ChildProps) => {
    const activeClass = isActive ? "text-vektor-darkblue" : "";
    return (
        <div className="flex-container horizontal text-center px-3 pt-4">
            <button

            className={`
            text-gray-600
            font-bold
            block
            hover:text-vektor-blue
            focus:outline-none
            active:blue
            border-blue-500
            ` + activeClass} onClick={()=> {onChooseCity(city)}}> {city} </button>

            <br/>
        </div>

    )

}

