import React from "react";
import "../account/Account.css";

const Account = () => {
  return (
    <div className="container">
      <div className="about_contents">
        <h3 className="account_title">Account</h3>
        <form action="" className="account_form">
          <input type="text" placeholder="Bochojon" required />
          <input type="text" placeholder="Programmer" required />
          <input type="email" placeholder="bochojon@gmail.com" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm password" required />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
};

export default Account;
