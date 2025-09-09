import {defineConfig} from "vitest/config";

const VITE_BASE_CONFIG_FILE = "./vite.base.config.ts";
const VITE_CONFIG_FILE = "vite.config.ts";

export default defineConfig({
    test: {
        coverage: {
          provider: 'v8',
          reportsDirectory: 'reports/coverage'
        },
        globals: true,
        projects: [
            {
                extends: VITE_CONFIG_FILE,
                test: {
                    environment: "node",
                    name: "lib",
                    include: ["tests/lib/**/*.{spec,}.{tsx,ts}"]
                },
            },
            {
                extends: VITE_CONFIG_FILE,
                test: {
                    setupFiles: ["tests/support/setup-jest-dom.ts"],
                    environment: "jsdom",
                    name: "unit",
                    include: ["tests/unit/**/*.{spec,}.{tsx,ts}"]
                },
            },
            {
                extends: VITE_CONFIG_FILE,
                test: {
                    setupFiles: ["tests/support/setup-jest-dom.ts"],
                    environment: "jsdom",
                    name: "integration",
                    include: ["tests/integration/**/*.{spec,}.{tsx,ts}"]
                },
            },
            {
                // Special configuration, due to ViteRails plugin messing up playwright procs
                extends: VITE_BASE_CONFIG_FILE,
                test: {
                    name: "e2e",
                    include: ["app/frontend/tests/e2e/**/*.{spec,}.{tsx,ts}"],
                    browser: {
                        enabled: true,
                        // In Vitest 4, providers will be via factory, allowing for more fine-grained control
                        // update as soon as  stable
                        provider: "playwright",
                        // https://vitest.dev/guide/browser/playwright
                        instances: [
                            { browser: 'chromium', headless: true},
                            { browser: 'firefox', headless: true},
                            { browser: 'webkit', headless: true}
                        ],
                    },
                },
            }
        ],
    }
})