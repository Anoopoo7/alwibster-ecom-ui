"use client"
import { Image } from "@/interfaces/common";
import style from "@/app/page.module.css";
import { NavIcon, ColumnLinks } from "@/interfaces/navbar";
import { Container } from "reactstrap";
import Link from "next/link";

export default function NavbarComponent({
    logo,
    navIcons
}: {
    logo: Image,
    navIcons: Array<NavIcon>
    quicklinks: Array<ColumnLinks>
}) {
    return (
        <div className={style.navbar_outer_div}>
            <Container className={style.navbar_items}>
                <img className="d-none d-md-block" width="130" src={logo.lg} alt="logo" />
                <div className={`d-none d-md-flex ${style.navbar_qucklinks}`}>
                    <p className="px-3 text-light">Shirts</p>
                    <p className="px-3 text-light">pants</p>
                    <p className="px-3 text-light">kurthas</p>
                    <p className="px-3 text-light">shoes</p>
                </div>
                <div className="d-none d-md-flex">
                    {
                        navIcons.map(icon => <Link href={icon.url} className="px-2 pointer">
                            <img width="22" height="22" src={icon.icon} alt="user" />
                        </Link>)
                    }
                </div>
                <div>
                    <img className="d-block d-md-none" width="22" height="22" src="https://img.icons8.com/ios-filled/22/ffffff/menu--v1.png" alt="user" />
                </div>
                <img className="d-block d-md-none" width="90" src={logo.md} alt="logo" />
                <div className="d-flex">
                    {
                        navIcons.map(icon => <>{
                            icon.md && <Link href={icon.url} className="px-2 pointer d-block d-md-none">
                                <img width="22" height="22" src={icon.icon} alt="user" />
                            </Link>
                        }</>)
                    }
                </div>
            </Container>
        </div>
    )
}