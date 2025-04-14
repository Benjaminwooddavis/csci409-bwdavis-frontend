export default function AlertDetail({ params }: { params: { alert_id: string } }) {
    return <h1>Details for Alert {params.alert_id}</h1>;
}
