import { useTranslation } from "react-i18next";

const Pricing1 = () => {
  const { t } = useTranslation();

  const whatsappNumber = "96897453111";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t('cta_pro_whatsapp_message'))}`;

  const benefits = [
    { title: t('cta_pro_benefit_1_title'), desc: t('cta_pro_benefit_1_desc'), icon: 'bi-robot' },
    { title: t('cta_pro_benefit_2_title'), desc: t('cta_pro_benefit_2_desc'), icon: 'bi-gem' },
    { title: t('cta_pro_benefit_3_title'), desc: t('cta_pro_benefit_3_desc'), icon: 'bi-graph-up-arrow' },
    { title: t('cta_pro_benefit_4_title'), desc: t('cta_pro_benefit_4_desc'), icon: 'bi-emoji-smile' }
  ];

  return (
    <section className="cs_cta_section position-relative overflow-hidden" id="pricing" style={{ background: '#f8fbfc', padding: '120px 0' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: The Persuasion */}
          <div className="col-lg-7">
            <div className="cs_section_heading cs_style_1 cs_mb_40">
              <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
                <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
                <span>{t('pricing_deal_subtitle')}</span>
              </div>
              <h2 className="cs_section_title cs_fs_56 cs_bold cs_mb_20">
                {t('cta_pro_title')}
              </h2>
              <p className="cs_fs_22 cs_body_color cs_mb_40" style={{ maxWidth: '600px', lineHeight: '1.5' }}>
                {t('cta_pro_subtitle')}
              </p>
            </div>

            <div className="cs_cta_benefits_list cs_mb_50">
              <div className="row cs_gap_y_30">
                {benefits.map((benefit, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="cs_cta_item d-flex gap-3">
                      <div className="cs_cta_icon cs_fs_24" style={{ color: 'var(--theme-color-2)', marginTop: '4px' }}>
                        <i className={`bi ${benefit.icon}`}></i>
                      </div>
                      <div>
                        <h3 className="cs_fs_20 cs_bold cs_mb_8" style={{ color: 'var(--theme-color-2)' }}>{benefit.title}</h3>
                        <p className="mb-0 cs_fs_16">{benefit.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cs_cta_btn_wrapper">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="cs_btn cs_style_1 cs_bg_1 cs_fs_18 cs_bold cs_white_color text-uppercase" style={{ padding: '25px 50px', boxShadow: '0 20px 40px rgba(40, 199, 111, 0.3)' }}>
                <span>{t('cta_pro_button')}</span>
                <span className="cs_btn_icon" style={{ fontSize: '24px' }}><i className="bi bi-whatsapp"></i></span>
              </a>
              <div className="mt-3 cs_fs_14 cs_body_color d-flex align-items-center gap-2">
                <span className="cs_theme_color_2">●</span>
                {t('cta_pro_session_text')}
              </div>
            </div>
          </div>

          {/* Right Column: The Visual Proof */}
          <div className="col-lg-5">
            <div className="cs_cta_visual_wrapper position-relative text-center mt-5 mt-lg-0">
              <div className="cs_cta_main_card cs_white_bg cs_radius_24 p-5 shadow-lg" style={{ border: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="cs_fs_64 cs_theme_color_2 cs_bold mb-2">{t('cta_pro_stat_number')}</div>
                <div className="cs_fs_20 cs_heading_color cs_bold text-uppercase letter-spacing-1 mb-4">{t('cta_pro_stat_text')}</div>
                <div className="cs_separator cs_mb_30"></div>
                <ul className="cs_cta_stats cs_mp_0 text-start">
                  <li className="d-flex align-items-center gap-3 mb-3">
                    <i className="bi bi-check-circle-fill cs_theme_color_2"></i>
                    <span className="cs_fs_16 cs_heading_color fw-medium">{t('cta_pro_stat_1')}</span>
                  </li>
                  <li className="d-flex align-items-center gap-3 mb-3">
                    <i className="bi bi-check-circle-fill cs_theme_color_2"></i>
                    <span className="cs_fs_16 cs_heading_color fw-medium">{t('cta_pro_stat_2')}</span>
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <i className="bi bi-check-circle-fill cs_theme_color_2"></i>
                    <span className="cs_fs_16 cs_heading_color fw-medium">{t('cta_pro_stat_3')}</span>
                  </li>
                </ul>
              </div>
              {/* Decorative shapes */}
              <div className="cs_cta_shape_1 position-absolute" style={{ top: '-40px', right: '-20px', zIndex: '-1' }}>
                <img src="/assets/img/3d-shape.png" alt="Shape" style={{ opacity: '0.4', width: '120px' }} />
              </div>
              <div className="cs_cta_shape_2 position-absolute" style={{ bottom: '-30px', left: '-30px', zIndex: '-1' }}>
                <img src="/assets/img/spring-shape.png" alt="Shape" style={{ opacity: '0.4', width: '100px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing1;
;