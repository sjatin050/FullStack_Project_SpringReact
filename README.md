# Getting Started with Full Stack Application

This project repository only contains the react code , the backend code is here [Backend](https://github.com/sjatin050/FullStack_SpringReact_Backend/tree/main).

## About the Project 

This is a Full Stack Project , Used Spring Boot for Backend and React.js for Frontend , and used 2 types of Databases to display the data.
</br>
--> Used MySql Database for storing Details of client which is Accessing the site . [ Used JWT authentication ]
</br>
--> Used MongoDb for storing details of customers which is accessed by Client . 
</br>
--> A user has Either of the 2 access i.e. ADMIN or USER .
</br>
  --> A ADMIN can register new user and can edit details of customer whereas a USER can only see details of Customer.

## Demonstrating The Site flow

### I. When a ADMIN logs into the Site 

#### 1. Enter the Details of the ADMIN
![Login page](https://github.com/sjatin050/FullStack_Project_SpringReact/blob/master/public/screenshots/admin/login%20page.png)
</br>

#### 2. After Logging in you are directed to Search Panel 
if Credentials are wrong then Autentication Failed Error is Displayed
![Search Panel](https://github.com/sjatin050/FullStack_Project_SpringReact/blob/master/public/screenshots/admin/search%20panel.png)
In this pannel there are 4 choices , select one of them and also input the corresponding ID into it.
</br>

#### 3. Result Page is displayed after Search Panel
Corresponding to the details in Search Panel , Customers Details are displayed.
![Results Page](https://github.com/sjatin050/FullStack_Project_SpringReact/blob/master/public/screenshots/admin/all%20customers%20.png)
There is "Click here" button , choose the customer you want to see the details.
</br>

#### 4. Customer Details page is displayed after Results Page
All details of the customer are diplayed on this page .
![Customer Details page](https://github.com/sjatin050/FullStack_Project_SpringReact/blob/master/public/screenshots/admin/customer%20details.png)
As the User is ADMIN , then he can edit the details , There is a "Update Email" button .
</br>

#### 5. Update Email page is displayed if UPDATE EMAIL button is pressed
After hitting the "update email" button on Customer details page , Update page is Opened.
![Update page](https://github.com/sjatin050/FullStack_Project_SpringReact/blob/master/public/screenshots/admin/update%20page.png)
After Updating the email , hit the "SAVE" button , 
</br>

#### 6. After Hitting SAVE button , Results Page is displayed 
When you hit "Save" button , result page is displayed with only that customer , with its updated Email Id .
![After Update Page](https://github.com/sjatin050/FullStack_Project_SpringReact/blob/master/public/screenshots/admin/after%20update.png)
To register new Member Hit the Register Button on top right Corner.
</br>

#### 7. ADMIN can register a new member 
Admin has the priviledge to register new member , and can also provide him Role of Either ADMIN or USER.
![Register Page](https://github.com/sjatin050/FullStack_Project_SpringReact/blob/master/public/screenshots/admin/register%20page.png)
</br>
</br>

### II. When a USER logs into the Site 

#### 1. Enter the Details of the USER
if Credentials are wrong then Autentication Failed Error is Displayed
![Login page](https://github.com/sjatin050/FullStack_Project_SpringReact/blob/master/public/screenshots/user/login%20page.png)
If Credentials are correct , it is directed to Search Panel
</br>

#### 2. After Logging in you are directed to Search Panel 
![Customer Search page](https://github.com/sjatin050/FullStack_Project_SpringReact/blob/master/public/screenshots/user/search%20panel.png)

In this pannel there are 4 choices , select one of them and also input the corresponding ID into it.
</br>

#### 3. Result Page is displayed after Search Panel
Corresponding to the details in Search Panel , Customers Details are displayed.
![Customer results page](https://github.com/sjatin050/FullStack_Project_SpringReact/blob/master/public/screenshots/user/All%20customers.png)
There is "Click here" button , choose the customer you want to see the details.
</br>

#### 4. Customer Details page is displayed after Results Page
All details of the customer are diplayed on this page .
![customer details display page](https://github.com/sjatin050/FullStack_Project_SpringReact/blob/master/public/screenshots/user/customer%20details.png)

If want to search Other customer , hit "Home" on top and if the work is Done , hit "LogOut" on Top right.

</br>

### III. Changing Client password by self

#### 1. Change password page
after hitting the "change_password" on the upper right hand side , we are redirected to change password page
![change password page](https://github.com/sjatin050/FullStack_Project_SpringReact/blob/master/public/screenshots/password/password%20change%20page.png)

#### 2. Change password confirmation
after hitting the "save" button , we are redirected to search panel.
![change password confirmation](https://github.com/sjatin050/FullStack_Project_SpringReact/blob/master/public/screenshots/password/change%20confirmation.png)

</br>
</br>

## To start the project in Local server , Follow the Below Commands

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
