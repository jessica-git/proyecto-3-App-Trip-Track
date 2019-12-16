import axios from 'axios'

export default class TravelService {

    constructor() {
        this._service = axios.create({
            baseURL: 'http://localhost:5000/api/travels',
            withCredentials: true
        })

    }

    getAllTravels = () => this._service.get("/all")
    getOneTravelByID = id => this._service.get(`/travel/${id}`)
    getTravelByCity = (place) => this._service.get(`/searchPlace/${place}`)
    newTravel = travel => this._service.post('/new', travel)
    newDay = day => this._service.post('/newDay', day)

    getTravelsByUser = (userId) => this._service.get(`/myTravels/${userId}`)

    updateTravel = (place, duration, people, totalPrice, day, id) => this._service.post(`/edit/${id}`, { place, duration, people, totalPrice, day })

    handleUpload = theFile => this.service.post('/upload', theFile)


}
