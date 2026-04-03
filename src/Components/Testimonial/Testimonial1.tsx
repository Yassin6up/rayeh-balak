import { useRef } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const Testimonial1 = () => {
    const { t } = useTranslation();

        const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

      const sliderRef = useRef<Slider | null>(null);

      const next = () => {
        sliderRef.current?.slickNext();
      };
    
    const testimonialContent = [
        {img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop', subtitle: t('growth_plan'), title:'Sarah J. Michael', content: t('story_desc')},             
        {img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop', subtitle: t('pro_plan'), title:'Ahmed Al-Sayed', content: t('story_desc')},             
      ]; 


    return (
<section className="cs_slider cs_style_1 cs_slider_gap_30 position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_testimonial_slider_wrapper cs_radius_20 position-relative">
          <div className="cs_section_heading cs_style_1 cs_mb_10">
            <h2 className="cs_section_title cs_fs_24 cs_normal mb-0">{t('clients_feedback')}</h2>
          </div>
          <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0" data-variable-width="0" data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="1" data-md-slides="1" data-lg-slides="1" data-add-slides="1">
            <div className="cs_slider_wrapper">

            <Slider ref={sliderRef} {...settings}>
            {testimonialContent.map((item, i) => (
              <div key={i} className="cs_slide">
                <div className="cs_testimonial cs_style_2">
                  <div className="cs_testimonial_heading cs_mb_10">
                    <span className="cs_quote_icon cs_center cs_white_bg cs_radius_100">
                    <img src="/assets/img/icons/qote.svg" alt="Quote icon" />
                    </span>
                    <div className="cs_rating" data-rating="5">
                      <div className="cs_rating_percentage"></div>
                    </div>
                  </div>
                  <blockquote>{item.content}</blockquote>
                  <div className="cs_avatar cs_style_1">
                    <span className="cs_avatar_icon cs_center cs_radius_100">
                    <img src={item.img} alt="Avatar" />
                    </span>
                    <div className="cs_avatar_info">
                      <h3 className="cs_fs_20 cs_semibold mb-0">{item.title}</h3>
                      <p className="cs_fs_14 mb-0">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </Slider>

            </div>
            <div className="cs_slider_arrows cs_style_1">
              <div onClick={next} className="cs_right_arrow rounded-circle cs_center cs_white_bg cs_theme_color_2 slick-arrow">
                <i className="bi bi-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default Testimonial1;