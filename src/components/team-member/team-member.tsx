import { TeamMember as TeamMemberType } from "@/types/team";

import { SanityImage } from "../common";

interface TeamMemberProps {
	teamMember: TeamMemberType;
}

const styles = {
	container: "relative z-0 flex justify-between gap-12",
	image: {
		container: "relative flex-shrink-0",
		wrapper: "w-72 h-96",
		image: "relative z-10 object-cover w-full h-full rounded-xs",
		underlay:
			"absolute w-full h-full -bottom-1.5 -left-1.5 bg-primary__light/50 rounded-xs",
	},
	content: {
		container: "flex flex-col p-4 flex-1",
		description: "text-primary__dark my-auto",
		certifications: "italic text-grey__dark mt-auto",
	},
} as const;

export const TeamMember = (props: TeamMemberProps) => {
	const { _id, name, description, certifications, image } = props.teamMember;

	return (
		<div key={_id} className={styles.container}>
			<div className={styles.image.container}>
				<div className={styles.image.wrapper}>
					<SanityImage
						image={image}
						alt={name}
						aspectRatio="3:4"
						className={styles.image.image}
						fill
					/>
				</div>
				<div className={styles.image.underlay} />
			</div>
			<div className={styles.content.container}>
				<h3>{name}</h3>
				<p className={styles.content.description}>{description}</p>
				{certifications && (
					<p className={styles.content.certifications}>
						{certifications.map((cert) => cert.title).join(", ")}
					</p>
				)}
			</div>
		</div>
	);
};
