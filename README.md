# ![foo](./public/chrome/chrome-installprocess-128-128.png) Planning Poker


After our last game of planning-poker at work, I realized that this little app I had installed on my phone bugged me in several ways:

1. It shows adds
2. Therefor, it causes network traffic
3. It takes up almost 20 MB of storage

I could live with ads, but what really struck me was the fact that this little app which does nothing but displaying static images requires 20 MB of storage. And why would I need a native app in the first place?

That was when I decided to build a (first prototype) of a planning-poker PWA and you can find the result right here.

## What's in this repo?

This repo contains all the code and images I created to provide a simple planning-poker PWA which provides basic planning-poker features:

- Different card decks (Standard, Fibonacci, T-Shirt sizes)
- Tap / shake to reveal
- That's it

It's built with React and hosted on GitHub pages, so it's available [here](https://s1hofmann.github.io/planning-poker/).