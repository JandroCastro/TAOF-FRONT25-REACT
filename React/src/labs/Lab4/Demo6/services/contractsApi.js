import axios from "axios";

// Función de API que acepta un AbortSignal opcional
export function getContracts(signal) {
    return axios.get("https://jsonplaceholder.typicode.com/users", { signal });
}
