import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./index.ts'],
  dts: true,
  inlineOnly: ['@types/unist', '@types/mdast'],
})
