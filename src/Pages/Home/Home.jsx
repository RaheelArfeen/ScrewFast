import React from 'react';
import Banner from '../../Compoenet/Banner/Banner';
import Industry from '../HomeContainer/Industry/Industry';
import Demands from '../HomeContainer/Demands/Demands';
import Constructions from '../HomeContainer/Constructions/Constructions';
import Projects from '../HomeContainer/Projects/Projects';
import Pricings from '../HomeContainer/Pricings/Pricings';
import FAQ from '../HomeContainer/FAQ/FAQ';
import BottomPart from '../HomeContainer/bottomPart/bottomPart';

const Home = () => {
    return (
        <div className='z-10'>
          <Banner/>
          <Industry/>
          <Demands/>
          <Constructions/>
          <Projects/>
          <Pricings/>
          <FAQ/>
          <BottomPart/>
        </div>
    );
};

export default Home;