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
const listPro = () => http.get('/professionals')
const listProfessional = id => http.get(`/professionals/${id}`)
const updateProfessional = (id, data) => http.patch(`/professionals/${id}`, data)
const deleteProfessional = id => http.delete(`/professionals/${id}`)

const createPatient = data => {
    const identification = {
        format: data.idFormat,
        number: data.idNumber
    }
    return http.post('/patients', { ...data, identification })
}
const listPat = _ => http.get('/patients')
const listPatient = data => http.get(`/patients/${data}`)
const updatePatient = (data) => http.patch(`/patients/${data.id}`, data)

const createAppointment = data => http.post('/appointments', data)
const listAppointment = id => http.get(`/appointments/${id}`)
const updateAppointment = (id, data) => http.patch(`/appointments/${id}`, data)
const listAPro = professional => http.get(`/appointments/professionals?search=${professional}`)
const listAPat = patient => http.get(`/appointments/patients?search=${patient}`)
const listADate = date => http.get(`/appointments/date?date=${date}`)

const createMedicalHistory = (id, data) => http.post(`/patients/${id}/medicalhistory`, data)
const listMedicalHistory = (id) => http.get(`/patients/${id}/medicalhistory`)
const updateMedicalHistory = (id, data) => http.patch(`/patients/${id}/medicalhistory`, data)

export default {
    login,
    logout,
    listAPro,
    listPro,
    listAPat,
    createPro,
    createPatient,
    createAppointment,
    listPat,
    listPatient,
    createMedicalHistory,
    listADate,
    listAppointment,
    updateAppointment,
    deleteProfessional,
    listProfessional,
    listMedicalHistory,
    updateMedicalHistory,
    updateProfessional,
    updatePatient
}