import { describe, expect, it } from "vitest";
import rawContent from "../../content/content.json";
import type { PortfolioContent } from "../content";
import { SECTION_IDS } from "../content";
import { normalizeContent } from "../normalize";

const fallback = rawContent as unknown as PortfolioContent;

describe("normalizeContent", () => {
  it("leaves the committed content.json unchanged (the file is complete and valid)", () => {
    expect(normalizeContent(rawContent, fallback)).toEqual(rawContent);
  });

  it("falls back to defaults for garbage input", () => {
    expect(normalizeContent("nope", fallback)).toEqual(fallback);
    expect(normalizeContent(null, fallback).profile.name).toBe(fallback.profile.name);
  });

  it("fills missing fields of list items with blanks instead of crashing", () => {
    const result = normalizeContent({ projects: [{ title: "Only a title" }] }, fallback);
    expect(result.projects).toEqual([
      { title: "Only a title", url: "", category: "", description: [], tech: [] },
    ]);
  });

  it("coerces invalid enum values to safe defaults", () => {
    const result = normalizeContent(
      { skills: [{ title: "x", accent: "neon" }], socials: [{ label: "y", url: "z", icon: "fax" }] },
      fallback,
    );
    expect(result.skills[0].accent).toBe("indigo");
    expect(result.socials[0].icon).toBe("website");
  });

  it("drops unknown/duplicate sections and appends missing ones", () => {
    const result = normalizeContent(
      {
        sections: [
          { id: "projects", title: "Work", navLabel: "Work", visible: true },
          { id: "projects", title: "Dup", navLabel: "Dup", visible: true },
          { id: "made-up", title: "?", navLabel: "?", visible: true },
        ],
      },
      fallback,
    );
    expect(result.sections[0]).toMatchObject({ id: "projects", title: "Work" });
    expect(result.sections.map((s) => s.id).sort()).toEqual([...SECTION_IDS].sort());
  });

  it("clamps stat decimals", () => {
    const result = normalizeContent({ stats: [{ value: 1, decimals: 99, label: "x" }] }, fallback);
    expect(result.stats[0].decimals).toBe(4);
  });
});
