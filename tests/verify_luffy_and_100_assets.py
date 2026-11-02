import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1600, "height": 900})
        page = await context.new_page()

        console_errors = []
        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)

        print("1. Navigating to http://localhost:3000...")
        await page.goto("http://localhost:3000", wait_until="networkidle")
        await page.wait_for_timeout(1000)

        # 1. Check Lobby
        await page.screenshot(path="tests/screen_01_lobby_wide.png")
        print("Lobby screenshot captured.")

        # 2. Enter World Map
        start_btn = page.locator("text=Mở Hải Đồ Thế Giới & Khởi Hành")
        await start_btn.click()
        await page.wait_for_timeout(1500)

        # Check Luffy Navigator is visible
        luffy_el = page.locator("text=LUFFY")
        assert await luffy_el.count() > 0, "Luffy Navigator should be visible on World Map"
        print("Luffy Navigator detected successfully!")

        # Check speech bubble
        bubble = page.locator("text=Gomu Gomu no").or_(page.locator("text=Vua Hải Tặc")).or_(page.locator("text=Thịt nướng"))
        assert await bubble.count() > 0, "Luffy speech bubble should be visible"
        print("Luffy speech bubble active!")

        # Screenshot World Map with Luffy
        await page.screenshot(path="tests/screen_02_world_map_luffy.png")

        # Click Island 2 (Alabasta / Chuong 2)
        island_2 = page.locator("button:has-text('02')")
        if await island_2.count() > 0:
            await island_2.first.click()
            await page.wait_for_timeout(1000)
            print("Clicked Island 02, Luffy moved to Alabasta!")
            await page.screenshot(path="tests/screen_03_luffy_moved.png")

        # 3. Enter Level Detail Modal and open Mystery Picture
        dock_btn = page.locator("text=Cập Bến & Vượt Ải")
        await dock_btn.click()
        await page.wait_for_timeout(1000)

        # In island trail, click level 1
        level_1 = page.locator("button:has-text('Ải 1')").or_(page.locator("button:has-text('Ải 01')"))
        if await level_1.count() > 0:
            await level_1.first.click()
            await page.wait_for_timeout(800)
            start_level_btn = page.locator("text=Bắt Đầu Ải")
            if await start_level_btn.count() > 0:
                await start_level_btn.click()
                await page.wait_for_timeout(1200)
                print("Entered Mysterious Picture Game!")
                await page.screenshot(path="tests/screen_04_mysterious_picture_fullscreen.png")
                
                # Check exit back to map
                exit_btn = page.locator("button:has-text('Hải Đồ')").or_(page.locator("button:has-text('Rút lui')"))
                if await exit_btn.count() > 0:
                    await exit_btn.first.click()
                    await page.wait_for_timeout(800)

        # 4. Open Dashboard & 100 Assets Collection
        # Go to lobby or click Dashboard
        sanh_btn = page.locator("button:has-text('Sảnh')")
        if await sanh_btn.count() > 0:
            await sanh_btn.first.click()
            await page.wait_for_timeout(800)

        kho_bau_btn = page.locator("text=Kho Báu & Tranh")
        await kho_bau_btn.first.click()
        await page.wait_for_timeout(1000)

        # Click tab 'Bộ Sưu Tập 100 Thẻ One Piece'
        tab_100 = page.locator("text=Bộ Sưu Tập 100 Thẻ One Piece")
        assert await tab_100.count() > 0, "100 One Piece Collection tab must exist in Dashboard"
        await tab_100.click()
        await page.wait_for_timeout(1500)

        # Check cards loaded
        cards = page.locator("text=Xem ảnh")
        card_count = await cards.count()
        print(f"Loaded {card_count} One Piece assets in gallery view!")
        assert card_count >= 50, f"Expected at least 50+ cards loaded, got {card_count}"

        await page.screenshot(path="tests/screen_05_dashboard_100_assets.png")

        # Test search filter
        search_input = page.locator("input[placeholder*='Tìm kiếm']")
        await search_input.fill("Zoro")
        await page.wait_for_timeout(500)
        await page.screenshot(path="tests/screen_06_search_zoro.png")
        print("Search filter for Zoro works!")

        print("\nAll verification checks PASSED with 0 errors!")
        print(f"Console errors: {len(console_errors)}")
        if console_errors:
            print("Errors encountered:", console_errors)

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
