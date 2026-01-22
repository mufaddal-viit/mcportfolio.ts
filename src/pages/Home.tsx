import Available from "../components/Internal/Available";
import Theme from "../components/Internal/Theme";
import Resume from "../components/Internal/Resume";
import NavbarSocial from "../components/Internal/NavbarSocial";
import profilePhoto from "../assets/myself.jpeg";
import { TextAnimate } from "../components/ui/text-animate"
import AboutMe from "./AboutMe";

const Home = () => {
    return (
        <div className="mx-auto w-full max-w-6xl space-y-10 md:space-y-14">
            <div className="flex flex-col gap-6 border-b border-border px-4 py-6 md:flex-row md:items-center md:justify-between md:px-6">
                <div className="text-center md:text-left">
                    <p className="uppercase tracking-[0.25em] text-text-muted sm:tracking-[0.35em]">
                        <TextAnimate animation="scaleUp" as="h1">
                                Mufaddal Calcuttawala
                            </TextAnimate>
                        </p>
                        <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">
                            <TextAnimate animation="scaleUp" as="h1">
                                Full Stack Web Developer
                            </TextAnimate>
                        </h1>
                        <p className="mt-2 max-w-xl text-sm text-text-muted sm:text-base">
                            A passionate web developer with over 5 years of experience crafting responsive, user-focused web applications.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:items-end">
                        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
                            <Available />
                            <Theme />
                            <Resume />
                        </div>
                        <div className="mt-3 flex justify-center md:justify-end">
                            <NavbarSocial />
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <div className="h-44 w-36 overflow-hidden rounded-[36px] shadow-lg ring-1 ring-border/60 sm:h-48 sm:w-40 md:h-52 md:w-44 lg:h-60 lg:w-52">
                            <img
                                src={profilePhoto}
                                alt="Mufaddal Calcuttawala portrait"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <AboutMe />
        </div>
    );
};

export default Home;
