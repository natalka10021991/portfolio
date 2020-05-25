import axios from "axios";

const $axios = axios.create({
	baseURL: "https://webdev-api.loftschool.com"
})

export default $axios;