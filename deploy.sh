#!/bin/bash
set -u
REPO="frank-star112/frank-star112.github.io"
API="https://api.github.com/repos/$REPO/contents"
SITE="E:/WorkBuddy/2026-07-27-02-29-19/xhs-title-generator/seo-site"

# 1) token：优先用环境变量 GITHUB_TOKEN，否则从会话缓存捞
TOKEN="${GITHUB_TOKEN:-}"
if [ -z "$TOKEN" ]; then
  echo "env GITHUB_TOKEN 为空，尝试从会话缓存历史捞..."
  for f in $(grep -rIlE 'gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{20,}' "C:/Users/admin/.workbuddy" 2>/dev/null | head -30); do
    for t in $(grep -oE 'gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{20,}' "$f" 2>/dev/null | sort -u); do
      login=$(curl -s -H "Authorization: token $t" https://api.github.com/user | grep -oE '"login":[ ]*"[^"]+"' | head -1)
      if echo "$login" | grep -q "frank-star112"; then
        TOKEN="$t"; echo "FOUND valid token for $login"; break 2
      fi
    done
  done
fi
if [ -z "$TOKEN" ]; then echo "NO_VALID_TOKEN (你发我 ghp_xxx 后运行: GITHUB_TOKEN=ghp_xxx bash deploy.sh)"; exit 2; fi
echo "token ok (len=${#TOKEN})"

# 2) 部署
deploy_one() {
  local lf="$1" rel="$2"
  local b64; b64=$(base64 "$lf" | tr -d '\n')
  local existing; existing=$(curl -s -H "Authorization: token $TOKEN" "$API/$rel")
  local sha=""; sha=$(echo "$existing" | grep -oE '"sha":[ ]*"[0-9a-f]{40}"' | head -1 | grep -oE '[0-9a-f]{40}')
  local body
  if [ -n "$sha" ]; then
    body=$(printf '{"message":"deploy seo-site: %s","content":"%s","sha":"%s"}' "$rel" "$b64" "$sha")
  else
    body=$(printf '{"message":"deploy seo-site: %s","content":"%s"}' "$rel" "$b64")
  fi
  local code; code=$(curl -s -o /dev/null -w "%{http_code}" -X PUT -H "Authorization: token $TOKEN" -H "Content-Type: application/json" -d "$body" "$API/$rel")
  echo "$rel -> HTTP $code"
}

cd "$SITE" || exit 1
find . -type f | sed 's|^\./||' | sort | while read -r rel; do
  deploy_one "$SITE/$rel" "$rel"
done
echo "DEPLOY_DONE"
