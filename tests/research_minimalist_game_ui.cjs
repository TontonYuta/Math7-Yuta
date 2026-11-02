const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('🔍 [PLAYWRIGHT GROUNDING] Researching serious minimalist game UI...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  const outDir = '/home/tontonyuta/.gemini/antigravity-cli/brain/85b88f80-590d-47e0-b6d5-cef33d4eb95e/scratch';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  try {
    // 1. Visit Lichess Training (Standard for serious game / puzzle UI)
    console.log('Visiting lichess.org/training...');
    await page.goto('https://lichess.org/training', { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(outDir, 'ref_lichess_training.png') });
    console.log('✅ Captured lichess training UI');

    // Extract key design elements: background, colors, layout
    const lichessStyles = await page.evaluate(() => {
      const body = window.getComputedStyle(document.body);
      return {
        bg: body.backgroundColor,
        color: body.color,
        fontFamily: body.fontFamily,
      };
    });
    console.log('Lichess Design Tokens:', lichessStyles);
  } catch (e) {
    console.warn('Lichess grounding note:', e.message);
  }

  try {
    // 2. Visit GitHub search / Leetcode contest or Monkeytype
    console.log('Visiting monkeytype.com for minimalist serious typing game UI...');
    await page.goto('https://monkeytype.com', { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(outDir, 'ref_monkeytype_minimalist.png') });
    console.log('✅ Captured Monkeytype minimalist game UI');

    const mtTokens = await page.evaluate(() => {
      const body = window.getComputedStyle(document.body);
      return {
        bg: body.backgroundColor,
        color: body.color,
        fontFamily: body.fontFamily,
      };
    });
    console.log('Monkeytype Design Tokens:', mtTokens);
  } catch (e) {
    console.warn('Monkeytype note:', e.message);
  }

  await browser.close();
  console.log('🎉 Grounding research completed.');
})();
