import axios from 'axios'

export default class TravelService {

    constructor() {
        this._service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/travels`,
            withCredentials: true
        })

    }

    getAllTravels = () => this._service.get("/all")
    getOneTravelByID = id => this._service.get(`/travel/${id}`)      
    getOneTravelDayByID = id => this._service.get(`/travel/day/${id}`)      

    getTravelByCity = (place) => this._service.get(`/searchPlace/${place}`)
    getTravelsByUser = (userId) => this._service.get(`/myTravels/${userId}`)

    newTravel = travel => this._service.post('/new', travel)
    
    newDay = ({ place, day, lodgings, placeToVisit, paidExcursions, transport, restaurantsMeals, tips, imgPath, imgName }) =>
        this._service.post('/newDay', ({ place, day, lodgings, placeToVisit, paidExcursions, transport, restaurantsMeals, tips, imgPath, imgName }))

    updateTravel = (place, duration, people, totalPrice, id) => {
        this._service.post(`/edit/travel/${id}`, { place, duration, people, totalPrice })
    }
    updateDay = (place, day, people, lodgings, placeToVisit, paidExcursions, transport, restaurantsMeals, tips, imgPath, imgName, id) =>
        this._service.post(`/edit/day/${id}`,
            { place, day, people, lodgings, placeToVisit, paidExcursions, transport, restaurantsMeals, tips, imgPath, imgName })

    handleUpload = theFile => this.service.post('/upload', theFile)


}
