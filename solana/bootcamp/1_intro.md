# INTRODUCTION

accounts, programs, wallets, instructions

creating / minting an SPL token
creating / changing metadata
creating / changing NFTs

solana SPL SDK
metaplex SDK for metadata and NFTs
arweave decentralized storage for storing large files permanently

# Accounts

Everything is an account on solana. An account has some SOL, pays rent, can store data, has a 256bit address

key: int
Lamports: int
Data: unsigned int
Is executable: boolean

#Programs
Smart contracts are called programs on Solana
Special type of account
Data is eBPF bytecode
Written in Rust typically, or transpiled to rust from another language like C/C++, Python and possibly other languages
Process instructions and send instructions to other programs (so basically like a functions)
Programs are stateless

Accounts are passed into programs and are executed in parallel

programs update accounts they have authority over

#Instructions

program_id : number
Keys: Array<{
Key: PublicKey,
Is_mutable: boolean,
Is_signer: boolean,
}>,
Data: Uint8Array

#Transactions

{
message: {
instructions: Array<Instruction>, // list of instructions
recent_blockhash: number, // for de-duplication, doesn't matter how recent, just recent enough
fee_payer: PublicKey, // pays "gas" fee
...
},
signers: Array<Uint8Array>, // signed versions of this transactions
}

programs are invoked by instructions, instructions are sent via transactions, transactions are atomic, all transactions must be signed

Client -- user performs an action and a transaction is sent to the RPC client --> RPC client routes it to a validator --> the instruction for our program is executed --> Program modifies an account.

solana CLI
devnet
A pirate-theme bootcamp for getting up to speed on Solana programming w/ 7 lessons: https://github.com/solana-developers/pirate-bootcamp

#System Program
the system program is the master program, or the solana program that is regularly updated, improved and launched on validators.
it's address is all 1's.

explorer.solana.com
can be used to explore dev net transactions as well

All transactions are done atomicly: meaning: the transactions are done in order, and if any part fails, they all fail.

All TOKENS use 3 programs:
Token Program and Associated Token Program - solana foundations programs
Metadata Program - metaplex foundation program

Token Program:
Mint

Associated Token Program:
Associated Token Account (balance) -- Wallet

#Metadata:
Metadata associated w/ the token

Creating a Token can be done all in one program:
Create an account, initialize the account as a mint, create an associated token account, mint new tokens to that associated token acount

solana SPL has helper function that does this called `getOrCreateAssociatedTokenAccount()`

# Minting

tokens to mint takes into account decimals set for tokens, so if decimals are 2, then 100 to mint = 1 token. 1000 = 10 tokens. etc.
mintTo() provided by solana token sdk

Metadata update:
PDA: Program Derived Address is a unique address a program has access to, but is trustless and has no user associated private key. Only the program can update the PDA.

createUpdateMetadataAccountV2Instruction() // a prebuilt metadata update function in sdk

then take the instruction and wrap it into a transaction w/ a payer using buildTransaction().
the payer is the authority, otherwise need a seperate payer and authority.

- you don't have to deploy a PROGRAM to deploy a token
  you can create tokens using on RPC calls
  related ACCOUNTS are use to describe tokens

Overview of minting new SPL tokens:

- create a new account and initalize it as able to MINT the token
- create a metadata account for the token
- create an associated token account for the wallet address that will control the token
- mint the token to the wallet

# NFTs

they are SPL token. every NFT is an SPL token. Have 0 decimal places. Have a total supply of 1. Can have highly-customizble metadata.
NFTs have a MASTER EDITION and a COLLECTION -- both are accounts stored on chain.
a COLLECTION is an NFT that links to all NFTs in a collection.
the MASTER EDITION account stores some specific metadata

Metaplex SDK is an open source SDK that provides helper functions to create and work w/ NFTs on Solana

bundlr is a decentralized storage solution built in arweave, a permanent data storage system. it has subsidized plans for devnet, making it cheap to test things
Arweave charges a one-time fee to store something permanently
IPFS is another option, that less reliable historically

metadata includes:

- royalty
- mutable boolean
- pay account
- update account
- highly customizable metadata
