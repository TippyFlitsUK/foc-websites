import { useAccount } from "wagmi";
import * as Icons from "@/components/icons.tsx";
import { NetworkSelector } from "@/components/network-selector.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Toaster } from "@/components/ui/sonner.tsx";
import { ConnectSection } from "./components/connect-section.tsx";
import { PaymentsAccount } from "./components/payments-account.tsx";
import { Services } from "./components/services.tsx";
import { WalletMenu } from "./components/wallet-menu.tsx";

export function App() {
	const { isConnected } = useAccount();
	// const client = useClient()
	// if (client) {
	//   readAddresses(client).then((addresses) => {
	//     console.log(addresses)
	//   })
	// }
	return (
		<div>
			<header>
				<nav
					aria-label="Global"
					className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				>
					<div className="flex flex-row gap-2 items-center">
						<a className="" href="/">
							<Icons.Filecoin className="w-8 h-8" />
						</a>
						<span className="text-xl font-bold">Filecoin Onchain Cloud</span>
					</div>
					<div className="flex flex-row gap-3 items-center">
						{isConnected && <WalletMenu />}
						<NetworkSelector />
						<Button asChild size="icon" variant="ghost">
							<a
								href="https://github.com/FilOzone/synapse-sdk"
								rel="noopener noreferrer"
								target="_blank"
							>
								<Icons.Github />
							</a>
						</Button>
					</div>
				</nav>
			</header>
			<main>
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
					{isConnected && <PaymentsAccount />}
					{isConnected && <Services />}
					{!isConnected && <ConnectSection />}
				</div>
			</main>
			<footer className="w-full text-center pt-8 pb-4 mt-8 border-t border-border">
				<a
					className="inline-flex items-center gap-3 no-underline"
					href="https://filecoin.cloud"
					rel="noopener"
					target="_blank"
				>
					<span className="text-sm text-muted-foreground">Hosted on</span>
					<img
						alt="Filecoin Onchain Cloud"
						className="h-12 w-auto"
						loading="lazy"
						src="/foc-logo-dark.svg"
					/>
				</a>
			</footer>
			<Toaster richColors={true} theme="system" />
		</div>
	);
}
