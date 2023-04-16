test("test common matcher", () => {
  // 2+2===4
  expect(2 + 2).toBe(4);
  // 2+2 !==5
  expect(2 + 2).not.toBe(5);
});

test("test to be true or false", () => {
  // 1 是true
  expect(1).toBeTruthy();
  // 0 是false
  expect(0).toBeFalsy();
});

test("test number", () => {
  // 4>3
  expect(4).toBeGreaterThan(3);
  // 2<3
  expect(2).toBeLessThan(3);
});

test("test object", () => {
  // 对象比较是否相等
  expect({ name: "string", s: { j: 1 } }).toEqual({
    name: "string",
    s: { j: 1 },
  });
  // toBe比较两对象值是否相等,报错-因为是两个不同对象，内存地址并非同一个
  //   expect({ name: "string", s: { j: 1 } }).toBe({
  //     name: "string",
  //     s: { j: 1 },
  //   });
});
