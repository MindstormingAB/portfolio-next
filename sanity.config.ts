import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {visionTool} from "@sanity/vision";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "kc83lm5b",
    dataset: "production",
    title: "Sandrine's portfolio",
    apiVersion: "2024-05-12",
    basePath: "/admin",
    plugins: [structureTool(), visionTool()],
    schema: { types: schemas }
});

export default config;