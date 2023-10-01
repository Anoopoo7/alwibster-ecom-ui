import { Image, Position } from "./common"
import ProductCard from "./productCard"

export default interface ProductGrid {
    heading: string
    sub: string
    position: Position
    banner: Image
    products: Array<ProductCard>
    bannerPosition: Position
}