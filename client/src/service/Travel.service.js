import axios from 'axios'

export default class Services {

    constructor() {
        this._service = axios.create({
            baseURL: 'http://localhost:5000/api/travels', 
            withCredentials: true
        })

    }

    getAllTravels = () => this._service.get('/all')
    getOneTravelByID = id => this._service.get(`/travel/${id}`)
    getTravelByCity = (place) => this._service.get(`/searchPlace/${place}`)
    // getTravelByIDCity = (place, id) => this._service.get(`/${place}/${id}`)



    // handleUpload = theFile => this.service.post('/upload', theFile)



}
