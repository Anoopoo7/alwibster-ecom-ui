import Navbar from "@/interfaces/navbar";
import NavbarComponent from "./navbarComponent";
import { getWidgetByWidgetId } from "@/services/contextServices";

export default async function NavbarContainer() {
    const context: Navbar = await getWidgetByWidgetId("navbar");
    return <NavbarComponent {...context} />
}