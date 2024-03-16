import CreateCustomer from "./components/CreateCustomer";
import Customer from "./components/Customer";
import AccountOperations from "./components/AccountOperations";
import BalanceDisplay from "./components/BalanceDisplay";
import store from "./store";

import { deposit } from "./features/account/accountSlice";

const App = () => {
  const customer = useSelector((store) => store.customer);
  const fullName = customer;
  return (
    <div>
      <h1>🏦 Dibimbing Bank</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
};

export default App;
