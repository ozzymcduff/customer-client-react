import React from 'react';
import Customer from './Customer';
//
function MainSection({ customers, actions }) {
  const refreshCommand = () => {
    console.log("refresh");
  };

  //let isBusy = <div>isBusy</div>;
  return (
    <section>
      {/*isBusy*/}
      <div>
        {customers.map((customer) => (
          <Customer key={customer.id} customer={customer} {...actions} />
        ))}
      </div>
      <button onClick={refreshCommand}>Refresh</button>
    </section>
  );
}
export default MainSection;
