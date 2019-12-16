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
    getTravelsByUser = (userId) => this._service.get(`/myTravels/${userId}`)

    newTravel = travel => this._service.post('/new', travel)
    newDay = day => this._service.post('/newDay', day)

    updateTravel = (place, duration, people, totalPrice, day, id) => 
    this._service.post(`/edit/travel/${id}`, { place, duration, people, totalPrice, day })

    updateDay = (place, day, people, lodgings, placeToVisit, paidExcursions, transport, restaurantsMeals, tips, imageUrl, Id) => 
        this._service.post(`/edit/day/${Id}`, 
        { place, day, people, lodgings, placeToVisit, paidExcursions, transport, restaurantsMeals, tips, imageUrl })

    handleUpload = theFile => this.service.post('/upload', theFile)


}
