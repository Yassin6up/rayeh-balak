import { useTranslation } from "react-i18next";

const Review1 = () => {
    const { t } = useTranslation();
    const bgImage = '/assets/img/rating-bg-1.svg';

    return (
    <section className="cs_customer_review cs_bg_filed cs_radius_50" style={{ backgroundImage: `url(${bgImage})`}}>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center cs_mb_47">
          <h2 className="cs_fs_48 cs_semibold cs_white_color mb-0 wow fadeInDown">{t('review_title')}</h2>
        </div>
        <div className="row cs_row_gap_30 cs_gap_y_30">
          <div className="col-lg-4">
            <div className="cs_review_item cs_center_column cs_radius_20 text-center">
              <div className="cs_rating_container cs_center cs_mb_32">
                <div className="cs_rating" data-rating="0">
                  <div className="cs_rating_percentage"></div>
                </div>
              </div>
              <p className="cs_fs_20 cs_white_color cs_mb_33">"{t('review_item1')}"</p>
              <img src="/assets/img/rating-logo-1.svg" alt="Logo" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cs_review_item cs_center_column cs_radius_20 text-center">
              <div className="cs_rating_container cs_center cs_mb_32">
                <div className="cs_rating" data-rating="0">
                  <div className="cs_rating_percentage"></div>
                </div>
              </div>
              <p className="cs_fs_20 cs_white_color cs_mb_33">"{t('review_item2')}"</p>
              <img src="/assets/img/rating-logo-2.svg" alt="Logo" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cs_review_item cs_center_column cs_radius_20 text-center">
              <div className="cs_rating_container cs_center cs_mb_32">
                <div className="cs_rating" data-rating="0">
                  <div className="cs_rating_percentage"></div>
                </div>
              </div>
              <p className="cs_fs_20 cs_white_color cs_mb_33">"{t('review_item1')}"</p>
              <img src="/assets/img/rating-logo-3.svg" alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Review1;