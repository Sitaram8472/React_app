    // ChildComponent.jsx
    function ChildComponentprops(props) {
      const { name, age, city } = props.user; // Object destructuring

      return (
        <div>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>City: {city}</p>
        </div>
      );
    }

    export default ChildComponentprops;