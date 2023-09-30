import style from "@/app/page.module.css"
import ProductCard from "../productCard/productCardComponent"

export default function ProductCarouselComponent() {
    return <div className="container">
        <div className={style.product_carousel_outer}>
            <h1 className="text-center">Most Selling Products</h1>
            <div className={`${style.slider_outer}`}>
                <div className={`${style.slider_inner}`}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    </div>
}