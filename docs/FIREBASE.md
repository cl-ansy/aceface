# Firebase

## Firestore

### Document Model

```json
floors/{floorId}
	"games": {
		"$gameId": true
	}

games/{gameId}
	"type": "blackjack",
	"rules": {
		"deckCount": 2,
		"penetration": 0.65
	},
	"seats": {
		0: "dealer",
		1: "$userId",
		2: null,
		3: "$userId",
	}
	"state": {
		"turnUserId": "",
		"dealerUpCard": ""
	},
	players/dealer
		"revealed": false
	players/{userId}
		"action": "",
		"hands": {
			0: {
				"total": 21,
				0: "AD",
				1: "KH"
			}
		}
	shoes/shoe
		"draw": [],
		"discard": []

users/{userId}
	"balance": 1000,
	"gameIds": [],
	public/info
		"displayName": "Chris"
```

### Rules

```Cloud Firestore Security Rules
service cloud.firestore {
	match /databases/{database}/documents {

		match /games/{gameId} {
			allow read: if true;
		}

		match /games/{gameId}/players/{userId} {
			allow read: if userId != 'dealer' || resource.data.revealed == true;
			allow write: if request.auth != null && request.auth.id == userId;
		}

		match /users/{userId=**} {
			allow read: if request.auth != null && request.auth.id == userId;
		}

		match /users/{userId}/public/info {
			allow read: if true;
		}

	}
}
```

### Actions

### Listeners
