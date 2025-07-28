// ChildComponent.jsx
function ChildComponent(props) {
  // Access the array directly from props
  const receivedItems = props.items;

  return (
    <div>
      <h2>Received Items:</h2>
      <ul>
        {receivedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ChildComponent;