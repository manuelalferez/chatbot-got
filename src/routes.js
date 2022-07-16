import HouseClicked from "./actions/house-clicked";
import RandomQuote from "./actions/random-quote";
import Welcome from "./actions/welcome";

export const routes = [
  {
    path: "welcome",
    text: /hi|hello/i,
    action: Welcome,
    childRoutes: [
      {
        path: "button-clicked",
        payload: /clicked-.*/,
        action: HouseClicked,
      },
    ],
  },
  {
    path: "random-quote",
    text: /.*/,
    action: RandomQuote,
  },
];
