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

  - Create `.env` file in the `client` directory and save following environment variables

  ```
  REACT_APP_FB_APIKEY=your_firebase_api_key
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

  - Navitagion bar - separte Unauth / Auth / Admin nav bar
  - Router - separate Auth / unAuth path
  - Login Page - connected to the Firebase, BE api to create new member info
  - Review Page - make toggle Create / View mode
  - Meeting page - fetch meeting history from BE
  - Admin page - create meeting info form

- TODO
  - Router - make 404 redirect path
  - Review - show 'generate review summary' button only for the admin user
  - Meeting page - markup dashboard UI
  - Admin page - make toggle Create / View mode

⚙️ Server

- DONE

  |         | GET                                      | POST          | PUT | DELETE |
  | ------- | ---------------------------------------- | ------------- | --- | ------ |
  | Members | getMembersInfo<br>getMemberInfoByUserId  | createMember  |     |        |
  | Reviews | getReviewByUser<br>getReviewsByMeetingId | createReview  |     |        |
  | Meeting | getMeetingInfo<br>getMeetingsInfoByUser  | createMeeting |     |        |

  <br>

- TODO
  - Add PUT / DELETE requests

🛠 Extras

- CI/CD pipeline using Azur
