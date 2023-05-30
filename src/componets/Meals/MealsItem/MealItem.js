import MealForm from "./MealForm";
import classes from "./MealIteam.module.css";
const MealIteam = (props) => {
  const price = `$${props.p_price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.p_name}</h3>
        <div className={classes.description}>{props.p_description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealForm />
      </div>
    </li>
  );
};

export default MealIteam;
