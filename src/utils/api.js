function getAvailableTimes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['10:00', '12:00', '14:00', '16:00', '18:00', '20:00']);
        }, 1000);
    });
} 

function reserve(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 1100);
    });
} 
export const api = {   
    getAvailableTimes,
    reserve
};