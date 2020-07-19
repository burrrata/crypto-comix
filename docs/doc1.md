---
id: doc1
title: Crypto Comix
sidebar_label: Overview
---

![Crypto Comix](https://i.imgur.com/aG625BZ.jpg)

## CryptoComix DAO Design Draft

CryptoComix is a small local comic book shop.

In the late 90s, early 2000's comic books were still big business.

As digital has taken hold, what were once city or nation-wide chains of comic shops have splintered, but the local comic shop is alive and well. There is still a strong consumer base for old school books, indie books, and collectibles. Their communities are driven by local shops, where they also congregate to buy books, play games, and spend time with their friends.

Hit especially hard by COVID, CryptoComix is struggling to make rent without their usual foot traffic, and there are a few hundred community members super bummed that the place might close.

*Can we DAO this up to save CryptoComix?*

---

![Wall of comics](https://i.imgur.com/gC6wTa6.jpg)

## Design Goals

Comic book shops are both a community and a business. So are DAOs. We want the CryptoComix community to **have a voice as well as a stake in the shop's success** (governance and skin in the game). The outcome we are looking for from this is that community members **take action to contribute** to the comic book shop's success. The end-game is that **CryptoComix, a DAO, is owned and operated by and for the community**.

### Contributing

There are many ways to contribute to CryptoComics. These include, but are not limited to...

#### Contributing with time/labor

Just like running any business, running a comic book shop is non-trivial. We can't expect everyone to do everything, but we can identify things that the community can contribute to immediately. This might include, but not be limited to:

- Running events (D&D stuff, meetups, and stuff).
- Shipping products (literally just putting stuff in a box, dropping it off at the post office, and paying for it to go to customers).
- Updating the website.
- Designing the CryptoComics DAO.
- Hanging out at the store to help in person customers (if there even is a store).
- Creating merch and/or digital items based on CryptoComics and/or products it sells or has licensing rights to use.

#### Contributing with capital

The CryptoComix community can support the shop by paying a yearly membership due as well as by buying stuff. Members would have increased opportunities and incentives to spend money with CryptoComix including, but not limited to:

- Discounts on events and/or special seats/access (think VIP club).
- First right of refusal on new and/or limited edition items.
- Free shipping (think Amazon Prime).
- Discounts on any and all purchases (think Costco).
- Subscription to a comic of the month club/community (comics + reading group).

#### Contributing by holding CryptoComix tokens

If we choose an inflationary token supply schedule (big if), then simply holding the DAO token (and not cashing out) supports all the other contributors. As you hold you token your proportional share of the token supply decreases. Also, if you don't sell (either on a secondary market or via redemptions against the DAO's assets) then you're helping to keep the price/value of the token by not taking action to move it down.

### Aligning Incentives

Whenever someone takes action to support CryptoComix they should get a stake in the DAO. The distribution policy for rewards would need to be simple. The simpler the better.

One way to achieve this might be to set a monthly budget for DAO token minting. Then the DAO could allocate that budget to support various initiatives. This way there's a continuous supply of tokens to support operations, regardless of what the token price/value might be. In addition, by rewarding contributors with DAO tokens the default is to hold, which supports the DAO. People have to take action to sell, which then depreciates the DAO's AUM and/or the market price of the token.

### Legal Considerations

CryptoComix aims to be a non-profit cooperative. This would limit liability and allow the entity to engage in contracts. The internet says that [There is no single definition of a cooperative](https://www.co-oplaw.org/co-op-basics/what-are-cooperatives/). That being said, here is one definition of the term:

- *“A cooperative is an organization established for the purpose of purchasing and marketing the products of its members, i.e., shareholders, and/or procuring supplies for resale to the members, whose profits are distributed to the members (in the form of patronage dividends), not on the basis of the members’ equity investment in the cooperative, but in proportion to their patronage of it, i.e., the amount of business that each member transacts with it. In a workers’ cooperative, the members jointly manufacture a product and share in the profits of the enterprise based on the amount of labor they contribute.”*

The seminal Tax Court case Puget Sound Plywood, Inc. v. Commissioner (44 T.C. 305, 308 (1965) set forth three core factors of cooperative associations on the basis of the Rochdale Principles. They are generally accepted as a framework for determining whether an organization is operating on a cooperative basis within the meaning of the tax code.(See also: Jimmy Kroger, The New Frontier: Tax Implications of Limited Cooperative Associations, Fed. B.A. Sec. Tax’n Rep., Summer 2009, at 4, 10.)

- “**Subordination of capital**, both as regards control over the cooperative undertaking, and as regards the ownership of the pecuniary benefits arising therefrom;
- **Democratic control** by the worker-members themselves; and
- The vesting in and the **allocation among the worker-members of all fruits and increases arising** from their cooperative endeavor (i.e., the excess of the operating revenues over the costs incurred in generating those revenues), **in proportion to the worker-members’ active participation** in the cooperative endeavor.”(Puget Sound Plywood, Inc. v. C. I. R., 44 T.C. 305, 308 (T.C. 1965) acq., 1966-2 C.B. 3 (1966).)

“Patronage” is the term that describes how the patrons use the cooperative.  So, for example, the patronage of a consumer cooperative is the purchase of goods from the cooperative; patronage of a producer cooperative is the transfer of goods to the cooperative to be marketed by the cooperative; patronage of a worker cooperative is the work performed for the cooperative.  There is a great deal of flexibility for cooperatives to define patronage and how it is measured.  For example, one worker cooperative might define patronage as the number of hours worked in a fiscal year while another might define patronage as the amount of money earned by a worker in a fiscal year.

All of this seems to point to a modified Moloch style membership organization being a viable candidate for a cooperative DAO. If we can create an on-chain representation of this org structure, then we might be able to create [a legal agreement that defers to on-chain information as a source of truth for the entity](https://github.com/lexDAO/SCoDA-Simple-Code-Deference-Agreement-/). This would reduce overhead and paper pushing, making it easier for people to spin up and run these DAOified cooperatives. More research is required to determine if this is possible, and if so, how we can make this easy to setup.

---

![Crypto Thor Challenge](https://i.imgur.com/c9o0SJv.jpg)

## DAO Outline

### Tokens

Cooperatives are typically structured where each member has a vote, and votes do not have magnitude. CryptoComix, however, also wants to reward contributors based on their time, effort, and patronage to the shop. This means that we need two tokens! One for co-op membership and one for rewards.

#### Membership

Membership tokens (`MBR`) are limited to 1 per account, they are non-transferable, and they do not have magnitude.

There are many perks to being a member of CryptoComix! They include, but are not limited to:

- 10% off all purchases (*managed off-chain*).
- Access to exclusive members-only sales (*managed off-chain*).
- First right of refusal for new products and events (*managed off-chain*).
- The ability to engage in CryptoComix governance, including distributions of capital in the member's pool (*on-chain DAO vote*).
- The ability to earn TOKENs for contributions of time or capital (see [contributing](###Contributing) section) (*on-chain DAO votes/transfers*).

#### Rewards

`TOKEN` (cool name TBD) is the reward token of CryptoComix. `TOKEN` is non-transferable and only members can hold `TOKEN`.

There are many ways to earn `TOKEN`! They include, but are not limited to:

- 1 CryptoComix `TOKEN` for every dollar spent at CrytpoComix.
- The ability to redeem `TOKEN`s in exchange for a proportional amount of capital in the CryptoComix members pool.

> Non-members can still shop at CryptoComix, however, they will not receive any of the perks above for their patronage.

### Capital Allocation

All CryptoComix revenues will go into the CryptoComix treasury. From there, members can choose how they want to allocate it. This might look like a monthly or yearly budget for various departments and initiatives, including the CryptoComix members redemption pool. In this way members can choose if they want to use capital to support operations, community projects, or to give members a bonus.

To make high level decisions CryptoComix members might use a mechanism such as [conviction voting](https://github.com/1Hive/conviction-voting-app/) to signal their preference towards various initiatives. In this case the amount of signalling required to pass votes would be dependent on the proportional amount of the treasury that the vote would move. Smaller proposals would need less support, whereas larger ones (say monthly/yearly budgets) would require more support.

In the event that conviction voting is not yet available, a time-boxed voting app (such as the [default Aragon voting app](https://github.com/aragon/aragon-apps/blob/master/apps/voting/)) could be used.

Regardless of the voting app used, budgetting decisions could be made at the cooperative level (1 member 1 vote via `MBR`). From there funds would be sent to separate pools (DAOs, Colonies, multi-sigs, etc) to be distributed as needed. This gives every member in the cooperative a voice in the high level operations of the cooperative, but everyone doesn't need to weigh in on every decision every day.

- When a decision is made to fund tasks and/or projects capital would be allocated into mechanisms such as a team DAO, [Colony](https://colony.io/), [bounties](https://colony.io/), or a [multi-sig](https://gnosis-safe.io/) in order to allow team leaders to get stuff done.
- When a decision is made to give capital back to members it would be send to the membership pool where TOKEN holders would be allowed to redeem their TOKENs for a proportional share of the pool.

> Members determine high level capital allocation. This creates a balance of power between members (`MBR`) and contributors (`TOKEN`). We expect many members to be contributors and vice versa, but separating the two ensures a democratic system of governance.

### Signalling votes

If members want to create signalling votes (that do not allocate capital directly) they can do so by submitting a text proposal to the DAO for members to vote on. These proposals are non-binding unless they are modifying the cooperative's operating agreement.

### DAO Design TL;DR:

Aragon Membership template with a `MBR` token.

Add a non-transferable `TOKEN` token that has magnitude. Then add a vault with redemptions that's tied to the `TOKEN`.

`MBR` votes are the root authority in the cooperative. This includes, but is not limited to:

- Minting/burning of `MBR` tokens.
- Minting/burning of `TOKEN` tokens.
- Transfers of tokens from the main DAO vault to secondary funding mechanisms (to do work or reward `TOKEN` contributors).

> Note: while we could set this up as two separate DAOs (Membership and Moloch), giving `MBR` tokens control over `TOKEN` minting/burning ensures that a concentration of power in the `TOKEN` DAO won't skew incentives/governance for the entire cooperative (esp when it comes to member rewards).

---

![Crypto Zo](https://i.imgur.com/FSVngAI.jpg)

## DAO Demo

Behold, [a Rinkeby DAO for the CryptoComix cooperative](https://rinkeby.aragon.org/#/cryptocomixxx/)!

> Note: the token names were changed
> - `MBR` => `CCC`
> - `TOKEN` => `KAPOW`

---

## Open Questions

> Can cooperatives have permissioned membership, or do they have to be open to the public?

- **If permissioned:** Members can join the cooperative by submitting a request to join along with 100 DAI. Current members will then vote to approve or deny the new member. Members can also submit proposals for work to be done and decisions to be made.
- **If public:** Members can join the cooperative by paying a membership fee of 100 DAI. A current member will need to process their request on-chain (similar to how an REI employee processes a new membership request) before they can join.

> Are there requirements as to the identity and/or legal status of members? Do they have to verify that they live in-state or anything?

- **If no state ID is required:** New members will need to provide a proof of uniqueness to verify that they are, indeed, a real person. This might look like a vote of approval from a current member, a Web3 identity profile (3Box, BrightID, Upala, etc), or a social media account such as GitHub or Twitter.
- **If state ID is required:** We'll need to integrate with KYC provider or something. How do cooperatives do this currently?
