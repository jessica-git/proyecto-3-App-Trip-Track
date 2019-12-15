import axios from 'axios'

export default class ProfileService {

    constructor() {
        this._service = axios.create({
            baseURL: 'http://localhost:5000/api/travels',
            withCredentials: true
        })

    }

    // updateProfile = (id, edit) => this.service.post(`profile/edit`, { id, edit })

    handleUpload = theFile => this.service.post('/upload', theFile)


}
