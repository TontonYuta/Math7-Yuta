import time
from playwright.sync_api import sync_playwright

def run_test():
    print("🚀 Running E2E Test: Fullscreen Questions & Bí Kíp Theory Scrolls...")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True, args=['--no-sandbox', '--disable-dev-shm-usage'])
        page = browser.new_page(viewport={'width': 1920, 'height': 1080})

        # 1. Load Lobby
        page.goto('http://127.0.0.1:3000', wait_until='commit')
        page.wait_for_selector('h1', timeout=5000)
        time.sleep(0.5)
        print("✅ 1. Lobby Loaded")

        # 2. Go to World Map
        page.locator('button:has-text("Mở Hải Đồ Thế Giới")').click()
        page.wait_for_selector('text=Hải Đồ Đại Hải Trình', timeout=5000)
        time.sleep(0.5)
        print("✅ 2. World Map Loaded")

        # 3. Open Level Detail Modal for Island 1 (East Blue)
        page.locator('button:has-text("Cập Bến & Vượt Ải")').click()
        time.sleep(0.5)

        level_01 = page.locator('button:has-text("01")')
        level_01.first.click()
        time.sleep(0.5)

        # 4. Verify Bí Kíp button is visible before starting level
        bikip_btn = page.locator('button:has-text("Bí Kíp Lý Thuyết")')
        assert bikip_btn.count() > 0, "Bí Kíp button must be present in LevelDetailModal"
        print("✅ 3. 'Bí Kíp Lý Thuyết' button verified in LevelDetailModal")

        # Click Bí Kíp button
        bikip_btn.first.click()
        time.sleep(0.8)

        # 5. Verify Theory Scroll Modal opens with formulas & rules
        scroll_modal = page.locator('h2:has-text("Bí Kíp Số Hữu Tỉ"), h2:has-text("Bí Kíp")')
        assert scroll_modal.count() > 0, "Theory scroll modal must open with title"
        
        formula_sec = page.locator('text="1. Công Thức Trọng Tâm Cần Nhớ"')
        assert formula_sec.count() > 0, "Formulas section must be displayed"

        page.screenshot(path='/home/tontonyuta/Math7-Yuta/tests/screen_14_bikip_theory_modal.png')
        print("✅ 4. Theory Scroll Modal verified and screenshot saved: screen_14_bikip_theory_modal.png")

        # 6. Click 'Đã Thuộc Bí Kíp • Vào Trận Ngay' to directly enter the game
        start_from_bikip = page.locator('button:has-text("Đã Thuộc Bí Kíp")')
        assert start_from_bikip.count() > 0, "Start action button must be present in Theory modal"
        start_from_bikip.first.click()
        time.sleep(1)
        print("✅ 5. Successfully entered level directly from Bí Kíp modal")

        # 7. Click on a tile in Picture Grid (Phong Ấn 1) to open Question Modal
        tile1 = page.locator('button:has-text("Phong Ấn 1")')
        tile1.first.click()
        time.sleep(0.8)

        # 8. Verify Question Modal is Full Screen (w-screen h-screen)
        fullscreen_modal = page.locator('.fixed.inset-0.w-screen.h-screen')
        assert fullscreen_modal.count() > 0, "Question modal must be full screen (w-screen h-screen)"
        print("✅ 6. Fullscreen Question Modal verified (100% width and height)")

        # Verify 'Bí Kíp' quick-access button inside question modal
        inner_bikip = page.locator('header button:has-text("Bí Kíp")')
        assert inner_bikip.count() > 0, "Quick access Bí Kíp button must be present in Question modal header"
        print("✅ 7. Quick access Bí Kíp button present in question header")

        page.screenshot(path='/home/tontonyuta/Math7-Yuta/tests/screen_15_fullscreen_question_modal.png')
        print("✅ 8. Saved screenshot: screen_15_fullscreen_question_modal.png")

        browser.close()
        print("🎉 ALL E2E VERIFICATIONS PASSED WITH 100% SUCCESS!")

run_test()
