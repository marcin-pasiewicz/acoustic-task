This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:e2e`

Launches the e2e tests.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn serve`

Launches server to serve production app and request proxy.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Docker commands

You can run app with Docker using commands:  

### `docker build . -t app`

### `docker run -p 9000:9000 app`

## Solution architecture

I have decided to use React, TypeScript, Redux, Rxjs and Styped-components as good starting point for creating modern production grade application. Project was bootstrapped Create React App which I think is high quality setup. My main goal was solving given tasks by developing modular and configurable application.

I strongly belive that fornt-end and back-end shuoud be separate services but for convenience both application are in same repository but it's easy to decouple them by extracting server app from front-end and configure backend url with enviroment variable REACT_APP_API_BASE_URL which defaults to (http://localhost:9000) Also engoutered some problems with CORS so decided to develop proxy API.

Final solution utilizes hooks, comnined with redux produces a bit less boilerplate. Error handling in this application is only basic use case of no data component and Error Boundary as a example whitout any error raporting and logging which should be in production application.

For styling I choosed styled-components as my first choice when it comes to css-in-js, particulary what I like in this solution is styles specificity and a way of providing theme as a object and it's easy to pass styles as properties ie some styles from API.

When it comes to data processing the choice fell on well known and documented Redux and very powerfull Rxjs which may seems to be overkill but it makes working with dynamic data cleaner.

About testing, as you mentions in task I've implemented some unit and e2e tests using [WebdriverIO](https://webdriver.io/). I aware that test do not cover every case but testing is a continuous process and I think it's good enougth for first iteration.

## Thank you for the opportunity and your time!
