import { useEffect, useState } from "react";
import { query } from "@onflow/fcl";

export default function useCollection() {
  const [loading, setLoading] = useState(true);
  const [collection, setCollection] = useState(false);

  useEffect(() => {
    if (user?.addr) return;
    const checkCollection = async () => {
      try {
        let res = await query({
          cadence:
            "import DappyConract from 0xDappy pub fun main(addr: Address): Bool {let ref = getAccount(addr).getCapability}",
        });
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
      checkCollection();
    };
  }, []);

  const createCollection = async () => {
    setCollection(true);
  };

  const deleteCollection = async () => {
    setCollection(false);
    window.location.reload();
  };

  return {
    loading,
    collection,
    createCollection,
    deleteCollection,
  };
}
