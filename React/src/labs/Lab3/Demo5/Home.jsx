import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const location = useLocation();

    const [ref, setRef] = useState("");
    const [layout, setLayout] = useState("");

    const goToProduct = () => {
        const params = new URLSearchParams();

        if (ref) params.set("ref", ref);
        if (layout) params.set("layout", layout);

        navigate(`/product?${params.toString()}`, {
            state: { location: location.pathname, cosas: 123 },

        });
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Demo Referidos + Layout Promocional</h1>

            <div style={{ marginBottom: 20 }}>
                <label>
                    Código de referido:
                    <input
                        value={ref}
                        onChange={e => setRef(e.target.value)}
                        style={{ marginLeft: 10 }}
                    />
                </label>
            </div>

            <div style={{ marginBottom: 20 }}>
                <label>
                    Tipo de layout:
                    <select
                        value={layout}
                        onChange={e => setLayout(e.target.value)}
                        style={{ marginLeft: 10 }}
                    >
                        <option value="">Ninguno</option>
                        <option value="promo">Promo especial</option>
                    </select>
                </label>
            </div>

            <button
                onClick={goToProduct}
                style={{
                    padding: "10px 20px",
                    cursor: "pointer",
                    fontSize: 16,
                }}
            >
                Ir al producto →
            </button>
        </div>
    );
}
