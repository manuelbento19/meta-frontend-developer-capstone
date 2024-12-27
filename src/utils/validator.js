

const validateFields = (date,time,guests,occasion) => {
    const valids = {
        date: date !== '',
        time: time !== '',
        guests: guests !== '',
        occasion: occasion !== '',
    };
    return {
        valids,
        allFieldsValid: Object.values(valids).every(Boolean),
    }
}

const errorMessages = {
    date: 'Please select a date',
    time: 'Please select a time',
    guests: 'Please select the number of guests',
    occasion: 'Please select an occasion',
}

export const Validator = {
    validateFields,
    errorMessages,
}