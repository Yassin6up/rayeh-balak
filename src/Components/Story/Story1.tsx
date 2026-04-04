import { useTranslation } from "react-i18next";

const Story1 = () => {
    const { t } = useTranslation();
    const bgImage = 'https://images.unsplash.com/photo-1522071823991-b1ae5e6a3098?q=80&w=1600&auto=format&fit=crop';
    const whatsappUrl = `https://wa.me/96897453111?text=${encodeURIComponent(t('cta_pro_whatsapp_message'))}`;

    return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_card cs_style_1 cs_type_5">
          <div className="row cs_gap_y_30">
            <div className="col-lg-5 order-lg-2">
              <div className="cs_video cs_style_1 cs_center cs_bg_filed cs_radius_15 position-relative" style={{ backgroundImage: `url(${bgImage})`}}>
                <div className="cs_vector_shape_5 position-absolute">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" alt="Human image" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 order-lg-1">
              <div className="cs_card_content">
                <div className="cs_section_heading cs_style_1 cs_mb_20">
                  <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
                    <img src="/assets/img/icons/star-1.svg" alt="Star icon" /> 
                    <span>{t('success_story')}</span>
                    <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
                  </div>
                  <h2 className="cs_section_title cs_fs_48 cs_semibold text-capitalize mb-0 wow fadeInDown">{t('story_title')}</h2>
                </div>
                <p className="cs_card_desc cs_mb_51">{t('story_desc')}</p>
                <div className="cs_btns_group">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Get started button" className="cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_bold cs_white_color text-uppercase">
                    <span>{t('read_customer_story')} </span>
                    <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
                  </a>
                  <div className="cs_client_info_wrapper">
                    <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=500&auto=format&fit=crop" alt="Customers image" style={{ borderRadius: '50px' }} />
                    <div>
                      <h3 className="cs_fs_18 cs_normal mb-0">{t('happy_customer')}</h3>
                      <p className="mb-0">
                        <span className="cs_theme_color_5"><i className="bi bi-star-fill"></i></span> {t('reviews_info')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Story1;