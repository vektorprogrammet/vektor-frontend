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
        <span className="border-solid border-2 border-grey w-full" >
        
            <div className="divide-y divide-gray w-full text-center align-middle ">
                <div className="bg-white space-y-10 p-10 w-full text-center ">

                    <span className="w-full flex justify-center space-x-10 ">

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
    </span>
    )
}



type ChildProps = {
    onChooseCity: (variable: City)=>void;
    city: City;
}



const CityButton = ({onChooseCity, city}: ChildProps) => {
    let color = "blue";
    const [openTab, setOpenTab] = React.useState(1);
    return (

        <div className="flex-container horizontal text-center w-full">
            <button className="
            text-gray-600
            py-4
            px-6
            block
            hover:text-purple-500
            focus:outline-none
            border-b-2
            border-purple-500
            " onClick={()=>onChooseCity(city)}> {city} </button>
            <br/>
        </div>
    )
}
