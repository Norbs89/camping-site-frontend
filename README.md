# Camping Sites | Find the best camping sites UK

A website built with Next.js.

This repository is for the frontend files. for backend files, [click here!](https://github.com/Norbs89/camping-site-backend)

This website has been built as a portfolio showcase.
The feature rich project is based on a "Next.js" Udemy course created by [Brad Traversy](https://www.traversymedia.com/). Although similar at the core, my finished project deviates from the course material with different features, more flashed out design and a different subject theme.
During the creation of the website, I have learned how to work with [Strapi](https://strapi.io/), a headless CMS database as well as gained knowledge in authenticating users and using [Next.js](https://nextjs.org/) efficiently.
The project is fully responsive, compatible with most browsers and screens.

## As a visitor user, you can:

- Interact with the landing page.
- Check out all camping sites listed on the website.
- Check out more info on any chosen camping site.
- Interact with a location map of an individual camping site (only supported in desktop _1440px_ mode).
- Search for camping sites by name, city or full address.
- Register as a user.
- Check out the "About" page.

## As a registered user, you can:

- Use the same features as a visitor user.
- Log in to your user page.
- Interact with your dashboard.
- Add new camping sites to the collection.
- Edit your submitted camping sites.
- Upload a picture of your submitted camping site.
- Delete your submitted camping sites.
- Log out from your user page.

## Future plans:

- Currently the location map of an individual camping site is only supported in desktop _1440px_ mode. Seamless dynamic resizing is a work in progress so it can be shown on tablets, lower resolution desktops and mobiles too.
- Every new camping site submitted gets uploaded with a default placeholder image in the first instance. The user can edit this picture under "Edit site" but there are plans to integrate an image upload feature during the initial new site upload.
- There are plans to make the logged in experience more personalised (greetings with username, etc).
- Dark mode toggle.

# Version History:

## Version 0.9.1

- "About" page has been populated with data.
- The project's "Readme" has been populated with a description and user stories.

## Version 0.9.0

- Image upload on "Edit Site" page has been further optimised.
- Individual Site page has been styled for mobile & tablet.
- Due to sizing issues the map component is only displayed on 1440px screens.
- Minor changes in code to aid styling.
- All planned styling is now completed.

## Version 0.8.9

- "Log In" page has been styled for mobile.
- "Register" page has been styled for mobile.
- "Site Items" have been further optimised for tablets.

## Version 0.8.8

- "Add Site" page has been styled for mobile.
- "Edit Site" page has been styled for mobile.
- Minor content change to aid styling.

## Version 0.8.7

- "Site Items" have been optimised for mobile. As a result the landing page and "All Sites" page are now fully styled for mobile.
- Footer has been styled for mobile.
- Dashboard has been further optimised for mobile.
- Minor changes in code to aid styling.

## Version 0.8.6

- Login page has been styled for desktop.
- Register page has been styled for desktop.
- Minor changes in code to aid styling.

## Version 0.8.5

- Image upload modal has been styled for desktop & mobile.
- Minor improvements on image upload experience (required & uploading indicator).
- Error handling implemented on image upload.

## Version 0.8.4

- "Add New Site" page has been styled for desktop.
- "Edit Site" page has been styled for desktop.
- Minor changes in code to aid styling.

## Version 0.8.3

- Individual site page has been styled.
- Minor styling changes to dashboard.
- Minor bug fixes.
- Added booking link to individual site page.

## Version 0.8.2

- Footer has been populated with correct data.
- Footer has been styled.
- All page headers have been universally styled.
- Dashboard has been styled for desktop & mobile.
- Minor changes in code to aid styling.

## Version 0.8.1

- Navbar has been styled for desktop & mobile.
- Homepage has been styled for desktop.
- Site list items have been styled for desktop.
- Minor changes in code to aid styling.
- Added & removed some pictures in public folder.

## Version 0.8.0

- Installed [react-geocode](https://www.npmjs.com/package/react-geocode) dependency.
- Installed [react-map-gl](https://visgl.github.io/react-map-gl/) dependency.
- Added a map & pin location to individual site page using [mapbox](https://www.mapbox.com/).
- "Recommended sites" on homepage are now limited to the first 3 entries in the database.
- All planned core functionalities are implemented.

## Version 0.7.4

- "Edit Site" functionality is associated with logged in user.
- "Delete Site" functionality is associated with logged in user.
- Image Upload within "Edit Site" is working under the correct logged in user.

## Version 0.7.3

- "Add Site" functionality is associated with logged in user.

## Version 0.7.2

- "Dashboard" page has been partially populated and styled.
- Fixed a bug where endless requests were sent to database.
- Minor code refactors.

## Version 0.7.1

- Calls to custom endpoint are handled to serve up logged in user profile.

## Version 0.7.0

- User login is now functional.
- User logout is now functional.
- User register is now functional.
- [Cookie](https://www.npmjs.com/package/cookie) dependency installed for authorisation purposes.
- "Dashboard" page created.

## Version 0.6.1

- Login requests to database has been partially handled.
- Incorrect login requests have been handled.
- Authorisation and user permissions have been partially set up.

## Version 0.6.0

- "Login" page has been created and styled.
- "Register" page has been created and styled.
- Login button added to header.
- Placeholder text in Search Bar has been changed.

## Version 0.5.4

- Pagination has been implemented (to show 5 sites per page) and styled.

## Version 0.5.3

- Image upload functionality on "Edit Site" added.
- Modal implemented and styled for image upload.
- Minor bug fix to required data fields on "Add New Site" & "Edit Site".

## Version 0.5.2

- "Edit Site" page has been created and styled.
- "Edit Site" changes are reflected in the database.
- Added booking URL field to "Add New Site" page.

## Version 0.5.1

- Delete site functionality added.
- Minor bug fix to prevent creating a new site without sufficient data entered.
- Minor code refactors.

## Version 0.5.0

- Added feature icons to site listings.
- Installed [Toastify](https://www.npmjs.com/package/react-toastify) dependency.
- "Add New Site" page has been populated and styled.
- Added an "Add New Site" button to header.
- Submitting new site will upload to Strapi database.
- Added a minor validation check on required fields.
- User will be notified in case of faliure to upload to database.

## Version 0.4.2

- Search bar has been created and styled.

## Version 0.4.1

- Search page has been created and styled.
- 'qs' dependency installed.
- Search functionality is built, supporting site name, site city and exact location.

## Version 0.4.0

- Project is connected to it's own [Strapi](https://strapi.io/) database.
- Code linting.
- API route fixes.
- Config file created to integrate [Cloudinary](https://cloudinary.com/) media optimiser.

## Version 0.3.0

- further API routes setup.
- Single camping site page has been populated with draft data.
- Installed "react-icons" dependency.

## Version 0.2.1

- Home page "Recommended Sites" section created and styled.
- Project is currently interacting with a placeholder API.
- API Routes foundations have been setup for the project's own database(coming soon).
- "All Sites" page has been populated and styled.

## Version 0.2.0

- Code linting.
- Home page showcase banner has been created and styled.
- Some images were added to the project for future use.

## Version 0.1.3

- Custom 404 page has been created and styled.

## Version 0.1.2

- Simple navbar/header has been created and styled.
- Simple footer has been created and styled.

## Version 0.1.1

- Base layout has been created and applied to current pages.
- Initial page head and meta tag info has been added.
- Minimal styling applied.
- Readme file has been set up to detail full commit changes and updates.

## Version 0.1.0 (initial commit)

- project has been created and started on routing.
