# We Are Hiring
Trois Infotech is hiring UI engineers who are passionate about building awesome web applications.

## Instructions
**Step 1:** Fork [TalentHub Repository](https://github.com/troisinfotech/TalentHub)
 
 **Step 2:** Add your project as a folder in [UI folder of this repository](https://github.com/troisinfotech/TalentHub/tree/master/UI). The folder name should be your git username.
 
 **Step 3:** Submit a pull request 

## Your Task
Create a responsive **React** web application with below

1. The app should have a login screen.
   1. To begin with, import this [Postman Collection Link](https://www.getpostman.com/collections/31fa78252ece7e079f94) into your local postman installation. If you are new to Postman, refer to [this](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/) to import the collection from a link. The Postman collection has three APIs. 
      <br/><br/>
      1. **`Access Token`**: This API is used to get an access token, a refresh token, and an id token. The access token is valid for one day.
      <br/><br/>
      1. **`Profile`**: This API is used to get logged-in user's profile information.
      <br/><br/>
      1. **`Refresh Token`**: This API is used to get a new access token after the current one expires.
      <br/><br/>
   1. From the login screen, get an email and password from the user and call Access Token API to get the access token. Use the same username and password provided in the Access Token API's request body.
   1. Display proper error message if authorization fails.
1. After getting access token, the user should be taken to home screen. Store the logged in user's details in redux store.
1. Web App should have a sidebar created using navigation.
1. Sidebar should have below links
   1. `Home` : 
   1. `Survey` : Perform a CRUD and Show Notifications (Success, Failure) based on the response.
   1. `Table` : Create a Table for showing list of items with server side pagination. Make a GET API call to this endpoint which accepts limit and offset query params.
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
1. Proper git commit message.

## Questions
If you have any questions or doubts, feel free to get in touch with us at hr@trois.in
