"use client";
import { useState } from "react";
import "./beforeLogin.css";

export default function LoginModal() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const onSubmit = () => {};
  const onClickClose = () => {};

  const onChangeId = () => {};

  const onChangePassword = () => {};

  return (
    <div className="modalBackground">
      <div className="modal">
        <div className="modalHeader">
          <button className="actionButton" onClick={onClickClose}>
            <svg
              width={24}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
            >
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
          <div>Please log in</div>
        </div>
        <form onSubmit={onSubmit} className="modalForm">
          <div className="modalBody">
            <div className="inputDiv">
              <label className="inputLabel" htmlFor="id">
                ID
              </label>
              <input
                id="id"
                className="input"
                value={id}
                onChange={onChangeId}
                type="text"
                placeholder=""
              />
            </div>
            <div className="inputDiv">
              <label className="inputLabel" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="input"
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder=""
              />
            </div>
          </div>
          <div>{message}</div>
          <div className="modalFooter">
            <button className="closeButton" disabled={!id && !password}>
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
