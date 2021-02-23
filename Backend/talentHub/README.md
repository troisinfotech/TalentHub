#Talenthub Backend Machine task

###First you will need the following basic pieces of information:

 * ClientId: nliCaBuoAAurkdwnWeD9oQGQrfa81tj4
 * ClientSecret:kKuOiuszjs2fOjGGH0RBskBAYA5n1j0rgxOcUdsUPex97DBISvDzCxu4NVClVnWu
 * UserName and Password: challenge@trois.in and Challenge123

<br/><br/>
1. Login API which returns access token. To get the access token you can use either the curl command or  Postman. To get the token using curl<br/> 
`$ curl {ClientId}:{ClientSecret}@localhost:8080/oauth/token -d grant_type=password -d username={UserName} -d password={Password}`<br/>
You'll receive a response similar to below
`{
   "access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTQwMDQ1NzUsInVzZXJfbmFtZSI6ImNoYWxsZW5nZUB0cm9pcy5pbiIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwianRpIjoiODFjZGYyMWItMDRjYS00NjA2LTk4NzQtOWViOTA5OTU3MzcxIiwiY2xpZW50X2lkIjoibmxpQ2FCdW9BQXVya2R3bldlRDlvUUdRcmZhODF0ajQiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.GJj-OpNGeXxoIYw4-gKkSb_lqWW8Qv6K6ealOt4Xbzo",
   "token_type":"bearer",
   "expires_in":599,
   "scope":"read write",
   "jti":"81cdf21b-04ca-4606-9874-9eb909957371"
}`.
<br/><br/>
1. GET API which will fetch data from an **AirTable** base named [User Info] and it will return with all rows of data as a JSON Array. The User Info base has 4 tables namely user, role, permission and organization. 
<br/><br/>
1. POST API to insert the data into respective tables of an in-memory database using **Spring Data JPA with Hibernate** to insert data. The request body accepts which table the data need to be inserted and the JSON Array we got from previous GET API.
<br/><br/>
1. GET API which returns user info JSON using **JDBC Template with Spring JDBC** .
<br/><br/>
