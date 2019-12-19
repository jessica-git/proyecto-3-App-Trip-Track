import axios from 'axios'

export default class AuthService {

    constructor() {
        this._service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/auth`,
            withCredentials: true
        })
    }

    signup = (username, password, email, imgPath) => this._service.post('/signup', { username, password, email, imgPath })
    login = (username, password) => this._service.post('/login', { username, password })
    logout = () => this._service.post('/logout')
    loggedin = () => this._service.get('/loggedin')

    handleUpload = theFile => this.service.post('/upload', theFile)

}