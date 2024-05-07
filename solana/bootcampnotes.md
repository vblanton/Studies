Accounts
Everything is an account on solana. An account has some SOL, pays rent, can store data, has a 256bit address

key: int
Lamports: int
Data: unsigned int
Is executable: boolean

Programs
Smart contracts are called programs on Solana
Special type of account
Data is eBPF bytecode
Written in Rust typically, or transpiled to rust from another language like C/C++, Python and possibly other languages
Process instructions and send instructions to other programs (so basically like a functions)
Programs are stateless

Accounts are passed into programs and are executed in parallel

programs update accounts they have authority over

Instructions

program_id : number
Keys: Array<{
Key: PublicKey,
Is_mutable: boolean,
Is_signer: boolean,
}>,
Data: Uint8Array

Transactions

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

System Program
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

Metadata:
Metadata associated w/ the token

Creating a Token can be done all in one program:
Create an account, initialize the account as a mint, create an associated token account, mint new tokens to that associated token acount

solana SPL has helper function that does this called `getOrCreateAssociatedTokenAccount()`
