## Deploys

GitHub workflows are setup to auto deploy on merge/push to `main` branch.

## Firebase

The Firebase app will only allow connections from production domains. To test, add Firebase Testing env variables to `.env.development`.

## TODO

### Gameplay

- [ ] Join table
- [ ] Create and shuffle shoe
- [ ] Place wager
- [ ] Deal round
- [ ] Actions
  - [ ] Hit
  - [ ] Stand
  - [ ] Split
  - [ ] Double
  - [ ] Insurance
  - [ ] Surrender
- [ ] Calculate winnings
- [ ] New round

### Tasks

- [x] Move springs to card. Pass to and from as props
- [x] Onclick deck, generate card
- [x] Preload textures
- [ ] tunnel-rat for buttons/actions
- [ ] Idempotent and immutable state management solution

### Performance

- [x] Use frameloop="demand" and manually invalidate springs
- [x] Optimize asset loading / network requests
- [ ] Use low-poly model for cards

### Stretch

- [ ] Stats
- [ ] Chat
- [ ] Private tables
- [ ] Custom draw animations
- [ ] Card counting trainer

## Neobrutalism theme

https://neobrutalism-components.vercel.app/docs
