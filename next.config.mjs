/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    /*
      These are meant to be public, so we commit them for nextjs to use in
      the build for pre-rendered pages.
      https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
    */
    FIREBASE_API_KEY: "AIzaSyAyVdZmkQwe0-lSEc_OjZI_VIb-xXOsbkY",
    FIREBASE_AUTH_DOMAIN: "aceface-49d4b.firebaseapp.com",
    FIREBASE_PROJECT_ID: "aceface-49d4b",
    FIREBASE_STORAGE_BUCKET: "aceface-49d4b.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "509486152466",
    FIREBASE_APP_ID: "1:509486152466:web:d59b1229afa09f3aa6d1cb",
  },
};

export default nextConfig;
