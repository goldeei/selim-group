import { Brand } from "@/components/Brand";

export const NavBar = () => {
	return (
		<nav className="sticky top-0  h-fit bg-background p-2">
			<div className="max-content-width mx-auto flex justify-between">
				<Brand className="w-20 h-fit" />
			</div>
		</nav>
	);
};
