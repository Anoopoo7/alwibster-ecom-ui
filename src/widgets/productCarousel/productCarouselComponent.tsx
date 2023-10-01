import style from "@/app/page.module.css"
import ProductCardComponent from "../productCard/productCardComponent"
import { Position } from "@/interfaces/common"
import ProductCard from "@/interfaces/productCard"

export default function ProductCarouselComponent({
    heading, position, products
}: {
    heading: string,
    position: Position
    products: Array<ProductCard>
}) {

    return <div className="container">
        <div className={style.product_carousel_outer}>
            <h3 className={`d-none d-md-block text-${position}`}>{heading}</h3>
            <h5 className={`d-block d-md-none text-${position}`}>{heading}</h5>
            <div className={`${style.slider_outer}`}>
                <div className={`${style.slider_inner}`}>
                    {
                        products?.map(product => <ProductCardComponent {...product} />)
                    }
                </div>
            </div>
        </div>
    </div>
}