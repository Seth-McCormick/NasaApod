import Axios from 'axios'
export const api = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  timeout: 8000,

  params: {
    api_key: 'qFSs8pODutkVCAbReC0cb8Ci4Bn8Ol1hdbPPDimO'
  }
})


