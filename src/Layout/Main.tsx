import { useEffect } from "react";
import { Outlet } from "react-router";
import { useTranslation } from "react-i18next";
import Header1 from "../Components/Header/Header1";
import Footer1 from "../Components/Footer/Footer1";

const Main = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = i18n.language;
        if (dir === 'rtl') {
          document.body.classList.add('rtl-mode');
        } else {
          document.body.classList.remove('rtl-mode');
        }
    }, [i18n.language]);

    return (
        <div className='main-page-area'>
            <Header1></Header1>
            <Outlet></Outlet>
            <Footer1></Footer1>
        </div>
    );
};

export default Main;