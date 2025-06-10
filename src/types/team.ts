import { ImageQueryResult } from "./query-results";
import { TeamMember as GeneratedTeamMember } from "./sanity.types";

export type TeamMember = Omit<GeneratedTeamMember, "image"> & {
	_id: string;
	image: ImageQueryResult;
} & Required<Pick<GeneratedTeamMember, "name">>;
