# We Are Hiring
Trois Infotech is hiring backend engineers who are passionate about building awesome backend applications.

## Instructions
**Step 1:** Fork [TalentHub Repository](https://github.com/troisinfotech/TalentHub)
 
 **Step 2:** Add your project as a folder in [Backend folder of this repository](https://github.com/troisinfotech/TalentHub/tree/master/Backend). The folder name should be your git username.
 
 **Step 3:** Submit a pull request 

## Your Task

Create a **Spring Boot** application with the below APIs using Java or Kotlin
1. Login API which returns access and refresh JWT tokens. All the below APIs should accept access token as Authorization header with Bearer type and if the access token is not valid then the below APIs should return 401.
<br/><br/>
1. GET API will fetch data from an **AirTable** base named [User Info](https://airtable.com/shr1ODP9VptJACdyH) and it will return a JSON Array with all rows. The User Info base has 4 tables namely user, role, permission and organization. GET API will identify which Airtable data to be fecthed based on path or query param. If you do not have an Airtable account then please use this [invite link to sign in](https://airtable.com/invite/r/FxjRTkQG). To know more about fetching data from AirTable base refer to [AirTable Documentation](https://airtable.com/api)
<br/><br/>
1. POST API to insert the data into respective tables of an in-memory database such as [H2](http://www.h2database.com/html/main.html), [Apache Derby](https://db.apache.org/derby/) or [HSQLDB](http://hsqldb.org/). Use **Spring Data JPA with Hibernate or Spring Data JDBC** to insert data. The request body should accept which table the data need to be inserted and the JSON Array we got from previous GET API. 
<br/><br/>
1. GET API which returns user info JSON. Use **JDBC Template with Spring JDBC** for this API. The user JSON should look like below for userid = 1. **DO NOT hardcode the below JSON, using JDBC template execute SQL select statement with joins / subqueries to get the resultset. From the resultset form the below JSON**.

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
- [x] Spring Security.
- [x] Use Spring Data JPA with Hibernate or Spring Data JDBC for all insert / update / delete operations.
- [x] Use Spring JDBC + JDBC Template to retrieve data. To retrieve data from the in-memory database, writing SQL query with joins / subqueries is a must.

### Attract our hiring team
- [ ] Use Swagger.
- [ ] Write Unit Test Cases.
- [ ] Write Clean Code.
- [ ] Follow SOLID Principles.
- [ ] Use Design Patterns wherever possible.
- [ ] Proper git commit message.
- [ ] Follow REST Standards.

## Questions
If you have any questions or doubts, feel free to get in touch with us at hr@trois.in
