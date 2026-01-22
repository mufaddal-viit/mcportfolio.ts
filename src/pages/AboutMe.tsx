import { Link } from "react-scroll";
import { aboutMeSection } from "../lib/data";
import { Card, CardContent } from "../components/ui/card";


const AboutMe = () => {
    return (
        <section id="about" className="px-4 py-12 sm:py-16">
            <Card className="mx-auto max-w-6xl border-0 bg-bg/60 text-text backdrop-blur-md shadow-lg">
                <CardContent className="px-6 py-8 sm:py-10">
                    <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-semibold sm:text-7xl text-brand">
                                {aboutMeSection.heading}
                            </h2>
                            <div className="mt-4 space-y-4 text-sm text-text sm:text-base">
                                {aboutMeSection.paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                            <div className="mt-6 flex justify-center md:justify-start">
                                <Link
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-120}
                                    to={aboutMeSection.cta.target}
                                    className="inline-flex items-center rounded-full border border-orange px-5 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-orange hover:text-slate-900"
                                >
                                    {aboutMeSection.cta.label}
                                </Link>
                            </div>
                        </div>
                        {/* <div className="flex justify-center md:justify-end">
                    <div className="relative h-60 w-44 overflow-hidden rounded-[40px] shadow-lg ring-1 ring-border/60 sm:h-72 sm:w-52 md:h-80 md:w-60">
                        <img
                            src={profilePhoto}
                            alt="Mufaddal Calcuttawala portrait"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div> */}
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

export default AboutMe;
