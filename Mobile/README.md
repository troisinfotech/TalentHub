# We Are Hiring
Trois Infotech is hiring mobile engineers who are passionate about building awesome mobile applications.

## Instructions
**Step 1:** Fork [TalentHub Repository](https://github.com/troisinfotech/TalentHub)
 
 **Step 2:** Add your project as a folder in [Mobile folder of this repository](https://github.com/troisinfotech/TalentHub/tree/master/Mobile) 
 
 **Step 3:** Add your code to the folder as per the task given below.
 
 **Step 4:** Submit a pull request 

## Your Task

Create a React Native mobile application with below 

1. App should have a login screen.
   1. To begin with, import this [Postman Collection](https://www.getpostman.com/collections/31fa78252ece7e079f94) into your local postman installation. If you are new to Postman and refer [this](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/) to import collection from link. The Postman collection has three API's. 
      1. `Access Token` : This API is used to get access token, refresh token and id token. Access token is valid for one day.
      1. `Profile` : This API is used to get logged in user's profile information.
      1. `Refresh Token` : This APi is used to get new access token after the current on expires.
   1. From the login screen, get email and password and call Access Token API to get the access token. 
   1. Display proper error message if authorization fails.
1. After getting access token, the user should be taken to home screen.
   1. Home screen should show user profile information with a welcome message. Home screen should show *profile picture*, *nickname*, *email*, *a tick mark near to email if email is verified*.
1. App should have a sidebar created using drawer navigation.
1. Sidebar should have below links
   1. `Home` : The user should be able to remain in their home page unless they logout or until the access token is expired.
   1. `Survey` : This screen should have a form to get *Name*, *Age*, *DOB* and *Mobile Number*. When submit button is pressed the user inputs should be validated and saved to local storage or firebase. 
   1. `Survey History` : This screen should fetch the saved survey details from local storage a show it in a card view. There should be one card per survey. If the user does 10 survey from the Survey sidebar, then survey history screen should show ten cards and each card will have label and data for *Name*, *Age*, *DOB*, *Mobile Number*.
   1. `Posts` : Create a scrollable flat list with one card per object of this [JSON source](https://mockend.com/troisinfotech/TalentHub/posts). Make a GET API Call to the JSON source and draw one card per object from the JSON Array.
   1. `Logout`
   
### Pull Request
Please make sure that you submit pull request with a working code. 
If we accept the code, we will call you for a technical interview.

### Must Have
1. Knowledge of class components and functional components.
1. Access Token API should be called only once. If access token is expired, then use Refresh Token API to get new access token. **DONOT call Access Token API to get new access token after the current one expires**.
1. Integrate React Native Debugger for debugging.

### Attract our hiring team
1. Use Redux, Saga / Thunk.
1. NativeBase or ReactNative UI Kitten or ReactNative Elements.
1. AsyncStorage, Firebase.
1. Form management using Formik or Redux Forms.
1. Write Clean Code.
1. Proper git commit message.

## Questions
If you have any questions or doubts, feel free to get in touch with us at hr@trois.in
