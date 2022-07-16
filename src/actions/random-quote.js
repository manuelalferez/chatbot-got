import React from "react";
import fetch from "isomorphic-fetch";
import { Text, RequestContext } from "@botonic/react";

const API_RANDOM_QUOTE = "https://api.quotable.io/random";

export default class extends React.Component {
  static contextType = RequestContext;
  static async botonicInit({ session }) {
    const res = await fetch(API_RANDOM_QUOTE);
    const quoteJSON = await res.json();
    session.quote = {
      content: quoteJSON.content,
      author: quoteJSON.author,
    };
  }
  render() {
    return (
      <>
        <Text>Random quote 🎉 </Text>
        <Text>
          "{this.context.session.quote.content}" {"\n"}
          {this.context.session.quote.author}
        </Text>
      </>
    );
  }
}
