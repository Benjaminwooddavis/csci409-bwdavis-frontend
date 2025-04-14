export default function RouteDetail({ params }: { params: { route_id: string } }) {
    return <h1>Details for Route {params.route_id}</h1>;
}
