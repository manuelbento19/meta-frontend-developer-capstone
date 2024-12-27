import { useEffect, useState } from 'react';
import { api } from '../../../../utils/api';
import { Validator } from '../../../../utils/validator';
import { useNavigate } from 'react-router-dom';
import { pages } from '../../../../constants';

const occasions = ['Birthday', 'Anniversary'];

export const Form = () => {
    const navigateTo = useNavigate();
    const minimumDate = new Date().toISOString().split('T')[0];
    const [availableTimes, setAvailableTimes] = useState([]);
    const [availableFields, setAvailableFields] = useState({
        date: true,
        time: true,
        guests: true,
        occasion: true,
        allFieldsValid:  true
    });
    
    const onFieldChange = (e) => {
        setAvailableFields(prev=>({
            ...prev,
            allFieldsValid: true
        }));
    }

    const handleFormSubmit = async(e) => {
      e.preventDefault();
      const data = {
        date: e.target['booking-date'].value,
        time: e.target['booking-time'].value,
        guests: e.target['booking-number-guests'].value,
        occasion: e.target['booking-occasion'].value,
      }
      const validFields = Validator.validateFields(data.date, data.time, data.guests, data.occasion);
      console.log(validFields);
      if (!validFields.allFieldsValid) {
        setAvailableFields({
            ...validFields.valids,
            allFieldsValid: false
        });
        return;
      }
      setAvailableFields({
        date: true,
        time: true,
        guests: true,
        occasion: true,
        allFieldsValid: true
      })
      api.reserve(data).then(data=>{
        navigateTo(pages.confirmedBooking.path,{
            state: data
        });
      });
    };

    useEffect(() => {
        api.getAvailableTimes().then(setAvailableTimes);
    }, []);

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="form-field">
            <label htmlFor="booking-date">Date</label>
            <input 
                type="date" 
                id="booking-date" 
                name="booking-date" 
                aria-label="Booking date"
                aria-required="true"
                tabindex="1"
                onChange={onFieldChange}
                min={minimumDate}
            />
            {!availableFields.date && <p data-testid="error-message" aria-invalid="true">{Validator.errorMessages.date}</p>}
            </div>
            <div className="form-field">
            <label htmlFor="booking-time">Time</label>
            <select 
                id="booking-time" 
                name="booking-time" 
                aria-label="Booking time"
                role="combobox"
                tabindex="2"
                onChange={onFieldChange}
            >
                {availableTimes.map(times => 
                <option data-testid="booking-time-option" value={times} key={times}>
                    {times}
                </option>
                )}
            </select>
            {!availableFields.time && <p data-testid="error-message" aria-invalid="true">{Validator.errorMessages.time}</p>}
            </div>
            <div className="form-field">
            <label htmlFor="booking-number-guests">Number of guests</label>
            <input 
                type="number" 
                id="booking-number-guests" 
                name="booking-number-guests" 
                aria-label="Number of guests"
                tabindex="3"
                onChange={onFieldChange}
            />
            {!availableFields.guests && <p data-testid="error-message" aria-invalid="true">{Validator.errorMessages.guests}</p>}
            </div>
            <div className="form-field">
            <label htmlFor="booking-occasion">Occasion</label>
            <select 
                id="booking-occasion" 
                name="booking-occasion" 
                aria-label="Occasion"
                role="combobox"
                tabindex="4"
                onChange={onFieldChange}
            >
                {occasions.map(occasion => 
                <option data-testid="booking-occasion-option" value={occasion} key={occasion}>
                    {occasion}
                </option>
                )}
            </select>
            {!availableFields.occasion && <p data-testid="error-message" aria-invalid="true">{Validator.errorMessages.occasion}</p>}
            </div>
            <button 
            className="button-primary" 
            type="submit" 
            disabled={!availableFields.allFieldsValid}
            >
            Make your reservation
            </button>
        </form>
    );
  };