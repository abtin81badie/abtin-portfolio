import { describe, expect, it } from "vitest";
import { cloneDeep, insertItem, moveItem, parseTags, removeItem, replaceItem } from "../listOps";

describe("list operations", () => {
  const list = ["a", "b", "c"] as const;

  it("moves items without mutating the input", () => {
    expect(moveItem(list, 0, 2)).toEqual(["b", "c", "a"]);
    expect(moveItem(list, 2, 0)).toEqual(["c", "a", "b"]);
    expect(list).toEqual(["a", "b", "c"]);
  });

  it("ignores out-of-range moves", () => {
    expect(moveItem(list, 0, 5)).toEqual(["a", "b", "c"]);
    expect(moveItem(list, -1, 1)).toEqual(["a", "b", "c"]);
  });

  it("inserts, removes and replaces", () => {
    expect(insertItem(list, 1, "x")).toEqual(["a", "x", "b", "c"]);
    expect(insertItem(list, 99, "x")).toEqual(["a", "b", "c", "x"]);
    expect(removeItem(list, 1)).toEqual(["a", "c"]);
    expect(replaceItem(list, 2, "z")).toEqual(["a", "b", "z"]);
  });

  it("deep clones", () => {
    const original = { nested: { tags: ["x"] } };
    const copy = cloneDeep(original);
    copy.nested.tags.push("y");
    expect(original.nested.tags).toEqual(["x"]);
  });

  it("parses pasted tag lists", () => {
    expect(parseTags("React, Go;  Docker\nC#,,")).toEqual(["React", "Go", "Docker", "C#"]);
  });
});
