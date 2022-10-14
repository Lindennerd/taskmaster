import { gql, useQuery } from "@apollo/client";
import { AddItem, AddOne, DropDownList, EveryUser } from "@icon-park/react";
import * as Select from "@radix-ui/react-select";
import Loading from "react-loading";
import ReactTooltip from "react-tooltip";
import { Team } from "../../gql/graphql";

const USERTEAMS_QUERY = gql`
  query UserTeams {
    userTeams {
      name
      id
      createdAt
    }
  }
`;

export function UserTeamsDropdown() {
  const { data, loading, error } = useQuery<{ userTeams: Team[] }>(
    USERTEAMS_QUERY
  );

  if (loading)
    return (
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    );

  if (data)
    return (
      <div>
        <div className="flex items-center gap-2 p-2 border-b">
          <EveryUser className="text-2xl" />
          <span>Your Teams</span>
        </div>
        <div>
          {!data.userTeams.length && (
            <div className="flex items-center gap-2 p-2">
              <ReactTooltip />
              <span> You have no teams yet</span>
              <button>
                <AddOne data-tip="Create a Team" className="text-xl" />
              </button>
            </div>
          )}
          {data.userTeams.map((team) => (
            <div key={team.id}>{team.name}</div>
          ))}
        </div>
      </div>
    );
}
