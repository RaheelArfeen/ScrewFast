import { useEffect } from "react";
import { useLocation } from "react-router";

const routeTitles = {
    "/": "ScrewFast",
    "/products": "Products | ScrewFast",
    "/services": "Services | ScrewFast",
    "/blogs": "Blog | ScrewFast",
    "/contact": "Contact | ScrewFast",
  };
  

const TitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const title = routeTitles[path] || "BD Doctors";
    document.title = title;
  }, [location]);

  return null;
};

export default TitleManager;
