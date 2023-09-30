import { Image } from "./common"

export interface Quicklink {
    type: string,
    url: string,
    label: number
}

export interface NavIcon {
    icon: string,
    url: string,
    count: string,
    md: boolean
}

export interface ColumnLinks extends Array<Quicklink> { }

export default interface Navbar {
    logo: Image,
    navIcons: Array<NavIcon>
    quicklinks: Array<ColumnLinks>
}