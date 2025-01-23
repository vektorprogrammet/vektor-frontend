import Divider from "@/components/Divider";

interface Props {
  key: string;
  title: string;
  text: string;
}

const TextCard = ({
  title,
  text,
}: Props): JSX.Element => {
  return (
    <div className={`flex w-full gap-5 md:gap-14 justify-center flex-wrap`}>
      <div className="flex flex-col max-w-6xl gap-3 md:gap-5 m-auto">
        <h1 className="text-center text-xl md:text-3xl font-bold text-vektor-DARKblue dark:text-text-dark">
          {title}
        </h1>
        <p className="max-w-lg text-md md:text-lg dark:text-text-dark">
          {text}
        </p>
      </div>
      <Divider/>
    </div>
  );
};
export default TextCard;
