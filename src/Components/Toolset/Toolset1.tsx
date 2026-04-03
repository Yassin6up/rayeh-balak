import { useTranslation } from "react-i18next";

const Toolset1 = () => {
    const { t } = useTranslation();

    const brandContent = [
        {img:'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg', title:'Slack'},
        {img:'https://cdn.worldvectorlogo.com/logos/notion-2.svg', title:'Notion'},
        {img:'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg', title:'LinkedIn'},
        {img:'https://cdn.worldvectorlogo.com/logos/hubspot.svg', title:'Hubspot'},
        {img:'https://cdn.worldvectorlogo.com/logos/whatsapp-symbol.svg', title:'Whatsapp'},
        {img:'https://cdn.worldvectorlogo.com/logos/framer-1.svg', title:'Framer'},
        {img:'https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg', title:'Zoom'},
        {img:'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg', title:'Github'},
        {img:'https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg', title:'Mailchimp'},
        {img:'https://cdn.worldvectorlogo.com/logos/shopify.svg', title:'Shopify'},
        {img:'https://cdn.worldvectorlogo.com/logos/google-drive-logo.svg', title:'Google Drive'},
        {img:'https://cdn.worldvectorlogo.com/logos/figma-1.svg', title:'Figma'},
      ];

    return (
 <section className="cs_gray_bg_2">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_toolset_content cs_center_column position-relative">
          <div className="cs_toolset_logos">
            {brandContent.map((item, i) => (
            <div key={i} className="cs_iconbox cs_style_3 cs_center_column cs_white_bg cs_radius_16 text-center">
              <span className="cs_iconbox_icon cs_mb_14">
              <img src={item.img} alt={item.title} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
              </span>
              <p className="cs_medium mb-0">{item.title}</p>
            </div>
            ))}

          </div>
          <div className="cs_toolset_text text-center">
            <div className="cs_section_heading cs_style_1 cs_mb_20">
              <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
                <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
                <span>{t('our_toolset')}</span>
                <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
              </div>
              <h2 className="cs_section_title cs_fs_48 cs_semibold text-capitalize mb-0 wow fadeInUp">{t('toolset_title')}</h2>
            </div>
            <p className="cs_card_desc cs_mb_51">{t('toolset_desc')}</p>
            <a href="#services" aria-label="Services section link" className="cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_bold cs_white_color text-uppercase">
            <span>{t('see_all_integrations')}</span>
            <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
            </a>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Toolset1;