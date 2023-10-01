
import style from "@/app/page.module.css"
import Images from "next/image"
import ProductCardComponent from "../productCard/productCardComponent"
import ProductCard from "@/interfaces/productCard"
import { Image, Position } from "@/interfaces/common"

export default function ProductGridComponent({
    heading,
    sub,
    position,
    banner,
    products
}: {
    heading: string
    sub: string
    position: Position
    banner: Image
    products: Array<ProductCard>
}) {
    return <div className="container">
        <div className={style.product_grid_outer}>
            <h3 className="text-center">{heading}</h3>
            <h5 className="text-center">{sub}</h5>
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className={style.product_grid_image}>
                        <Images
                            src={banner.lg}
                            width={200}
                            height={200}
                            alt={""}
                            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                            className={style.product_grid_img}
                        />
                    </div>
                </div>
                <div className="col col-12 col-md-6">
                    <div className="d-flex flex-wrap d-none d-md-flex">
                        {
                            products?.map(product => <ProductCardComponent {...product} />)
                        }
                    </div>
                    <div className="d-block d-md-none">
                        <div className={`${style.slider_outer}`}>
                            <div className={`${style.slider_inner}`}>
                                {
                                    products?.map(product => <ProductCardComponent {...product} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}