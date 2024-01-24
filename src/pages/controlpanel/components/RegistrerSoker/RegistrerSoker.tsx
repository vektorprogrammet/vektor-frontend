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
            <section className="flex flex-col items-center w-full h-screen">
                { isBoxVisible && <>
                    <div className="m indicator">
                        <div className="indicator-item indicator-top">
                            <button onClick={removeBox} className="btn btn-primary">X</button>
                        </div>
                        <div className="card border">
                            <div className="card-body">
                            <h2 className="card-title">Søknad registrert!</h2> 
                            <p>En bekreftelsesmail med videre informasjon er sendt til assistenten.</p>
                            </div>
                        </div>
                    </div>
                    </>
                }
                <h1 className="w-1/2 text-5xl text-center mb-5">Registrer søker NTNU Høst 2023</h1>
                <form onSubmit={submitForm} className="flex flex-col justify-center w-1/2">
                    <section className="flex flex-col w-full">
                        <section className="flex justify-between">
                            <NameInput name="fornavn" label="Fornavn" />
                            <NameInput name="etternavn" label="Etternavn" />
                        </section>
                        <section className="flex justify-between">
                            <PhoneInput name="telefon" />
                            <EmailInput name="epost" />
                        </section>
                    </section>
                    <section className="grid grid-cols-6 w-full">
                        <SelectInput name="linje" label="Linje" options={ LINJER } />
                        <SelectInput name="aarstrinn" label="Årstrinn" options={ AARSTRINN } />
                        <SelectInput name="kjonn" label="Kjønn" options={ KJONN } />
                    </section>
                    <button type="submit">Registrer</button>
                </form>
            </section>
        </>
    );
}

export default RegistrerSoker