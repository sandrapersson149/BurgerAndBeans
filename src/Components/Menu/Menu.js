import React from "react";
import { MenuList, MenuPics, MenuContainer, MenuTitle, MenuItem, MenuText } from "./MenuStyled";
import Burger from '../../Images/burger.jpg'
import Salad from '../../Images/salad.jpg'
import Milkshake from '../../Images/milkshake.jpg'
import { motion } from 'framer-motion'



function Menu() {

  const imgVariant = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
    }
  }

  return (
    <>
      <MenuPics>
        <motion.div
          variants={imgVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, type: 'spring', damping: 80 }}
        >
          <img src={Burger} alt='food' />
        </motion.div>
        <motion.div
          variants={imgVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.3, type: 'spring', damping: 80 }}
        >
          <img src={Salad} alt='food' />
        </motion.div>
        <motion.div
          variants={imgVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.6, type: 'spring', damping: 80 }}
        >
          <img src={Milkshake} alt='food' />
        </motion.div>
      </MenuPics>

      <MenuList>
        <MenuTitle>Burger and beans menu</MenuTitle>
        <MenuContainer>
          <div>
            <MenuItem>Burgers - $5</MenuItem>
            <MenuText>A burger with salad, ketchup and pickles</MenuText>
            <MenuItem>Veggie Burgers - $5</MenuItem>
            <MenuText>A burger with salad, ketchup and pickles</MenuText>
            <MenuItem>Wraps - $5</MenuItem>
            <MenuText>A burger with salad, ketchup and pickles</MenuText>
            <MenuItem>Milkshakes - $3</MenuItem>
            <MenuText>A burger with salad, ketchup and pickles</MenuText>
          </div>

          <div>
            <MenuItem>Burgers - $5</MenuItem>
            <MenuText>A burger with salad, ketchup and pickles</MenuText>
            <MenuItem>Veggie Burgers - $5</MenuItem>
            <MenuText>A burger with salad, ketchup and pickles</MenuText>
            <MenuItem>Wraps - $5</MenuItem>
            <MenuText>A burger with salad, ketchup and pickles</MenuText>
            <MenuItem>Milkshakes - $3</MenuItem>
            <MenuText>A burger with salad, ketchup and pickles</MenuText>
          </div>

        </MenuContainer>
      </MenuList>
    </>
  );
}

export default Menu;
