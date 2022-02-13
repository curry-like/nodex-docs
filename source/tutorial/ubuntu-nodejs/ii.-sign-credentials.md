# Scenario II. Sign Credentials

In Scenario II, you will learn how to apply digital signature to JSON-LD based structured data using UNiD EDGE SDK.

## Goals

* By following this tutorial, you will learn how to digitally sign JSON-LD based structured data using UNiD EDGE SDK.

## Tutorial flow

This tutorial will proceed in the order defined below. The steps from "1. Creating a NodeJS project" to "3. Using UNiD EDGE SDK" in the tutorial are exactly the same as [Scenario I](i.-create-a-did.md). Please refer to Scenario I page for the details.

1. Creating a NodeJS project
2. Install dependencies and project settings
3. Using UNiD EDGE SDK
4. Digitally sign structured data

## 4. Digitally sign structured data

Digitally signing structured data is also easy with the UNiD EDGE SDK! You only need to include the following few statements in your code to benefit from digital signatures.

```typescript
(async () => {
    // ..

    // Insert your great code below this line
    const VC = DID.createCredential(<AWESOME_INSTANCE>)
})()
```

:::{admonition} Info
The `DID` instance in the code fragment can be generated using the `createDid()` function, etc., which is handled in [Scenario I](i.-create-a-did.md).
:::

The object that can be passed to the `createCredential()` function must be an object that inherits from the `UNiDVerifiableCredentialBase` class. UNiD EDGE SDK predefines several data types to represent structured data and binds them to the SDK. In this chapter, we will try to express the code using the `EmailCredentialV1` class, which can be used to represent email data from among its data types.

:::{admonition} Info
`EmailCredentialV1` class is included in UNiD EDGE SDK, but it will not be imported automatically. Don't forget to import it!
:::

A snippet of code combining the `EmailCredentialV1` class, which represents the data structure, and the `createCredential()` function, which is used to apply a digital signature, is shown below.

```typescript
const structuredData = new EmailCredentialV1({
    '@type': 'EmailPerson',
    '@id': DID.getIdentifier(),
    email: 'username@example.com',
})

// Sign !!
const VC = await DID.createCredential(structuredData)
```

:::{admonition} Info
The `DID` instance in the code fragment can be generated using the `createDid()` function, etc., which is handled in [Scenario I](i.-create-a-did.md).
:::

The following is a series of code fragments, including the method of digitally signing structured data and the process of displaying the results.

```typescript
import { UNiD, Cipher } from '@getunid/node-wallet-sdk'
import { SqliteConnector } from '@getunid/wallet-sdk-sqlite-connector'
import { KeyRingType } from '@getunid/node-wallet-sdk'

(async () => {
    // Connector definition
    const connector = new SqliteConnector({
        client       : 'unid-edge-sdk.sqlite',
        encryptionKey: '${ PUT YOUR RANDOMIZED HEX STRING OF 32 BYTES }',
        encrypter    : Cipher.encrypt,
        decrypter    : Cipher.decrypt,
    })

    // Initializing the connector (database creation and migration)
    await connector.init()

    // Initializing the UNiD EDGE SDK
    UNiD.init({
        clientId    : '<UNUSED_FIELD>',
        clientSecret: '<UNUSED_FIELD>',
        connector   : connector,
    })

    // Insert your great code below this line
    const DID = await UNiD.createDid(KeyRingType.Mnemonic)

    // Build
    const structuredData = new EmailCredentialV1({
        '@type': 'EmailPerson',
        '@id'  : DID.getIdentifier(),
        email  : 'username@example.com',
    })

    // Sign !!
    const VC = await DID.createCredential(structuredData)

    console.log(`signed credential:`)
    console.log(VC)
})()
```

Let's run the program in the same way as before.

```bash
yarn run start
```

```bash
yarn run v1.22.17
$ yarn run node index.ts
$ npx ts-node index.ts
signed credential:
{
  proof: {
    type: 'EcdsaSecp256k1Signature2019',
    proofPurpose: 'authentication',
    created: '2022-01-14T09:36:45Z',
    verificationMethod: 'did:unid:test:EiDrgMyWJYZyzeGFIKzJzI2NtU7yng_21EbMT_1enUZ5Xg#signingKey',
    jws: 'eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..NypXoAh1q2vGibRmxzBCX7gwbCCIlLh_GA8W73L613NxDn6IDvqO0BgIPzMmpoHJtuAA8jxAa4y1KM4g5e8f4w'
  },
  id: 'https://sds.getunid.io/api/v1',
  issuer: 'did:unid:test:EiDrgMyWJYZyzeGFIKzJzI2NtU7yng_21EbMT_1enUZ5Xg',
  issuanceDate: '2022-01-14T09:36:45Z',
  '@context': [
    'https://www.w3.org/2018/credentials/v1',
    'https://docs.getunid.io/docs/2020/credentials/email'
  ],
  type: [ 'VerifiableCredential', 'EmailCredentialV1' ],
  credentialSubject: {
    '@type': 'EmailPerson',
    '@id': 'did:unid:test:EiDrgMyWJYZyzeGFIKzJzI2NtU7yng_21EbMT_1enUZ5Xg',
    email: 'username@example.com'
  }
}
```

Did you see the data (JSON block) shown above in your terminal? Data that has been signed for structured data is called Verifiable Credential in the DID specification, and in the standard output above, the JSON block output below the label signed credential corresponds to Verifiable Credential. This chapter may be boring because we did the digital signature as a console application. However, when combined with a web framework such as Express or Fastify, it may be possible to easily issue digitally signed copies of verified data stored on the server application side (e.g., resident data if you are in charge of a government agency). How would you like to use the signed structured data?

In the next chapter, you will learn how to use UNiD EDGE SDK to verify the correctness of signed structured data.

**Index of UNiD EDGE SDK / Ubuntu (NodeJS) tutorials:**

* [Scenario I. Create a DID](i.-create-a-did.md)
* [Scenario II. Sign Credentials](ii.-sign-credentials.md)
* [Scenario III. Verify Credentials](iii.-verify-credentials.md)
* [Scenario IV. Connect with E2E Secure Channel](iv.-connect-with-secure-channel.md)