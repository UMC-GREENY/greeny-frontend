import React, { useState, useEffect } from 'react';
import * as mystyles from './Mypage.styles';

function Mypage() {
  const [text, setText] = useState('');
  const [Value, setValue] = useState('');

  const handleClick = (e) => {
    setValue(e);
    alert('비밀번호 확인!');
  };
  const handleChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    console.log('text changed:', text);
  }, [text]);

  return (
    <mystyles.totalcontainer>
      <mystyles.Login>Login</mystyles.Login>
      <hr></hr>
      <mystyles.firstcontainer>
        <mystyles.firstcontainerfont>
          회원 정보 보기/변경
        </mystyles.firstcontainerfont>
      </mystyles.firstcontainer>
      <hr></hr>
      <mystyles.secondcontainer>
        <mystyles.styledInput_pw
          value={text}
          onChange={handleChange}
        ></mystyles.styledInput_pw>

        <mystyles.styledButton onClick={handleClick}>
          보기/변경
        </mystyles.styledButton>
      </mystyles.secondcontainer>
      <mystyles.firstcontainerfont>내가 쓴 글(0)</mystyles.firstcontainerfont>
      <mystyles.thirdcontainer>
        아직 작성한 글이 없습니다.
      </mystyles.thirdcontainer>
    </mystyles.totalcontainer>
  );
}

export default Mypage;
