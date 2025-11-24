import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com", // API de ejemplo
    headers: { "Content-Type": "application/json" },
    timeout: 5000
});

// Interceptor request: añadir token JWT si existe
axiosClient.interceptors.request.use(config => {
    const token = localStorage.getItem("accessToken");

    // if (!token) {
    //     // Redirigir al login
    //     window.location.href = "/login";
    //     return Promise.reject(new Error("No hay token, redirigiendo a login"));
    // }

    if (token) config.headers.Authorization = `Bearer ${token}`;
    if (process.env.NODE_ENV === "development") {
        console.log("[REQUEST]", config.method.toUpperCase(), config.url, config.data || "");
    }
    return config;
}, error => Promise.reject(error));

// Interceptor response: logging y manejo global simple
axiosClient.interceptors.response.use(
    res => {
        if (process.env.NODE_ENV === "development") console.log("[RESPONSE]", res);
        return res;
    },
    err => {
        console.error("[RESPONSE ERROR]", err.response?.status, err.response?.data || err);
        return Promise.reject(err);
    }
);

export default axiosClient;
