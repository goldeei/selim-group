import { TeamMember, TeamMemberCard } from "@/components/team-member";
import { sanityFetch } from "@/sanity/live";
import { getPageByType } from "@/sanity/queries";
import { AboutUsPage } from "@/types/pages";

const styles = {
	container: "h-screen min-h-fit flex flex-col bg-grey__lightest",
	content: "flex flex-col gap-2",
} as const;

export const AboutUs = async () => {
	const { data: aboutUsPage }: { data: AboutUsPage } = await sanityFetch({
		query: getPageByType("aboutUsPage"),
	});
	return (
		<section id="about-us" className={styles.container}>
			<h2 className="responsive mb-4 text-primary">About Us</h2>
			<p className="responsive mb-4 text-primary">{aboutUsPage.description}</p>
			<div className={styles.content}>
				{aboutUsPage.teamMembers.map((teamMember) => (
					<TeamMemberCard key={teamMember._id}>
						<TeamMember teamMember={teamMember} />
					</TeamMemberCard>
				))}
			</div>
		</section>
	);
};
