import './App.css';

export default function App() {

  // inside the array object
  const arr = [{
    name: 'xxx',
    age: '22',
    year: '1999'
  },
  {
    name: 'yyy',
    age: '12',
    year: '6999'
  }]
  // get the value from the object
  console.log(arr);
  // get any one value from any one object
  console.log(arr[1].year);
  // get the both object values using map function
  console.log(
    arr.map((val) => {
      return val.name
    })
  );

  return (
    <>
      {/* get the obj values using map and key */}
      {arr.map((val) => {
        return <div key={val.name}>
          <h4>{val.year}</h4>
        </div>
      })
      };
    </>
  );
}