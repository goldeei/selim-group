interface TeamMemberCardProps {
	children: React.ReactNode;
}

export const TeamMemberCard = ({ children }: TeamMemberCardProps) => {
	return (
		<div className="border-y p-4 bg-grey-light/10 max-w-6xl">{children}</div>
	);
};
