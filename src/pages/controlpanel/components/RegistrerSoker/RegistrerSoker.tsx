import { useState } from "react";
import { NameInput, PhoneInput, EmailInput, SelectInput } from "./Inputs";

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
                    <div className="flex rounded-lg bg-green-300 w-1/2 p-5 justify-between my-5">
                        <div className="">
                            <div className="">
                            <h2 className="text-2xl">Søknad registrert!</h2> 
                            <p>En bekreftelsesmail med videre informasjon er sendt til assistenten.</p>
                            </div>
                        </div>
                        <div className="">
                            <button onClick={removeBox} className="">x</button>
                        </div>
                    </div>
                    </>
                }
                <h1 className="max-md:text-3xl w-1/2 text-5xl text-center my-5">Registrer søker NTNU Høst 2023</h1>
                <form onSubmit={submitForm} className="flex flex-col justify-center w-1/2 gap-10">
                    <section className="self-center max-md:gap-20 flex flex-col w-full gap-5">
                        <section className="flex max-md:flex-col justify-around w-full gap-10">
                            <div className="w-full">
                                <NameInput name="fornavn" label="Fornavn" />
                            </div>
                            <div className="w-full">
                                <NameInput name="etternavn" label="Etternavn" />
                            </div>
                        </section>
                        <section className="flex max-md:flex-col justify-around w-full gap-10">
                            <div className="w-full">
                                <PhoneInput name="telefon" />
                            </div>
                            <div className="w-full">
                                <EmailInput name="epost" />
                            </div>
                        </section>
                    </section>
                    <section className="self-start flex max-md:flex-col max-md:items-center max-md:w-full max-md:text-center w-1/2">
                        <SelectInput name="linje" label="Linje" options={ LINJER } />
                        <SelectInput name="aarstrinn" label="Årstrinn" options={ AARSTRINN } />
                        <SelectInput name="kjonn" label="Kjønn" options={ KJONN } />
                    </section>
                    <button className="self-center rounded border-2 text-white hover:bg-green-400 bg-green-500 border-green-600 px-5 py-2" type="submit">Registrer</button>
                </form>
            </section>
        </>
    );
}

export default RegistrerSoker