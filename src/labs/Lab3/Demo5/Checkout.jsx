import { useReferral } from "./ReferralContext";

export default function Checkout() {
  const { referralCode } = useReferral();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>
      <p>Revisa tu pedido antes de finalizar.</p>

      {referralCode && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            background: "#e3ffe0",
            borderRadius: "10px",
          }}
        >
          <strong>Cód. de referido aplicado:</strong> {referralCode}
        </div>
      )}
    </div>
  );
}
