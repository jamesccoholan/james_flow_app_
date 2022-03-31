export const DELETE_COLLECTION = `
        import DappyContract from 0xDappy
        transaction {
          prepare (acct: AuthAccount) {
            let collection <- acct.load<@DappyContract.Collection>(from: DappyContract.CollectionStoragePath)
            acct.delete<@DappyContract.Collection>(collection, from: DappyContract.CollectionStoragePath)
              ?? panic("could not load resource")
              destroy collection
              acct.unlink(DappyContract.CollectionPublicPath)
             }
        } 
        `;
