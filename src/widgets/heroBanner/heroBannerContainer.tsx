import { getWidgetByWidgetId } from "@/services/contextServices";
import HeroBannerComponent from "./heroBannerComponent";
import HeroBanner from "@/interfaces/heroBanner";

export default async function HeroBannerContainer() {
    const context: HeroBanner = await getWidgetByWidgetId("header")
    return <HeroBannerComponent  {...context} />
}