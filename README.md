## Jeff ( backend )

[![Build Status](https://travis-ci.com/jeffchoi72/jeff-backend.svg?token=o4yz3crNnp2xHUSU9Vwq&branch=master)](https://travis-ci.com/jeffchoi72/jeff-backend)

직장인들의 업무를 뿌듯하게 만들어주는 어플리케이션 제프



## Project Stack

### Server

Jeff-backend에서 사용하고 있는 기술 스택

- Node.js
- Koa
- Typeorm
- Typescript
- Joi
- Jwt
- Mocha
- Chai



## Jeff-Backend CI/CD Structure

<img width="1057" alt="2019-01-03 10 47 17" src="https://user-images.githubusercontent.com/26565116/50640903-a134ea00-0fa9-11e9-9faf-1a5155515958.png">



## API Document

| 메소드 | 주소                                | 의미                                  |
| ------ | ----------------------------------- | ------------------------------------- |
| GET    | /api/work/history/month/:month      | 한달간 기록한 업무시간을 조회하는 API |
| POST   | /api/work/history                   | 업무시간을 기록하는 API               |
| GET    | /api/work/history/month/:month/:day | 해당 날짜 업무시간 상세조회 API       |

