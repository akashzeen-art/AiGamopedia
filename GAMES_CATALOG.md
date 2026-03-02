# AIGamopedia - Games Catalog

## API Configuration

**Base URL:** `https://prod.in.asgard.apis.simpleviralgames.com/game/category/`

**Headers:**
```
client-id: 50202bba-0a97-40cf-b980-7b62b1cfad0e
```

**Query Parameters:**
- `p` - Page number
- `platform` - B2BW
- `language` - en
- `multiplayer` - false
- `access_token` - null

---

## Game Categories

### 1. New Releases
**Endpoint:** `new-releases`  
**Full URL:** `https://prod.in.asgard.apis.simpleviralgames.com/game/category/new-releases?p=1&platform=B2BW&language=en&multiplayer=false&access_token=null`  
**Thumbnail:** `./images/new.jpeg`, `./images/new2.jpeg`  
**Section:** Section 2 (New Games)

---

### 2. Top 10 Games
**Endpoint:** `top-10-games`  
**Full URL:** `https://prod.in.asgard.apis.simpleviralgames.com/game/category/top-10-games?p=1&platform=B2BW&language=en&multiplayer=false&access_token=null`  
**Thumbnail:** `./images/top2.jpeg`, `./images/top.jpeg`  
**Category ID:** `category-top-10-games`

---

### 3. VIP Games
**Endpoint:** `vip-games`  
**Full URL:** `https://prod.in.asgard.apis.simpleviralgames.com/game/category/vip-games?p=1&platform=B2BW&language=en&multiplayer=false&access_token=null`  
**Thumbnail:** `./images/vip11.jpeg`, `./images/vip22.jpeg`, `./images/vip.jpeg`  
**Category ID:** `category-vip-games`

---

### 4. Games with Leaderboard
**Endpoint:** `games-with-leaderboard`  
**Full URL:** `https://prod.in.asgard.apis.simpleviralgames.com/game/category/games-with-leaderboard?p=1&platform=B2BW&language=en&multiplayer=false&access_token=null`  
**Thumbnail:** `./images/leaderboard.jpeg`, `./images/leaderboard11.jpeg`, `./images/leaderboard2.jpeg`, `./images/leaderboard22.jpeg`  
**Category ID:** `category-games-with-leaderboard`

---

### 5. Train Your Brain
**Endpoint:** `train-your-brain`  
**Full URL:** `https://prod.in.asgard.apis.simpleviralgames.com/game/category/train-your-brain?p=1&platform=B2BW&language=en&multiplayer=false&access_token=null`  
**Thumbnail:** `./images/brain11.jpeg`, `./images/brain.jpeg`, `./images/brain2.jpeg`  
**Category ID:** `category-train-your-brain`

---

### 6. Soothing
**Endpoint:** `soothing`  
**Full URL:** `https://prod.in.asgard.apis.simpleviralgames.com/game/category/soothing?p=1&platform=B2BW&language=en&multiplayer=false&access_token=null`  
**Thumbnail:** `./images/soothing.jpeg`, `./images/soothing2.jpeg`  
**Category ID:** `category-soothing`

---

### 7. Quick Break at Work
**Endpoint:** `quick-break-at-work`  
**Full URL:** `https://prod.in.asgard.apis.simpleviralgames.com/game/category/quick-break-at-work?p=1&platform=B2BW&language=en&multiplayer=false&access_token=null`  
**Thumbnail:** `./images/break.jpeg`, `./images/break2.jpeg`  
**Category ID:** `category-quick-break-at-work`

---

### 8. Sports
**Endpoint:** `sports`  
**Full URL:** `https://prod.in.asgard.apis.simpleviralgames.com/game/category/sports?p=1&platform=B2BW&language=en&multiplayer=false&access_token=null`  
**Thumbnail:** `./images/sports.jpeg`, `./images/sports2.jpeg`  
**Category ID:** `category-sports`

---

### 9. Multiplayer
**Endpoint:** `multiplayer`  
**Full URL:** `https://prod.in.asgard.apis.simpleviralgames.com/game/category/multiplayer?p=1&platform=B2BW&language=en&multiplayer=false&access_token=null`  
**Thumbnail:** `./images/multiplayer.jpeg`, `./images/multiplayer2.jpeg`  
**Category ID:** `category-multiplayer`

---

### 10. All Games
**Endpoint:** `all-games`  
**Full URL:** `https://prod.in.asgard.apis.simpleviralgames.com/game/category/all-games?p=1&platform=B2BW&language=en&multiplayer=false&access_token=null`  
**Thumbnail:** `./images/break2.jpeg`  
**Category ID:** `category-all-games`  
**Note:** This is the default active category in Section 4

---

## API Response Structure

Each API call returns:
```json
{
  "results": {
    "games": [
      {
        "url": "game_url",
        "property": {
          "name": "game_name",
          "image": "thumbnail_url"
        }
      }
    ]
  },
  "total_page": number
}
```

---

## Implementation Notes

1. **New Games Section (Section 2):** Fetches from `new-releases` endpoint and displays in `#skill` container
2. **Browse By Genre (Section 3):** Shows 9 category cards with thumbnails
3. **Category Games (Section 4):** Dynamically loads games for each category (max 2 pages per category)
4. **Other Games:** Shows first 4 games from `all-games` in `#game-category-container-other`

---

## Image Assets

All thumbnails are stored in `./images/` directory:
- brain.jpeg, brain11.jpeg, brain2.jpeg
- break.jpeg, break2.jpeg
- leaderboard.jpeg, leaderboard11.jpeg, leaderboard2.jpeg, leaderboard22.jpeg
- multiplayer.jpeg, multiplayer2.jpeg
- new.jpeg, new2.jpeg
- soothing.jpeg, soothing2.jpeg
- sports.jpeg, sports2.jpeg
- top.jpeg, top2.jpeg
- vip.jpeg, vip11.jpeg, vip22.jpeg

---

## Navigation

Logo: `./image.png` (80px height)

Main sections:
- Home (`/index.html`)
- My Account (`/myAccount.html`)
- Terms & Conditions (`/termsAndConditions.html`)
