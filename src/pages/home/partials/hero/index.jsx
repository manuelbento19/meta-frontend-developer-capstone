import { Link } from 'react-router-dom';
import restaurant from '../../../../assets/restaurant-food.jpg';
import './styles.css';
import * as Consts from '../../../../constants';

export default function Hero() {
  return (
    <section id="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, 
            focused on traditional recipes served with a modern twist.
          </p>
          <Link className="button-primary" to={Consts.pages.bookings.path}>
            Reserve a table
          </Link>
        </div>
        <img 
          className="hero-image" 
          src={restaurant} 
          alt="Restaurant food" 
        />
      </div>
    </section>
  );
};
