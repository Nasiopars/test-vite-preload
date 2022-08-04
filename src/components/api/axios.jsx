import axios from "axios";

export default axios.create({
    baseUrl: 'https://my-json-server.typicode.com/Nasiopars/test-vite-preload/db'
})