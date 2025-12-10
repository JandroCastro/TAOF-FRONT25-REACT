import { useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { useReferral } from "./ReferralContext";
import { useFeatureFlags } from "./useFeatureFlags";

export default function Product() {
  const [params] = useSearchParams();
  const { promoLayout } = useFeatureFlags();

  const location = useLocation();
  console.log("🚀 ~ Product ~ location:", location)


  const navigate = useNavigate();
  const { setReferralCode } = useReferral();

  const refCode = params.get("ref");

  // Guardar el código del referido cuando entra
  useEffect(() => {
    if (refCode) setReferralCode(refCode);
  }, [refCode, setReferralCode]);

  return (
    <div style={{ padding: "20px" }}>
      {promoLayout && (
        <div
          style={{
            padding: "15px",
            background: "#ffe8c2",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        >
          <h2>🔥 Promoción especial activada</h2>
        </div>
      )}

      <h1>Producto X</h1>
      <p>Descripción breve del producto.</p>

      <button
        onClick={() => navigate("/checkout")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Comprar
      </button>
    </div>
  );
}
