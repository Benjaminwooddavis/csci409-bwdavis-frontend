export default function LineDetail({ params }: { params: { line_id: string } }) {
    return <h1>Details for Line {params.line_id}</h1>;
}
