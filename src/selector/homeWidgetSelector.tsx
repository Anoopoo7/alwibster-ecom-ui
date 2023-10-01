import HeroBannerContainer from "@/widgets/heroBanner/heroBannerContainer";
import NavbarContainer from "@/widgets/navbar/navbarContainer";
import ProductCarouselContainer from "@/widgets/productCarousel/ProductCarouselContainer";
import ProductGridContainer from "@/widgets/productGrid/productGridContainer";

export default function HomeWidgetSelector({
    widgets
}: {
    widgets: Array<String>
}) {    
    return widgets?.map(widget => {
        switch (widget) {
            case "20009200-5ef9-11ee-ad19-1fcccc669dd1":
                return <NavbarContainer />
            case "243dc680-5ef9-11ee-ad19-1fcccc669dd1":
                return <HeroBannerContainer />
            case "2dbe26c2-2873-403e-a994-ab3889f913c3":
                return <ProductCarouselContainer />
            case "9afebc35-c0e0-407c-b5de-1fec8b4fe74a":
                return <ProductGridContainer />
            default:
                <></>;
        }
    })
}