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
    "roundId": "",
    "shoeId": "",
    "rules": {
        "deckCount": 2,
        "penetration": 0.65
    },
    "seats": {
		1: {
            "userId": "$userId",
            "displayName": ""
        },
		2: null
    }

rounds/{roundId}
    "gameId": "",
    "shoeId": ""
    "status": "new" | "started" | "ended",
    "dealerCard": "",
    "turn": "$handsIndex",
    "turnOrder": ["$userId", "dealer"],
	"userHands": {
		"$userId": "$handId",
		"dealer": "$handId"
	}

hands/{handId}
    "visible": true,
    "turn": true,
    "gameId": "",
    "userId": "",
    "displayName": "",
    "bet": 0,
    "nextActions": [],
    "plays": []

shoes/{shoeId}
    "gameId": "",
    "nextCard": 0,
    "cards": {
        0: "KH",
        ...
    }

users/{userId}
	"balance": 1000,
    "games": {
        "$gameId": true
    },
    "rounds": {
        "$roundId": true
    },
    "hands": {
        "$handId": true
    }
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

### Queries

### Functions

#### General

| Event              | Triggers                                | Actions                                  |
| ------------------ | --------------------------------------- | ---------------------------------------- |
| Create new game    |                                         |                                          |
| Player joins seat  |                                         | Add user to game.                        |
| Player leaves seat |                                         | Remove user from game                    |
|                    |                                         | If round is new, remove user from round. |
| Start new round    | No current round                        | Add game players to round                |
|                    | Current round ended                     | Check shoe penetration                   |
|                    |                                         | Create hands                             |
| Shuffle shoe       | Shoe penetration hit AND round is ended |                                          |
| Deal round         | 10s after first bet                     |                                          |
| End round          | No more player actions to perform       |                                          |

#### Blackjack

| Event            | Trigger                          |
| ---------------- | -------------------------------- |
| Hit              |                                  |
| Stand            |                                  |
| Split            |                                  |
| Double           |                                  |
| Player turn ends | action == "stand" OR total >= 21 |

### Actions
