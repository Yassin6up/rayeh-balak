import ServiceCard1 from '../Card/ServiceCard1';
import { useTranslation } from "react-i18next";

const Services3 = () => {
    const { t } = useTranslation();

    return (
 <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">

        <div className="cs_features_items_wrapper position-relative z-1">
            <a href={`https://wa.me/96897453111?text=${encodeURIComponent(t('whatsapp_message'))}`} target="_blank" rel="noopener noreferrer" aria-label="Get started button" className="cs_btn cs_style_1 cs_fs_14 cs_bold cs_white_color text-uppercase">
            <span>{t('hero_get_started')}</span>
            <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
            </a>

          <ServiceCard1
            addclass="cs_bg_00"
            serviceicon="/assets/img/icons/code-icon.svg"
            title="Software Development"
            featureList={[
                "Security",
                "Agile Methodologies",
                "Clear Requirements",
                "Feedback &  Improvement"
            ]}
            btnname="Read More"
          ></ServiceCard1>

          <ServiceCard1
            addclass="cs_bg_1"
            serviceicon="/assets/img/icons/cloud-computing.svg"
            title="Cloud Computing Solutions"
            featureList={[
                "Security",
                "Agile Methodologies",
                "Clear Requirements",
                "Feedback &  Improvement"
            ]}
            btnname="Read More"
          ></ServiceCard1>

          <ServiceCard1
            addclass="cs_bg_2"
            serviceicon="/assets/img/icons/quality-assurance.svg"
            title="Quality Assurance"
            featureList={[
                "Security",
                "Agile Methodologies",
                "Clear Requirements",
                "Feedback &  Improvement"
            ]}
            btnname="Read More"
          ></ServiceCard1>

          <ServiceCard1
            addclass="cs_bg_3"
            serviceicon="/assets/img/icons/security.svg"
            title="Cybersecurity Services"
            featureList={[
                "Security",
                "Agile Methodologies",
                "Clear Requirements",
                "Feedback &  Improvement"
            ]}
            btnname="Read More"
          ></ServiceCard1>

        </div>
      </div>
      <div className="cs_feature_shape_1 position-absolute">
        <img src="/assets/img/3d-shape.png" alt="Vector shape" />
      </div>
      <div className="cs_feature_shape_2 position-absolute">
        <img src="/assets/img/spring-shape.png" alt="Spring shape" />
      </div>
    </section>
    );
};

export default Services3;