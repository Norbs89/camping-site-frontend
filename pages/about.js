import Layout from "@/components/Layout";

const AboutPage = () => {
  return (
    <Layout title="About the website | Find the best camping sites UK">
      <div className="about-container">
        <h1 className="page-main-head">About</h1>
        <h3>
          Camping Sites | Find the best camping sites UK
          <p>A website built with Next.js.</p>
        </h3>
        <p>
          This website has been built as a portfolio showcase. The feature rich
          project is based on a "Next.js" Udemy course created by{" "}
          <a
            href="https://www.traversymedia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brad Traversy.
          </a>{" "}
          Although similar at the core, my finished project deviates from the
          course material with different features, more flashed out design and a
          different subject theme. During the creation of the website, I have
          learned how to work with{" "}
          <a
            href="https://strapi.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Strapi
          </a>
          , a headless CMS database as well as gained knowledge in
          authenticating users and using{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          efficiently. The project is fully responsive, compatible with most
          browsers and screens.
        </p>
        <div className="about-list">
          <ul>
            <h3>As a visitor user, you can:</h3>
            <li>Interact with the landing page. </li>
            <li>Check out all camping sites listed on the website.</li>
            <li>Check out more info on any chosen camping site.</li>
            <li>
              Interact with a location map of an individual camping site (only
              supported in desktop -1440px- mode).
            </li>
            <li>Search for camping sites by name, city or full address.</li>
            <li>Register as a user.</li>
            <li>Check out the "About" page.</li>
          </ul>
        </div>
        <div className="about-list">
          <ul>
            <h3>As a registered user, you can:</h3>
            <li>Use the same features as a visitor user.</li>
            <li>Log in to your user page.</li>
            <li>Interact with your dashboard.</li>
            <li>Add new camping sites to the collection.</li>
            <li>Edit your submitted camping sites.</li>
            <li>Upload a picture of your submitted camping site.</li>
            <li>Delete your submitted camping sites.</li>
            <li>Log out from your user page.</li>
          </ul>
        </div>
        <div className="about-list">
          <ul>
            <h3>Future plans:</h3>
            <li>
              Currently the location map of an individual camping site is only
              supported in desktop -1440px- mode. Seamless dynamic resizing is a
              work in progress so it can be shown on tablets, lower resolution
              desktops and mobiles too.
            </li>
            <li>
              Every new camping site submitted gets uploaded with a default
              placeholder image in the first instance. The user can edit this
              picture under "Edit site" but there are plans to integrate an
              image upload feature during the initial new site upload.
            </li>
            <li>
              There are plans to make the logged in experience more personalised
              (greetings with username, etc).
            </li>
            <li>Dark mode toggle.</li>
          </ul>
        </div>
        <p>Version 1.0.0</p>
      </div>
    </Layout>
  );
};

export default AboutPage;
