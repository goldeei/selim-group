import { Section } from "@/components/common/section";
import { TeamMember, TeamMemberCard } from "@/components/team-member";
import { MAIN_PAGE_SECTIONS } from "@/lib/constants";
import { sanityFetch } from "@/sanity/live";
import { getPageByType } from "@/sanity/queries";
import { AboutUsPage } from "@/types/pages";

const styles = {
	container: "flex flex-col bg-grey-lightest",
	content: "flex flex-col gap-2",
} as const;

export const AboutUs = async () => {
	const { data: aboutUsPage }: { data: AboutUsPage } = await sanityFetch({
		query: getPageByType("aboutUsPage"),
	});
	return (
		<Section id={MAIN_PAGE_SECTIONS.aboutUs.id} className={styles.container}>
			<h2 className="responsive mb-4 text-primary">
				{MAIN_PAGE_SECTIONS.aboutUs.title}
			</h2>
			<p className="responsive mb-4 text-primary">{aboutUsPage.description}</p>
			<div className={styles.content}>
				{aboutUsPage.teamMembers.map((teamMember) => (
					<TeamMemberCard key={teamMember._id}>
						<TeamMember teamMember={teamMember} />
					</TeamMemberCard>
				))}
			</div>
		</Section>
	);
};
