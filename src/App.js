import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const setVh = () => {
    const vh = window.innerHeight * 0.01 
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  useEffect(() => {
    setVh()

    function onResize() {
      setVh()
    }

    window.addEventListener('resize', onResize)

  }, [])

  const [page, setPage] = useState(0)
  
  const questionList = [
    {q : ['갑자기 일이 생겨서', '오늘 못 만날 것 같아'],
     a : [{type : 'E', text : '어쩔 수 없지 뭐ㅠㅠ(누구랑 만나서 놀까?!)'},
          {type : 'I', text : '어쩔 수 없지 뭐ㅠㅠ(아싸!! 빨리 침대로~)'}]},
          
    {q : ['너 이번 주에 엄청 바빴다며', '주말엔 뭐 할거야?'],
     a : [{type : 'E', text : '바빠서 못 놀았어ㅠㅠ 나가서 재미있게 놀려구!!'},
          {type : 'I', text : '너무 힘들었어ㅠㅠ 집에서 쉬려구...'}]},

    {q : ['자주 가는 카페 사장님이 아는 척을 했다.'],
     a : [{type : 'E', text : '이미 TMI파티에 사장님이랑 짱친 먹음'},
          {type : 'I', text : '(이제 그만 와야겠다..)'}]},

    {q : ['넌 노래 들을 때 뭘 중요하게 생각해?'],
     a : [{type : 'N', text : '가사'},
          {type : 'S', text : '멜로디'}]},
          
    {q : ['사과 하면 뭐가 떠올라?'],
     a : [{type : 'N', text : '아이폰. 백설공주. 원숭이.'},
          {type : 'S', text : '빨갛다. 맛있다. 동그랗다.'}]},

    {q : ['오늘 점심 뭐 먹을래?'],
     a : [{type : 'N', text : '파스타 먹을까? 파스타 좀 느끼하니까 저녁엔 칼칼하게 김치찌개 먹어야지!'},
          {type : 'S', text : '파스타 먹을까?'}]},

    {q : ['나 요즘 너무 우울해서','여행 가려고'],
     a : [{type : 'F', text : 'ㅠㅠ무슨 일 있어?'},
          {type : 'T', text : '어디로 가려고?'}]},
          
    {q : ['슬픔을 나누면 어떻게 될까?'],
     a : [{type : 'F', text : '슬픔이 절반으로 나눠지지!'},
          {type : 'T', text : '슬픈 사람이 둘이 되겠지.'}]},

    {q : ['나 시험에서 떨어졌어...'],
     a : [{type : 'F', text : '많이 속상하겠다...ㅠㅠ'},
          {type : 'T', text : '무슨 시험 봤는데? 몇 점인데?'}]},

    {q : ['안 읽은 메시지 몇 개야?'],
     a : [{type : 'P', text : '10개 이상'},
          {type : 'J', text : '0개 ~ 한 자리수'}]},
          
    {q : ['여행 일정 짰어?'],
     a : [{type : 'P', text : 'ㅇㅇ 국밥먹고 바다가서 놀다가 카페가서 커피 마시자'},
          {type : 'J', text : '7시 30분 만남, 8시 할매국밥, 9시 유리박물관, 11시 유리해수욕장, 12시 유리카페...'}]},

    {q : ['2주 뒤에 시험이다!'],
     a : [{type : 'P', text : '시험 2주나 남았네! 놀아야지~'},
          {type : 'J', text : '시험이 2주 밖에 안 남았네. 공부 계획 짜야지'}]},

    {q : ['테스트가 모두 끝났어. 결과 보러 갈래?'],
     a : [{type : '', text : '결과 보러 가기'}]}
  ]
  
  const [mbtiList, setMbtiList] = useState([
    {name : 'E', count : 0}, {name : 'I', count : 0}, {name : 'N', count : 0}, {name : 'S', count : 0},
    {name : 'F', count : 0}, {name : 'T', count : 0}, {name : 'P', count : 0}, {name : 'J', count : 0},
  ])

  return (
    <div className='mbtiLayout'>
      { page === 0 ?
        <div className='startPageLayout'>
          <div className='startLogo'>
            <div>MBTI</div>
            <div>▼</div>
          </div>
          <div onClick={ () => setPage(1) } className='startBtn'>
            테스트 시작하기
          </div>
        </div>
        : page <= questionList.length ? 
        <div>
          테스트 페이지
        </div>
        : 
        <div>
          결과 페이지
        </div>
      }
    </div>
  );
}

export default App;
