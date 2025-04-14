export default function VehicleDetail({ params }: { params: { vehicle_id: string } }) {
    return <h1>Details for Vehicle {params.vehicle_id}</h1>;
}
