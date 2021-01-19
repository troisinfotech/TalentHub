# We Are Hiring
Trois Infotech is hiring UI engineers who are passionate about building awesome web applications.

## Instructions
**Step 1:** Fork [TalentHub Repository](https://github.com/troisinfotech/TalentHub)
 
 **Step 2:** Add your project as a folder in [UI folder of this repository](https://github.com/troisinfotech/TalentHub/tree/master/UI) 
 
 **Step 3:** Add your code to the folder as per the task given below.
 
 **Step 4:** Submit a pull request 

## Your Task
Create a responsive web application with below

1. Application should have a login screen.
   1. To begin with, import this [Postman Collection](https://www.getpostman.com/collections/31fa78252ece7e079f94) into your local postman installation. The Postman collection has three API's. 
      1. `Access Token` : This API is used to get access token, refresh token and id token. Access token is valid for one day.
      1. `Profile` : This API is used to get logged in user's profile information.
      1. `Refresh Token` : This APi is used to get new access token after the current on expires.
   1. From the login screen, get email and password and call Access Token API to get the access token. 
   1. Display proper error message if authorization fails.
1. After getting access token, the user should be taken to home screen. Store the logged in user's details in redux store.
1. Web App should have a sidebar created using navigation.
1. Sidebar should have below links
   1. `Home` : 
   1. `Survey` : Perform a CURD and Show Notifications (Success, Failure) based on the response.
   1. `Table` : Create a Table for showing list of items with server side pagination.
   1. `Logout`

### Pull Request
Please make sure that you submit pull request with a working code. 
If we accept the code, we will call you for a technical interview.

### Must Have
1. Responsive Design using Material UI (Preferred) or Bootstrap.
1. Use Redux, Saga / Thunk, Hooks, Functional Components (Preferred) or Class Components.
1. Integrate Logger/Redux Dev Tools For Debugging.

### Attract our hiring team
1. Write Unit Test Cases.
1. Write Clean Code.
1. Follow SOLID Principles.
1. Proper git commit message.
1. Follow REST Standards.

## Questions
If you have any questions or doubts, feel free to get in touch with us at hr@trois.in
