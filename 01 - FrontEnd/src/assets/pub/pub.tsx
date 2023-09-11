import "./pub.css";

interface Props {
  data: {
    name: string;
    date: string;
    status: string;
  };
}

function Post({ data }: Props) {
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
        Gostaria de saber o horário da prova, vai ser postada no quadro de
        avisos?
        <div className="pub__body__comments">4 Respostas</div>
      </div>
    </div>
  );
}

export default Post;
