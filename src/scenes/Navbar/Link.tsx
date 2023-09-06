import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedTitle } from "@/types/types";
type Props = {
  title: string;
  selectedTitle: SelectedTitle;
  setSelectedTitle: (value: SelectedTitle) => void;
};

const Link = ({ title, selectedTitle, setSelectedTitle }: Props) => {
  const lowerCaseTitle = title.toLowerCase().replace(/ /g, "") as SelectedTitle

  return (
    <AnchorLink
      className={`${
        selectedTitle === lowerCaseTitle ? " text-ucla-blue" : ""
      } transition duration-500 hover:text-ucla-blue font-bold`}
      href={`#${lowerCaseTitle}`}
      onClick={()=>setSelectedTitle(lowerCaseTitle)}
    >
      {title}
    </AnchorLink>
  );
};

export default Link;
