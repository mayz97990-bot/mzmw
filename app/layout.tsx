import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
	const requestHeaders = await headers();
	const host =
		requestHeaders.get("x-forwarded-host") ??
		requestHeaders.get("host") ??
		"localhost:3000";
	const protocol =
		requestHeaders.get("x-forwarded-proto") ??
		(host.startsWith("localhost") ? "http" : "https");

	return {
		metadataBase: new URL(`${protocol}://${host}`),
		title: {
			default: "May Zin Mar Win — SENIOR FRONT-END DEVELOPER",
			template: "%s — May Zin Mar Win",
		},
		description:
			"Portfolio of May Zin Mar Win, a SENIOR FRONT-END DEVELOPER building scalable web applications with React, Next.js, TypeScript, and NestJS.",
		openGraph: {
			title: "May Zin Mar Win — SENIOR FRONT-END DEVELOPER",
			description:
				"Scalable, high-performance web applications built with clarity and care.",
			type: "website",
			images: [
				{
					url: "/og.png",
					width: 1200,
					height: 630,
					alt: "May Zin Mar Win — SENIOR FRONT-END DEVELOPER",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: "May Zin Mar Win — SENIOR FRONT-END DEVELOPER",
			description:
				"Scalable, high-performance web applications built with clarity and care.",
			images: ["/og.png"],
		},
	};
}

const themeScript = `
  try {
    const saved = localStorage.getItem('portfolio-theme');
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.dataset.theme = saved || preferred;
  } catch (_) {
    document.documentElement.dataset.theme = 'dark';
  }
`;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
			</head>
			<body>{children}</body>
		</html>
	);
}
