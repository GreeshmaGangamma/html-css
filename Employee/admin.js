const toAdd = () => {
    document.querySelector('#page').src = 'adding.html'
}
const toList = () => {
    document.querySelector('#page').src = 'listing.html'
}
const login = () => {
    document.querySelector('#page').src = window.open("http://127.0.0.1:8887/login.html")
}