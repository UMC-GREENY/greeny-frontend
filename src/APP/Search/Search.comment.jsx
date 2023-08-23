import { useNavigate } from "react-router";

function SearchComment(props) {
  const navigate = useNavigate();

  if (!props.data) {
    return null; // 데이터가 없을 때에는 아무것도 렌더링하지 않음
  }
  const handleCardClick = () => {
    // 상세 페이지로 이동
    navigate(`/community/${props.data.id}`);
  };
  return <></>;
}
export default SearchComment;
