// Configurações da API
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br',
});

export default {
    all() {
        return api.get('/json/all')
    },
}
