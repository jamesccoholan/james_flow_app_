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
          cadence: ,
            args: (arg, t)=>[arg(user?.addr, t.Address)]
        });
        setCollectionres(res);
        setLoading(false)
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
