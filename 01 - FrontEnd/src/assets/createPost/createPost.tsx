import { useState } from "react";
import "./createPost.css";
import "./postCreateActions.css";

import { HiUpload } from "react-icons/hi";

interface Props {
  setState: (state: boolean) => void;
  value: string;
  setValue: (value: string) => void;
}

function PostCreateActions({ setState, value, setValue }: Props) {
  const cancelFunction = () => {
    setState(false);
  };
  const uploadFunction = () => {
    console.log("Enviei Muahahaha");
  };

  const postFunction = async () => {
    try {
      const response = await fetch("http://localhost:3000/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: "mateus",
          status: "ongoing",
          body: value,
          answers: [],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Dados enviados com sucesso");
      } else {
        console.error("Error ao enviar os dados: ", response.status);
      }
    } catch (error) {
      console.error(error);
    }

    cancelFunction();
    setValue("");
  };

  return (
    <div className="postCreateAction">
      <div
        onClick={uploadFunction}
        className="postCreateAction__action postCreateAction__left"
      >
        <HiUpload />
      </div>
      <div className="postCreateAction__holder">
        <div
          onClick={cancelFunction}
          className="postCreateAction__action postCreateAction__right"
        >
          Cancelar
        </div>
        <div
          onClickCapture={postFunction}
          className="postCreateAction__action postCreateAction__right"
        >
          Publicar
        </div>
      </div>
    </div>
  );
}

function PostCreate() {
  const [state, setState] = useState(false);
  const [value, setValue] = useState("");

  const handleClick = () => {
    setState(true);
  };

  //TIRAR ESTE ANY DAQUI
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <>
      <textarea
        className={!state ? "postCreate" : "postCreate postCreate--opened"}
        placeholder="Eu preciso de ajuda em..."
        onClick={handleClick}
        onChange={handleChange}
        value={value}
      ></textarea>
      {state ? (
        <PostCreateActions
          setValue={setValue}
          setState={setState}
          value={value}
        />
      ) : null}
    </>
  );
}

export default PostCreate;
