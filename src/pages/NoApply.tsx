

export const NoAppCard = (props: any) =>{
    return (
        <form>

            <h1 className="font-bold mt-2"> {props.cities}</h1>

                <label className="block mt-3">
                    <input type="email" className="inline-flex items-center form-input block w-1/2 block border-solid border-2 border-grey" placeholder="E-post"/>
                </label>

            <div className="block">
                <div className="mt-2">
                    <div>
                        <label className="w-1/2 inline-flex items-center text-left">
                            <input type="checkbox" className="form-checkbox "/>
                            <span className="ml-2">Send meg også påminnelse om neste infomøte.</span>

                        </label>
                    </div>
                    <div>
                        <label className="w-1/2 inline-flex items-center ">
                            <input type="checkbox" className="form-checkbox"/>
                            <span className="ml-2">Få påminnelse når opptaket starter </span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="flex ">
                <label className="flex items-center">

                </label>
            </div>

            <button type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 m-8 rounded">
                Submit
            </button>

        </form>
    );

}
export default NoAppCard;