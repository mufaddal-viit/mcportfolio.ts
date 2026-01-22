import Available from "../components/Internal/Available";
import Theme from "../components/Internal/Theme";
import Resume from "../components/Internal/Resume";
import NavbarSocial from "../components/Internal/NavbarSocial";
import profilePhoto from "../assets/myself.jpeg";
import { TextAnimate } from "../components/ui/text-animate"
import AboutMe from "./AboutMe";
import { Separator } from "../components/ui/separator"
import { Card, CardContent } from "../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"


const Home = () => {
    return (
        <div className="mx-auto w-full max-w-6xl space-y-10 md:space-y-14">
            <section className="flex min-h-screen items-center">
                <Card className="w-full border-0 bg-bg/60 text-text ">
                    <CardContent className="px-4 py-6 md:px-6">
                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                            <div className="text-center md:text-left">
                                <TextAnimate animation="scaleUp" className="uppercase tracking-[0.25em] font-bold text-surface sm:tracking-[0.35em] ">
                                    Mufaddal Calcuttawala
                                </TextAnimate>

                                <TextAnimate animation="scaleUp" as={"h1"} className="mt-2 text-2xl font-semibold sm:text-3xl text-surface">
                                    Full Stack Web Developer
                                </TextAnimate>
                                <p className="mt-2 max-w-xl text-sm text-text/90 sm:text-base">
                                    A passionate web developer with over 5 years of experience crafting responsive, user-focused web applications.
                                </p>
                            </div>
                            <div className="flex flex-col items-center md:items-end">
                                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
                                    <Available />
                                    <Resume />
                                    <Theme />
                                </div>
                                <div className="mt-3 flex justify-center md:justify-end">
                                    <NavbarSocial />
                                </div>
                            </div>
                            <div className="flex justify-center md:justify-end">
                                <Avatar className="h-44 w-36 rounded-[36px] shadow-lg sm:h-48 sm:w-40 md:h-52 md:w-44 lg:h-60 lg:w-52">
                                    <AvatarImage
                                        src={profilePhoto}
                                        alt="Mufaddal Calcuttawala portrait"
                                        className="object-cover"
                                    />
                                    <AvatarFallback>MC</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>
            <Separator />
            <AboutMe />
        </div>
    );
};

export default Home;
