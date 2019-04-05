//Get user from localStorage

const getUser = () => {JSON.parse(localStorage.getItem('activeUser'))
};


//Save user to localStorage

const saveUser = () => {localStorage.setItem('activeUser', JSON.stringify(user))
};