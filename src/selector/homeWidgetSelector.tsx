import HeroBannerContainer from "@/widgets/heroBanner/heroBannerContainer";
import NavbarContainer from "@/widgets/navbar/navbarContainer";

export default function HomeWidgetSelector({
    widgets
}: {
    widgets: Array<String>
}) {
    return widgets.map(widget => {
        switch (widget) {
            case "20009200-5ef9-11ee-ad19-1fcccc669dd1":
                return <NavbarContainer />
            case "243dc680-5ef9-11ee-ad19-1fcccc669dd1":
                return <HeroBannerContainer />
            default:
                <></>;
        }
    })
}