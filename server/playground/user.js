export default {
  name: 'User Queries',
  endpoint: '',
  headers: { sessiontoken: 'MY^PR3TTYP0NY' },
  query: `
    {
      getUser {
        id
        name
      }
    }`
}
