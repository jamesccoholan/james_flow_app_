export const CHECK_COLLECTION = `
  import DappyConract from 0xDappy

  pub fun main(addr: Address): Bool {
    let ref = getAccount(addr).getCapability<&{DappyContract.CollectionPublic).check()
    return ref
    }
`;
