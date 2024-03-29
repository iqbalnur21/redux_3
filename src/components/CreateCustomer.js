import { useState } from "react";

const Customer = () => {
  const [fullName, setfullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const handleClick = () => {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
    setfullName("");
    setNationalId("");
  };

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setfullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
};

export default Customer;
