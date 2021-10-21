import React, {useState} from 'react'
import NoAppCard from './NoApply'
import {SelectCity} from "./AssistenterCard";
import {Console} from "inspector";

enum City {
    OSLO = "Oslo",
    BERGEN = "Bergen",
    TRONDHEIM = "Trondheim",
    ÅS = "Ås"
}


export default function ParentComponent() {

    const [city, setCity] = useState<City>(City.TRONDHEIM)


    return (
        <div className="divide-y divide-gray">
            <div className="bg-white  space-y-10 p-10 w-full text-center ">

                <span className="flex space-x-4 align-center text-center ">

                    <CityButton onChooseCity={setCity} city={City.TRONDHEIM} />
                    <CityButton onChooseCity={setCity} city={City.OSLO}/>
                    <CityButton onChooseCity={setCity} city={City.ÅS}/>
                    <CityButton onChooseCity={setCity} city={City.BERGEN}/>


                </span>


            <div className="text-center">

                <NoAppCard cities={city}/>

            </div>

        </div>
    </div>
    )
}



type ChildProps = {
    onChooseCity: (variable: City)=>void;
    city: City;
}

const CityButton = ({onChooseCity, city}: ChildProps) => {
    return (
        <div className="flex-container horizontal text-center">
            <button onClick={()=>onChooseCity(city)}> {city} </button>
            <br/>
        </div>
    )
}