import PostsList from "./components/PostsList";

function Demo1() {
    return (
        <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
            <h1>Demo 1 – Consumo básico de API con useEffect</h1>
            <PostsList />
        </div>
    );
}

export default Demo1;
