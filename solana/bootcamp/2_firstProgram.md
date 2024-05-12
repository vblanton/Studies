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

Unity client:

All changes and work can be done a unity client as well for programming solana/blochchain games

Reading data / Websocket via RPC:
reading data on chain is done via RPC w/ data returned via websocket.

Writing data:
transaction necessary, distributed through the network of validators and RPCs track status.

Part Two:

Tiny adventure 2 includes logic for a Chest w/ a password

When you close a program, you will never be able to use that ID again, so do not close main net programs which a bunch of people are using already.
when closing a program, however, you get back the SOL for rent.

You can always send SOL, but to remove it, you need to sign the transaction

8 bytes is the minimum rent amount for an account w/ Anchor

Running a local Rust IDE is faster than via the online IDE

IDL in Rust is an Interface Definition Language, essentially a JSON definition for interacting with a Rust program

Save SOL in the program's PDA and remove SOL from the PDA via cpi_content instructions by subracting the lamports (some code example in video) at 53:25)

Interacting with SPL tokens
Create, transfer in, and transfer out is reviewed in the video at 56:00

Local Setup:
instructions at the anchor installations docs: rust, solana cli, yarn, anchor
anchor build
solana balance [-ud|-ul|-um]
-ud is devnet
-ul is local
-um is mainnet

wallet = local wallet json file

solana address // your address, to transfer sol into
solana airdrop # // request solana to be airdropped to your wallet, but there is a limit of 4 SOL per day on devnet that will be airdropped
solana airdrop 2 -ud // request 2 solana from devnet to be airdropped

VSCode addons
Rust analyzer is great for looking over Rust programs
Better Toml // formats toml files in a nicer way
Error Lens // nicer error formatting
Github Copilot // great for writing tests, comments, simple code loops
crates // shows you which dependencies are out of date

Code LLDB // rust debugger
Prettier // formatting
VSCode-Pets // very important

Support options:
solana.stackexchange.com
ChatGPT / Gemini / LLMs

Local Setup example

cd program
yarn i
anchor build
anchor test
solana-test-validator // starts a local validator on your machine
anchor deploy
cd app
yarn dev

NextJS is fine for front end dev

Recommendations on learning about Rust on youtube
how to do borrow checks, enums, option types

Burner Key is for if you want a fallback wallet, for instance on devnet, that is used for the game if not logged in

Unity Game Engine

Unity is C# based

Garbles Unity SDK
github.com/garbles-labs/Solana.Unity-SDK
github.com/solana-developers/solana-game-starter-kits

You can do everything in Unity as you can do JavaScript, export to different platforms, consoles, WebGL
on mobile the supported wallet is Phantom, Mobile wallet adapter coming

Porting Anchor to C# and Unity
code generation tool by bmresearch
github.com/garbles-labs/Solana.Unity.Anchor

dotnet tool install Solana.Unity.Anchor.Tool
convert IDL to C# like this:
dotnet anchorgen -i idl/file.json -o src/PogramCode.cs

More resources:
Lumia online
github.com/lumiaonline/lumiaonline
Rock Paper Scissors w/ interesting solution for hidden data on chain:
github.com/kevinrodriguez-io/bonk-paper-scissors
multiplayer community game where players vote on moves:
github.com/nelsontky/web3-plays-pokemon
Solana Cookbook: solanacookbook.com/gaming/intro.html
