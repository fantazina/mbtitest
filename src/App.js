import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

//////////////////////////////////////////////////////////////
  const setVh = () => {
    const vh = window.innerHeight * 0.01 
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  useEffect(() => {
    setVh()
    
    const onResize = () => {
      setVh()
    }

    window.addEventListener('resize', onResize)

  }, [])
///////////////////////////////////////////////////////////////////

  const [page, setPage] = useState(0)//문제 이동에 따른 상태변수 초기값은 0
  
  const questionList = [ //단순한 mbti 데이터, type은 해당 답변의 type - 나중에 결과값 도출할때 사용
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

    {q : ['테스트가 모두 끝났어! 결과 보러 갈래?'],
     a : [{type : '', text : '결과 보러 가기'}]}
  ]
  
  const [mbtiList, setMbtiList] = useState([ //mbtilist를 상태변수로 잡고 setMbtiList의 name과 type이 일치할 경우 count 될 수 있게 초기값을 0으로 지정
    {name : 'E', count : 0}, {name : 'I', count : 0}, {name : 'N', count : 0}, {name : 'S', count : 0},
    {name : 'F', count : 0}, {name : 'T', count : 0}, {name : 'P', count : 0}, {name : 'J', count : 0},
  ])

  const clickAnswer = (type, index) => { //답이 눌렸을 때 실행되는 함수
    let ls = mbtiList // mbtiList를 let ls로 재선언

    for(let i = 0; i < ls.length; i++) { // let i가 0일 때 ls인 mbtiList의 length보다 작을 때 까지 하나씩 늘려서 답을 도출
      if(ls[i].name === type) { //만약 mbtiList[i].name 즉 for문에 해당되는 i의 name이 questionList의 type과 같다면
         ls[i].count = ls[i].count + 1 //mbtiList의 count에 +1을 해준다.
      }
    }
    
    setMbtiList(ls) // for문으로 도출 된 mbti의 값을 가져온다

    setPage(page + 1) // 0으로 시작하는 page에 +1로 

    if(index + 1 === questionList.length) {
      setMbti()
    }
  }

  const [mbtiContents, setMbtiContents] = useState([])

  const setMbti = () => {
    const mc = [
      {mbti : 'ENFP', contents : ['소통과 공감킹!', '은근 독립적인 성격이에요', '생각이 참 많아요']},
      {mbti : 'INFP', contents : ['MBTI 과몰입러', '미룰 수 있는 건 끝까지 미뤄요', '호불호가 확실해요']},
      {mbti : 'ENTP', contents : ['말을 잘해요', '이상한 말하기 선수!', '혼자서도 잘 해요']},
      {mbti : 'INTP', contents : ['팩트 폭격기!', '감수성이 풍부해요', '주관이 뚜렷해요']},
      {mbti : 'ENTJ', contents : ['직감이 좋아요', '주변 사람을 잘 챙겨요', '쿨해요']},
      {mbti : 'INTJ', contents : ['혼자 있는 걸 좋아해요', '돈 관리를 잘해요', '공감을 잘 해요']},
      {mbti : 'ENFJ', contents : ['분위기 메이커', '리액션이 좋아요', '남에게 싫은 소리를 잘 못해요']},
      {mbti : 'INFJ', contents : ['집순이/집돌이', '사람을 보는 통찰력이 깊어요', '자신만의 철학이 있어요']},
      {mbti : 'ESTP', contents : ['손재주가 좋아요', '리더십킹!', '표현을 아끼지 않아요']},
      {mbti : 'ISTP', contents : ['효율이 짱!', '관찰력이 뛰어나요', '기계를 잘 만지고 좋아해요']},
      {mbti : 'ESFJ', contents : ['남을 잘 챙겨요', '눈치가 빨라요', '새로운 사람과의 술자리를 좋아해요']},
      {mbti : 'ISFJ', contents : ['남 챙기는 걸 좋아해요', '공감을 잘 해요', '내가 싫은 건 남한테도 안 해요']},
      {mbti : 'ESTJ', contents : ['호불호가 명확하고 단호박이에요', '기억력이 좋아요', '완벽주의자 성향']},
      {mbti : 'ISTJ', contents : ['원리원칙적이에요', '즉흥적인 거 싫어해요', '철벽킹!']},
      {mbti : 'ESFP', contents : ['사교성이 좋아요', '자존감이 높아요', '상처 잘 받는데 또 잘 풀려요']},
      {mbti : 'ISFP', contents : ['노는 거 은근 좋아해요', '근데 집에 있는 거 최고!', '누가 뭐라해도 마이웨이~']},
    ]

    const EorI = 
      mbtiList.find(item => item.name === 'E').count > 
      mbtiList.find(item => item.name === 'I').count ? 'E' : 'I'

    const NorS = 
      mbtiList.find(item => item.name === 'N').count >
      mbtiList.find(item => item.name === 'S').count ? 'N' : 'S'

    const ForT = 
      mbtiList.find(item => item.name === 'F').count >
      mbtiList.find(item => item.name === 'T').count ? 'F' : 'T'

    const PorJ = 
      mbtiList.find(item => item.name === 'P').count >
      mbtiList.find(item => item.name === 'J').count ? 'P' : 'J'

    const mbti = EorI + NorS + ForT + PorJ;

    setMbtiContents(mc.find(item => item.mbti === mbti))
  }


  return (
    <div className='mbtiLayout'>

      { page === 0 ?
        <div className='startPageLayout'>
          <div className='startLogo'>
            <div>MBTI</div>
            <div>▼</div>
          </div>

          <div onClick={ () => setPage(1) } className='startBtn'>테스트 시작하기</div>
        </div>
        : page <= questionList.length ? 

        <div className='questionLayout'>
          <div className='mbtiTitle'>
            <div>MBTI 테스트</div>
            <div>{page} / {questionList.length}</div>
          </div>

          {
            questionList.map((item, index) => 
              <div className='questionList' style={{ display : page === index + 1 ? 'flex' : 'none' }} key={ index }>
                <div className='questionItem'>
                  <div className='profileImg'>
                    <div></div>
                    <div></div>
                  </div>

                  <div className='chatList'>
                    { item.q.map((qitem,qindex) => 
                      <div key={ qindex } className='chatBox'>
                        <div>◀</div> <div>{ qitem }</div>
                      </div>
                    )}
                  </div>
                </div>
                <div className='answerItem'>
                  <div className='aChatBox'>
                    <div>+</div> <div>#</div>
                  </div>
                    { 
                      item.a.map((aitem, aindex) => 
                        <div key={ aindex } className='answerBox' onClick={ () => clickAnswer(aitem.type, index) }>
                          { aitem.text }
                        </div>
                    )}  
                </div>
              </div>
            )
          }

        </div>

        :

        <div className='questionLayout'>
          <div className='mbtiTitle'>
            <div>MBTI 테스트</div>
            <div onClick={ () => window.location.reload() }>다시하기</div>
          </div>

            <div className='questionList' style={{ display : 'flex'}}>
              <div className='questionItem'>
                <div className='profileImg'>
                  <div></div>
                  <div></div>
                </div>

                <div className='chatList'>
                  <div className='chatBox'>
                    <div>◀</div> <div>당신의 MBTI는 { mbtiContents.mbti }입니다.</div>
                  </div>

                  <div className='chatBox'>
                    <div>◀</div> <div>{mbtiContents.mbti}는요~ </div>
                  </div>

                  { 
                    mbtiContents.contents.map((item, index) => 
                      <div className='chatBox' key={ index }>
                        <div>◀</div> <div>{ item }</div>
                      </div>
                  )}
              
                </div>
              </div>
            </div>
        </div>
      }

    </div>
  );
}

export default App;
