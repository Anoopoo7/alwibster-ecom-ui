import { getWidgetsByPageType } from "@/services/contextServices";
import HomeWidgetSelector from "../selector/homeWidgetSelector";

export default async function Home() {
  const widgets: Array<String> = await getWidgetsByPageType("Home");
  return (
    <main>
      <HomeWidgetSelector widgets={widgets} />
    </main>
  )
}
