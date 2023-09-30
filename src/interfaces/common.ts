export interface Image {
    lg: string,
    md: string
}
export enum Position {
    start,
    center,
    end,
}
export interface Button {
    label: string
    url: string
    background: string
    color: string
    boxShadow: boolean,
    textshadow: boolean
}