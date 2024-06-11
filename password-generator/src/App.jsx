import { useState, useCallback, useEffect } from "react";
import "./App.css";

function generatePassword(
  length,
  includeNumbers = false,
  includeSpecialChars = false
) {
  const numbers = "0123456789";
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let allChars = chars; //? By default, include characters

  if (includeNumbers) {
    allChars += numbers;
  }

  if (includeSpecialChars) {
    allChars += specialChars;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

function App() {
  const [passwordLength, setPasswordLength] = useState(4);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharterAllowed, setIsCharterAllowed] = useState(false);
  const [password, setPassword] = useState("IshanSingh111");
  const passwordGenerator = useCallback(() => {
    const password = generatePassword(
      passwordLength,
      isNumberAllowed,
      isCharterAllowed
    );
    setPassword(password);
  }, [passwordLength, isNumberAllowed, isCharterAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordLength, isNumberAllowed, isCharterAllowed]);

  return (
    <>
      <h1>React.JS Project | The Password Generator 🎯</h1>
      <div className="mainContent">
        <div className="box1">
          <span id="password">{password}</span>
          <button>Copy Password</button>
        </div>
        <div className="options">
          {/* //! Password Range Input */}
          <input
            type="range"
            min={4}
            max={60}
            id="passwordLength"
            value={passwordLength}
            onChange={(event) => {
              setPasswordLength(event.target.value);
            }}
          />
          <span>Password Length : {passwordLength}</span>

          {/* //! Include Numbers Input */}
          <input
            type="checkbox"
            defaultChecked={isNumberAllowed}
            id="numberInput"
            onChange={() => {
              setIsNumberAllowed((previousValue) => {
                return !previousValue;
              });
            }}
          />
          <label htmlFor="numberInput">Include Numbers</label>

          {/* //! Include Special Characters Input */}
          <input
            type="checkbox"
            defaultChecked={isCharterAllowed}
            id="charterInput"
            onChange={() => {
              setIsCharterAllowed((previousValue) => {
                return !previousValue;
              });
            }}
          />
          <label htmlFor="charterInput">Include Special Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
