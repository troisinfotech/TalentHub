# We Are Hiring
Trois Infotech is hiring backend engineers who are passionate about building backend for awesome applications.

## Instructions
**Step 1:** Fork [TalentHub Repository](https://github.com/troisinfotech/TalentHub)
 
 **Step 2:** Add your project as a folder in [Backend folder of this repository](https://github.com/troisinfotech/TalentHub/tree/master/Backend). The folder name should be your git username.
 
 **Step 3:** Submit a pull request 

## Your Task

Create a **Spring Boot** application with below API's using Java or Kotlin
1. Login API which returns access and refresh JWT tokens. All the below API should accept access token and if the access token is not valid then below API's should return 401.
2. GET API will fetch data from a AirTable base named [User Info](https://airtable.com/shr1ODP9VptJACdyH) and create POST/PUT API to insert into respective tables of an in-memory database such as [H2](http://www.h2database.com/html/main.html), [Apache Derby](https://db.apache.org/derby/) or [HSQLDB](http://hsqldb.org/). Use Hibernate to insert data. If you do not have Airtable account then please use this [invite link to sign in](https://airtable.com/invite/r/FxjRTkQG). To know more about fetching data from AirTable base refer to [AirTable Documentation](https://airtable.com/api)
3. GET API which returns user info json. Use JDBC Template for this API. The user json should look like below userid = 1 (DO NOT hardcode the json, use sql select statement with joins to get the resultset. From the resultset form the below JSON)

```
{
  "id": 1,
  "name": "user1",
  "roles": [
    {
      "id": 1,
      "name": "role1",
      "permissions": [
        {
          "id": 1,
          "name": "permission1"
        },
        {
          "id": 2,
          "name": "permission2"
        }
      ]
    },
    {
      "id": 2,
      "name": "role2",
      "permissions": [
        {
          "id": 4,
          "name": "permission4"
        },
        {
          "id": 6,
          "name": "permission6"
        }
      ]
    }
  ],
  "organizations": [
    {
      "id": 1,
      "name": "org1"
    },
    {
      "id": 2,
      "name": "org2"
    }
  ]
}
```
and below for userid = 2
```
{
  "id": 2,
  "name": "user2",
  "roles": [
    {
      "id": 3,
      "name": "role3",
      "permissions": [
        {
          "id": 3,
          "name": "permission3"
        },
        {
          "id": 5,
          "name": "permission5"
        }
      ]
    }
  ],
  "organizations": [
    {
      "id": 3,
      "name": "org3"
    }
  ]
}
```
### Pull Request
Please make sure that you submit pull request with a working code. 
If we accept the code, we will call you for a technical interview.

### Must Have
1. Spring Security
2. Use Hibernate for all insert / update / delete operations
3. Use Spring Data JPA + JDBC Template for all select operations

### Attract our hiring team
1. Use Swagger.
2. Write Unit Test Cases.
3. Write Clean Code.
4. Follow SOLID Principles.
5. Use Design Patterns wherever possible.
6. Proper git commit message.
7. Follow REST Standards.

## Questions
If you have any questions or doubts, feel free to get in touch with us at hr@trois.in
