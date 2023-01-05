export const Marks = ({data})=>(
    <g className="marks">
        {data.features.map(d=>(
            <path />
        ))}
    </g>
)
