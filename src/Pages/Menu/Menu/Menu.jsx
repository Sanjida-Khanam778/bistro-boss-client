import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../Components/Hooks/useMenu";
import SharedTitle from "../../../Components/SharedTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'

const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item=>item.category === 'offered')
    const dessert = menu.filter(item=>item.category === 'dessert')
    const pizza = menu.filter(item=>item.category === 'pizza')
    const salad = menu.filter(item=>item.category === 'salad')
    const soup = menu.filter(item=>item.category === 'soup')

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"OUR MENU"}
        subtitle={"Would you like to try a dish?"}
      ></Cover>
      <SharedTitle title={"TODAY'S OFFER"} subtitle={"---Don't miss---"}></SharedTitle>
      <section className="max-w-screen-lg mx-auto">
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={pizza} img={pizzaImg} title={'pizza'} subtitle={"lorem50"}></MenuCategory>
      <MenuCategory items={dessert} img={dessertImg} title={'dessert'} subtitle={"lorem50"}></MenuCategory>
      <MenuCategory items={salad} img={saladImg} title={'salad'} subtitle={""}></MenuCategory>
      <MenuCategory items={soup} img={soupImg} title={"soup"} subtitle={''}></MenuCategory>
      </section>
    </div>
  ); 
};

export default Menu;
