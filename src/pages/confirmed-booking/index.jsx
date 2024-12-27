import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

export default function ConfirmedBooking() {
  return (
    <div id='confirmed-booking' className="container">
        <FontAwesomeIcon icon={faCircleCheck} size="3x" />
        <h2>Your reservation has been confirmed.</h2>
        <p>You will receive an email with all the details.</p>
    </div>
  )
}
