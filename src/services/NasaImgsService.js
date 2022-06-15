import { AppState } from "../AppState";
import { api } from "./AxiosService"

class NasaImgService {

    async getData() {
        const res = await api.get()
        console.log(res.data);
        AppState.nasaData = res.data
    }
}

export const nasaimgsService = new NasaImgService()