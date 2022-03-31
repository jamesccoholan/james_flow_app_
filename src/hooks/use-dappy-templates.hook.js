import { useEffect, useReducer } from "react";
import { query } from "@onflow/fcl";
import { defaultReducer } from "../reducer/defaultReducer";
import DappyClass from "../utils/DappyClass";
import { generateDappies } from "../utils/dappies.utils";
import LIST_DAPP_TEMPLATES from "../flow/list-dappy-template.script";

export default function useDappyTemplates() {
  const [state, dispatch] = useReducer(defaultReducer, {
    loading: false,
    error: false,
    data: [],
  });

  useEffect(() => {
    const fetchDappyTemplates = async () => {
      dispatch({ type: "PROCESSING" });
      try {
        let res = await query({
          cadence: LIST_DAPP_TEMPLATES,
        });
        let mappedDappies = Object.values(res).map((d) => {
          return new DappyClass(d?.templateID, d?.dna, d?.name, d?.price);
        });
        dispatch({ type: "SUCCESS", payload: mappedDappies });
      } catch (err) {
        dispatch({ type: "ERROR" });
      }
    };
    fetchDappyTemplates();
  }, []);

  return state;
}
