

export const NoAppCard = (props: any) =>{
    return (
        <form>

            <p className="font-bold"> {props.cities}</p>
            <label className="block">
                <input type="email" className="form-input mt-1 block w-full border-solid border-2 border-grey" placeholder="E-post"/>
            </label>

            <div className="flex mt-2">
                <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox"/>
                    <span className="ml-2">Send meg også påminnelse om neste infomøte.</span>
                </label>
            </div>

            <div className="flex mt-2">
                <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox"/>
                    <span className="ml-2">Få påminnelse når opptaket starter </span>
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