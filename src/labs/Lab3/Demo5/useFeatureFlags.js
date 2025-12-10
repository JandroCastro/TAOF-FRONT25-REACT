import { useSearchParams } from "react-router-dom";

export function useFeatureFlags() {
    const [params] = useSearchParams();

    return {
        promoLayout: params.get("layout") === "promo",
    };
}
