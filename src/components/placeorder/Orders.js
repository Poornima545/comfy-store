import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

function Orders() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const { jwt } = JSON.parse(localStorage.getItem("user"));
    axios
      .get("https://strapi-store-server.onrender.com/api/orders", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((res) => setOrders(res.data));
  }, []);

  const onPaginateNext = () => {
    const { jwt } = JSON.parse(localStorage.getItem("user"));
    const nextPage = orders.meta.pagination.page + 1;
    axios
      .get(
        `https://strapi-store-server.onrender.com/api/orders?page=${nextPage}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then((res) => setOrders(res.data));
  };

  return (
    <div className="orders">
      <h3>Your Orders</h3>
      <hr />
      {orders && <h5>Total Orders: {orders.meta.pagination.total} </h5>}
      {orders && (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col"># Products</th>
                <th scope="col">Cost</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.data.map((order) => {
                const {
                  name,
                  address,
                  numItemsInCart,
                  orderTotal,
                  publishedAt,
                } = order.attributes;
                return (
                  <tr key={order.id}>
                    <td>{name}</td>
                    <td>{address}</td>
                    <td>{numItemsInCart}</td>
                    <td>{orderTotal}</td>
                    <td>{publishedAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className="page-item disabled">
                <Link className="page-link">Previous</Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#" onClick={onPaginateNext}>
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}

export default Orders;
