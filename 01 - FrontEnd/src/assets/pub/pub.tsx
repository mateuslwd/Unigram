import "./pub.css";
import "./answer.css";
import { ReactNode, useState } from "react";

//#region Main Comment

interface CommentProps {
  data: Data;
  answers: ReactNode[];
}

function Comment({ data, answers }: CommentProps) {
  let text;
  let icon;

  switch (data.status) {
    case "going":
      text = "Em discussão";
      icon = (
        <div
          className="pub_head__data__status_color"
          style={{ backgroundColor: "rgb(228, 52, 52)" }}
        ></div>
      );
      break;
    case "solved":
      text = "Resolvido";
      icon = (
        <div
          className="pub_head__data__status_color"
          style={{ backgroundColor: "rgb(102, 219, 92)" }}
        ></div>
      );
      break;
  }

  return (
    <div className="pub">
      <div className="pub__head">
        <div className="pub__head__info">
          <div className="pub__head__info__pic"></div>
          <span className="pub__head__info__name">{data.name}</span>
        </div>
        <div className="pub__head__data">
          <div className="pub__head__data__status">
            <div className="pub__head__data__status">{text}</div>
            {icon}
          </div>
          <span className="pub__head__data__date">{data.date}</span>
        </div>
      </div>
      <div className="pub__body">
        {data.body}
        <hr></hr>
        <div className="pub__body__comments_count">
          {data.count} {data.count == 1 ? "Resposta" : "Respostas"}
        </div>
      </div>
      {answers.map((ans, index) => {
        return <div key={index}>{ans}</div>;
      })}
    </div>
  );
}

//#endregion

//#region Answers

interface PropsAnswer {
  data: Data;
}

function Answer(data: Data) {
  return (
    <div className="ans">
      <div className="ans__head">
        <div className="ans__head__info">
          <div className="ans__head__info__pic"></div>
          <span className="ans__head__info__name">{data.name}</span>
        </div>
        <div className="ans__head__data">
          <span className="ans__head__data__date">{data.date}</span>
        </div>
      </div>
      <div className="ans__body">{data.body}</div>
    </div>
  );
}

//#endregion

interface Data {
  name: string;
  date: string;
  status?: string;
  body: string;
  count?: number;
}

function Post(data: Data) {
  const [showing, setShowing] = useState(
    data.count !== undefined && data.count > 0 ? 1 : 0
  );

  console.log(data.count);

  return (
    <>
      <Comment
        data={data}
        answers={[
          <Answer
            name="Rafael Henrique"
            date="Há 5 minutos."
            body="Ouvi falar pelos grupos que são postadas uma semana antes, mas não tenho certeza, alguem pode confirmar?"
          />,
        ]}
      />
      {data.count !== undefined && data.count > showing ? (
        <>
          <div className="comment_expand">Ver mais...</div>
          <div className="comment_shadow"></div>
        </>
      ) : null}
    </>
  );
}

export default Post;
