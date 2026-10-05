import { ThemeToggle } from "../components/ThemeToggle";

const projects = [
	{
		number: "01",
		name: "Hanbai Kanri (S1)",
		timeframe: "2024 — 2025",
		type: "Sales & construction project management",
		description:
			"A business management system used before construction site operations begin, supporting partner-company estimates, execution budgets, and financial planning for construction projects.",
		image: "/images/projects/s1-sales-management.png",
		imageAlt:
			"Hanbai Kanri sales and construction management interface shown on desktop and mobile",
		tone: "light",
		stack: ["Next.js", "NestJS", "TypeScript", "SCSS"],
		highlights: [
			"Built estimate and project-management workflows for partner companies",
			"Implemented execution budget and construction-related cost management",
			"Developed list, detail, search, and data-entry experiences for daily operations",
		],
	},
	{
		number: "02",
		name: "Construction Site Management (K2)",
		timeframe: "2025 — Present",
		type: "Construction site operations platform",
		description:
			"A construction site management platform designed to coordinate people, schedules, vehicles, and site operations across active projects.",
		image: "/images/projects/k2-construction-management.png",
		imageAlt:
			"K2 construction site scheduling interface shown on desktop and mobile",
		tone: "dark",
		stack: ["Next.js", "NestJS", "TypeScript", "MySQL"],
		highlights: [
			"Developed workflows for assigning staff to construction sites",
			"Built staff schedules, vehicle management, and site scheduling features",
			"Connected site-level operations with project and administrative data",
		],
	},
	{
		number: "03",
		name: "Admin Panel",
		timeframe: "2025 — Present",
		type: "Project administration & financial management",
		description:
			"An administrative platform for monitoring projects, financial activity, and system-level operations across the organization.",
		image: null,
		imageAlt: "",
		tone: "abstract",
		stack: ["Next.js", "NestJS", "TypeScript", "MySQL"],
		highlights: [
			"Built project-wide administration and monitoring screens",
			"Implemented income and expenditure management workflows",
			"Developed server and system administration functionality",
		],
	},
	{
		number: "04",
		name: "Matching M3",
		timeframe: "2023 — 2024",
		type: "Matching & operations system",
		description:
			"A matching and operations platform designed to turn business data into clear, task-focused workflows.",
		image: "/images/projects/m3-matching.png",
		imageAlt:
			"Matching M3 company search interface shown on desktop and mobile",
		tone: "dark",
		stack: ["Next.js", "NestJS", "TypeScript", "REST API"],
		highlights: [
			"Developed search, list, and detail workflows",
			"Built responsive interfaces for operational users",
			"Worked across frontend and backend application features",
		],
	},
];

const earlierProjects = [
	{
		name: "Gei Tassha Entertainer",
		type: "Web platform",
		year: "2020 — 2021",
		stack: "Laravel · Vue",
		contribution: "Responsive frontend implementation across web devices.",
	},
	{
		name: "Gei Tassha Mobile",
		type: "Mobile application",
		year: "2020 — 2021",
		stack: "Flutter",
		contribution: "End-to-end frontend UI implementation for mobile.",
	},
	{
		name: "Google for Jobs",
		type: "Job-search experience",
		year: "2019",
		stack: "PHP · Bootstrap",
		contribution: "Complete responsive frontend UI delivery.",
	},
] as const;

const stackGroups = [
	[
		"Core",
		[
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"React Native",
			"Vue.js",
		],
	],
	[
		"State & UI",
		[
			"Redux",
			"Zustand",
			"Tailwind CSS",
			"SCSS",
			"Responsive Design",
			"Figma",
		],
	],
	[
		"Backend & data",
		["Node.js", "NestJS", "REST APIs", "Laravel", "MySQL", "PostgreSQL"],
	],
	[
		"Workflow",
		[
			"Git",
			"GitHub",
			"Docker",
			"Adobe XD",
			"WordPress",
			"Agile Collaboration",
		],
	],
] as const;

const roles = [
	{
		period: "Mar 2023 — Present",
		role: "Full-Stack Developer",
		company: "O-Technique International Myanmar Co., Ltd",
		url: "https://o-technique-myanmar.com/en",
		details: [
			"Develop scalable business applications using Next.js, NestJS, and TypeScript.",
			"Design reusable UI architecture for list, detail, and advanced search workflows.",
			"Work across frontend and backend delivery with cross-functional teams.",
			"Resolve production issues and refine responsive behavior across devices.",
		],
	},
	{
		period: "Jul 2019 — Aug 2021",
		role: "Front-End Developer",
		company: "Management Partners Myanmar Co., Ltd",
		url: "https://management-partners.co.jp/",
		details: [
			"Built responsive web experiences with Vue and Laravel.",
			"Delivered the complete UI for a Flutter mobile application.",
			"Translated product requirements into maintainable, device-ready interfaces.",
		],
	},
	{
		period: "Jun 2016 — Feb 2019",
		role: "Web Developer",
		company: "Host Myanmar Co., Ltd",
		url: "https://www.hostmyanmar.net/",
		details: [
			"Created responsive WordPress and custom websites using semantic HTML, CSS, JavaScript, jQuery, and PHP.",
			"Worked across frontend and backend implementation from initial build through launch.",
			"Established a strong foundation in accessible, mobile-friendly web development.",
		],
	},
] as const;

function Arrow() {
	return <span aria-hidden="true">↗</span>;
}

export default function Home() {
	return (
		<main>
			<section className="hero" id="home">
				<header className="site-header shell">
					<a
						className="monogram"
						href="#home"
						aria-label="May Zin Mar Win — home"
					>
						M<span>/</span>W
					</a>

					<nav className="desktop-nav" aria-label="Main navigation">
						<a href="#about">About</a>
						<a href="#work">Projects</a>
						<a href="#experience">Experience</a>
						<a href="#contact">Contact</a>
					</nav>

					<div className="header-actions">
						<ThemeToggle />
						<a
							className="header-cta"
							href="mailto:mayz97990@gmail.com"
						>
							Let&apos;s talk <Arrow />
						</a>
						<details className="mobile-menu">
							<summary aria-label="Open navigation">Menu</summary>
							<nav aria-label="Mobile navigation">
								<a href="#about">About</a>
								<a href="#work">Projects</a>
								<a href="#experience">Experience</a>
								<a href="#contact">Contact</a>
							</nav>
						</details>
					</div>
				</header>

				<div className="hero-grid shell">
					<div className="hero-kicker">
						<span className="availability-dot" />
						Yangon, Myanmar
					</div>

					<div className="hero-copy">
						<p className="hero-label">SENIOR FRONT-END DEVELOPER</p>
						<h1>
							I build digital products that feel <em>clear</em>,
							fast &amp; human.
						</h1>
						<p className="hero-intro">
							Building scalable, high-performance web applications
							with React, Next.js and TypeScript — from thoughtful
							interfaces to reliable APIs.
						</p>
						<div className="hero-actions">
							<a className="button button--primary" href="#work">
								View projects <Arrow />
							</a>
							<a
								className="button button--ghost"
								href="/resume.pdf"
								download
							>
								Download resume{" "}
								<span aria-hidden="true">↓</span>
							</a>
						</div>
					</div>

					<aside className="hero-aside" aria-label="Career summary">
						<div className="hero-stat">
							<strong>08+</strong>
							<span>years building for the web</span>
						</div>
						<div className="hero-now">
							<span>Currently</span>
							<p>
								Full-Stack Developer at O-Technique
								International Myanmar
							</p>
						</div>
					</aside>
				</div>

				<div className="ticker" aria-hidden="true">
					<div>
						React <i>✦</i> Next.js <i>✦</i> TypeScript <i>✦</i>{" "}
						NestJS <i>✦</i>
						Responsive UI <i>✦</i> React <i>✦</i> Next.js <i>✦</i>{" "}
						TypeScript <i>✦</i>
						NestJS <i>✦</i> Responsive UI <i>✦</i>
					</div>
				</div>
			</section>

			<section className="about section shell" id="about">
				<div className="section-index">01 / About</div>
				<div className="about-copy">
					<h2>
						Product-minded engineering, built on a strong frontend
						foundation.
					</h2>
					<div className="about-text">
						<p>
							I&apos;m a Front-End Developer with 8+ years of
							experience creating responsive websites, web
							applications, and mobile interfaces. Today, I work
							across the stack with Next.js, NestJS, and
							TypeScript.
						</p>
						<p>
							I care about scalable component systems, precise
							implementation, and interfaces that stay clear under
							real-world complexity. I enjoy collaborating with
							design, backend, and product teams to turn
							requirements into dependable software.
						</p>
					</div>
				</div>
				<div className="about-note">
					<span>My approach</span>
					<p>
						Understand the system. Simplify the experience. Ship
						with care.
					</p>
				</div>
			</section>

			<section className="stack-section" id="stack">
				<div className="shell section">
					<div className="section-heading">
						<div className="section-index">02 / Capabilities</div>
						<h2>Tools I use to move ideas into production.</h2>
					</div>

					<div className="stack-grid">
						{stackGroups.map(([title, items], index) => (
							<article className="stack-card" key={title}>
								<div className="stack-card-top">
									<span>0{index + 1}</span>
									<h3>{title}</h3>
								</div>
								<ul>
									{items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="projects section shell" id="work">
				<div className="section-heading projects-heading">
					<div className="section-index">03 / Selected work</div>
					<h2>Systems designed for real work.</h2>
					<p>
						Recent confidential products are shown without client
						data. A guided walkthrough is available during
						interviews.
					</p>
				</div>

				<div className="project-list">
					{projects.map((project) => (
						<article
							className={`project-card project-card--${project.tone}`}
							key={project.name}
						>
							<div className="project-visual">
								{project.image ? (
									<img
										src={project.image}
										alt={project.imageAlt}
										width="1200"
										height="620"
										loading="lazy"
										decoding="async"
									/>
								) : (
									<div
										className="admin-visual"
										aria-hidden="true"
									>
										<div className="admin-visual-topline">
											<span>Control center</span>
											<span>System online</span>
										</div>
										<strong>03</strong>
										<div className="admin-visual-panels">
											<span />
											<span />
											<span />
										</div>
										<p>Projects / Finance / System</p>
									</div>
								)}
								<div className="project-visual-label">
									<span>Selected system</span>
									<strong>{project.number}</strong>
								</div>
							</div>

							<div className="project-content">
								<div className="project-meta">
									<span>{project.number}</span>
									<span>{project.timeframe}</span>
								</div>
								<div className="project-title-row">
									<div>
										<p>{project.type}</p>
										<h3>{project.name}</h3>
									</div>
									<span className="case-badge">
										Case study on request
									</span>
								</div>
								<p className="project-description">
									{project.description}
								</p>
								<ul className="project-highlights">
									{project.highlights.map((highlight) => (
										<li key={highlight}>{highlight}</li>
									))}
								</ul>
								<div className="tag-row">
									{project.stack.map((item) => (
										<span key={item}>{item}</span>
									))}
								</div>
							</div>
						</article>
					))}
				</div>

				<div className="earlier-work">
					<div className="earlier-heading">
						<h3>Earlier builds</h3>
						<p>
							Web and mobile products that shaped my frontend
							foundation.
						</p>
					</div>
					<div className="earlier-list">
						{earlierProjects.map((project) => (
							<article key={project.name}>
								<div>
									<span>{project.year}</span>
									<h4>{project.name}</h4>
									<p>{project.type}</p>
								</div>
								<p>{project.contribution}</p>
								<strong>{project.stack}</strong>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="experience-section" id="experience">
				<div className="shell section">
					<div className="section-heading experience-heading">
						<div className="section-index">04 / Experience</div>
						<h2>From websites to complex application systems.</h2>
					</div>

					<div className="timeline">
						{roles.map((role, index) => (
							<article className="role" key={role.company}>
								<div className="role-number">0{index + 1}</div>
								<p className="role-period">{role.period}</p>
								<div className="role-main">
									<h3>{role.role}</h3>
									<a
										href={role.url}
										target="_blank"
										rel="noreferrer"
									>
										{role.company} <Arrow />
									</a>
									<ul>
										{role.details.map((detail) => (
											<li key={detail}>{detail}</li>
										))}
									</ul>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="education section shell" id="education">
				<div className="section-heading education-heading">
					<div className="section-index">05 / Education</div>
					<h2>Always learning, always refining.</h2>
				</div>

				<div className="credential-grid">
					<article>
						<span>Degree</span>
						<h3>B.Sc. in Mathematics</h3>
						<p>West Yangon University</p>
					</article>
					<article>
						<span>Diploma</span>
						<h3>Diploma in Information Technology</h3>
						<p>West Yangon Technological University</p>
					</article>
					<article>
						<span>Languages</span>
						<h3>Japanese JLPT N5 / NAT-TEST N3</h3>
						<p>Currently studying at N2 level</p>
					</article>
					<article>
						<span>Professional study</span>
						<h3>Advanced Web Professional</h3>
						<p>Professional Web Developer Course · Fairway</p>
					</article>
				</div>
			</section>

			<section className="contact" id="contact">
				<div className="shell contact-inner">
					<div className="contact-kicker">
						<span className="availability-dot" />
						Open to meaningful opportunities
					</div>
					<h2>
						Have a product to build or a problem to{" "}
						<em>untangle?</em>
					</h2>
					<a
						className="contact-email"
						href="mailto:mayz97990@gmail.com"
					>
						mayz97990@gmail.com <Arrow />
					</a>

					<footer>
						<div>
							<a
								className="monogram"
								href="#home"
								aria-label="Back to top"
							>
								M<span>/</span>W
							</a>
							<p>SENIOR FRONT-END DEVELOPER · Yangon, Myanmar</p>
						</div>
						<div className="footer-links">
							<a href="tel:+959250686687">+95 9 250 686 687</a>
							<a href="/resume.pdf" download>
								Resume ↓
							</a>
							<a href="#home">Back to top ↑</a>
						</div>
						<p className="copyright">© 2026 May Zin Mar Win</p>
					</footer>
				</div>
			</section>
		</main>
	);
}
