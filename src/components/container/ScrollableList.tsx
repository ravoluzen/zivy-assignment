type ScrollableListProps = {
    title: string;
    data: any[];
}
const ScrollableList = ({ data, title}: ScrollableListProps) => {
  return (
    <div>
        <div>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <div className="max-h-[40vh] overflow-y-scroll border p-2">
                {data.map((comment) => (
                    <div key={comment.id} className="border-b p-2">
                    <p className="font-semibold">Name: {comment.name}</p>
                    <p className="font-semibold">Email: {comment.email}</p>
                    <p>{comment.body}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ScrollableList