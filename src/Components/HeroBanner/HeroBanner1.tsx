import { useTranslation } from "react-i18next";

const HeroBanner1 = () => {
    const { t } = useTranslation();
    const bgImage = '/assets/img/hero-bg-2.jpg';
    const whatsappNumber = "96897453111";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t('whatsapp_message'))}`;

    return (
        <div>
            <section className="cs_hero cs_style_2 cs_bg_filed position-relative" style={{ backgroundImage: `url(${bgImage})`}}>
            <div className="container">
                <div className="cs_hero_text text-center position-relative">
                <p className="cs_hero_subtitle cs_heading_color cs_heading_font cs_mb_18 text-center">
                    <span className="cs_theme_color_4">
                    <img src="/assets/img/icons/star-1.svg" alt="Star icon" />                            
                    </span>
                    <span>{t('hero_welcome')}</span>
                    <span className="cs_theme_color_4">
                    <img src="/assets/img/icons/star-1.svg" alt="Star icon" />  
                    </span>
                </p>
                <h1 className="cs_hero_title cs_fs_64 cs_mb_20 wow fadeInDown">{t('hero_title')}</h1>
                <p className="cs_hero_desc cs_mb_26">{t('hero_desc')}</p>
                <div className="cs_btns_group">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Get started button" className="cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_bold cs_white_color text-uppercase">
                    <span>{t('hero_get_started')}</span>
                    <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
                    </a>
                    <a href="#services" aria-label="About page link" className="cs_btn cs_style_1 cs_outline cs_ cs_fs_14 cs_bold cs_heading_color text-uppercase">
                    <span>{t('hero_learn_more')}</span>
                    <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
                    </a>
                </div>
                <div className="cs_hero_shape_1 position-absolute">
                    <img src="/assets/img/hero-shape-1.svg" alt="Shape" />
                </div>
                </div>
                <div className="cs_hero_shape_2 position-absolute">
                <img src="/assets/img/hero-shape-2.svg" alt="Shape" />
                </div>
            </div>
            </section>   

            <div className="cs_banner cs_style_1 position-relative">
                <div className="container">
                    <div className="cs_banner_thumbnail_wrapper">
                    <div className="cs_banner_thumbnail">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" alt="Agency Dashboard" style={{ borderRadius: '20px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} />
                    </div>
                    <div className="cs_banner_thumbnail">
                        <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" alt="Mobile App Experience" style={{ borderRadius: '30px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} />
                    </div>
                    </div>
                </div>
            </div>           

        </div>
    );
};

export default HeroBanner1;