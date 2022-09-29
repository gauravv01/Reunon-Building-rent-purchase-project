import { Fragment, useContext, useState } from "react";
import CartContext from "../store/CartContext";
import Noresults from "./NoResults";
import Filterproperty from "./Property-item/Filterproperty";
import Property from "./Property-item/PropertyItem";
import classes from "./Property-item/PropertyItem.module.css";

function Propertylist() {
  const Cartctx = useContext(CartContext);

  const [rooms, setRooms] = useState(0);
  const [baths, setBaths] = useState(0);
  const [area, setArea] = useState(0);
  const [listitems, setlistitems] = useState(Cartctx.list);
  const [istrue, setistrue] = useState(true);
  const Areahandlerfn = (e) => {
    setArea(e.target.value);
  };
  const bathfn = (e) => {
    setBaths(e.target.value);
  };

  const roomfn = (e) => {
    setRooms(e.target.value);
  };


  const filterlisthandler = () => {
      let listitem = Cartctx.list.filter((e) => {
        return (
          (rooms != 0 ? e.rooms == rooms : e.rooms >= rooms) &&
          (baths != 0 ? e.baths == baths : e.baths >= baths) &&
          e.area >= area
        );
      });
      if (listitem.length === 0) {
        setistrue(false);
        return
      }
      if(listitem.length>0){
        setistrue(true);
      setlistitems (listitem);
      return
      } 
  };

 
  const filterprops = {
    area: area,
    baths: baths,
    rooms: rooms,
    Areahandler: Areahandlerfn,
    bathfn: bathfn,
    roomfn: roomfn,
    onClick: filterlisthandler,
  };

  return (
    <Fragment>
      <Filterproperty
        filterprops={filterprops}
      />
      <div>
        <section>
          {istrue && (
            <div className={classes.div}>
              {listitems.map((property) => (
                <Property property={property} key={property.id} />
              ))}
            </div>
          )}
          {!istrue && <Noresults />}
        </section>
      </div>
    </Fragment>
  );
}

export default Propertylist;
