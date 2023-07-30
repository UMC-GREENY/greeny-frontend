import { useNavigate } from "react-router-dom";
import * as cardS from "./Styled/LifeTip.main.card.styles";
function LifeTipCard({ title, content }) {
  const navigate = useNavigate();
  console.log(title);
  console.log(content);
  return (
    <cardS.Div>
      <cardS.Img src="/lifetip/ex.png" />
      <cardS.Title>{title}</cardS.Title>
      <cardS.Div2>
        <h5>2023.07.10</h5>
        <button
          onClick={() =>
            navigate("/lifeTip_de", {
              state: { title: title, content: content },
            })
          }
        >
          <h3>더 알아보기</h3>
          <h4>{">"}</h4>
        </button>
      </cardS.Div2>
    </cardS.Div>
  );
}
export default LifeTipCard;
