import { sum } from "../sum";

test("Sum function testing", () => {
  const result = sum(76, 97);
  expect(result).toBe(173);
});
