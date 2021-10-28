import client from "../provider/client"

export const getTasks = () => {
  return client.get()
}

export const getTaskToEdit = (id) => {
  return client.get(`/${id}`)
}

export const createTask = data => {
  return client.post('', data)
}

export const editTask = (id, data) => {
  return client.put(`/${id}`, data)
}

export const deleteTask = (id) => {
  return client.delete(`/${id}`)
}