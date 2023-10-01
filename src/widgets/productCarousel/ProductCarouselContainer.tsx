import { getWidgetByWidgetId } from "@/services/contextServices";
import ProductCarouselComponent from "./productCarouselComponent";
import ProductCarousel from "@/interfaces/productCarousel";

export default async function ProductCarouselContainer() {
    const context: ProductCarousel = await getWidgetByWidgetId("carousel")
    return <ProductCarouselComponent {...context} />
}