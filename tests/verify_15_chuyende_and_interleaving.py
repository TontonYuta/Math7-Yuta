import os
import time
import re
import glob
from playwright.sync_api import sync_playwright

# Step 1: Database verification
files = glob.glob('/home/tontonyuta/Math7-Yuta/src/data/toan7/**/*.ts', recursive=True)
diff_counts = {}
track_counts = {}
hsg_15_counts = 0

for f in files:
    if f.endswith('index.ts') or 'Metadata' in f or 'examSets' in f:
        continue
    with open(f, 'r', encoding='utf-8') as fp:
        txt = fp.read()
    
    ids = re.findall(r'["\']?id["\']?:\s*(\d+)', txt)
    diffs = re.findall(r'["\']?difficulty["\']?:\s*[\'"]([^\'"]+)[\'"]', txt)
    tracks = re.findall(r'["\']?track["\']?:\s*[\'"]([^\'"]+)[\'"]', txt)
    
    for d in diffs:
        diff_counts[d] = diff_counts.get(d, 0) + 1
    for t in tracks:
        track_counts[t] = track_counts.get(t, 0) + 1
    
    if 'nangcao_15chuyende' in f:
        hsg_15_counts += len(ids)

print("=== DATABASE AUDIT RESULTS ===")
print(f"Total 15 Chuyên Đề HSG Questions: {hsg_15_counts}")
print(f"Difficulty Distribution: {diff_counts}")
print(f"Track Distribution: {track_counts}")

assert hsg_15_counts == 90, f"Expected 90 questions from 15 Chuyên đề, found {hsg_15_counts}"
assert diff_counts.get('Vận dụng', 0) >= 60, "Expected at least 60 Vận dụng questions"
assert diff_counts.get('Vận dụng cao', 0) >= 30, "Expected at least 30 Vận dụng cao questions"
print("✅ 1. Database audit passed: 90 authentic 15 Chuyên Đề HSG questions integrated.\n")

# Step 2: Browser verification via Playwright
def run_browser():
    print("=== BROWSER E2E VERIFICATION ===")
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
        print("✅ 2. Lobby Loaded")

        # 2. Go to World Map
        page.locator('button:has-text("Mở Hải Đồ Thế Giới")').click()
        page.wait_for_selector('text=Hải Đồ Đại Hải Trình', timeout=5000)
        time.sleep(0.5)
        print("✅ 3. World Map Loaded")

        # 3. Enter Level Detail & Mysterious Picture Game
        page.locator('button:has-text("Cập Bến & Vượt Ải")').click()
        time.sleep(0.5)

        # Click level 01 node
        level_01 = page.locator('button:has-text("01")')
        level_01.first.click()
        time.sleep(0.5)
        page.locator('button:has-text("CHƠI NGAY")').click()
        time.sleep(1)
        print("✅ 4. Entered Poneglyph Picture Grid Game")

        # Verify 3x3 Picture Grid exists
        grid = page.locator('.grid-cols-3.grid-rows-3.gap-0')
        assert grid.count() > 0, "Grid must have gap-0 and 3x3 layout"

        # Click on Center Tile (Phong Ấn 5) to open modal
        btn_tile5 = page.locator('button:has-text("Phong Ấn 5")')
        assert btn_tile5.count() > 0, "Tile 5 must exist"
        btn_tile5.first.click()
        time.sleep(0.8)

        # Check MathChallengeModal header
        modal = page.locator('header:has-text("Trắc nghiệm"), header:has-text("Điền số")')
        assert modal.count() > 0, "Math Challenge Modal must open"

        # Check 15 Chuyên Đề HSG badge and difficulty badge
        body_text = page.locator('body').inner_text()
        has_diff = 'Độ khó:' in body_text
        has_hsg = '15 CHUYÊN ĐỀ HSG' in body_text.upper()

        assert has_diff, "Difficulty badge must be visible in modal"
        assert has_hsg, "15 Chuyên Đề HSG badge must be visible on advanced tile"
        print("✅ 5. Verified Difficulty Badge and '15 Chuyên Đề HSG' Badge in modal")

        screenshot1 = '/home/tontonyuta/Math7-Yuta/tests/screen_12_interleaved_hsg_modal.png'
        page.screenshot(path=screenshot1)
        print(f"✅ 6. Saved screenshot: {screenshot1}")

        # Close modal
        close_btn = page.locator('button[title="Đóng (Không giải)"]').first
        close_btn.click()
        time.sleep(0.5)

        # Exit picture game
        exit_btn = page.locator('button:has-text("Về Bản Đồ")').first
        if exit_btn.count() > 0:
            exit_btn.click()
        time.sleep(0.5)

        browser.close()
        print("🎉 ALL TESTS PASSED WITH 100% SUCCESS!")

run_browser()
