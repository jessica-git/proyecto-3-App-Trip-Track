import axios from 'axios'

export default class FilesService {

    constructor() {
        this._service = axios.create({
            baseURL: 'http://localhost:5000/api/files',
            withCredentials: true   
        })
    }

    handleUpload = theFile => this._service.post('/upload', theFile)
}