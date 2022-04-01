import { query, useEffect, useReducer } from "react";
import { defaultReducer } from "../reducer/defaultReducer";
import { useUser } from "../providers/UserProvider";

import { Pack } from "../utils/PackClass";
import { DEFAULT_PACKS } from "../config/packs.config";
import { LIST_PACKS } from "/Users/jamescoholan/Downloads/crypto-dappy/src/flow/list.packs.script.js";
import { GET_PACK } from "/Users/jamescoholan/Downloads/crypto-dappy/src/flow/get-pack.script.js";

export default function useDappyPacks() {
  const [state, dispatch] = useReducer(defaultReducer, {
    loading: true,
    error: false,
    data: [],
  });
  const { collection, batchAddDappies } = useUser();

  useEffect(() => {
    const fetchPacks = async () => {
      dispatch({ type: "PROCESSING" });
      try {
        const res = await query({
          cadence: LIST_PACKS,
        });
        console.log(res);
        dispatch({ type: "SUCCESS", payload: res });
      } catch (err) {
        dispatch({ type: "ERROR" });
      }
    };
    fetchPacks();
  }, []);

  const fetchPackDetails = async (packID) => {
    let res = await query({
      cadence: GET_PACK,
      args: (arg, t) => [arg(packID, t.UInt32)],
    });
    console.log(res);
    return new Pack(res?.familyID, res?.name, res?.price);
  };

  const fetchDappiesOfPack = async (packID) => {
    let res = DEFAULT_PACKS.find((p) => p.familyID === packID)?.templates;
    return res;
  };

  const mintFromPack = async (packID, dappies, amount) => {
    if (!collection) {
      alert(`
      You need to enable the collection first. 
      Go to the tab 'Collection' and click on 'Create Collection'.`);
      return;
    }

    var dappiesToMint = [];

    for (let index = 0; index < dappies.length; index++) {
      if (index > 4) break;
      const randomNumber = Math.floor(Math.random() * dappies.length);
      dappiesToMint.push(dappies[randomNumber]);
    }

    batchAddDappies(dappiesToMint);
  };

  return {
    ...state,
    fetchDappiesOfPack,
    fetchPackDetails,
    mintFromPack,
  };
}
