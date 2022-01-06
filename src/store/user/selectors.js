const getToken = () => state => state.user.token
const getIsLoading = () => state => state.user.isLoading

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getToken,
  getIsLoading,
}