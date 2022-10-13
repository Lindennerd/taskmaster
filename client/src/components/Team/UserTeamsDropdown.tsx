import { gql, useQuery } from "@apollo/client";
import { DropDownList } from "@icon-park/react";
import * as Select from "@radix-ui/react-select";
import Loading from "react-loading";
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
      <Select.Root>
        <Select.Trigger>
          <Select.Value placeholder="Select a Team" />
          <Select.Icon>
            <DropDownList />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content>
            <Select.Viewport>
              {data &&
                data.userTeams.map((team) => (
                  <Select.Item value={team.id.toString()} key={team.id}>
                    <Select.ItemText>{team.name}</Select.ItemText>
                  </Select.Item>
                ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    );
}
