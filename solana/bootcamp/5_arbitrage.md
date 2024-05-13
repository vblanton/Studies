# Arbitrage and Advanced Programs

Types:

- Spatial Arbitrage: difference in prices traded in different parts of the world
- Temporal Arbitrage: difference prices over time
- Statistical: pricing differences through different relationships between securitiyes (JLP---> SOL --> BONK --> USDC) for example

Difference in price in different liquidity pools

Time, Fees play a part
encouraged behaviour because it keeps pools in equilibrium

risks:
unexpected price changes in pool
execution delay, errors
inability to exit positions
lack of legal clarity

review the readme from the pirate ship repository for info on swapping, arbitrage, and each example in general

Overview:

- choose assets
- define swap pools to access
- concurrency: program reviews all possible combinations of asset/mint to find a difference in price
- temperature: the price difference minimum in % to run a trade

example program is solana native, not anchor
not necessary to build your own program to do arbitrage, apparently?

- need to go back and learn how to swap tokens in solana to set up arbitrage

- solana rust docs
  docs.rs/spl-token/latest/

solana programs are limited to 200,000 compute units, so you need to minimize the amount of compute
for this, the teacher created a partial deserialization to read / compute only the minimum amount of data needed to run the program, omitting extra stuff

the arbitrage program built for this class does it on-chain. it may be faster to do it off-chain

## pre-flight lookups (spamming) to RPC

on solana a transaction is simulated first, so when sending arbitrage instructions, if it fails that means that the simulation failed, and if it succeeded well then it makes sense to proceed and actually send the transaction
so in this case it makes sense to send the question to the RPC

## deserialization reserialization

deserializtion, and partial state deserialization is important because solana provides data as bytes, and it needs to be deserialized so that it can be turned into json or objects that Rust can interpret. part state deserialization is important because it allows for more effecient programs

you can then re-serial only part of the program data, leaving the rest untouched.

the Borsch library helps w/ this
byteMuck library also helps with this, is zero copy, and is a rust library, not a solana library. requires manual padding and more precise coding, is more effecient than Borsch

## chapter 34: address lookup tables on solana

essentially hash map of addresses on solana, located on-chain

you can include the index of the address from a lookup table to minimize the data sent to solana. minimizing from 32 bytes for every address to 1 byte. it only helps if you 2 or more accounts, saving 31 bytes starting with the second

## hold needed assets

or course, you need to hold the asset you want to swap, or, perhaps, do a flash loan, but in the case of a small amount, perhaps, it is enough to simply hold USDC for instance and then swap from there, ideally growing that USDC as you swap. or SOL. etc.

compiletoV0(), an Anchor function call is used in this lesson, but is deprecataed since Anchor now read the newer solana IDL natively.
