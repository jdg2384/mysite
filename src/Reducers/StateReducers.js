import {
    PROJECTINFO,
    ONHOVERRENDER,
} from '../Actions/types.js'; 

const INITIAL_STATE = {
  info:[],
  hover: false,
};

const data = [
  {
    id:0,
    image:'https://www.mobihealthnews.com/sites/default/files/Gozio.jpg',
    title:'Gozio Health',
    tech:'React, Redux, GraphQL, MaterialUI, Redux Forms',
    image_two:'https://lh3.googleusercontent.com/proxy/hR3krTD1jh0dlmugbhp6k-Ds1OUEQ3qjQWSEcTLDgaprx0qvez6xXidfq1XkQ5OIppLcjyJGwLV0gwBDZEWzUjCFegxZZ_XhM1jeJMs2vUUx7PrVViePXyxKiPWR',
    description:`I worked on Gozio Health's CMS to allow the addition of points of interest for the hospital's map application. I would compare it to Google maps for the hospitals. The CMS allowed each hospital to customize its Gozio application, e.g., colors, links, and assets.`,
    image_three:'https://www-test.goziohealth.com/wp-content/uploads/unc_pr_featured-1080x640.jpg',
    url:'https://github.com/jdg2384/work/blob/master/youtube.rb',
  },
  {
    id:1,
    image:'https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_960_720.jpg',
    title:'Bip Wealth',
    tech:'React Native, Redux',
    image_two:'https://bipwealth.com/wp-content/uploads/2014/02/primary-logo-with-space-2.png',
    description:'React Native application for users to view portfolio, financial goals, view tax forms, and correspond with advisors.',
    image_three:'https://cdn.pixabay.com/photo/2017/09/07/08/53/money-2724235_960_720.jpg',
    url:'https://github.com/jdg2384/work/blob/master/youtube.rb',
  },
  {
    id:2,
    image:'https://cdn.pixabay.com/photo/2017/08/10/03/00/youtube-2617510_960_720.jpg',
    title:'YouTube Integration',
    tech:'Ruby on Rails, OAuth 2',
    image_two:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png',
    description:'Ruby on Rails YouTube OAuth version 2 integration involving server-side requests for authorization and user data. Also, storing pertinent information, such as an access token React client-side components handling redirects, sending access token server-side, and display user related YouTube data.',
    image_three:'https://cdn.pixabay.com/photo/2017/10/10/21/49/youtuber-2838945_960_720.jpg',
    url:'https://github.com/jdg2384/work/blob/master/youtube.rb',
  },
  {
    id:3,
    image:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/comparison.png',
    title:'Cue Comparison Page',
    tech:'React.js, Flux.js, React-Cookie',
    image_two:'https://cuemarketplace.com/img/website/suzie-hands-out-full.svg',
    description:'React component designed to display additional product comparison information once user provides information, which is stored in cookies and sent to Cue’s server. Integrated Hubspot form API on the server side to send user information to HubSpot to be added to a sale sequence.',
    image_three:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/concert.jpg',
    url:'https://github.com/jdg2384/hoist',
  },
  {
    id:4,
    image:'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg',
    title:'Node.js Starter Backend',
    tech:'Node.js, Express.js, PostgreSQL, Knex.js, Bcrypt, JSON Web Token(JWT), Mocha.js, Supertest.js.',
    image_two:'https://www.pinclipart.com/picdir/middle/102-1024697_related-wallpapers-node-js-logo-png-clipart.png',
    description:'Starter server that allows users to sign up and get access to a web application. Features password hashing, JWT token authentication, Unit Testing',
    image_three:'https://cdn.mos.cms.futurecdn.net/Vq5LSWz9LfvU5xGk5TSAQi-970-80.jpg',
    url:'https://github.com/jdg2384/node_starter_backend',
  },
  {
    id:5,
    image:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/hoist.jpg',
    title:'Hoist',
    tech:'React.js, Redux, Node.js, Knex.js, PostgreSQL, Express.js CRUD routes, Javascript, Axios, Spotify API, React Native, WebSockets, Spotify OAuth  SDK',
    image_two:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/hoistLogo.png',
    description:'Concert ride sharing app giving users the option to join or create a ride to a concert.',
    image_three:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/concert.jpg',
    url:'https://github.com/jdg2384/hoist',
  },
  {
    id:6,
    image:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/camp.jpg',
    title:'Prime Mtn',
    tech:'Django, Sqlite, jQuery, JavaScript,',
    image_two:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/primeLogo.png',
    description:'React Native App designed to match partners based on musical preferences using Spotify API',
    image_three:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/hiking.jpg',
    url:'https://github.com/jdg2384/PrimeMtn',
  },
  {
    id:7,
    image:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/date.jpg',
    title:'Dateify',
    tech:'React Native, Redux, Node.js, Knex.js, PostgreSQL, Express.js CRUD routes, Javascript, Axios, Spotify API, React Native, WebSockets, Spotify OAuth  SDK',
    image_two:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/dateLogo.png',
    description:'React Native App designed to match partners based on musical preferences using Spotify API',
    image_three:'https://raw.githubusercontent.com/jdg2384/mysite/master/src/Assets/dating.jpg',
    url:'https://github.com/jdg2384/Dateify',
  },
]


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROJECTINFO: 
      return{ ...state, info: data};
    case ONHOVERRENDER: 
      return{ ...state, hover: null};
    default:
      return state;
  }
}; 
  
  
  
  
    
  