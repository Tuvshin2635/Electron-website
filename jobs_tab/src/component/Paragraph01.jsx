import React from "react";
import { useState } from "react";
import Panel from "./Panel";

export default function First() {
  // const [text, setText] = useState

  return (
    <div>
      <h1> First </h1>
      <Panel title="First01">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        quae consectetur ullam voluptatem tempore totam exercitationem, iste
        vero delectus nesciunt laudantium rem, incidunt minus! Quam,
        praesentium! Nulla ad laboriosam harum illum soluta facilis, cupiditate
        fugiat non exercitationem voluptates. Enim ut iusto ab dignissimos,
        temporibus rerum?
      </Panel>
      <h1> Second </h1>
      <Panel title="Second02">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        quae consectetur ullam voluptatem tempore totam exercitationem, iste
        vero delectus nesciunt laudantium rem, incidunt minus! Quam,
        praesentium! Nulla ad laboriosam harum illum soluta facilis, cupiditate
        fugiat non exercitationem voluptates. Enim ut iusto ab dignissimos,
        temporibus rerum?
      </Panel>
      <h1> third </h1>
      <Panel title="third03">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        quae consectetur ullam voluptatem tempore totam exercitationem, iste
        vero delectus nesciunt laudantium rem, incidunt minus! Quam,
        praesentium! Nulla ad laboriosam harum illum soluta facilis, cupiditate
        fugiat non exercitationem voluptates. Enim ut iusto ab dignissimos,
        temporibus rerum?
      </Panel>
    </div>
  );
}
