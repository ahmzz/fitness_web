import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedTitle } from "@/types/types";

type Props = {
  children: React.ReactNode;
  setSelectedTitle: (value: SelectedTitle) => void;
};

const ActionButton = ({ children, setSelectedTitle }: Props) => {
  return (
    <AnchorLink className="rounded-md bg-midnight-green text-mint px-10 py-2 hover:bg-prussian-blue transition duration-100 hover:text-mint-green"
        onClick={()=>setSelectedTitle(SelectedTitle.CONTACT)}
        href={`#${SelectedTitle.CONTACT}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
