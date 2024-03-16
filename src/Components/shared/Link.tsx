import { CurrentPage } from "@/Utils/CurrentPage";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useContext } from "react";
import closeNavbar from "@/Context/CloseNavbar";

type Props = {
  page: string;
  currentPage: CurrentPage;
  setCurrentPage: (value: CurrentPage) => void;
};

const Link = ({ page, currentPage, setCurrentPage }: Props) => {
  const closeNavbarContext = useContext(closeNavbar);

  let hrefId = page.toLowerCase().replace(/ /g, "") as CurrentPage;

  return (
    <AnchorLink
      className={`${currentPage === hrefId ? "text-primary-500" : "" } transition duration-200 hover:text-primary-300`}
      href={`#${hrefId}`}
      onClick={() => setCurrentPage(hrefId)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
