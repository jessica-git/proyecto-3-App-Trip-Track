import axios from 'axios'

export default class ProfileService {

    constructor() {
        this._service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/profile`,
            withCredentials: true
        })

    }

    // updateProfile = (id, edit) => this.service.post(`/edit`, { id, edit })

    handleUpload = theFile => this.service.post('/upload', theFile)


}
