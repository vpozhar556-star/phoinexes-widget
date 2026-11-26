"""Collect the latest posts of the public Telegram channel into news.json (used by phx-widget.js)."""
import html
import json
import re
import urllib.request
from datetime import datetime, timezone

CHANNEL = "phoinexesofficial"
KEEP = 3

req = urllib.request.Request(
    "https://t.me/s/" + CHANNEL,
    headers={"User-Agent": "Mozilla/5.0 (compatible; phoinexes-news/1.0)"},
)
page = urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "replace")

chunks = page.split('class="tgme_widget_message ')[1:]
posts = []
for ch in chunks:
    m = re.search(r'data-post="([^"]+)"', ch)
    if not m:
        continue
    post = m.group(1)
    t = re.search(r'class="tgme_widget_message_text[^"]*"[^>]*>(.*?)</div>', ch, re.S)
    if not t:
        continue
    raw = re.sub(r"<br\s*/?>", "\n", t.group(1))
    text = html.unescape(re.sub(r"<[^>]+>", "", raw)).strip()
    text = re.sub(r"\n{3,}", "\n\n", text)
    if not text:
        continue
    img = re.search(r"tgme_widget_message_(?:photo_wrap|video_thumb)[^>]*background-image:url\('([^']+)'\)", ch)
    dt = re.search(r'<time datetime="([^"]+)"', ch)
    posts.append({
        "id": post.split("/")[-1],
        "url": "https://t.me/" + post,
        "date": dt.group(1) if dt else "",
        "text": text[:600],
        "image": img.group(1) if img else "",
    })

posts = posts[-KEEP:][::-1]
if posts:
    with open("news.json", "w", encoding="utf-8") as f:
        json.dump({
            "channel": "https://t.me/" + CHANNEL,
            "updated": datetime.now(timezone.utc).isoformat(timespec="seconds"),
            "posts": posts,
        }, f, ensure_ascii=False, indent=1)
print(len(posts), "posts")
