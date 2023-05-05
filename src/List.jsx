import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((people) => (
        <article key={people.id} className="person">
          <img src={people.image} alt={people.name} />
          <div>
            <h4>{people.name}</h4>
            <p>{people.age} years</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;
