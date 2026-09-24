import { describe, expect, it } from "vitest";
import { base64ToBytes, bytesToBase64, decodeText, encodeText } from "../github/base64";

describe("base64", () => {
  it("round-trips unicode text (emoji, Persian, symbols)", () => {
    const text = "NeoScan 🩺 — ≈85% · سلام";
    expect(decodeText(encodeText(text))).toBe(text);
  });

  it("matches the standard encoding for ASCII", () => {
    expect(encodeText("hello")).toBe("aGVsbG8=");
  });

  it("round-trips large binary payloads", () => {
    const bytes = new Uint8Array(100_000).map((_, i) => i % 256);
    expect(base64ToBytes(bytesToBase64(bytes))).toEqual(bytes);
  });

  it("tolerates line breaks in GitHub's base64 output", () => {
    expect(decodeText("aGVs\nbG8=")).toBe("hello");
  });
});
