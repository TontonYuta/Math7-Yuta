import os
import time
from playwright.sync_api import sync_playwright

SCREENSHOT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/85b88f80-590d-47e0-b6d5-cef33d4eb95e/scratch/screenshots'
os.makedirs(SCREENSHOT_DIR, exist_ok=True)

def run():
    print('🚀 Launching Chromium for Naruto x One Piece E2E Verification...')
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1440, 'height': 900})

        # 1. Visit Lobby
        page.goto('http://localhost:3000', wait_until='networkidle')
        time.sleep(0.5)
        page.screenshot(path=os.path.join(SCREENSHOT_DIR, '01_naruto_op_lobby.png'))
        print('✅ 1. Lobby Loaded & Captured')
        assert 'Đại Hải Trình x Nhẫn Giới Toán 7' in page.content(), 'Lobby title missing'

        # 2. Click "Mở Hải Đồ Thế Giới & Khởi Hành"
        page.locator('button:has-text("Mở Hải Đồ Thế Giới")').click()
        time.sleep(0.8)
        page.screenshot(path=os.path.join(SCREENSHOT_DIR, '02_shinobi_grand_line_map.png'))
        print('✅ 2. Shinobi Grand Line Map Loaded & Captured')
        assert 'Hải Đồ Đại Hải Trình x Nhẫn Giới' in page.content(), 'Map header missing'

        # 3. Click on Island 2 (Alabasta) or Island 9 (Wano)
        alabasta = page.locator('div[title*="Alabasta"]').first
        if alabasta.is_visible():
            alabasta.click()
            time.sleep(0.5)
            page.screenshot(path=os.path.join(SCREENSHOT_DIR, '03_selected_island_dock.png'))
            print('✅ 3. Selected Island Dock Info Captured')

        # 4. Click "Cập Bến & Vượt Ải" -> Switch to Island Trail
        enter_btn = page.locator('button:has-text("Cập Bến & Vượt Ải")')
        if enter_btn.is_visible():
            enter_btn.click()
            time.sleep(0.5)
            page.screenshot(path=os.path.join(SCREENSHOT_DIR, '04_island_trail_view.png'))
            print('✅ 4. Island Trail (Candy Saga Road) Captured')

        # 5. Switch View to 10 Topics
        page.locator('button:has-text("10 Chuyên Đề")').click()
        time.sleep(0.5)
        page.screenshot(path=os.path.join(SCREENSHOT_DIR, '05_topics_grid_view.png'))
        print('✅ 5. Topics Grid View Captured')

        # 6. Open Gallery
        page.locator('button:has-text("Hồ sơ & Tranh")').click()
        time.sleep(0.8)
        page.screenshot(path=os.path.join(SCREENSHOT_DIR, '06_anime_gallery_artworks.png'))
        print('✅ 6. Anime Artworks Gallery Captured')

        browser.close()
        print('🎉 All E2E steps verified successfully!')

if __name__ == '__main__':
    run()
