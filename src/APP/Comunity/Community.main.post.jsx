import React from "react";
import { useLocation } from "react-router-dom";
import * as itemS from "./Styled/Community.main.post.styles";

function Post() {
  const location = useLocation();
  const type = location.state?.type;

  return (
    <itemS.SignupWrapper>
			<itemS.SignupContentWrapper>
				<itemS.JoinHeading>Community</itemS.JoinHeading>
				{type === "post" && 
					<itemS.Label>Post Page</itemS.Label>
				}
				{type === "review" && 
					<itemS.Label>Review Page</itemS.Label>
				}
				{type === "community" && 
					<itemS.Label>Community Page</itemS.Label>
				}
      </itemS.SignupContentWrapper>
    </itemS.SignupWrapper>
  );
}

export default Post;