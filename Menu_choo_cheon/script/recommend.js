var breakfast = ['계란 후라이', '베이컨', '고기', '토스트', '김치볶음밥', '새우볶음밥', '백파더 에그치즈토스트', '두부 스크램블에그', '새우 계란죽', '스팸무스비', '참치마요 삼각김밥', '에그마요 샌드위치', '연두부', '브로콜리스프', '단호박 샐러드', '샌드위치']
var lunch = ['해장국', '순대국', '설렁탕', '갈비탕', '김치찌개', '된장찌개', '순두부찌개', '청국장찌개', '돈까스', '보쌈', '쌈밥', '백반', '조기 구이', '고등어 구이', '칼국수', '비빔냉면', '냉면', '짜장면', '짬뽕', '초밥', '불고기', '김밥', '라면', '떡볶이', '튀김', '순대']
var dinner = ['두부조림', '어묵탕(오뎅탕)', '김치볶음밥', '김치콩나물국', '토마토해물덮밥', '닭볶음탕', '스파게티', '짜장', '돼지고기 김치찌개', '낙지볶음', '시금치 된장국', '감자탕', '참치계란 볶음밥', '소고기 미역국', '오징어 볶음', '동태찌개', '토란국', '콩나물 불고기', '된장찌개', '스팸무스비', '애호박 찌개', '찹스테이크']

function breakfast_rec() {
    randomValue = breakfast[Math.floor(Math.random() * breakfast.length)]
    alert(randomValue)
}

function lunch_rec() {
    randomValue = lunch[Math.floor(Math.random() * lunch.length)]
    alert(randomValue)
}

function dinner_rec() {
    randomValue = dinner[Math.floor(Math.random() * dinner.length)]
    alert(randomValue)
}