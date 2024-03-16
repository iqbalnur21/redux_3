
import { useSelector } from "react-redux";
const Customer = () => {
  const customer = useSelector((store) => store.customer);
  const fullName = customer;

  return <h2>👋 Welcome, {fullName}</h2>
}

export default Customer
