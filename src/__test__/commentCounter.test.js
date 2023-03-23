/**
 * @jest-environment jsdom
 */

import commentCount from '../modules/commentCounter.js';

describe('Counters', () => {
  it('Comments counters', () => {
    document.body.innerHTML = `<div class="left">
  <p class="eachScore">
    2022-09-01
    <span>Federico:</span>
  </p>
  <span>
    <p class="numberSc">Great</p>
  </span>
</div>`;
    const count = document.querySelectorAll('.left');
    expect(commentCount(count)).toBe(1);
  });
});