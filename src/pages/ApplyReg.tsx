

export const ApplyCard = (props: any) =>{
    return (
        <form>

            <h1 className="text-xl text-vektor-darkblue font-bold mt-8 mb-2"> {props.cities}</h1>

            <div className="mt-1 mb-8">Søknadsfrist: </div>

            <div className="flex w-full my-4 space-x-10 justify-center flex-wrap">
                <label className="">
                    <input type="fornavn" className="mb-2 p-1 rounded block border-solid border-2 border-vektor-darkblue" placeholder="Fornavn"/>
                </label>

                <label className="">
                    <input type="etternavn" className="mb-2 p-1 rounded items-center form-input block w-full block border-solid border-2 border-vektor-darkblue" placeholder="Etternavn"/>
                </label>
            </div>

            <div>
                <label className="block mt-3">
                    <input type="email" className="mb-2 p-1 rounded inline-flex items-center form-input block w-1/2 block border-solid border-2 border-vektor-darkblue" placeholder="E-post"/>
                </label>

                <label className="block mt-3">
                    <input type="telefon" className="mb-2 p-1 rounded inline-flex items-center form-input block w-1/2 block border-solid border-2 border-vektor-darkblue" placeholder="Telefon nr"/>
                </label>
            </div>

            <label className="block mt-3">
                <input type="linje" className="mb-2 p-1 rounded inline-flex items-center form-input block w-1/2 block border-solid border-2 border-vektor-darkblue" placeholder="Linje"/>
            </label>


            <div className="my-4 space-x-4">
                <select className="p-2 rounded border-solid border-2 border-vektor-darkblue text-vektor-darkblue font-bold">
                    <option value="" disabled selected hidden>Kjønn</option>
                    <option className="">Mann</option>
                    <option>Kvinne</option>
                    <option>Annet</option>
                </select>

                <select className="p-2 rounded border-solid border-2 border-vektor-darkblue text-vektor-darkblue font-bold">
                    <option value="" disabled selected hidden>Årstrinn</option>
                    <option>1.klasse</option>
                    <option>2.klasse</option>
                    <option>3.klasse</option>
                    <option>4.klasse</option>
                    <option>5.klasse</option>
                </select>
            </div>
            <button className="bg-vektor-darkblue hover:bg-vektor-blue text-white font-bold py-2 px-4 m-8 rounded ">
                Søk nå!
            </button >


    <div className="text-vektor-darkblue">
            <p className="items-center mx-16 mb-10 text-center">
                Har du vært assistent tidligere?
                Da kan du søke på nytt her (krever innlogging)

            </p>
    </div>

        </form>
    );

}
export default ApplyCard;