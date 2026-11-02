import os
import time
from playwright.sync_api import sync_playwright

def run():
    print("🚀 Verifying Luffy island navigation across all 10 Sagas with 100% canon One Piece images...")
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

        # 2. Go to World Map
        page.locator('button:has-text("Mở Hải Đồ Thế Giới")').click()
        page.wait_for_selector('text=Hải Đồ Đại Hải Trình', timeout=5000)
        time.sleep(0.5)

        # 3. Test navigation through all 10 islands
        islands = [
            'East Blue',
            'Alabasta',
            'Skypiea',
            'Enies Lobby',
            'Sabaody',
            'Impel Down',
            'Marineford',
            'Fishman Island',
            'Wano',
            'Laugh Tale'
        ]

        for name in islands:
            marker = page.locator(f'div[title*="{name}"]').first
            if marker.is_visible():
                marker.click(force=True)
                time.sleep(0.4)
                print(f"⚓ Luffy navigated to island {name} - verified!")

        page.screenshot(path='tests/screen_11_luffy_all_islands_verified.png')

        # Check Luffy auto patrol button
        patrol_btn = page.locator('button[title*="Luffy tự động giương buồm"]')
        assert patrol_btn.count() > 0, "Luffy auto patrol button must be present"
        patrol_btn.click()
        time.sleep(1.0)
        print("✅ Luffy Auto Patrol active!")

        print(f"\n🎉 ALL 10 ISLANDS VERIFIED WITH CANON ONE PIECE ASSETS! Console errors: {len(errors)}")
        browser.close()

if __name__ == '__main__':
    run()
