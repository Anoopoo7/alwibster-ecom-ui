import style from "@/app/page.module.css";
import HeroBanner from "@/interfaces/heroBanner";
import Link from "next/link";

export default function HeroBannerComponent({ heading, buttons, background }: HeroBanner) {
    console.log(buttons);

    return <div
        className={style.herobanner_outer}
        style={
            { backgroundImage: `url(${background.lg})` }
        }
    >
        <h1 className={`d-none d-md-block ${style.hero_banner_heading}`}
            dangerouslySetInnerHTML={{ __html: heading.label }}
        />
        <h1 className={`d-block d-md-none ${style.hero_banner_heading_md}`}
            dangerouslySetInnerHTML={{ __html: heading.label }}
        />
        <br />
        <br className="d-none d-md-flex" />
        <div className="d-none d-md-flex">
            {
                buttons?.map(button => <Link
                    href={button.url}>
                    <button
                        className={`
                        ${button.boxShadow && style.box_shadow}
                        ${style.hero_banner_btn}
                        ${button.textshadow && style.text_shadow}
                        `}
                        style={{
                            color: `${button.color}`,
                            backgroundColor: `${button.background}`
                        }}
                    >{button.label}</button>
                </Link>)
            }
        </div>
        <div className="d-flex d-md-none">
            {
                buttons?.map(button => <Link
                    href={button.url}>
                    <button className={`
                    ${button.boxShadow && style.box_shadow} 
                    ${style.hero_banner_btn_md}
                    ${button.textshadow && style.text_shadow}
                    `}
                        style={{
                            color: `${button.color}`,
                            backgroundColor: `${button.background}`
                        }}
                    >View Products</button>
                </Link>)
            }
        </div>
    </div>
}