import React, { useState } from "react";
import "./App.css";

async function query(data) {
  const response = await fetch(
    "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
    {
      headers: {
        Accept: "image/png",
        Authorization:
          "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();
  return result;
}

function App() {
  const [textInput1, setTextInput1] = useState("");
  const [textInput2, setTextInput2] = useState("");
  const [textInput3, setTextInput3] = useState("");
  const [textInput4, setTextInput4] = useState("");
  const [textInput5, setTextInput5] = useState("");
  const [textInput6, setTextInput6] = useState("");
  const [textInput7, setTextInput7] = useState("");
  const [textInput8, setTextInput8] = useState("");
  const [textInput9, setTextInput9] = useState("");
  const [textInput10, setTextInput10] = useState("");

  const [imageURL1, setImageURL1] = useState("");
  const [imageURL2, setImageURL2] = useState("");
  const [imageURL3, setImageURL3] = useState("");
  const [imageURL4, setImageURL4] = useState("");
  const [imageURL5, setImageURL5] = useState("");
  const [imageURL6, setImageURL6] = useState("");
  const [imageURL7, setImageURL7] = useState("");
  const [imageURL8, setImageURL8] = useState("");
  const [imageURL9, setImageURL9] = useState("");
  const [imageURL10, setImageURL10] = useState("");

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    try {
      const imageBlob = await query({ inputs: textInput1 });
      const imageURL1 = URL.createObjectURL(imageBlob);
      setImageURL1(imageURL1);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      const imageBlob = await query({ inputs: textInput2 });
      const imageURL2 = URL.createObjectURL(imageBlob);
      setImageURL2(imageURL2);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const handleSubmit3 = async (e) => {
    e.preventDefault();
    try {
      const imageBlob = await query({ inputs: textInput3 });
      const imageURL3 = URL.createObjectURL(imageBlob);
      setImageURL3(imageURL3);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const handleSubmit4 = async (e) => {
    e.preventDefault();
    try {
      const imageBlob = await query({ inputs: textInput4 });
      const imageURL4 = URL.createObjectURL(imageBlob);
      setImageURL4(imageURL4);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const handleSubmit5 = async (e) => {
    e.preventDefault();
    try {
      const imageBlob = await query({ inputs: textInput5 });
      const imageURL5 = URL.createObjectURL(imageBlob);
      setImageURL5(imageURL5);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const handleSubmit6 = async (e) => {
    e.preventDefault();
    try {
      const imageBlob = await query({ inputs: textInput6 });
      const imageURL6 = URL.createObjectURL(imageBlob);
      setImageURL6(imageURL6);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const handleSubmit7 = async (e) => {
    e.preventDefault();
    try {
      const imageBlob = await query({ inputs: textInput7 });
      const imageURL7 = URL.createObjectURL(imageBlob);
      setImageURL7(imageURL7);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const handleSubmit8 = async (e) => {
    e.preventDefault();
    try {
      const imageBlob = await query({ inputs: textInput8 });
      const imageURL8 = URL.createObjectURL(imageBlob);
      setImageURL8(imageURL8);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const handleSubmit9 = async (e) => {
    e.preventDefault();
    try {
      const imageBlob = await query({ inputs: textInput9 });
      const imageURL9 = URL.createObjectURL(imageBlob);
      setImageURL9(imageURL9);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  const handleSubmit10 = async (e) => {
    e.preventDefault();
    try {
      const imageBlob = await query({ inputs: textInput10 });
      const imageURL10 = URL.createObjectURL(imageBlob);
      setImageURL10(imageURL10);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit1}>
        <label>Panel1:</label>
        <textarea
          value={textInput1}
          onChange={(e) => setTextInput1(e.target.value)}
        />
        <button type="submit">Generate</button>
      </form>

      {imageURL1 && (
        <div>
          <h2>Resulting Image:</h2>
          <img
            src={imageURL1}
            alt="Resulting Image"
            style={{ maxWidth: "100%" }}
          />
          <form onSubmit={handleSubmit2}>
            <label>Panel2:</label>
            <textarea
              value={textInput2}
              onChange={(e) => setTextInput2(e.target.value)}
            />
            <button type="submit">Generate</button>
          </form>
        </div>
      )}

      {imageURL2 && (
        <div>
          <h2>Resulting Image:</h2>
          <img
            src={imageURL2}
            alt="Resulting Image"
            style={{ maxWidth: "100%" }}
          />
          <form onSubmit={handleSubmit3}>
            <label>Panel3:</label>
            <textarea
              value={textInput3}
              onChange={(e) => setTextInput3(e.target.value)}
            />
            <button type="submit">Generate</button>
          </form>
        </div>
      )}

      {imageURL3 && (
        <div>
          <h2>Resulting Image:</h2>
          <img
            src={imageURL3}
            alt="Resulting Image"
            style={{ maxWidth: "100%" }}
          />
          <form onSubmit={handleSubmit4}>
            <label>Panel4:</label>
            <textarea
              value={textInput4}
              onChange={(e) => setTextInput4(e.target.value)}
            />
            <button type="submit">Generate</button>
          </form>
        </div>
      )}

      {imageURL4 && (
        <div>
          <h2>Resulting Image:</h2>
          <img
            src={imageURL4}
            alt="Resulting Image"
            style={{ maxWidth: "100%" }}
          />
          <form onSubmit={handleSubmit5}>
            <label>Panel5:</label>
            <textarea
              value={textInput5}
              onChange={(e) => setTextInput5(e.target.value)}
            />
            <button type="submit">Generate</button>
          </form>
        </div>
      )}

      {imageURL5 && (
        <div>
          <h2>Resulting Image:</h2>
          <img
            src={imageURL5}
            alt="Resulting Image"
            style={{ maxWidth: "100%" }}
          />
          <form onSubmit={handleSubmit6}>
            <label>Panel6:</label>
            <textarea
              value={textInput6}
              onChange={(e) => setTextInput6(e.target.value)}
            />
            <button type="submit">Generate</button>
          </form>
        </div>
      )}

      {imageURL6 && (
        <div>
          <h2>Resulting Image:</h2>
          <img
            src={imageURL6}
            alt="Resulting Image"
            style={{ maxWidth: "100%" }}
          />
          <form onSubmit={handleSubmit7}>
            <label>Panel7:</label>
            <textarea
              value={textInput7}
              onChange={(e) => setTextInput7(e.target.value)}
            />
            <button type="submit">Generate</button>
          </form>
        </div>
      )}

      {imageURL7 && (
        <div>
          <h2>Resulting Image:</h2>
          <img
            src={imageURL7}
            alt="Resulting Image"
            style={{ maxWidth: "100%" }}
          />
          <form onSubmit={handleSubmit8}>
            <label>Panel8:</label>
            <textarea
              value={textInput8}
              onChange={(e) => setTextInput8(e.target.value)}
            />
            <button type="submit">Generate</button>
          </form>
        </div>
      )}

      {imageURL8 && (
        <div>
          <h2>Resulting Image:</h2>
          <img
            src={imageURL8}
            alt="Resulting Image"
            style={{ maxWidth: "100%" }}
          />
          <form onSubmit={handleSubmit9}>
            <label>Panel9:</label>
            <textarea
              value={textInput9}
              onChange={(e) => setTextInput9(e.target.value)}
            />
            <button type="submit">Generate</button>
          </form>
        </div>
      )}

      {imageURL9 && (
        <div>
          <h2>Resulting Image:</h2>
          <img
            src={imageURL9}
            alt="Resulting Image"
            style={{ maxWidth: "100%" }}
          />
          <form onSubmit={handleSubmit10}>
            <label>Panel10:</label>
            <textarea
              value={textInput10}
              onChange={(e) => setTextInput10(e.target.value)}
            />
            <button type="submit">Generate</button>
          </form>
        </div>
      )}
      {imageURL10 && (
        <div>
          <h2>Resulting Image:</h2>
          <img
            src={imageURL10}
            alt="Resulting Image"
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
