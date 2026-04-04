import ServiceCard1 from '../Card/ServiceCard1';
import { useTranslation } from "react-i18next";

const Services1 = () => {
    const { t } = useTranslation();
    const bgImage = '/assets/img/feature-item-bg.svg';
    const whatsappNumber = "96897453111";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t('whatsapp_message'))}`;

    return (
 <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_mb_47 cs_center_column text-center position-relative z-1">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
            <span>{t('awesome_feature')}</span>
            <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
          </div>
          <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0 wow fadeInUp">{t('services_title_alt')}</h2>
        </div>
        <div className="cs_features_items_wrapper position-relative z-1">
          <div className="cs_feature_item cs_radius_20 cs_bg_filed" style={{ backgroundImage: `url(${bgImage})`}}>
            <h3 className="cs_fs_36 cs_semibold cs_white_color cs_mb_40">{t('services_see_more')}</h3>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Get started button" className="cs_btn cs_style_1 cs_fs_14 cs_bold cs_white_color text-uppercase">
            <span>{t('hero_get_started')}</span>
            <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
            </a>
          </div>

          <ServiceCard1
            addclass="cs_bg_00"
            serviceicon="/assets/img/icons/service-icon-1.svg"
            title={t('service_strategy_title')}
            featureList={[
                t('feature_strategy_1'),
                t('feature_strategy_2'),
                t('feature_strategy_3'),
                t('feature_strategy_4')
            ]}
            btnname={t('read_more')}
          />

          <ServiceCard1
            addclass="cs_bg_1"
            serviceicon="/assets/img/icons/service-icon-2.svg"
            title={t('service_branding_title')}
            featureList={[
                t('feature_branding_1'),
                t('feature_branding_2'),
                t('feature_branding_3'),
                t('feature_branding_4')
            ]}
            btnname={t('read_more')}
          />

          <ServiceCard1
            addclass="cs_bg_2"
            serviceicon="/assets/img/icons/service-icon-3.svg"
            title={t('service_social_title')}
            featureList={[
                t('feature_social_1'),
                t('feature_social_2'),
                t('feature_social_3'),
                t('feature_social_4')
            ]}
            btnname={t('read_more')}
          />

          <ServiceCard1
            addclass="cs_bg_3"
            serviceicon="/assets/img/icons/service-icon-4.svg"
            title={t('service_seo_title')}
            featureList={[
                t('feature_seo_1'),
                t('feature_seo_2'),
                t('feature_seo_3'),
                t('feature_seo_4')
            ]}
            btnname={t('read_more')}
          />

          <ServiceCard1
            addclass="cs_bg_00"
            serviceicon="/assets/img/icons/service-icon-5.svg"
            title={t('service_ppc_title')}
            featureList={[
                t('feature_ppc_1'),
                t('feature_ppc_2'),
                t('feature_ppc_3'),
                t('feature_ppc_4')
            ]}
            btnname={t('read_more')}
          />

          <ServiceCard1
            addclass="cs_bg_1"
            serviceicon="/assets/img/icons/code-icon.svg"
            title={t('service_dev_title')}
            featureList={[
                t('feature_dev_1'),
                t('feature_dev_2'),
                t('feature_dev_3'),
                t('feature_dev_4')
            ]}
            btnname={t('read_more')}
          />

          <ServiceCard1
            addclass="cs_bg_2"
            serviceicon="/assets/img/icons/service-icon-6.svg"
            title={t('service_photo_title')}
            featureList={[
                t('feature_photo_1'),
                t('feature_photo_2'),
                t('feature_photo_3'),
                t('feature_photo_4')
            ]}
            btnname={t('read_more')}
          />

          <ServiceCard1
            addclass="cs_bg_3"
            serviceicon="/assets/img/icons/automation.svg"
            title={t('service_advanced_title')}
            featureList={[
                t('feature_advanced_1'),
                t('feature_advanced_2'),
                t('feature_advanced_3'),
                t('feature_advanced_4')
            ]}
            btnname={t('read_more')}
          />

        </div>
      </div>
      <div className="cs_feature_shape_1 position-absolute">
        <img src="/assets/img/3d-shape.png" alt="Vector shape" />
      </div>
      <div className="cs_feature_shape_2 position-absolute">
        <img src="/assets/img/spring-shape.png" alt="Spring shape" />
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Services1;