import { useEffect, useState } from 'react';
import { Link } from "react-router";
import Nav from './Nav';
import { useTranslation } from "react-i18next";

export default function Header1({ variant }:{ variant?: string }) {
  const { t, i18n } = useTranslation();
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState<string>("");
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  const whatsappNumber = "962792386318";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t('whatsapp_message'))}`;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); 
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky');
      } else {
        setIsSticky('');
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
    <header
      className={`cs_site_header header_style_2 header_style_2_0 cs_style_1 header_sticky_style1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >
      <div className="cs_main_header">
        <div className="container-fluid">
          <div className="cs_main_header_in">
            <div className="cs_header_shape position-absolute header_shape_1">
              <img src="/assets/img/header-shape-2.svg" alt="Header shape" />
            </div>            
            <div className="cs_main_header_left">
            <Link className="cs_site_branding cs_bold cs_heading_color" to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '32px', fontWeight: '800', letterSpacing: '-1px', lineHeight: '1' }}>
                <span style={{ color: 'var(--theme-color-2)', fontSize: '40px', lineHeight: '0' }}>.</span>
                <span>{t('brand_name')}</span>
              </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
            </div>
            <div className="cs_main_header_right">
              <div className="header-btn d-flex align-items-center gap-3">
                <div className="cs_language_switch d-flex align-items-center gap-2 cs_fs_14 cs_bold cs_heading_color text-uppercase">
                  <span 
                    onClick={() => changeLanguage('en')} 
                    className={`cs_lang_item ${i18n.language === 'en' ? 'active' : ''}`}
                    style={{ cursor: 'pointer', color: i18n.language === 'en' ? '#000' : 'rgba(0,0,0,0.6)', transition: '0.3s' }}
                  >
                    EN
                  </span>
                  <span style={{ color: 'rgba(0,0,0,0.3)' }}>|</span>
                  <span 
                    onClick={() => changeLanguage('ar')} 
                    className={`cs_lang_item ${i18n.language === 'ar' ? 'active' : ''}`}
                    style={{ cursor: 'pointer', color: i18n.language === 'ar' ? '#000' : 'rgba(0,0,0,0.6)', transition: '0.3s' }}
                  >
                    العربية
                  </span>
                </div>
                <div className="main-button header-btn-1">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Get started button" className="theme-btn cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_bold cs_white_color text-uppercase">
                    <span>{t('get_started_now')}</span>
                    <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
                  </a>                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
  );
}
