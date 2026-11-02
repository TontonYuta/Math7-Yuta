import os, time
from playwright.sync_api import sync_playwright

os.makedirs("tests/mobile_screenshots", exist_ok=True)

devices = [
    {"name": "iPhone_14", "width": 390, "height": 844},
    {"name": "iPhone_SE", "width": 375, "height": 667},
    {"name": "Galaxy_S21", "width": 412, "height": 915},
]

def check_no_horizontal_overflow(page, screen_name):
    scroll_w = page.evaluate("() => document.documentElement.scrollWidth")
    inner_w = page.evaluate("() => window.innerWidth")
    print(f"[{screen_name}] scrollWidth: {scroll_w}, innerWidth: {inner_w}")
    assert scroll_w <= inner_w, f"HORIZONTAL OVERFLOW on {screen_name}: {scroll_w} > {inner_w}"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    
    for dev in devices:
        print(f"\n--- Testing on {dev['name']} ({dev['width']}x{dev['height']}) ---")
        context = browser.new_context(viewport={"width": dev["width"], "height": dev["height"]}, is_mobile=True, has_touch=True)
        page = context.new_page()
        page.goto("http://localhost:3000")
        page.wait_for_timeout(1000)

        # 1. Lobby
        check_no_horizontal_overflow(page, f"{dev['name']}_Lobby")
        page.screenshot(path=f"tests/mobile_screenshots/{dev['name']}_01_lobby.png")

        # 2. World Map
        page.click("button:has-text('Khởi Hành')")
        page.wait_for_timeout(1000)
        check_no_horizontal_overflow(page, f"{dev['name']}_WorldMap")
        page.screenshot(path=f"tests/mobile_screenshots/{dev['name']}_02_world_map.png")

        # 3. Topic Selection View
        page.click("button:has-text('10 Đảo'), button:has-text('10 Chuyên Đề')")
        page.wait_for_timeout(800)
        check_no_horizontal_overflow(page, f"{dev['name']}_TopicSelect")
        page.screenshot(path=f"tests/mobile_screenshots/{dev['name']}_03_topic_select.png")

        # Return to Map
        page.click("div[class*='group']:has-text('East Blue')")
        page.wait_for_timeout(800)

        # 4. Level Detail Modal & Theory Scroll Modal
        # Switch to Island Trail to click a level easily
        page.click("button:has-text('Ải Đảo'), button:has-text('Chi Tiết Ải Đảo')")
        page.wait_for_timeout(800)
        check_no_horizontal_overflow(page, f"{dev['name']}_IslandTrail")

        # Click first level
        page.locator("button[class*='group relative w-18']").first.click()
        page.wait_for_timeout(600)
        page.screenshot(path=f"tests/mobile_screenshots/{dev['name']}_04_level_detail.png")

        # Click Bí Kíp
        page.click("button:has-text('Bí Kíp Lý Thuyết')")
        page.wait_for_timeout(600)
        check_no_horizontal_overflow(page, f"{dev['name']}_TheoryModal")
        page.screenshot(path=f"tests/mobile_screenshots/{dev['name']}_05_theory_modal.png")

        # Close Theory & Start level
        page.click("button:has-text('Đóng Cẩm Nang')")
        page.wait_for_timeout(400)
        
        # Start Picture Game
        page.click("button:has-text('Vào Trận Ngay')")
        page.wait_for_timeout(1000)
        check_no_horizontal_overflow(page, f"{dev['name']}_PictureGame")
        page.screenshot(path=f"tests/mobile_screenshots/{dev['name']}_06_picture_game.png")

        # Open tile to check full-screen question modal
        page.locator("button[class*='group relative flex flex-col']").first.click()
        page.wait_for_timeout(800)
        check_no_horizontal_overflow(page, f"{dev['name']}_QuestionModal")
        page.screenshot(path=f"tests/mobile_screenshots/{dev['name']}_07_question_modal.png")

        context.close()

    browser.close()

print("\nALL MOBILE RESPONSIVE TESTS PASSED SUCCESSFULLY! ZERO OVERFLOW!")
