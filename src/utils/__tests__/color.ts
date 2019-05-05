import { tint, hexa } from "../color";

describe("#tint", () => {
  test("it update color", () => {
    expect(tint("#36B37E", -32)).toBe("#247955");
    expect(tint("#36B37E", -16)).toBe("#2d9669");
    expect(tint("#36B37E", -8)).toBe("#31a473");
    expect(tint("#36B37E", 0)).toBe("#36b37e");
    expect(tint("#36B37E", 8)).toBe("#3ac188");
    expect(tint("#36B37E", 16)).toBe("#3ecf92");
    expect(tint("#36B37E", 32)).toBe("#47eca6");
  });
});

describe("#hexa", () => {
  test("it turns color string to rgb", () => {
    expect(hexa("#36B37E")).toBe("rgb(54, 179, 126)")
  })

  test("it turns color to rgba", () => {
    expect(hexa("#36B37E", 0.1)).toBe("rgba(54, 179, 126, 0.1)")
  })
})
