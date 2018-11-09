import axios from 'axios'

const API_URL = 'http://localhost:5000'
const config = {}

export const getRelease = () => {
    return axios.get(`${API_URL}/album/release`, config)
}