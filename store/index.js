import uuid from 'uuid/v4'
export const state = () => ({
  members: [
    {
      id: '1',
      name: 'James',
      areaOfConcern: 'I am not concerned',
      whyIsConcern: 'I might be a little concerned',
      remainAnon: false
    },
    {
      id: '2',
      name: 'Joe',
      areaOfConcern: 'I am a little concerned',
      whyIsConcern: 'I am not a little concerned',
      remainAnon: false
    }
  ]
})

export const mutations = {
  addUser (state, payload) {
    const newUser = {
      ...payload,
      id: uuid()
    }
    state.members.push(newUser)
  }
}

export const getters = {
  users (state) {
    return state.members
  }
}
