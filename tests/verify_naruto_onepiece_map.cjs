const { chromium } = require('playwright');
const path = require('path');

const SCREENSHOT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/85b88f80-590d-47e0-b6d5-cef33d4eb95e/scratch/screenshots';

(async () => {
  console.log('🚀 Starting Naruto x One Piece Grand Line Map E2E Verification...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  try {
    // 1. Visit Lobby
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    console.log('✅ Visited Lobby');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, '01_naruto_op_lobby.png') });

    // Verify Title & Hero
    const lobbyTitle = await page.textContent('body');
    if (!lobbyTitle.includes('Đại Hải Trình x Nhẫn Giới Toán 7')) {
      throw new Error('Lobby title missing Naruto x One Piece branding!');
    }
    console.log('✅ Lobby branding verified');

    // 2. Click Start Adventure -> Should go directly to World Map
    const startBtn = page.locator('button:has-text("Mở Hải Đồ Thế Giới & Khởi Hành")');
    await startBtn.click();
    await page.waitForTimeout(600);
    console.log('✅ Clicked to open Grand Line Map');

    // 3. Verify World Map presence & Island Markers
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, '02_shinobi_grand_line_map.png') });
    const mapContent = await page.textContent('body');
    if (!mapContent.includes('Hải Đồ Đại Hải Trình x Nhẫn Giới')) {
      throw new Error('Grand Line SVG Map not rendered!');
    }
    console.log('✅ Grand Line Map Canvas is active!');

    // 4. Click an island (e.g., Alabasta & Suna)
    const alabastaMarker = page.locator('div[title*="Sa Mạc Alabasta"]');
    if (await alabastaMarker.count() > 0) {
      await alabastaMarker.first().click();
      await page.waitForTimeout(500);
      console.log('✅ Selected Alabasta & Suna island');
      await page.screenshot({ path: path.join(SCREENSHOT_DIR, '03_selected_island_dock.png') });
    }

    // 5. Enter Island Trail
    const enterTrailBtn = page.locator('button:has-text("Cập Bến & Vượt Ải")');
    await enterTrailBtn.click();
    await page.waitForTimeout(500);
    console.log('✅ Entered Island Trail (Candy Saga road)');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, '04_island_candy_saga_road.png') });

    // 6. Switch back to World Map
    const switchMapBtn = page.locator('button:has-text("Hải Đồ Thế Giới")');
    await switchMapBtn.click();
    await page.waitForTimeout(500);
    console.log('✅ Switched back to Grand Line Map');

    // 7. Check 10 Topics List
    const tenTopicsBtn = page.locator('button:has-text("10 Chuyên Đề")');
    await tenTopicsBtn.click();
    await page.waitForTimeout(500);
    console.log('✅ Navigated to 10 Topics Grid View');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, '05_topics_grid_view.png') });

    // 8. Check Gallery & Dashboard
    const galleryBtn = page.locator('button:has-text("Hồ sơ & Tranh")');
    await galleryBtn.click();
    await page.waitForTimeout(600);
    console.log('✅ Opened Gallery View with Naruto x One Piece Artworks');
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, '06_anime_gallery_artworks.png') });

    console.log('🎉 ALL PLAYWRIGHT E2E CHECKS PASSED WITH FLYING COLORS!');
  } catch (err) {
    console.error('❌ Test failed:', err);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
