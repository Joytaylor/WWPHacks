import React from "react";
import MatchCard from "../components/matchCards";
export default function home() {
  return (
    <div>
      <MatchCard
        userName="Joes"
        firstName="Joe"
        language="python"
        tools={["Python", "Swift"]}
        description="hello"
      ></MatchCard>
    </div>
  );
}
