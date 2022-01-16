import { Props } from "./pages/index";

export function Page({ children }: Props) {
	return (
		<div className="min-h-screen"> {children}</div>
	);
}
