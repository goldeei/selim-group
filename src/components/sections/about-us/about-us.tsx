import { TeamMember, TeamMemberCard } from "@/components/about";
import { sanityFetch } from "@/sanity/live";
import { TEAM_QUERY } from "@/sanity/queries";
import { TeamMember as TeamMemberType } from "@/types/team";

export const AboutUs = async () => {
	const { data: teamMembers }: { data: TeamMemberType[] } = await sanityFetch({
		query: TEAM_QUERY.all,
	});

	return (
		<section
			id="about-us"
			className="h-screen min-h-fit flex flex-col bg-grey__lightest"
		>
			<h2 className="responsive mb-4 text-primary">About Us</h2>
			<div className="flex flex-col gap-2 px-12">
				{teamMembers.map((teamMember) => (
					<TeamMemberCard key={teamMember._id}>
						<TeamMember teamMember={teamMember} />
					</TeamMemberCard>
				))}
			</div>
		</section>
	);
};
