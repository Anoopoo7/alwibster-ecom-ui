import { Button, Image, Position } from "./common"

export interface Heading {
    label: string
    position: Position
}

export default interface HeroBanner {
    background: Image
    heading: Heading
    buttons: Array<Button>
}