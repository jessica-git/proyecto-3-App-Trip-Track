import axios from 'axios'

export default class ProfileService {

    constructor() {
        this._service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/profile`,
            withCredentials: true
        })

    }

    updateProfile = (id, username, imgPath, imgName) => this.service.post(`/edit`, { id, username, imgPath, imgName})

    handleUpload = theFile => this.service.post('/upload', theFile)


}
