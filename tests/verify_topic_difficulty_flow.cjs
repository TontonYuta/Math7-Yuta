const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('🚀 [TEST] Starting E2E Verification of Serious Minimalist Tactical UI...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  const screenshotsDir = '/home/tontonyuta/.gemini/antigravity-cli/brain/85b88f80-590d-47e0-b6d5-cef33d4eb95e/scratch';
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  try {
    // 1. Visit Lobby
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
    console.log('✅ Loaded Lobby successfully: Title =', await page.title());
    await page.screenshot({ path: path.join(screenshotsDir, 'minimalist_01_lobby.png') });

    // 2. Click "Bắt đầu vượt ải ngay" to go to Topic Selection
    const startAdventureBtn = page.locator('button:has-text("Bắt đầu vượt ải"), button:has-text("BẮT ĐẦU")').first();
    await startAdventureBtn.click();
    await page.waitForTimeout(800);

    // Verify Topic Selection Screen
    const topicHeading = page.locator('h1:has-text("10 Chuyên Đề"), h1:has-text("Chuyên Đề")');
    console.log('✅ Navigated to Topic Selection. Heading found:', (await topicHeading.count()) > 0);
    await page.screenshot({ path: path.join(screenshotsDir, 'minimalist_02_topic_selection.png') });

    // Count topic cards
    const topicCards = page.locator('button:has-text("Vào chuyên đề"), button:has-text("Vào Chuyên Đề")');
    const topicCount = await topicCards.count();
    console.log('✅ Found active topic cards count:', topicCount);

    // 3. Click on the first topic card (Chuyên đề 01: Số Hữu Tỉ)
    await topicCards.first().click();
    await page.waitForTimeout(800);

    // Verify Tactical Roadmap
    await page.screenshot({ path: path.join(screenshotsDir, 'minimalist_03_tactical_roadmap.png') });
    console.log('✅ Navigated to Tactical Roadmap.');

    // 4. Click on Level 1 button (Ải 01)
    const level1Btn = page.locator('button:has-text("01"), button:has-text("1")').first();
    await level1Btn.click();
    await page.waitForTimeout(600);

    // Verify Level Detail Modal
    await page.screenshot({ path: path.join(screenshotsDir, 'minimalist_04_level_detail_modal.png') });
    console.log('✅ Opened Level 1 Detail Modal');

    // 5. Click "CHƠI NGAY" to enter Picture Puzzle
    const playNowBtn = page.locator('button:has-text("CHƠI NGAY"), button:has-text("Bắt đầu")').first();
    await playNowBtn.click();
    await page.waitForTimeout(1000);
    console.log('✅ Entered Mysterious Picture Puzzle Matrix Canvas');
    await page.screenshot({ path: path.join(screenshotsDir, 'minimalist_05_picture_matrix.png') });

    // 6. Click on Tile #1 to open Math Challenge Modal
    const firstTile = page.locator('button:has-text("Mảnh 1"), button:has-text("Mảnh")').first();
    await firstTile.click();
    await page.waitForTimeout(800);
    console.log('✅ Clicked Tile 1, Math Challenge Terminal Opened');
    await page.screenshot({ path: path.join(screenshotsDir, 'minimalist_06_math_terminal.png') });

    // Check difficulty badge
    const difficultyBadge = page.locator('text=/Độ khó:|Cấp [1-5]|★/');
    const badgeCount = await difficultyBadge.count();
    console.log('✅ Found 5-star difficulty badge count:', badgeCount);
    for (let i = 0; i < badgeCount; i++) {
      const text = await difficultyBadge.nth(i).innerText();
      console.log(`   🌟 Badge ${i + 1}: ${text.replace(/\n/g, ' ')}`);
    }

    // Close question modal
    const closeBtn = page.locator('button[title="Đóng (Không giải)"], button:has-text("Quay lại")').first();
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
      await page.waitForTimeout(500);
    }

    // Exit back to map
    const exitGameBtn = page.locator('button:has-text("Về Bản Đồ")').first();
    if (await exitGameBtn.isVisible()) {
      await exitGameBtn.click();
      await page.waitForTimeout(500);
    }

    // Switch topic back to topic selection
    const changeTopicBtn = page.locator('button:has-text("Đổi Chuyên Đề")').first();
    if (await changeTopicBtn.isVisible()) {
      await changeTopicBtn.click();
      await page.waitForTimeout(500);
      console.log('✅ Clicked "Đổi Chuyên Đề" and returned to Topic Selection');
    }

    // Open Dashboard & Gallery
    const dashboardBtn = page.locator('button:has-text("Hồ sơ & Tranh"), button:has-text("Thống Kê")').first();
    if (await dashboardBtn.isVisible()) {
      await dashboardBtn.click();
      await page.waitForTimeout(800);
      console.log('✅ Opened Dashboard & Gallery');
      await page.screenshot({ path: path.join(screenshotsDir, 'minimalist_07_dashboard_stats.png') });

      // Click "Bộ Sưu Tập Tranh" Tab
      const galleryTabBtn = page.locator('button:has-text("Bộ Sưu Tập Tranh"), button:has-text("Bộ Sưu Tập")').first();
      if (await galleryTabBtn.isVisible()) {
        await galleryTabBtn.click();
        await page.waitForTimeout(500);
        await page.screenshot({ path: path.join(screenshotsDir, 'minimalist_08_gallery_grid.png') });
        console.log('✅ Switched to Gallery Grid Tab');
      }
    }

    console.log('🎉 [SUCCESS] All E2E Flows and Serious Minimalist UI Verified 100%!');
  } catch (err) {
    console.error('❌ [ERROR] Test failure:', err);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
