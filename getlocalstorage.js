//To display the username entered on the "instructions" page

const activeUser = JSON.parse(localStorage.getItem('activeUser'))

document.getElementById('user-name').innerText = activeUser.firstname