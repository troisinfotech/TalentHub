# We Are Hiring
Trois Infotech is hiring mobile engineers who are passionate about building awesome mobile applications.

## Instructions
**Step 1:** Fork [TalentHub Repository](https://github.com/troisinfotech/TalentHub)
 
 **Step 2:** Add your project as a folder in [Mobile folder of this repository](https://github.com/troisinfotech/TalentHub/tree/master/Mobile) 
 
 **Step 3:** Add your code to the folder as per the task given below.
 
 **Step 4:** Submit a pull request 

## Your Task

Create a React Native mobile application with below 

1. The app should have a login screen.
   1. To begin with, import this [Postman Collection Link](https://www.getpostman.com/collections/31fa78252ece7e079f94) into your local postman installation. If you are new to Postman, refer to [this](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/) to import the collection from a link. The Postman collection has three APIs. 
      1. `Access Token`: This API is used to get an access token, a refresh token, and an id token. The access token is valid for one day.
      1. `Profile`: This API is used to get logged-in user's profile information.
      1. `Refresh Token`: This API is used to get a new access token after the current one expires.
   1. From the login screen, get an email and password from the user and call Access Token API to get the access token. 
   1. Display proper error message if authorization fails.
1. After getting the access token, the user should be taken to the home screen.
1. The App should have a sidebar created using drawer navigation.
1. The sidebar should have below links
   1. `Home`: Home screen should show user profile information with a welcome message by calling Profile API. The home screen should show the user's *profile picture*, *nickname*, *email*, *a tick mark near to email if the email is verified*. From the home screen, if the user does back navigation, the app should remain on the home page. If the back button is pressed twice app should exit.
   1. `Survey`: This screen should have a form to get *Name*, *Age*, *DOB*, and *Mobile Number*. When the submit button is pressed the user inputs should be validated and saved to local storage or firebase. From the survey screen, if the user does back navigation, the app should remain on the home page. If the back button is pressed twice app should exit.
   1. `Survey History`: This screen should fetch the saved survey details from local storage a show them in a card view. There should be one card per survey. If the user does 10 surveys from the Survey sidebar, then the survey history screen should show 10 cards and each card will have a label and data for *Name*, *Age*, *DOB*, *Mobile Number*. From the survey history screen, if the user does back navigation, the app should remain on the home page. If the back button is pressed twice app should exit.
   1. `Posts`: Create a scrollable flat list with one card per object of this [JSON source](https://mockend.com/troisinfotech/TalentHub/posts). Make a GET API Call to the JSON source and draw one card per object from the JSON Array. From the posts screen, if the user does back navigation, the app should remain on the home page. If the back button is pressed twice app should exit.
   1. `Logout`: Clicking on this link should take the user to the login screen.
   
### Pull Request
Please make sure that you submit a pull request with a working code. 
If we accept the code, we will call you for a technical interview.

### Must Have
1. Knowledge of class components and functional components.
1. Access Token API should be called only once. If the access token is expired, then use Refresh Token API to get a new access token. **DO NOT call Access Token API to get a new access token after the current one expires**.
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
