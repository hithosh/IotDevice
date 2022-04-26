**Overview**
   This Project populates data from the Vstech testAPI. 
   It contains IOT device information like serial number,
   name of the device, connection status, etc.

**Features**
DeviceType - 
 Get all the Deviceinformation from vstech Test API(endpoint vstechtest.azurewebsites.net).
 
 Display all the people's info in the card grid.
List all device - Based device type get all device API(endpoint http://vstechtest.azurewebsites.net) 
Total device- Display total device count.
No of online device - Display no of online device based on connection status.
No of failed device - Display no of failed device based on status.

**Pages and component**
Dashboard page has App bar tittle of the page.
Select menu display all the device type,Display device information in card grid.

**API**
 VSTech- Using this test API data loaded in screen. 
 API Reference  vstechtest.azurewebsites.net
How to run
Run npm install 
Run npm start 
Open http://localhost:3000/ URL. display peoples page

library:
npm install @mui/material @emotion/react @emotion/styled

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
