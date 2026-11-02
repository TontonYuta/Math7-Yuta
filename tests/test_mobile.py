from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 390, "height": 844})
    page.goto("http://localhost:3000")
    page.click("button:has-text('Khởi Hành')")
    page.wait_for_timeout(1000)

    data = page.evaluate("""() => {
        const h = document.querySelector('header');
        const hRect = h ? h.getBoundingClientRect() : null;
        
        // Find badges inside the map
        const mapContainer = document.querySelector('.relative.w-full.h-\\\\[620px\\\\]') || document.querySelector('[class*="h-[620px]"]');
        const mapRect = mapContainer ? mapContainer.getBoundingClientRect() : null;
        
        const badges = Array.from(document.querySelectorAll('.absolute')).map(el => {
            const r = el.getBoundingClientRect();
            const text = (el.innerText || '').trim().replace(/\\n/g, ' ');
            return { text: text.slice(0, 30), x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) };
        }).filter(b => b.w > 0 && b.h > 0 && b.text.length > 0);
        
        return { hRect, mapRect, badges: badges.slice(0, 25) };
    }""")
    
    print("Header rect:", data["hRect"])
    print("Map rect:", data["mapRect"])
    print("Badges:")
    for b in data["badges"]:
        print(f"  ({b['x']}, {b['y']}) {b['w']}x{b['h']}: {b['text']}")

    browser.close()
