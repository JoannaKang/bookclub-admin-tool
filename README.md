# 🚀 How to start project

- In `src/client`: Launch server in 3000

```
npm start
```

- In `src/server`: Launch server in 8080

  - Install mysql server in local machine
  - Create `.env` file in the root directory and save following environment variables

  ```
  SKIP_PREFLIGHT_CHECK=true
  DISABLE_ESLINT_PLUGIN=true
  DB_HOST=your_localhost_number
  DB_USER=your_database_username
  DB_DATABASE=your_database_name
  DB_PASSWORD=your_database_password
  ```

  - Create mysql database: Use `npm run db:pre-migrate` command with mysql password

  ```
  // If mysql password is "password"
  PASSWORD=password npm run db:pre-migrate
  ```

  - Create tables

  ```
    npm run dev
  ```

# Project Overview

🏆 [MVP](https://docs.google.com/spreadsheets/d/1_-p8eZ5WpY_ZTfHuFDTDNh8PJVc6dZndySkQXgKQCU0/edit#gid=0)<br>
✅ [UX flow](https://docs.google.com/presentation/d/1YPdFDQqFMrlCgAQ1DJwjp3PQjznhcFYG4QlXF64rDu4/edit?usp=sharing)

# Project progression

🖥 Client

- DONE

  - Login Page - connected to the Firebase, BE api to create new member info
  - Review Page - connected to the BE api to create book review

- TODO
  - Navitagion bar - make user can navigate between the meeting & book review page
  - Router - separate Auth / unAuth path
  - Admin page - create meeting info form
  - Meeting page - fetch meeting history from BE
  - Review page - make user can toggle review history <-> create history view

⚙️ Server

- DONE

  |         | GET                                      | POST          | PUT | DELETE |
  | ------- | ---------------------------------------- | ------------- | --- | ------ |
  | Members | getMembersInfo<br>getMembersInfoByUserId | createMember  |     |        |
  | Reviews | getReviewByUser                          | createReview  |     |        |
  | Meeting | getMeetingInfo<br>getMeetingsInfoByUser  | createMeeting |     |        |

  <br>

- TODO
  - Add GET request for the meeting
  - Add PUT / DELETE request for the review items
