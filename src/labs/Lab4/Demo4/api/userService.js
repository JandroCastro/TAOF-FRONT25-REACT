import axiosClient from "./axiosClient";

export const userService = {
    getUsers: async () => {
        const res = await axiosClient.get("/users");
        return res.data;
    },
    createUser: async (user) => {
        const res = await axiosClient.post("/users", user);
        return res.data;
    },
    updateUser: async (id, user) => {
        const res = await axiosClient.put(`/users/${id}`, user);
        return res.data;
    },
    deleteUser: async (id) => {
        const res = await axiosClient.delete(`/users/${id}`);
        return res.data;
    }
};
