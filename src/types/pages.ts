import { TeamMember } from "./team";

export type AboutUsPage = {
	description: string;
	teamMembers: TeamMember[];
};

export type LandingPage = {
	title: string;
	description: string;
};
