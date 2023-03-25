/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import commentCount from "../src/modules/commentCounter.js";
/* eslint-disable */
const { JSDOM } = require('jsdom');
const dom = new JSDOM(`<!DOCTYPE html><body></body></html>`);
global.window = dom.window;
global.document = window.document;

describe("Counters", () => {
  it("Comments counters", () => {
    document.body.innerHTML = `<div class="left">
      <p class="eachScore">
        2022-09-01
        <span>Ritika:</span>
      </p>
      <span>
        <p class="numberSc">Great</p>
      </span>
    </div>`;
    const count = document.querySelectorAll(".left");
    expect(commentCount(count)).toBe(1);
  });
});