# Camping Sites | Find the best camping sites UK

A website built with Next.js.
(work in progress)

This repository is for the frontend files. for backend files, [click here!](https://github.com/Norbs89/camping-site-backend)

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
