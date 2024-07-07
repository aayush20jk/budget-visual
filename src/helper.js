// Local storage function
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

// delete item
export const deletItem = ({ key }) => {
    return localStorage.removeItem(key)
}