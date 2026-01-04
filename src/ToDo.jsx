export default function ToDo(Props) {
  return (
    <div>
      <h2>ToDo List</h2>
      <ul>
        <li>Task: {Props.task}</li>
      </ul>
    </div>
  );
}
