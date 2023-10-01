import { Position } from "./common"
import ProductCard from "./productCard"

export default interface ProductCarousel {
    heading: string
    position: Position
    products: Array<ProductCard>
}