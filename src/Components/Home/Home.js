import React from "react";
import { Header, InfoSection, MenuSection, HeaderContainer } from "./HomeStyled";
import BurgerIcon from '../../Images/burgerIcon.svg'
import Burger from '../../Images/burger.jpg'
import Salad from '../../Images/salad.jpg'
import Milkshake from '../../Images/milkshake.jpg'
import { motion } from 'framer-motion';

const titelVariant = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    }
  },
}

function Home() {
  return (
    <>
      <Header>
        <HeaderContainer>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={titelVariant}
          >Burgers n' <br /> beans
          </motion.h1>
        </HeaderContainer>
      </Header>
      <InfoSection>
        <h4>Nothing more then a simple burger</h4>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio sollicitudin a, neque. Sed turpis iaculis ut tristique odio pulvinar eget. Vel tincidunt faucibus maecenas metus nibh sapien fusce habitant quisque. Et arcu sapien ultricies mi. Tellus scelerisque justo rhoncus, auctor facilisi odio. Auctor lectus dignissim consectetur non. Pretium ut justo viverra ut. </p>
          <img src={BurgerIcon} />
        </div>
      </InfoSection>
      <MenuSection>
        <h3>Our selection</h3>
        <div>
          <div>
            <img src={Burger} alt='food' />
            <p>Burgers</p>
          </div>
          <div>
            <img src={Salad} alt='food' />
            <p>Salads</p>
          </div>
          <div>
            <img src={Milkshake} alt='food' />
            <p>Milkshakes</p>
          </div>
        </div>
      </MenuSection>
    </>
  );
};

export default Home;