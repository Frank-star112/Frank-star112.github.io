#!/usr/bin/env python3
import os, sys, base64, json, urllib.request, urllib.error

REPO = "frank-star112/frank-star112.github.io"
SITE = r"E:/WorkBuddy/2026-07-27-02-29-19/xhs-title-generator/seo-site"
TOKEN = os.environ.get("GITHUB_TOKEN", "")
if not TOKEN:
    print("NO_TOKEN: set GITHUB_TOKEN env var"); sys.exit(2)

API = f"https://api.github.com/repos/{REPO}/contents"

def api_get(path):
    req = urllib.request.Request(f"{API}/{path}", headers={
        "Authorization": f"token {TOKEN}", "Accept": "application/vnd.github+json"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.read().decode("utf-8"), r.status
    except urllib.error.HTTPError as e:
        if e.code == 404:
            return None, 404
        return e.read().decode("utf-8", "ignore"), e.code

def api_put(path, content_b64, sha=None):
    body = {"message": f"deploy seo-site: {path}", "content": content_b64}
    if sha:
        body["sha"] = sha
    data = json.dumps(body).encode("utf-8")
    req = urllib.request.Request(f"{API}/{path}", data=data, method="PUT", headers={
        "Authorization": f"token {TOKEN}",
        "Content-Type": "application/json",
        "Accept": "application/vnd.github+json"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.status

ok = 0
for root, _, files in os.walk(SITE):
    for fn in sorted(files):
        lf = os.path.join(root, fn)
        rel = os.path.relpath(lf, SITE).replace("\\", "/")
        with open(lf, "rb") as f:
            b64 = base64.b64encode(f.read()).decode("ascii")
        existing, _ = api_get(rel)
        sha = None
        if existing:
            import re
            m = re.search(r'"sha":\s*"([0-9a-f]{40})"', existing)
            if m: sha = m.group(1)
        code = api_put(rel, b64, sha)
        size = len(base64.b64decode(b64))
        print(f"{rel} -> HTTP {code} ({size} bytes)")
        ok += 1
print(f"DEPLOY_DONE files={ok}")
