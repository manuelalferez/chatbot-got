import React from "react";
import fetch from "isomorphic-fetch";
import {
  Text,
  Button,
  Carousel,
  Element,
  Title,
  Subtitle,
  RequestContext,
} from "@botonic/react";

const API_HOUSES = "https://anapioficeandfire.com/api/houses/";

export default class extends React.Component {
  static contextType = RequestContext;
  static async botonicInit({ session }) {
    const res = await fetch(API_HOUSES);
    const houses = await res.json();
    const housesWithWords = houses.filter((house) => house.words);
    session.houses = housesWithWords.map((house) => ({
      name: house.name,
      region: house.region,
      id: house.url.slice(house.url.lastIndexOf("/") + 1, house.url.length),
    }));
  }
  render() {
    return (
      <>
        <Text>GoT Houses 👑 </Text>
        <Carousel>
          {this.context.session.houses.map((e) => (
            <Element key={e.name}>
              <Title>{e.name}</Title>
              <Subtitle>{e.region}</Subtitle>
              <Button payload={`clicked-${e.id}`}>Select House</Button>
            </Element>
          ))}
        </Carousel>
      </>
    );
  }
}
