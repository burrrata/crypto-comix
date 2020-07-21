---
id: doc3
title: CAO Outline
sidebar_label: CAO Outline
---

![Crypto Thor Challenge](https://i.imgur.com/c9o0SJv.jpg)

## Tokens

Cooperatives are typically structured where each member has a vote, and votes do not have magnitude. CryptoComix, however, also wants to reward contributors based on their time, effort, and patronage to the shop. This means that we need two tokens! One for co-op membership and one for rewards.

CryptoComix, however, is no ordinary cooperative. CryptoComix is a cooperative autonomous organization (CAO). It marries legal contracts with blockchain code to create a Wyoming non-profit cooperative encoded and run as a decentralized autonomous organization. Much excite!

### Membership

Membership tokens (`MBR`) are limited to 1 per account, they are non-transferable, and they do not have magnitude.

There are many perks to being a member of CryptoComix! They include, but are not limited to:

- 10% off all purchases (*managed off-chain*).
- Access to exclusive members-only sales (*managed off-chain*).
- First right of refusal for new products and events (*managed off-chain*).
- The ability to engage in CryptoComix governance, including distributions of capital in the member's pool (*on-chain DAO vote*).
- The ability to earn TOKENs for contributions of time or capital (see [contributing](###Contributing) section) (*on-chain DAO votes/transfers*).

### Rewards

`TOKEN` (cool name TBD) is the reward token of CryptoComix. `TOKEN` is non-transferable and only members can hold `TOKEN`.

There are many ways to earn `TOKEN`! They include, but are not limited to:

- 1 CryptoComix `TOKEN` for every dollar spent at CrytpoComix.
- The ability to redeem `TOKEN`s in exchange for a proportional amount of capital in the CryptoComix members pool.

> Non-members can still shop at CryptoComix, however, they will not receive any of the perks above for their patronage.

## Capital Allocation

All CryptoComix revenues will go into the CryptoComix treasury. From there, members can choose how they want to allocate it. This might look like a monthly or yearly budget for various departments and initiatives, including the CryptoComix members redemption pool. In this way members can choose if they want to use capital to support operations, community projects, or to give members a bonus.

To make high level decisions CryptoComix members might use a mechanism such as [conviction voting](https://github.com/1Hive/conviction-voting-app/) to signal their preference towards various initiatives. In this case the amount of signalling required to pass votes would be dependent on the proportional amount of the treasury that the vote would move. Smaller proposals would need less support, whereas larger ones (say monthly/yearly budgets) would require more support.

In the event that conviction voting is not yet available, a time-boxed voting app (such as the [default Aragon voting app](https://github.com/aragon/aragon-apps/blob/master/apps/voting/)) could be used.

Regardless of the voting app used, budgetting decisions could be made at the cooperative level (1 member 1 vote via `MBR`). From there funds would be sent to separate pools (DAOs, Colonies, multi-sigs, etc) to be distributed as needed. This gives every member in the cooperative a voice in the high level operations of the cooperative, but everyone doesn't need to weigh in on every decision every day.

- When a decision is made to fund tasks and/or projects capital would be allocated into mechanisms such as a team DAO, [Colony](https://colony.io/), [bounties](https://colony.io/), or a [multi-sig](https://gnosis-safe.io/) in order to allow team leaders to get stuff done.
- When a decision is made to give capital back to members it would be send to the membership pool where TOKEN holders would be allowed to redeem their TOKENs for a proportional share of the pool.

> Members determine high level capital allocation. This creates a balance of power between members (`MBR`) and contributors (`TOKEN`). We expect many members to be contributors and vice versa, but separating the two ensures a democratic system of governance.

## Non-capital votes

If members want to create votes that do not allocate capital they can do so by submitting a text proposal to the DAO for members to vote on. These proposals are non-binding unless they are modifying the cooperative's operating agreement.

## DAO Design TL;DR:

![CryptoComix CAO Diagram](/static/img/cryptocomixxx-diagram.png)

- `MBR` => Crypto Comix Cooperative (`CCC`) token representing membership.
- `TOKEN` => `KAPOW` token representing patronage.

**`CCC` votes are the root authority in the cooperative. This includes, but is not limited to:**

- Minting/burning of `CCC` tokens.
- Minting/burning of `KAPOW` tokens.
- Transfers of tokens from the main DAO vault to secondary funding mechanisms (to do work or reward `KAPOW` contributors).

## Nuts and bolts

- Aragon Membership template with `CCC` as the membership token.
- Token-request to offer DAI in exchange for membership.
- A non-transferable `KAPOW` token that has magnitude as well as a vault with redemptions that's tied to it.

> Note: while we could set this up as two separate DAOs (Membership and Moloch), giving `CCC` tokens control over `KAPOW` minting/burning ensures that a concentration of power in the `KAPOW` tokens doesn't skew incentives/governance for the entire cooperative (esp when it comes to member rewards).
