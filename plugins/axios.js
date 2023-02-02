export default function ({ $axios }, inject) {
  // create custom header
  const header = {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Content-Type': 'application/json',
    Authorization: 'Bearer p92hXSrkAqgqBICS53RYFm7hxMUHgpfd12Hqu68AVOXg7RBdkFT6U6uxE_pL8cejRIi9m75bx_4ML_nzOVxXltqitj2osFN8qIw83oG208AwTOC-NRtzj7OvDs6ZY3Yx'
  }

  // Create a custom axios instance
  const api = $axios.create({
    headers: header
  })

  // Inject to context as $api
  inject('api', api)
}
