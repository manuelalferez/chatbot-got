import BotIcon from "../assets/botIcon.png";
import { COLORS } from "./constants";

export const webchat = {
  shadowDOM: true,

  theme: {
    style: {
      fontFamily: '"Helvetica Neue",Arial,sans-serif',
      width: 370,
      borderRadius: 10,
      background: "#F5F5F5",
      lineHeight: 1.3,
    },
    header: {
      image: BotIcon,
      title: "Game of Thrones Chatbot",
      style: {
        background: COLORS.PRIMARY_COLOR,
      },
    },
    brand: {
      color: COLORS.PRIMARY_COLOR,
      image: BotIcon,
    },
    triggerButton: {
      image: BotIcon,
    },

    button: {
      style: {
        color: "#000000",
        background: "#ffffff",
        borderRadius: 10,
        border: "1px solid #000000",
        margin: "8px 25px",
        padding: "10px",
        width: "150px",
      },
      hoverBackground: COLORS.MAIN_COLOR,
      hoverTextColor: "black",
    },
    message: {
      bot: {
        blobTick: false,
        blobWidth: "255px",
        imageStyle: {
          alignItems: "flex-end",
        },
        style: {
          border: "none",
          color: "black",
          borderRadius: "7px",
          background: "white",
          boxShadow: "1px -1px 6px rgba(0, 0, 0, 0.3)",
          padding: "10px",
        },
      },
      user: {
        blobTick: false,
        style: {
          background: COLORS.PRIMARY_COLOR,
          borderRadius: "12px 12px 0px 12px",
        },
      },
    },
  },
};
