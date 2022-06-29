import axios from 'axios'

async function api(rota, corpo) {
    const headers = {'Content-Type': 'application/json'}

    return new Promise(sucesso => {
        axios.post('http://felipesobral.com:3303/'+rota, corpo, {headers})
            .then(res => {
                if (!res?.data) sucesso(undefined)
                sucesso(res?.data)
            })
            .catch(({ response }) => {
                sucesso(response?.data || undefined)
            })
    })
}

export default api
