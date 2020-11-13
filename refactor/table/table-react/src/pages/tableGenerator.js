import React from "react";

const dogs = [
  {
    breed: "German Shepherd",
    age: 10
  },
  {
    breed: "Labrador Retriever",
    age: 5
  }
];

const TableGenerator = () => {
  // const firstDog = Array.isArray(dogs) && dogs.length ? dogs[0] : {};
  const firstDog = dogs.length ? dogs[0] : {};

  const headers = Object.keys(firstDog);

  return (
    <table>
      <tr>
        {headers.map(header => (
          <th>{header}</th>
        ))}
      </tr>
      {dogs.map(dog => {
        return (
          <tr>
            {headers.map(header => (
              <td>{dog[header]}</td>
            ))}
          </tr>
        );
      })}
    </table>
  );
};

export default TableGenerator;
