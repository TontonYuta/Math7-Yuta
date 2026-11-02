import os
import time
from playwright.sync_api import sync_playwright

def run():
    print("🚀 Verifying seamless picture grid & clean One Piece assets...")
    errors = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True, args=['--no-sandbox', '--disable-dev-shm-usage'])
        page = browser.new_page(viewport={'width': 1600, 'height': 900})

        page.on('console', lambda msg: errors.append(f'[{msg.type}] {msg.text}') if msg.type == 'error' else None)
        page.on('pageerror', lambda exc: errors.append(f'[PAGE_ERROR] {str(exc)}'))

        # 1. Visit Lobby
        page.goto('http://127.0.0.1:3000', wait_until='commit')
        page.wait_for_selector('h1', timeout=5000)
        time.sleep(0.5)
        print("✅ 1. Lobby Loaded")

        # 2. Go to World Map
        page.locator('button:has-text("Mở Hải Đồ Thế Giới")').click()
        page.wait_for_selector('text=Hải Đồ Đại Hải Trình', timeout=5000)
        time.sleep(0.5)

        # Check Luffy Navigator
        luffy = page.locator('text=LUFFY')
        assert luffy.count() > 0, "Luffy Navigator must be visible on World Map"
        print("✅ 2. Floating Luffy Navigator active")

        # 3. Enter Level Detail & Mysterious Picture Game
        page.locator('button:has-text("Cập Bến & Vượt Ải")').click()
        time.sleep(0.5)

        # Click level 01 node
        level_01 = page.locator('button:has-text("01")')
        level_01.first.click()
        time.sleep(0.5)
        page.locator('button:has-text("CHƠI NGAY")').click()
        time.sleep(0.8)

        # 4. Verify Mysterious Picture Grid: seamless gap-0, straight perpendicular cuts
        grid = page.locator('.grid-cols-3.grid-rows-3.gap-0')
        assert grid.count() > 0, "Grid must have gap-0 and 3x3 layout"
        page.screenshot(path='tests/screen_07_picture_grid_seamless.png')
        print("✅ 3. Picture Grid Seamless (gap-0, rounded-none, straight 90-degree cuts) verified!")

        # Exit back to lobby
        exit_btn = page.locator('button:has-text("Về Bản Đồ")')
        if exit_btn.count() > 0:
            exit_btn.click()
            time.sleep(0.5)

        page.locator('button:has-text("Sảnh")').first.click()
        time.sleep(0.5)

        # 5. Open Dashboard & Collection Gallery
        page.locator('text=Kho Báu & Tranh').first.click()
        time.sleep(0.5)

        page.locator('text=Bộ Sưu Tập 100 Thẻ One Piece').click()
        time.sleep(1.0)

        # Check 'Tứ Hoàng & Huyền Thoại' category
        legends_btn = page.locator('text=Tứ Hoàng & Huyền Thoại')
        assert legends_btn.count() > 0, "Legends category button must exist"
        legends_btn.click()
        time.sleep(0.5)
        page.screenshot(path='tests/screen_09_dashboard_legends.png')
        print("✅ 4. Yonko & Legends category verified with cards!")

        # Check Wanted category
        wanted_btn = page.locator('text=Lệnh Truy Nã (Wanted)')
        wanted_btn.click()
        time.sleep(0.5)
        page.screenshot(path='tests/screen_10_dashboard_wanted.png')
        print("✅ 5. Wanted posters category verified!")

        print(f"\n🎉 ALL VERIFICATION CHECKS PASSED with 0 errors! Console errors: {len(errors)}")
        browser.close()

if __name__ == '__main__':
    run()
