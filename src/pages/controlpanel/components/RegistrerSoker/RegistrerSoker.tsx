import { useState } from "react";
import { SelectInput } from "./Inputs";

const LINJER = [
    {
        name: "MTDT",
        id: "mtdt"
    },
    {
        name: "MTKOM",
        id: "mtkom"
    }
]
const AARSTRINN = [
    {
        name: "1. Trinn",
        id: "1"
    },
    {
        name: "2. Trinn",
        id: "2"
    },
    {
        name: "3. Trinn",
        id: "3"
    },
    {
        name: "4. Trinn",
        id: "4"
    },
    {
        name: "5. Trinn",
        id: "5"
    }
]
const KJONN = [
    {
        name: "Mann",
        id: "mann"
    },
    {
        name: "Kvinne",
        id: "kvinne"
    },
    {
        name: "Annet",
        id: "annet"
    }
]

const RegistrerSoker:React.FC = () => {
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    const submitForm = (event: React.FormEvent<HTMLFormElement> | undefined) => {
        event?.preventDefault();
        showBox();
    }
    const showBox = () => {
        setIsBoxVisible(true)
    }
    const removeBox = () => {
        setIsBoxVisible(false)
    }
    
    return (
        <>
            <section className="flex flex-col items-center w-screen h-screen">
                { isBoxVisible && <>
                    <div className="flex rounded-lg bg-vektor-kontrollblue w-1/2 p-5 justify-between my-5 text-table-grey">
                        <div className="">
                            <div className="">
                            <h2 className="text-2xl">Søknad registrert!</h2> 
                            <p className="max-md:hidden">En bekreftelsesmail med videre informasjon er sendt til assistenten.</p>
                            </div>
                        </div>
                        <div className="">
                            <button onClick={removeBox} className="">x</button>
                        </div>
                    </div>
                    </>
                }
                <h1 className="text-3xl w-1/2 text-5xl text-center my-5 max-md:text-2xl">Registrer søker NTNU Høst 2023</h1>
                <form onSubmit={submitForm} className="flex flex-col justify-center items-center w-1/2 gap-10">
                        <div className="w-full max-w-[300px]">
                            <label className="label" htmlFor="input-firstname">Fornavn</label>
                            <input className="input input-info w-full" name="firstname" id="input-firstname" type="text" placeholder="" required/>
                        </div>
                        <div className="w-full max-w-[300px]">
                            <label className="label" htmlFor="input-lastname">Etternavn</label>
                            <input className="input input-info w-full" name="lastname" id="input-lastname" type="text" placeholder="" required/>
                        </div>
                        <div className="w-full max-w-[300px]">
                            <label className="label" htmlFor="input-phone">Telefon</label>
                            <input className="input input-info w-full" name="phone" id="input-phone" type="phone" placeholder="" required/>
                        </div>
                        <div className="w-full max-w-[300px]">
                            <label className="label" htmlFor="input-email">Email</label>
                            <input className="input input-info w-full" name="email" id="input-email" type="email" placeholder="" required/>
                        </div>
                    <section className="flex max-md:flex-col max-md:items-center max-md:w-full max-md:text-center w-1/2 gap-5">
                        <SelectInput name="linje" label="Linje" options={ LINJER } />
                        <SelectInput name="aarstrinn" label="Årstrinn" options={ AARSTRINN } />
                        <SelectInput name="kjonn" label="Kjønn" options={ KJONN } />
                    </section>
                    <button className="rounded-full border-1 text-white hover:bg-vektor-blue-hover bg-vektor-blue border-vektor-darblue px-5 py-2 w-32 h-14" type="submit">Registrer</button>
                </form>
            </section>
        </>
    );
}

export default RegistrerSoker