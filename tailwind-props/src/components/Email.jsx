import React from "react";
import "./Email.css";

function EmailNews() {
  return (
    <>
      <form class="form">
        <span class="title">Its Our Email Service.</span>
        <p class="description">We are providing our Email services.</p>
        <div>
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            id="email-address"
          />
          <button type="submit">Just use</button>
        </div>
      </form>
    </>
  );
}

export default EmailNews;
