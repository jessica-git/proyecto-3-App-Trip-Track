import axios from 'axios'

export default class Services {

    constructor() {
        this._service = axios.create({
            baseURL: 'http://localhost:5000/api/auth',
            withCredentials: true   
        })
    }

    signup = (username, password, email, imageUrl, travelsInspirationList) => this._service.post('/signup', { username, password, email, imageUrl, travelsInspirationList })
    login = (username, password) => this._service.post('/login', { username, password})
    logout = () => this._service.post('/logout')
    loggedin = () => this._service.get('/loggedin')

    handleUpload = theFile => this.service.post('/upload', theFile)
    
}