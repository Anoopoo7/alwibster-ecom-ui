import axios from "axios";

export async function getWidgetsByPageType(type: string) {
    const response = await axios.get("http://localhost:3001/widgets");
    if (response && response.data) {
        return response.data;
    }
    return null;
}

export async function getWidgetByWidgetId(id: string) {
    const response = await axios.get("http://localhost:3001/" + id);
    if (response && response.data) {
        return response.data;
    }
    return null;
}
