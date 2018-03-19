module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  siteTitle: "Soggy Ink", // Site title.
  siteTitleAlt: "Soggy Ink", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://soggy-ink.surge.sh", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription:
    "Articles on Javascript, React, Node.js, CSS Grid, the walls I beat my head against and the struggle on this beautiful journey towards mastering my craft.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  disqusShortname: "soggy-ink", // Disqus shortname.
  postDefaultCategoryID: "Javascript", // Default category for posts.
  userName: "Anaizing", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Sydney, Australia", // User location to display in the author segment.
  userAvatar: "https://avatars0.githubusercontent.com/u/29471810?s=460&v=4", // User avatar to display in the author segment.
  userDescription:
    "An inquisitive Freelance Web developer with a knack for creative problem solving. At least thats what I wish people were saying about me, Im more of a latecomer to this huge web dev world trying to catch up one failure at a time, with a big fucking smile on my face! Anai Araya", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Anaizing",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Anaizing",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:anai.yusary@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Soggy Ink" // Copyright string for the footer of the website and RSS feed.
};
