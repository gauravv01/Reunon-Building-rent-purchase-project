import Button from '../../UI/Button';
import classes from './Filterproperty.module.css';

const Filterproperty =({filterprops:{area,baths,rooms,Areahandler,bathfn,roomfn ,onClick}})=>{
 
  

const Submithandler=(event)=>{
    event.preventDefault();

}


return(
    <form onSubmit={Submithandler} className={classes.maindiv}>
        <div className={classes.div1}>
        <section>
            <label id='area'>Minimum Area (m<sup>2</sup>)</label>
            <select id="area" value={area} onChange={Areahandler} className='font-bold focus:outline-none'>
              <option value="60">60</option>
              <option value="80">80</option>
              <option value="100">100</option>
              <option value="120">120</option>
              <option value="0">All</option>
            </select>
        </section>
        <section>
        <label id='baths'> Number of Bathrooms</label>
            <select id="baths" value={baths} onChange={bathfn} className='font-bold focus:outline-none'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="0">All</option>
            </select>
        </section>
        <section>
        <label id='rooms'>Number of Bedrooms</label>
            <select id="rooms" value={rooms} onChange={roomfn} className='font-bold focus:outline-none'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="0">All</option>
            </select>
        </section>
        </div>
        <div>
        <Button onClick={onClick}>Search</Button> 
        </div> 
    </form>
)
}

export default Filterproperty;