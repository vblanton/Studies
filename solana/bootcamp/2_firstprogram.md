Simply anchor program, storing Solana in a program, SPL tokens, writing a simple program interacts with a wallet locally

No Server Cost - user's of programs pay to use it, offsetting the cost on the user, rather then the developer
No Authentication Overhead - user's authenticate with their wallet, offsetting user account management to the solana chain
Inherent payment provider

Games/Apps
KYC may be neeed / regulation - unclear depending on country
Realtime games may be hard to realize on chain if they require high transaction throughput. Like Shooter, or racing.
Don't force blockchain into a game, blockchain needs to make sense

Personally, i think that the on-chain aspects make sense for ownership of game assets, but not for game engine dynamics

solana IDE playground for writing, testing, learning, tutorials, examples:

beta.solpg.io
beta.solpg.io/tutorials/tiny-adventure

programs / backend built with or transpiled to rust:
build (.rs file)
deploy (.so file)

client / frontend built with typescript

there is a program on solpg.io that is called stable-swap for auto market making managment for mean-reverting coins.

You must pass in all programs you interact with
so system program for account creation

data type: u8 is one byte, int from 0 to 255

PDA - program derived address, unique address from a program depending on data points

[account(
space = 8 + 1 // rent space needed to run the account 8 bytes + 1 byte in this example
)]

every wallet has a public + private key
private key to sign for change in data

RPC used to propogate data through the network

Transaction states: Processed, Confirmed, Finalized (31 confirmations)

Solana is a big database
Everything is an Account, it is base58
Every wallet is a keypair
Every account can only be changed by it's owner
Accounts can be executable programs

Transactions:
{
message: {
instructions: Array<Instructions>, // List of Instructions
recent_blockhash: number, // used for validators to ensure it was a recent request. after 30 seconds or so it is dropped if fails and for de-duplications
fee_payer: Publickey, // Pays transaction fee
...}
signers: Array<Uint8Array>, // Signed versions of this transactions (can be single or multi co-signers)
}
}

Unity client:

All changes and work can be done a unity client as well for programming solana/blochchain games

Reading data / Websocket via RPC:
reading data on chain is done via RPC w/ data returned via websocket.

Writing data:
transaction necessary, distributed through the network of validators and RPCs track status.
