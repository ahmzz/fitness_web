import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  title: string;
  selectedTitle: string;
  setSelectedTitle: (value: string) => void;
};

const Link = ({ title, selectedTitle, setSelectedTitle }: Props) => {
  const lowerCaseTitle = title.toLowerCase().replace(/ /g, "");

  return (
    <AnchorLink
      className={`${
        selectedTitle === lowerCaseTitle ? " text-delft-blue" : ""
      } transition duration-500 hover:text-mint-green-900`}
      href={`#${lowerCaseTitle}`}
      onClick={()=>setSelectedTitle(lowerCaseTitle)}
    >
      {title}
    </AnchorLink>
  );
};

export default Link;
