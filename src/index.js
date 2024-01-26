// 추가 버튼 클릭 시 실행하는 함수
const onClickAdd = () => {
  // 텍스트 박스의 요소를 얻는다.
  const txtEl = document.getElementById('add-txt');

  // 텍스트 박스의 값을 얻는다.
  const txt = txtEl.value;

  // 텍스트 박스를 초기화(공백)
  txtEl.value = '';

  // li 태그 생성
  const li = document.createElement('li');

  // div 태그 생성
  const div = document.createElement('div');

  // p 태그 생성(텍스트 박스의 문자 설정)
  const p = document.createElement('p');
  p.textContent = txt;

  // buuton 태그 생성(라벨: [삭제])
  const btn = document.createElement('button');
  btn.textContent = 'Del';

  // 버튼 클릭 시 행을 삭제하는 처리
  btn.addEventListener('click', () => {
    // 삭제 대상 행(li)을 얻는다.
    // closet는 부모 요소와 일치하는 문자열을 찾는 메서드
    const delTarget = btn.closest('li');

    // ul 태그 아래에서 앞서 특정한 행 삭제
    document.getElementById('memo-list').removeChild(delTarget);
  });

  // div 태그 아래에 p 태그와 button 태그 설정
  div.appendChild(p);
  div.appendChild(btn);

  // li 태그 아래에 div 태그 설정
  li.appendChild(div);

  // 메모 목록 리스트에 li 태그 설정
  document.getElementById('memo-list').appendChild(li);
};

// add 버튼 클릭 시 onCLickAdd 함수를 실행하도록 등록
document
  .getElementById('add-btn')
  .addEventListener('click', () => onClickAdd());
