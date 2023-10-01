import style from "@/app/product.module.css"
import { Image } from "@/interfaces/common"
import Images from "next/image"

export default function ProductCard({ media, name, price }: {
    media: Image,
    name: string,
    price: string
}) {
    return <div className={`pointer ${style.product_card}`}>
        <Images
            src={media?.lg}
            alt={name}
            width={300}
            height={350}
        />
        <br /><br />
        <h5 className="ms-2"> {name} </h5>
        <p className="ms-2">₹ {price}</p>
    </div>
}
