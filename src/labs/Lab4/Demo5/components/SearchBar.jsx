export default function SearchBar({ value, onChange }) {
    return (
        <input
            type="text"
            placeholder="Buscar por nombre..."
            value={value}
            onChange={e => onChange(e.target.value)}
            style={{ padding: 8, marginBottom: 10, width: "100%" }}
        />
    );
}
