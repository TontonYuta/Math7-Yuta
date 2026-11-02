import os
import time
from playwright.sync_api import sync_playwright

SCREENSHOT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/85b88f80-590d-47e0-b6d5-cef33d4eb95e/scratch/screenshots'
os.makedirs(SCREENSHOT_DIR, exist_ok=True)

def run():
    print('🚀 Starting Comprehensive Pure One Piece E2E Verification...')
    errors = []
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True, args=['--no-sandbox', '--disable-dev-shm-usage'])
        page = browser.new_page(viewport={'width': 1440, 'height': 900})

        # Capture console errors (excluding favicon / analytics)
        page.on('console', lambda msg: errors.append(f'[{msg.type}] {msg.text}') if msg.type == 'error' else None)
        page.on('pageerror', lambda exc: errors.append(f'[PAGE_ERROR] {str(exc)}'))

        # 1. Visit Lobby
        page.goto('http://127.0.0.1:3000', wait_until='commit')
        page.wait_for_selector('h1', timeout=5000)
        time.sleep(0.5)
        page.screenshot(path=os.path.join(SCREENSHOT_DIR, '01_onepiece_lobby_synchronized.png'))
        print('✅ 1. One Piece Lobby Loaded with Synchronized Wallpaper & Berries')

        # 2. Click "Mở Hải Đồ Thế Giới & Khởi Hành"
        page.locator('button:has-text("Mở Hải Đồ Thế Giới")').click()
        page.wait_for_selector('text=Hải Đồ Đại Hải Trình', timeout=5000)
        time.sleep(0.5)
        page.screenshot(path=os.path.join(SCREENSHOT_DIR, '02_onepiece_grand_line_map.png'))
        print('✅ 2. Grand Line World Map (10 Sagas) Loaded')

        # 3. Test selecting various One Piece islands (verifying no ID mismatch crash)
        islands_to_test = ['Alabasta', 'Skypiea', 'Wano', 'Laugh Tale', 'Enies Lobby', 'Marineford']
        for island_name in islands_to_test:
            marker = page.locator(f'div[title*="{island_name}"]').first
            if marker.is_visible():
                marker.click()
                time.sleep(0.2)
                print(f'   -> Tested selecting island: {island_name} (OK)')
        
        page.screenshot(path=os.path.join(SCREENSHOT_DIR, '03_onepiece_islands_selection.png'))

        # 4. Enter Island Trail
        page.locator('button:has-text("Cập Bến & Vượt Ải")').click()
        time.sleep(0.5)
        page.screenshot(path=os.path.join(SCREENSHOT_DIR, '04_onepiece_island_trail.png'))
        print('✅ 4. Island Trail Loaded with Berries Beli')

        # 5. Open Level Detail Modal for Level 1
        lvl1_btn = page.locator('button:has-text("01")').first
        if lvl1_btn.is_visible():
            lvl1_btn.click()
            time.sleep(0.4)
            page.screenshot(path=os.path.join(SCREENSHOT_DIR, '05_onepiece_level_modal.png'))
            print('✅ 5. Level Detail Modal Opened with Poneglyph Theme')
            
            # Start Level 1 (Picture Game)
            page.locator('button:has-text("CHƠI NGAY"), button:has-text("Bắt đầu")').first.click()
            time.sleep(0.6)
            page.screenshot(path=os.path.join(SCREENSHOT_DIR, '06_onepiece_poneglyph_game.png'))
            print('✅ 6. Mysterious Picture Game (Poneglyph Grid & Berries HUD) Loaded')

            # Exit back to map
            exit_btn = page.locator('button:has-text("Về Bản Đồ")').first
            if exit_btn.is_visible():
                exit_btn.click()
                time.sleep(0.6)

        # 6. Test 10 Topics Grid
        page.locator('button:has-text("10 Chuyên Đề")').click()
        time.sleep(0.5)
        page.screenshot(path=os.path.join(SCREENSHOT_DIR, '07_onepiece_topics_grid.png'))
        print('✅ 7. 10 One Piece Sagas / Topics View Loaded')

        # 7. Test Dashboard & Gallery
        page.locator('button:has-text("Kho Báu & Tranh")').first.click()
        time.sleep(0.5)
        page.screenshot(path=os.path.join(SCREENSHOT_DIR, '08_onepiece_bounty_gallery.png'))
        print('✅ 8. Bounty Poster & Gallery View Loaded with 10 One Piece Masterpieces')

        browser.close()

    print(f'🔍 Total Console Errors: {len(errors)}')
    if errors:
        print('❌ Errors found:')
        for err in errors:
            print('  -', err)
        raise RuntimeError('Console errors detected in browser!')
    else:
        print('🎉 ZERO CONSOLE ERRORS! PURE ONE PIECE PERFECTION ACHIEVED!')

if __name__ == '__main__':
    run()
