import "./styles.css";
import { useState } from "react";
import RandExp from "randexp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [key, setKey] = useState("");

  const ENCRYPTED_LENGTH = 16;
  const REGEX = /^[a-zA-Z0-9_!#$%&*+=?^|-]{16}$/;

  const randomGenerateKey = () => {
    const randexp = new RandExp(REGEX);

    setKey(randexp.gen());
  };

  const save = () => {
    if ((key.length !== ENCRYPTED_LENGTH && key === "") || !REGEX.test(key)) {
      console.log("wrong!!");
    }

    if (REGEX.test(key)) {
      console.log("true");
    }
  };

  return (
    <div className="App">
      <label>Encrypted Key</label>
      <br />
      {key.length}
      <br />
      <input
        type="text"
        value={key}
        name="key"
        onChange={(e) => setKey(e.target.value)}
      />

      <button onClick={randomGenerateKey}>
        <FontAwesomeIcon icon={faShuffle} />
      </button>
      <br />
      <br />
      <button onClick={save}>Save</button>
    </div>
  );
}
