import { useTranslation } from "react-i18next";

const Analysis1 = () => {
    const { t } = useTranslation();
    return (
<section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_card cs_style_1 cs_type_3">
          <div className="row cs_gap_y_50 position-relative z-1">
            <div className="col-lg-6">
              <div className="cs_card_thumbnail position-relative">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" alt="Marketing Dashboard" style={{ borderRadius: '20px' }} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_card_content">
                <div className="cs_section_heading cs_style_1 cs_mb_27">
                  <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
                    <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
                    <span>{t('analysis_metrics')}</span>
                    <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
                  </div>
                  <h2 className="cs_section_title cs_fs_48 cs_semibold wow fadeInLeft">{t('analysis_title_alt')}</h2>
                  <p className="cs_card_desc mb-0">{t('analysis_desc_alt')}</p>
                </div>
                <div className="cs_iconbox_wrapper_1">
                  <div className="cs_iconbox cs_style_1 cs_type_1">
                    <span className="cs_iconbox_icon cs_center cs_accent_bg">
                    <img src="/assets/img/icons/advanced-tracking.svg" alt="Advanced tracking icon" />
                    </span>
                    <div className="cs_iconbox_info">
                      <h3 className="cs_fs_20 cs_semibold cs_mb_1">{t('analysis_roi_title')}</h3>
                      <p className="mb-0">{t('analysis_roi_desc')}</p>
                    </div>
                  </div>
                  <div className="cs_iconbox cs_style_1 cs_type_1">
                    <span className="cs_iconbox_icon cs_center cs_bg_1">
                    <img src="/assets/img/icons/in-depth.svg" alt="In-depth monitoring icon" />
                    </span>
                    <div className="cs_iconbox_info">
                      <h3 className="cs_fs_20 cs_semibold cs_mb_1">{t('analysis_competitor_title')}</h3>
                      <p className="mb-0">{t('analysis_competitor_desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_star_shape_5 position-absolute">
          <img src="https://images.unsplash.com/photo-1551288049-bbbda536ad0b?q=80&w=1200&auto=format&fit=crop" alt="Vector shape" style={{ opacity: 0.2, borderRadius: '100% 0 0 100%' }} />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Analysis1;