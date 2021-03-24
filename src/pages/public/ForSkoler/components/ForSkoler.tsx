import React from "react";
import PageTitleCard from "../../../../components/Pages/PageTitleCard";
import getContent from "../../../../api/ForSkoler";

const ForSkoler = (): JSX.Element => {
  const pageContent = getContent();
  return (
    <div>
      <PageTitleCard
        title={pageContent.title}
        text={pageContent.ingress}
        imgPath={pageContent.img}
        alt="dfølkajdsøfla"
        link={pageContent.link}
      />
      { pageContent.content.map(()=>{}) }
    </div>
  );
};

export default ForSkoler;
