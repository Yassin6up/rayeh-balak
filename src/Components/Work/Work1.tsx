import { useTranslation } from "react-i18next";

const Work1 = () => {
    const { t } = useTranslation();
    return (
    <section className="cs_gray_bg_2 position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_gap_y_40 position-relative z-1">
          <div className="col-lg-6 order-lg-2">
            <div className="cs_workink_process_heading cs_center_column position-relative">
              <div className="cs_section_heading cs_style_1 cs_mb_11 z-1">
                <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
                  <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
                  <span>{t('how_it_works')}</span>
                  <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
                </div>
                <h2 className="cs_section_title cs_fs_48 cs_semibold wow fadeInUp">{t('work_title')}</h2>
                <p className="cs_card_desc cs_mb_22">{t('work_desc')}</p>
              </div>
              <div className="cs_process_thumbnail z-1">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" alt="Professional strategist" />
              </div>
              <div className="cs_vector_shape position-absolute bottom-0 start-0">
                <img src="https://images.unsplash.com/photo-1551288049-bbbda536ad0b?q=80&w=1200&auto=format&fit=crop" alt="Dashboard image" style={{ borderRadius: '20px', width: '300px' }} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="cs_iconbox_wrapper_2">
              <div className="cs_iconbox cs_style_2">
                <span className="cs_iconbox_icon cs_center cs_accent_bg cs_mb_18">
                <img src="/assets/img/icons/home.svg" alt="Browser icon" />
                </span>
                <h3 className="cs_fs_24 cs_semibold cs_mb_4">{t('work_step1_title')}</h3>
                <p className="mb-0">{t('work_step1_desc')}</p>
              </div>
              <div className="cs_iconbox cs_style_2">
                <span className="cs_iconbox_icon cs_bg_1 cs_center cs_mb_18">
                <img src="/assets/img/icons/products.svg" alt="Product stack icon" />
                </span>
                <h3 className="cs_fs_24 cs_semibold cs_mb_4">{t('work_step2_title')}</h3>
                <p className="mb-0">{t('work_step2_desc')}</p>
              </div>
              <div className="cs_iconbox cs_style_2">
                <span className="cs_iconbox_icon cs_bg_2 cs_center cs_mb_18">
                <img src="/assets/img/icons/analytics.svg" alt="Analytics icon" />
                </span>
                <h3 className="cs_fs_24 cs_semibold cs_mb_4">{t('work_step3_title')}</h3>
                <p className="mb-0">{t('work_step3_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_star_shape_4 position-absolute">
        <img src="/assets/img/star-shape.svg" alt="Star shape" />
      </div>
      <div className="cs_height_0 cs_height_lg_80"></div>
    </section>
    );
};

export default Work1;