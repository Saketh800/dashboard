import React from 'react'

const Body = () => {
  return (
    <section className="p-7">
    <div className="flex gap-11">
      <div className="w-2/3 shadow-2xl shadow-gray-500 p-4">
        <h1 className="text-blue-500 font-medium">Toady</h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          enim dolores. Autem, distinctio. Eveniet, error officia!
          Consequuntur suscipit qui voluptates at dicta voluptas natus
          recusandae! Fugiat molestiae iste necessitatibus commodi et illo
          maiores ducimus expedita porro, inventore in earum nisi totam iusto
          debitis cum consectetur temporibus molestias? Veritatis doloribus.
        </p>
      </div>
      <div className="shadow-xl shadow-gray-500 p-9 flex flex-col gap-2 relative">
        <h1 className="text-blue-500 font-medium">Recent Deposite</h1>
        <p className="text-4xl font-medium">$3,024.00</p>
        <p className="text-gray-400">On 15 march 2019</p>
        <p className="text-blue-500 font-medium absolute top-[9rem] bottom-[0rem]">
          view balance
        </p>
      </div>
    </div>
    <div>
      <div className="shadow-xl shadow-gray-500 p-5 mt-12">
          <h1 className="text-blue-500 font-medium p-2">Recent Orders</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Ship To</th>
              <th>Payment Method</th>
              <th>Sale Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023-01-01</td>
              <td>John Doe</td>
              <td>New York</td>
              <td>Credit Card</td>
              <td>$100.00</td>
            </tr>
            <tr>
              <td>2023-01-02</td>
              <td>Jane Smith</td>
              <td>Los Angeles</td>
              <td>PayPal</td>
              <td>$150.00</td>
            </tr>
            <tr>
              <td>2023-01-03</td>
              <td>Bob Johnson</td>
              <td>Chicago</td>
              <td>Debit Card</td>
              <td>$75.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  )
}

export default Body