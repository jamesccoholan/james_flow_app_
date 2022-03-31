import React from "react";

import useDappyTemplates from "../hooks/use-dappy-templates.hook";
import DappyList from "../components/DappyList";
import Header from "../components/Header";
import ErrorLoadingRenderer from "../components/ErrorLoadingRenderer";

export default function Dappies() {
  const { data: dappyTemplates, loading, error } = useDappyTemplates();

  return (
    <>
      <Header
        title={
          <>
            <span className="highlight">Choose </span> Your Player
          </>
        }
        subtitle={
          <>
            Purchase <span className="highlight">Below</span>
          </>
        }
      />
      <ErrorLoadingRenderer loading={loading} error={error}>
        <DappyList dappies={dappyTemplates} store />
      </ErrorLoadingRenderer>
    </>
  );
}
