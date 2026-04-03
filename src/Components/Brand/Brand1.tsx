import { useTranslation } from "react-i18next";

const Brand1 = () => {
    const { t } = useTranslation();

    const chooseContent = [
        {img:'https://cdn.worldvectorlogo.com/logos/framer-1.svg'},                         
        {img:'https://cdn.worldvectorlogo.com/logos/notion-2.svg'},                         
        {img:'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg'},                         
        {img:'https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg'},                         
        {img:'https://cdn.worldvectorlogo.com/logos/figma-1.svg'},                         
        {img:'https://cdn.worldvectorlogo.com/logos/stripe-4.svg'},                         
      ]; 

    return (
  <section>
      <div className="cs_height_80 cs_height_lg_50"></div>
      <div className="container text-center">
        <div className="cs_mb_31">
          <h6 className="cs_fs_16 cs_normal mb-0 opacity-50">{t('trusted_by')}</h6>
        </div>
        <div className="cs_horizontal_slider_wrapper">
          <div className="cs_slider_in">
            <div className="cs_brands_list d-flex justify-content-center align-items-center gap-5">
            {chooseContent.map((item, i) => (
              <div key={i} className="cs_center" style={{ filter: 'grayscale(1) brightness(0)' }}>
                <img src={item.img} alt="brand-img" style={{ height: '35px', maxWidth: '120px', objectFit: 'contain' }} />
              </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_80 cs_height_lg_50"></div>
    </section>
    );
};

export default Brand1;