import { useNavigate } from "react-router-dom";
import * as cardS from "./Styled/LifeTip.main.card.styles";
function LifeTipCard({ title, ti, recy, type, num, content1, content2, img }) {
  const navigate = useNavigate();
  return (
    <cardS.Div>
      <cardS.Img>
        <img src={img} />
      </cardS.Img>
      <cardS.Title>{title}</cardS.Title>
      <cardS.Div2>
        <h5>2023.07.10</h5>
        <button
          onClick={() =>
            navigate("/lifeTip_de", {
              state: {
                title: title,
                ti: ti,
                recy: recy,
                type: type,
                num: num,
                content1: content1,
                content2: content2,
                img: img,
              },
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
