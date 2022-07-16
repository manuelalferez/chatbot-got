import React from "react";
import fetch from "isomorphic-fetch";
import { Text, RequestContext } from "@botonic/react";

const API_HOUSES = "https://anapioficeandfire.com/api/houses/";

export default class extends React.Component {
  static contextType = RequestContext;
  static async botonicInit({ input, session }) {
    const id = input.payload.substring(input.payload.indexOf("-") + 1);
    const HOUSE_SELECTED_URL = `${API_HOUSES}${id}`;
    const res = await fetch(HOUSE_SELECTED_URL);
    const houseSelected = await res.json();
    session.words = houseSelected.words;
  }

  render() {
    return (
      <>
        <Text>{this.context.session.words} </Text>
      </>
    );
  }
}
