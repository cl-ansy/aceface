# Firebase

## Firestore

### Document Model

```json
floors/{floorId}
	"games": {
		"$gameId": true
	}

games/{gameId}
  "round_id": "",
  "shoe_id": "",
  "type": "blackjack",
  "rules": {
    "deckCount": 2,
    "penetration": 0.65
  },
  "seats": {
    1: { "userId": "",  "displayName": "" },
    2: null,
    3: { "userId": "", "displayName": "" },
    4: null,
    5: null,
    6: { "userId": "dealer", "displayName": "" }
  }

rounds/{roundId}
  "gameId": "",
  "shoeId": ""
  "currentHandId": "",
  "orderByHandId": [],
  "status": "new" | "started" | "ended",
  "dealerCard": ""

hands/{handId}
  "gameId": "",
  "roundId": "",
  "userId": "",
  "visible": true,
  "turn": true,
  "seatNumber": 1,
  "displayName": "",
  "bet": 0,
  "action": "hit" | "stand" | "bust",
  "cards": []

shoes/{shoeId}
  "gameId": "",
  "nextCard": 0,
  "cards": {
    0: "KH",
    ...
  }

wallet/{walletId}
  "userId": "",
	"balance": 1000,
  "games": {
    "$gameId": true
  },
  "rounds": {
    "$roundId": true
  },
  "hands": {
    "$handId": true
  },
```

### Rules

```Cloud Firestore Security Rules
rules_version = '2';

service cloud.firestore {
	match /databases/{database}/documents {
        function isUser(userId) {
            return request.auth != null && request.auth.id == userId;
        }

        match /floors/{floorId} {
            allow read: if true;
        }
		match /games/{gameId} {
			allow read: if true;
		}
        match /rounds/{roundId} {
            allow read: if true;
        }
        match /hands/{handId} {
            allow read: if visible == true;
            allow update: if (request.resource.data.diff(resource.data).affectedKeys().hasOnly(['action']));
                          && resource.data.seatNumber == get(/databases/$(database)/documents/rounds/$(resource.data.roundId)).turn;
        }
		match /users/{userId} {
			allow read: if isUser(userId);
		}
		match /users/{userId}/public/info {
			allow read: if true;
		}
	}
}
```

### Triggers

```


on player sit
    add player to seat
    if round.status == "new"
        create hand for player

on player leave
    remove player from seat
    player stands on hands

on first bet
    set start time for time + 10s
    start round
    deal cards

on hand edit:
    round = get round/{hand.roundId}
    if hand.seatNumber

on round ended
    set end time for time + 10s
    create round
    create hands for seated players
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
