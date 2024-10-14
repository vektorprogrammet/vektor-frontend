export const NoApplyCard = (props: any) => {
  const { cities } = props;
  return (
    <form>
      <h1 className="font-bold text-xl my-8 text-vektor-darblue"> {cities}</h1>

      <div className="block mt-3">
        <input
          type="email"
          className="inline-flex items-center form-input border-solid border-2 border-grey"
          placeholder="E-post"
        />
      </div>

      <div className="block">
        <div className="mt-2">
          <div>
            <div className="inline-flex items-center text-left">
              <input type="checkbox" className="form-checkbox" />
              <span className="m-2">Få påminnelse når opptaket starter </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex ">
        <div className="flex items-center" />
      </div>

      <button
        type="submit"
        className="bg-vektor-darkblue hover:bg-vektor-blue text-white font-bold py-2 px-4 border border-blue-700 m-8 rounded"
      >
        Send
      </button>
    </form>
  );
};
export default NoApplyCard;
