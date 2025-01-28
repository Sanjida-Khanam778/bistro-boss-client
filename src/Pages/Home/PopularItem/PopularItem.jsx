import SharedTitle from "../../../Components/SharedTitle";
import MenuItem from "../../../Components/MenuItem";
import useMenu from "../../../Components/Hooks/useMenu";

const PopularItem = () => {
  const [menu] = useMenu()
  const popular = menu.filter(item=>item.category === 'popular')

  return <div>
    <SharedTitle title='FROM OUR MENU' subtitle='---Check it out---'></SharedTitle>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {
            popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
        }
    </div>
  </div>;
};

export default PopularItem;
