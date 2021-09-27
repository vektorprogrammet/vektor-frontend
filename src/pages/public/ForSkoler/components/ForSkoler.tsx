import React from "react";
import getContent from "api/ForSkoler";
import PageTitleCard from "./PageTitleCard";
import PageParagraph from "./PageSection";
import BorderContentCard from "./BorderContentCard";

const ForSkoler = (): JSX.Element => {
  const pageContent = getContent();
  return (
    <div className="container">
      <PageTitleCard
        title={pageContent.title}
        text={pageContent.ingress}
        imgPath={pageContent.img.path}
        alt={pageContent.img.alt}
        link={pageContent.link}
      />
      <div className=" max-w-4xl mx-auto block">
        {pageContent.content.map(({ title, text, list }) => (
          <PageParagraph key={title} title={title} text={text}>
            {list && (
              <ul className="pl-4 ml-4 mb-3 list-disc">
                {list?.map((listItem) => (
                  <li key={listItem} className=" text-lg">
                    {listItem}
                  </li>
                ))}
              </ul>
            )}
          </PageParagraph>
        ))}
        <BorderContentCard
          title={pageContent.cityContactsContent.title}
          text={pageContent.cityContactsContent.text}
        >
          <div>
            <table className="table-fixed divide-y divide-gray-300 text-base block overflow-x-auto border-t-2 border-b-2">
              <thead>
                <tr>
                  <th className="w-1/3 py-3 px-6">By</th>
                  <th className="w-1/3 py-3 px-6">E-Post</th>
                  <th className="w-1/3 py-3 px-6">Kontakt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {pageContent.cityContactsContent.table.map(
                  ({ city, email, url }) => {
                    return (
                      <tr>
                        <td className="py-3 px-6">{city}</td>
                        <td className="py-3 px-6">
                          <a
                            className="text-blue-600 hover:text-blue-800"
                            href={`mailto:${email}`}
                          >
                            {email}
                          </a>
                        </td>
                        <td className="py-3 px-6">
                          <a
                            className="text-blue-600 hover:text-blue-800"
                            href={url}
                          >
                            Kontakt
                            {" "}
                            {city}
                          </a>
                        </td>
                      </tr>
                    );
                  },
                )}
              </tbody>
            </table>
            <h2 className="px-3 text-2xl text-gray-600 text-center font-bold mx-auto my-3">
              {pageContent.cityContactsContent.bottomTitle}
            </h2>
            <p className="text-xl mb-3 px-3 mx-auto">
              {pageContent.cityContactsContent.bottomText}
            </p>
          </div>
        </BorderContentCard>
      </div>
    </div>
  );
};

export default ForSkoler;
