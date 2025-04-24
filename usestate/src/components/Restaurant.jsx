import { useState } from "react";

function Restaurant(props) {
  const [ toggleHours, setToggleHours] = useState(false);
  const [ toggleMenu, setToggleMenu ] = useState(false);

  const handleMenuButton = () => setToggleMenu(prevState => !prevState);
  const handleHoursButton = () => setToggleHours(prevState => !prevState);

  function Menu({ menu }){
    return(
      <ul>
        {menu.map(food => (
          <li>{food.item} - ${food.price}</li>
        ))}
      </ul>
    )
  }

  function Hours({ hours }){
    return(
      <ul>
        {
          Object.entries(hours).map(([day, time]) => (
            <li>
              <span style={{fontWeight:"bold"}}>{day.charAt(0).toUpperCase()}{day.slice(1)}:</span> {time}
            </li>
          ))
        }
      </ul>
    )
  }

  return (
    <div className="restaurant">
      <img src={props.restaurant.image} alt={props.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>
      <button onClick={handleHoursButton}>Hours</button>
      <button onClick={handleMenuButton}>Menu</button>
      {toggleMenu && Menu(props.restaurant)}
      {toggleHours && Hours(props.restaurant)}
    </div>
  );
}

export default Restaurant;
