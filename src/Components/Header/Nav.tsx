import { useTranslation } from "react-i18next";

export default function Nav({ setMobileToggle }:{setMobileToggle: (value: boolean) => void;}) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <a href="#home" onClick={() => setMobileToggle(false)}>{t('nav_home')}</a>
      </li>
      <li>
        <a href="#services" onClick={() => setMobileToggle(false)}>{t('nav_services')}</a>
      </li>
      <li>
        <a href="#analysis" onClick={() => setMobileToggle(false)}>{t('nav_about')}</a>
      </li>
      <li>
        <a href="#pricing" onClick={() => setMobileToggle(false)}>{t('nav_pricing')}</a>
      </li>
      <li>
        <a href="#testimonials" onClick={() => setMobileToggle(false)}>{t('nav_testimonials')}</a>
      </li>
      <li className="cs_mobile_lang_switcher d-lg-none mt-3" style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '15px' }}>
        <div className="d-flex align-items-center gap-3 cs_fs_14 cs_bold cs_heading_color text-uppercase">
          <span 
            onClick={() => changeLanguage('en')} 
            style={{ cursor: 'pointer', color: i18n.language === 'en' ? 'var(--theme-color-2)' : 'inherit' }}
          >
            EN
          </span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span 
            onClick={() => changeLanguage('ar')} 
            style={{ cursor: 'pointer', color: i18n.language === 'ar' ? 'var(--theme-color-2)' : 'inherit' }}
          >
            العربية
          </span>
        </div>
      </li>
    </ul>
  );
}
