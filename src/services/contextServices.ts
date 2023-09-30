export async function getWidgetsByPageType(type: string) {
    return fetch("http://localhost:3001/widgets", { next: { revalidate: 60 } })
        .then(response => response.json())
        .then(json => json)

}

export async function getWidgetByWidgetId(id: string) {
    return fetch(`http://localhost:3001/${id}`, { cache: 'no-store' })
        .then(response => response.json())
        .then(json => json)
}
