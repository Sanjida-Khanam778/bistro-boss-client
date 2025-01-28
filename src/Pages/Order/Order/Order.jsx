import React, { useState } from "react";
import Cover from "../../Shared/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Components/Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const [menu] = useMenu();
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
  console.log(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Cover
        img={orderImg}
        title={"OUR SHOP"}
        subtitle={"Would you like to try a dish?"}
      ></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
