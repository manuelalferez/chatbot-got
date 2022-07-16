import HouseClicked from "./actions/house-clicked";
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
];
