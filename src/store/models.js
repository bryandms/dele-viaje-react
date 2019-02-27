export const user = {
  state: JSON.parse(localStorage.getItem('user')) || {},
  reducers: {
    setUser: (s, u) => s = u
  }
}

export const places = {
  state: [],
  reducers: {
    setPlaces: (s, p) => s = p
  }
}
