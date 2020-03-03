import axios from 'axios'

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
    withCredentials: true
})

http.interceptors.response.use(
    response => response.data,
    error => {
        if (error.response && error.response.status === 401) {
            localStorage.clear()
            window.location.assign('/login')
        }

        return Promise.reject(error)
    }
)

const login = ({ cNumber, password }) => http.post('/login', { cNumber, password })

const logout = () => http.post('/logout')

const createPro = data => http.post('/professionals', data)

const createPatient = data => {
    const identification = {
        format: data.idFormat,
        number: data.idNumber
    }
    return http.post('/patients', { ...data, identification })
}

const createAppointment = data => http.post('/appointments', data)
const createMedicalHistory = (patient, data) => http.post(`/patients/${patient}/medicalhistory`, data)

const listAPro = professional => http.get(`/appointments/professionals?search=${professional}`)

const listPro = () => http.get('/professionals')
const listPat = _ => http.get('/patients')
const listPatient = data => http.get(`/patients/${data}`)

export default {
    login,
    logout,
    listAPro,
    listPro,
    createPro,
    createPatient,
    createAppointment,
    listPat,
    listPatient,
    createMedicalHistory
}