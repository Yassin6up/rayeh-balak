import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import Brand1 from '../Components/Brand/Brand1';
import Services1 from '../Components/Services/Services1';
import Work1 from '../Components/Work/Work1';
import Analysis1 from '../Components/Analysis/Analysis1';
import Choose1 from '../Components/Choose/Choose1';
import Counter1 from '../Components/Counter/Counter1';
import Story1 from '../Components/Story/Story1';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Toolset1 from '../Components/Toolset/Toolset1';
import Pricing1 from '../Components/Pricing/Pricing1';

const Home = () => {
    return (
        <div className="cs_home_content">
            <div id="home"><HeroBanner1 /></div>
            <Brand1 />
            <div id="services"><Services1 /></div>
            <Work1 />
            <div id="analysis"><Analysis1 /></div>
            <Choose1 />
            <div id="pricing"><Pricing1 /></div>
            <Counter1 />
            <Story1 />
            <div id="testimonials"><Testimonial1 /></div>
            <Toolset1 />
        </div>
    );
};

export default Home;