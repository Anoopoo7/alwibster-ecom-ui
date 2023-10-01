import { getWidgetByWidgetId } from "@/services/contextServices"
import ProductGridComponent from "./productGridComponent"
import ProductGrid from "@/interfaces/productGrid";

export default async function ProductGridContainer() {
    const context: ProductGrid = await getWidgetByWidgetId("grid");
    return <ProductGridComponent {...context} />
}