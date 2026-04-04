import { useTranslation } from "react-i18next";

const Footer1 = () => {
    const { t } = useTranslation();
    const bgImage = '/assets/img/footer-bg-2.svg'; 

    return (
 <footer className="cs_footer cs_style_1 cs_type_1 cs_accent_bg cs_bg_filed cs_white_color" style={{ backgroundImage: `url(${bgImage})`}}  >
      <div className="cs_height_130 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_footer_top position-relative">
          <ul className="cs_location_list cs_mp_0">
            <li>
              <span className="cs_location_icon cs_center cs_theme_color_4 cs_radius_100">
              <i className="bi bi-telephone-fill"></i></span>
              <a href="tel:+96897453111" aria-label="Make a call link">+968 9745 3111</a>
            </li>
            <li>
              <span className="cs_location_icon cs_center cs_theme_color_4 cs_radius_100">
             <i className="bi bi-envelope-fill"></i></span>
              <a href="mailto:info@promarkly.com" aria-label="Send mail link">info@promarkly.com</a>
            </li>
            <li>
              <span className="cs_location_icon cs_center cs_theme_color_4 cs_radius_100">
              <i className="bi bi-geo-alt-fill"></i></span>
              <p className="mb-0">Oman.</p>
            </li>
          </ul>
        </div>
        <div className="cs_footer_main">
          <div className="cs_footer_widget_wrapper">
            <div className="cs_footer_widget cs_text_widget">
              <div className="cs_brand cs_bold cs_white_color cs_mb_32" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '32px', fontWeight: '800', letterSpacing: '-1px', lineHeight: '1' }}>
                <span style={{ color: 'var(--theme-color-2)', fontSize: '40px', lineHeight: '0' }}>.</span>
                <span>{t('brand_name')}</span>
              </div>
              <p className="cs_mb_32">{t('footer_desc')}</p>
              <div className="cs_social_links cs_style_1 cs_heading_color">
                <a href="#" aria-label="Social link"><i className="bi bi-facebook"></i></a>
                <a href="#" aria-label="Social link"><i className="bi bi-linkedin"></i></a>
                <a href="#" aria-label="Social link"><i className="bi bi-instagram"></i></a>
                <a href="#" aria-label="Social link"><i className="bi bi-twitter-x"></i></a>
                <a href="#" aria-label="Social link"><i className="bi bi-youtube"></i></a>
              </div>
            </div>
            <div className="cs_footer_widget cs_links_widget">
              <h3 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_29">{t('nav_services')}</h3>
              <ul className="cs_footer_menu cs_mp_0">
                <li><a href="#services" aria-label="Service overview link">{t('service_overview')}</a></li>
                <li><a href="#pricing" aria-label="Pricing plans link">{t('pricing_plans')}</a></li>
                <li><a href="#analysis" aria-label="Digital strategy link">{t('digital_strategy')}</a></li>
                <li><a href="#services" aria-label="Market research link">{t('market_research')}</a></li>
              </ul>
            </div>
            <div className="cs_footer_widget cs_help_widget">
              <h3 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_29">{t('our_agency')}</h3>
              <ul className="cs_footer_menu cs_mp_0">
                <li><a href="#home" aria-label="Home link">{t('nav_home')}</a></li>
                <li><a href="#services" aria-label="Services link">{t('nav_services')}</a></li>
                <li><a href="#testimonials" aria-label="Testimonials link">{t('nav_testimonials')}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom position-relative">
        <div className="container">
          <div className="cs_footer_text cs_white_color text-center">{t('copyright')} &copy; <span className="cs_getting_year"></span> {t('theme_by')}</div>
        </div>
      </div>
    </footer>
    );
};

export default Footer1;