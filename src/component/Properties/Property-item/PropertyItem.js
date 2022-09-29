import { faBed, faBath, faAreaChart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './PropertyItem.module.css';

export default function Property({property: {  photograph, neighborhood, name, baths, rooms, area}}) {
  return (
    <div className={classes['div-grid']}>
      <div>
              <img
          src={photograph ? photograph : 'alt'}
          width={300}
          height={200}
          alt="house"
        />
          <h1 className={classes.h1} >
            {name.split(" ")[0]}
          </h1>
          <p className={classes.p}>
            {neighborhood}
          </p>
          <div className={classes['div-icons']}>
            <div><FontAwesomeIcon icon={faBed} width={20} style={{display: 'inline', color: '#6366f1'}} />&nbsp; {rooms} Beds</div>
            <div><FontAwesomeIcon icon={faBath} width={20} style={{display: 'inline', color: '#6366f1'}} />&nbsp; {baths} Bathrooms</div>
            <div><FontAwesomeIcon icon={faAreaChart} width={20} style={{display: 'inline', color: '#6366f1'}} />&nbsp; {area.toFixed(2)} m<sup>2</sup></div>
            </div>
            </div>
            </div>

)};
