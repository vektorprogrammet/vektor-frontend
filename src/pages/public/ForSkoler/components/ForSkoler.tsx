import BorderContentCard from "./BorderContentCard";
import PageParagraph from "./PageSection";
import PageTitleCard from "./PageTitleCard";
import getContent from "api/ForSkoler";
import TextCard from "@/components/TextCard";
import Divider from "@/components/Divider";

const ForSkoler = (): JSX.Element => {
  const { title, ingress, cards, bottomText } = getContent();

  const goToContact = (url: string) => () => {
    window.open(url);
  }

  return (
    <div className="flex flex-col items-center p-5 mt-40 mb-20 mx-auto gap-10 md:gap-20 dark:text-text-dark">
      <div className="flex flex-col gap-3 md:gap-5">
        <h1 className="max-w-3xl text-vektor-DARKblue text-2xl md:text-4xl text-center font-bold dark:text-text-dark">
          Søk om å få assistenter til din skole
        </h1>
        <p className="max-w-3xl text-md md:text-lg">
          Ta kontakt med ansvarlig for skolekoordinering i din by for å sende inn en søknad om å få vektorassistenter til din skole.
        </p>
      </div>
      <div>
        {[
          {
            city: "Trondheim",
            url: ""
          }, 
          {
            city: "Ås",
            url: ""
          },
          {
            city: "Bergen",
            url: ""
          } 
        ].map(({ city, url }) => {
          return (
            <button
            type="button"
            onClick={goToContact(url)}
            className="btn btn-success text-white text-lg py-2 px-4 w-48 mx-6">
              {city}
            </button>
          )
        })}
      </div>
      <div>
        <h2 className="max-w-3xl text-vektor-DARKblue text-2xl md:text-2xl text-center font-bold dark:text-text-dark">
          Har ikke Vektorprogrammet etablert seg i din by enda?
        </h2>
        <p className="max-w-3xl text-md md:text-lg">
          Ta kontakt med <a href="">hovedstyret</a> for å melde din interesse!
        </p>
      </div>
    </div>
    // <div className="flex flex-col items-center p-5 mt-40 mb-20 mx-auto gap-10 md:gap-40 dark:text-text-dark">
    //   <div className="flex flex-col gap-3 md:gap-5">
    //     <h1 className="max-w-3xl text-vektor-DARKblue text-2xl md:text-4xl text-center font-bold dark:text-text-dark">
    //       {title}
    //     </h1>
    //     <p className="max-w-3xl text-md md:text-lg">{ingress}</p>
    //     <Divider />
    //   </div>
    //   {cards.map((card, index) => (
    //     <TextCard
    //       key={card.title}
    //       title={card.title}
    //       text={card.text}
    //     />
    //   ))}
    //   <p className="max-w-3xl text-md md:text-lg">
    //     {bottomText}
    //   </p>
    //   <BorderContentCard
    //       title="Søk om å få assistenter til din skole"
    //       text={[
    //         `Ta kontakt med ansvarlig for skolekoordinering i din by 
    //       for å sende inn en søknad om å få vektorassistenter til din skole:`,
    //       ]}
    //     >
    //     <div>
    //       <table className="table-fixed divide-y divide-gray-300 text-base block overflow-x-auto border-t-2 border-b-2 dark:text-gray-300">
    //         <thead>
    //           <tr>
    //             <th className="w-1/3 py-3 px-6">By</th>
    //             <th className="w-1/3 py-3 px-6">E-Post</th>
    //             <th className="w-1/3 py-3 px-6">Kontakt</th>
    //           </tr>
    //         </thead>
    //         <tbody className="divide-y divide-gray-300">
    //           {[
    //             {
    //               city: "Trondheim",
    //               email: "styret.ntnu@vektorprogrammet.no",
    //               url: "#",
    //             },
    //             { city: "Ås", email: "nmbu@vektorprogrammet.no", url: "#" },
    //             { city: "Oslo", email: "Oslo@vektorprogrammet.no", url: "#" },
    //             {
    //               city: "Bergen",
    //               email: "uib@vektorprogrammet.no",
    //               url: "#",
    //             },
    //           ].map(({ city, email, url }) => {
    //             return (
    //               <tr key={city}>
    //                 <td className="py-3 px-6">{city}</td>
    //                 <td className="py-3 px-6">
    //                   <a
    //                     className="text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100"
    //                     href={`mailto:${email}`}
    //                   >
    //                     {email}
    //                   </a>
    //                 </td>
    //                 <td className="py-3 px-6">
    //                   <a
    //                     className="text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100"
    //                     href={url}
    //                   >
    //                     Kontakt {city}
    //                   </a>
    //                 </td>
    //               </tr>
    //             );
    //           })}
    //         </tbody>
    //       </table>
    //       <h2 className="px-3 text-2xl text-gray-600 text-center font-bold mx-auto my-3 dark:text-gray-200">
    //         Har ikke Vektorprogrammet etablert seg i din by ennå?
    //       </h2>
    //       <p className="text-xl mb-3 px-3 mx-auto dark:text-gray-300">
    //         Ta kontakt med hovedstyret@vektorprogrammet.no for å melde din
    //         interesse!
    //       </p>
    //     </div>
    //   </BorderContentCard>
    // </div>
  );
};

export default ForSkoler;
