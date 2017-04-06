# Welcome to Foodprint!

Foodprint is a smart food journal that:
 * allows users take photos of their meals
 * helps users identify food
 * provides nutrition feedback
 * compiles nutrition statistics over time

Want to know how many calories you had last November 24? Foodprint knows!
How much protein did you have last Wednesday? Foodprint has your answer!

## How to use

For best results, checkout the [React Native getting started page](https://facebook.github.io/react-native/docs/getting-started.html).

Foodprint was written in React Native, but with Android devices in mind. To run it on your computer, you'll need an emulator; we recommend [Genymotion](https://www.genymotion.com/).

For installing packages, yarn works great!

```sh
npm install
cd foodprintReactNative
npm install
npm start
```
alternatively, if react-native is installed globally on your computer, you can use

```sh
react-native run-android
```

instead of

```sh
npm start
```

In order to run properly, foodprint requires access to  [Clarifai](https://developer.clarifai.com/), [Amazon S3](https://aws.amazon.com/s3/), and [Nutritionix](https://developer.nutritionix.com/). By default, the credentials for these APIs are stored in a file called secrets.js

```sh
cd foodprintReactNative
touch secrets.js
```

Here's a example of how you might populate your secrets file:

```js
export const clarifaiKeys = {
  CLIENT_ID: {YOUR_ID},
  CLIENT_SECRET: {YOUR_SECRET}
}

export const AWSOptions = {
  bucket: {YOUR_BUCKET},
  region: {YOUR_REGION},
  accessKey: {YOUR_ACCESS_KEY},
  secretKey: {YOUR_SECRET_KEY},
  successActionStatus: 201
  }

export const nutritionixConfig = {
  headers: {
    'X-app-id': {YOUR_X_APP_ID},
    'X-app-key': {YOUR_X_APP_KEY},
    'Content-Type': 'application/json'
  }
};

export const nutritionixURL = 'https://trackapi.nutritionix.com/v2/natural/nutrients';


```
## Check out our APK!

https://www.dropbox.com/s/648uh6d71bxk1mg/foodprint.apk?dl=0
(currently available for Android)

## Thanks for reading!

Arnoldo, Brian, John, and Zo
