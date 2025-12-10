const API_URL = "http://localhost:4000/items";

export async function getAll() {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error GET");
    return res.json();
}

export async function create(data) {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error("Error POST");
    return res.json();
}

export async function update(id, data) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error("Error PUT");
    return res.json();
}

export async function remove(id) {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Error DELETE");
    return true;
}
