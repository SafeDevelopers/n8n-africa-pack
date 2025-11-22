import axios from 'axios'
const BASE = 'https://n8n-webhooks.www.addispos.com'
export const trigger = (id, body={}) => axios.post(`${BASE}/${id}`, body)
export const alerts  = () => axios.get(`${BASE}/get-alerts`)