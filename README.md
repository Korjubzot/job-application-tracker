# Job Application Tracker

This app allows you add and keep track of jobs you've applied for. You can mark add job postings, salaries, positions, current status (i.e. interviewing, rejected, accepted) and more!

## Background

I built this as a way of relearning Firebase auth, as well as learning how Firebase operates as a backend/database for serverless projects. As of writing it's probably been eight months since I last used Firebase, so learning to reuse it was a little like dusting off an old car. There was some quirks and specifics I'd forgotten about, and things had changed a little since I last used it.

I also got a good chance to touch on React Router again, which always manages to be a little more work than I remember it being.

It's also been handy to keep track of my (many!) job applications. Although sometimes disheartening, it's been somewhat nice to see that list of applications grow longer and longer.

## Technology

Frontend is built with Vite+React. Firebase handles user auth and data storage.

## Installation

1. Clone the repo to your local machine.

```
git clone https://github.com/Korjubzot/job-application-tracker
```

2. Install dependencies

```
npm install
```

3. Start the project

```
npm run dev
```

4. Although you can run this project without it, genuine functionality will require a Firebase account and API keys. Follow the Firebase documentation for setup details. Once you have your keys, place them in a .env file in your root folder, like this.

```
VITE_FIREBASE_API_KEY=YOUR_API_KEY_HERE
VITE_FIREBASE_AUTH_DOMAIN=YOUR_DOMAIN_HERE
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID_HERE
VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET_HERE
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID_HERE
VITE_FIREBASE_APP_ID=YOUR_APP_ID_HERE
VITE_FIREBASE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID_HERE
```

You should now have a fully functional tracker.

## To Do

- [ ] Expand categories/data available for applications
- [ ] Style navbar and signup/signin pages
- [ ] Link to Firebase personal database storage
- [ ] Expand testing suites for various
- [ ] Import/export data in CSV format
