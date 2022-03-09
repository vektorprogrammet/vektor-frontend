

export const NoApplyCard = (props: any) =>{
    return (
        <form>

            <h1 className="font-bold text-xl my-8 text-vektor-darkblue"> {props.cities}</h1>

                <label className="block mt-3">
                    <input type="email" className="inline-flex items-center form-input block block border-solid border-2
                     border-grey" placeholder="E-post"/>
                </label>

            <div className="block">
                <div className="mt-2">

                    <div>
                        <label className="inline-flex items-center text-left">
                            <input type="checkbox" className="form-checkbox"/>
                            <span className="m-2">Få påminnelse når opptaket starter </span>
                        </label>
                    </div>

                </div>
            </div>

            <div className="flex ">
                <label className="flex items-center">

                </label>
            </div>

            <button type="submit"
                className="bg-vektor-darkblue hover:bg-vektor-blue text-white font-bold py-2 px-4 border border-blue-700 m-8 rounded">
                Send
            </button>

        </form>
    );

}
export default NoApplyCard;