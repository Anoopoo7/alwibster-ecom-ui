import style from "@/app/product.module.css"
import Image from "next/image"

export default function ProductCard() {
    return <div className={`pointer ${style.product_card}`}>
        <Image
            src={"https://i.ibb.co/Pgqv1Lr/dress1.webp"}
            alt={""}
            width={300}
            height={350}
        />
        <br /><br />
        <h5> Low light heel </h5>
        <p>₹ 450</p>
    </div>
}
