import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import {
  AlertTriangle,
  ArrowRight,
  Banknote,
  Binary,
  Brain,
  Camera,
  Car,
  Check,
  Circle,
  Cpu,
  Database,
  DollarSign,
  Euro,
  Globe,
  Map,
  MapPin,
  Phone,
  Pin,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Wifi
} from "lucide-react";

const Navistride = () => {
  useGSAP(() => {
    gsap.to(".glow", {
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      scale: 2,
      transformOrigin: "50% 50%",
      filter: "blur(15px)",
      yoyo: true
    });
    gsap.to(".star", {
      duration: 1,
      ease: "power1.inOut",
      repeat: -1,
      opacity: 0,
      transformOrigin: "50% 50%",
      yoyo: true,
      stagger: {
        each: 0.25
      }
    });
    const heading = SplitText.create(".heading");
    const paragraph = SplitText.create(".paragraph");
    gsap
      .timeline()
      .from(".logo", {
        scale: 0.1,
        duration: 0.5
      })
      .from(heading.chars, {
        x: 150,
        opacity: 0,
        duration: 0.7,
        ease: "power4",
        stagger: 0.04
      })
      .from(
        paragraph.chars,
        {
          x: -150,
          opacity: 0,
          duration: 0.3,
          stagger: 0.04
        },
        "<"
      )
      .to(".action", {
        duration: 0.3,
        opacity: 100
      });

    gsap.to(".upDownIcons", {
      y: -52,
      rotate: 45,
      duration: 1.5,
      delay: 0.1,
      scale: 0.9,
      stagger: {
        each: 0.1,
        from: "center"
      },
      repeat: -1,
      yoyo: true
    });

    gsap
      .timeline({
        repeat: -1,
        yoyo: true
      })
      .to(".wonderer", {
        top: "45%",
        left: "45%",
        opacity: 50,
        duration: 10
      })
      .to(
        ".wonderer",
        {
          top: "5%",
          left: "60%",
          opacity: 100,
          duration: 10
        },
        ">"
      )
      .to(
        ".wonderer",
        {
          top: "90%",
          left: "90%",
          opacity: 100,
          duration: 10
        },
        ">"
      );

    gsap.to(".dollar", {
      y: -10,
      scale: 1.2,
      filter: "blur(0px)",
      duration: 1,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.25
    });
  }, []);
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden bg-[#10162d] relative">
      <section className="min-h-screen overflow-hidden w-screen absolute ">
        <div className="glow w-12 h-12 rounded-full bg-blue-300/30 blur absolute top-12 left-12"></div>
        <div className="glow w-12 h-12 rounded-full bg-blue-300/30 blur absolute bottom-12 right-12"></div>
        <div className="glow w-24 z-10 h-24 rounded-full bg-green-300/30 blur absolute top-1/2 left-4/5"></div>
        <div className="glow w-24 z-10 h-24 rounded-full bg-green-300/30 blur absolute bottom-1/4 right-4/5"></div>
        <div className="star w-4 h-4 rounded-full bg-blue-300/20 blur-xs absolute top-1/2 left-1/4"></div>
        <div className="star w-4 h-4 rounded-full bg-blue-300/20 blur-xs absolute top-1/3 left-1/3"></div>
        <div className="star w-4 h-4 rounded-full bg-blue-300/20 blur-xs absolute top-1/4 left-1/2"></div>
        <div className="star w-4 h-4 rounded-full bg-blue-300/20 blur-xs absolute top-1/3 right-1/3"></div>
        <div className="star w-4 h-4 rounded-full bg-blue-300/20 blur-xs absolute top-1/2 right-1/4"></div>
      </section>
      <section className="min-h-screen flex justify-center items-center flex-col gap-4 px-1 z-40">
        <img
          src="/navistride/navistride_logo.webp"
          className="w-sm md:w-md lg:w-xl xl:w-2xl logo"
          alt=""
        />
        <h1 className="text-green-400 drop-shadow-xl hover:drop-shadow-green-500/50 font-bold text-center text-3xl heading">
          Help Train the Future of Driving.
        </h1>
        <h2 className="text-white text-center text-xl paragraph">
          Get Paid While You Do It.
        </h2>
        <button className="bg-indigo-600/80 opacity-0 action flex items-center hover:scale-110 transition-all duration-200 gap-2 py-4 px-12 text-white text-lg font-medium rounded-full">
          <span>Try It Now</span>
          <ArrowRight size={20} />
        </button>
      </section>
      <section className="py-16 px-1 relative  flex lg:flex-row flex-col justify-center items-center gap-4 max-w-7xl mx-auto">
        <div className="glow w-24 z-10 h-24 rounded-full bg-green-300/30 blur absolute top-36 lg:top-1/2 lg:left-1/4"></div>
        <div className="text-white lg:w-1/2 space-y-4">
          <h2 className="text-5xl">
            Self-Driving Models Weren't Trained for a{" "}
            <span className="text-yellow-500 drop-shadow-xl hover:drop-shadow-yellow-500/50">
              Zombie Walk Event
            </span>
          </h2>
          <p className="leading-6 text-lg">
            Simulated data breaks down in unpredictable conditions. Flooded
            intersections. Halloween mobs. A goat on the highway.
          </p>
          <ul>
            <li className="flex items-center gap-2 py-1">
              <AlertTriangle color="yellow" size={20} />
              <span>Edge cases break AI systems</span>
            </li>
            <li className="flex items-center gap-2 py-1">
              <Globe color="lightBlue" size={20} />
              <span>Real-world data is irreplaceable</span>
            </li>
            <li className="flex items-center gap-2 py-1">
              <Pin color="lightGreen" size={20} />
              <span>Every mile tells a story</span>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 w-full relative">
          <span className="absolute top-1 right-1 z-50 bg-yellow-400 rounded p-2">
            Edge Case
          </span>
          <video
            src="https:/navistride.online/navistride_dashcam.mp4"
            controls
            className="w-full z-10 min-h-80 rounded-lg"
          ></video>
        </div>
      </section>
      <section className="py-16  max-w-7xl mx-auto relative">
        <div className="wonderer w-12 h-12 rounded-full bg-blue-300/20 blur-xs absolute"></div>
        <div className="flex flex-col justify-center items-center gap-4 text-white">
          <h3 className="text-5xl text-center">
            Simulation Isn't{" "}
            <span className="text-red-400  drop-shadow-xl hover:drop-shadow-red-500/50">
              Reality
            </span>
          </h3>
          <p className="text-center text-lg max-w-lg text-slate-200">
            LLMs Work Because They Trained on the Internet.{" "}
            <span className="text-yellow-500">
              AVs Fail Because They Train in a Sandbox.
            </span>
          </p>
        </div>
        <ul className="grid gird-cols-1 md:grid-cols-2 mt-12">
          <li className="text-center p-3 rounded-tl-xl md:border-r border-[#21273f] text-red-400 text-lg bg-[#21273fa2]">
            Simulated World
          </li>
          <li className="text-center p-3 md:rounded-tr-xl text-green-400 text-lg bg-[#21273fa2]">
            Real World
          </li>
          <li className="flex items-center gap-8 p-3 text-white border border-[#21273f] text-lg  bg-[#21273f3b]">
            <Target color="red" size={18} />
            <p>Clean roads, perfect markings</p>
          </li>
          <li className="flex items-center gap-8 p-3 text-white border border-[#21273f] text-lg  bg-[#21273f3b]">
            <Target color="green" size={18} />
            <p>Flash floods washing out road markers</p>
          </li>
          <li className="flex items-center gap-8 p-3 text-white border border-[#21273f] text-lg  bg-[#21273f3b]">
            <Target color="red" size={18} />
            <p>Programmed, predictable scenarios</p>
          </li>
          <li className="flex items-center gap-8 p-3 text-white border border-[#21273f] text-lg  bg-[#21273f3b]">
            <Target color="green" size={18} />
            <p>A sinkhole opening mid-intersection</p>
          </li>
          <li className="flex items-center gap-8 p-3 text-white border border-[#21273f] text-lg  bg-[#21273f3b]">
            <Target color="red" size={18} />
            <p>Ideal weather conditions</p>
          </li>
          <li className="flex items-center gap-8 p-3 text-white border border-[#21273f] text-lg  bg-[#21273f3b]">
            <Target color="green" size={18} />
            <p>Extreme snow, fog, or sun glare</p>
          </li>
        </ul>
      </section>
      <section className="py-16 px-1  max-w-7xl mx-auto">
        <div className="shadow-md rounded-lg flex flex-col gap-4 items-center p-16 relative bg-[#21273f3b]">
          <div className="star w-4 h-4 rounded-full bg-blue-300/30  absolute top-4 left-4"></div>
          <div className="star w-4 h-4 rounded-full bg-green-300/30  absolute bottom-4 left-4"></div>
          <div className="star w-4 h-4 rounded-full bg-blue-300/30  absolute bottom-4 right-4"></div>
          <ul className="flex gap-4">
            <li className="upDownIcons">
              <Database size={40} strokeWidth="2" color="green" />
            </li>
            <li className="upDownIcons">
              <Users size={40} strokeWidth="2" color="red" />
            </li>
            <li className="upDownIcons">
              <Globe size={40} strokeWidth="2" color="blue" />
            </li>
            <li className="upDownIcons">
              {" "}
              <TrendingUp size={40} strokeWidth="2" color="yellow" />
            </li>
            <li className="upDownIcons">
              <Brain size={40} strokeWidth="2" color="green" />
            </li>
            <li className="upDownIcons">
              <Car size={40} strokeWidth="2" color="red" />
            </li>
            <li className="upDownIcons">
              <Cpu size={40} strokeWidth="2" color="yellow" />
            </li>
            <li className="upDownIcons">
              <Binary size={40} strokeWidth="2" color="blue" />
            </li>
          </ul>
          <h2 className="text-white text-3xl text-center sm:text-5xl">
            The Solution:{" "}
            <span className="text-green-400 drop-shadow-xl hover:drop-shadow-green-500/50">
              Real Data from Real Drivers
            </span>
          </h2>
          <p className="text-center text-white text-lg max-w-4xl">
            Large language models succeed because they ingest massive,
            unfiltered human input—billions of sentences, contexts,
            contradictions. Self-driving cars need the same approach: real-world
            data from millions of real drivers in real conditions.
          </p>
        </div>
      </section>
      <section className="py-16  max-w-7xl mx-auto relative">
        <div className="wonderer w-12 h-12 rounded-full bg-green-300/20 blur-xs absolute"></div>
        <h2 className="text-5xl text-white text-center">
          Real People Drive{" "}
          <span className="text-yellow-400 drop-shadow-xl hover:drop-shadow-yellow-500/50">
            Differently
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8 p-1">
          <div className="md:w-[60%] w-full text-lg text-white shadow-md rounded-lg flex flex-col gap-8 p-4 lg:p-12 relative bg-[#21273f56]">
            <p>
              Simulations and test fleets can't replicate how real people use
              cars. They don't take spontaneous detours, run late to work, or
              drive cross-country on impulse. But you do.
            </p>
            <p>
              By capturing real drivers in real conditions, we gain access to
              behavior, routes, and decisions that artificial training sets
              miss—everything from rural dead zones to crowded school drop-offs.
            </p>
            <p className="text-blue-400">
              This is how machines learn what the road actually is: through your
              habits, your commutes, your unexpected turns.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src="/navistride/real_driving.webp"
              className="max-w-full aspect-5/6 object-cover rounded-lg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-1  max-w-7xl mx-auto relative">
        <div className="p-8 bg-linear-to-r from-[#272f7477] hover:shadow-xl shadow-blue-500/20 to-[#482d7d80] rounded-lg flex flex-col gap-4 items-center">
          <h5 className="text-5xl text-blue-400 text-center max-w-2xl">
            Training on real people means training on the truth.
          </h5>
        </div>
      </section>
      <section className="py-16  max-w-7xl mx-auto relative">
        <div className="wonderer w-12 h-12 rounded-full bg-yellow-300/20 blur-xs absolute"></div>
        <div className="star w-4 h-4 rounded-full bg-blue-300/20 blur-xs absolute top-12 right-12"></div>
        <div className="star w-4 h-4 rounded-full bg-blue-300/20 blur-xs absolute bottom-12 left-12"></div>
        <div className="star w-4 h-4 rounded-full bg-blue-300/20 blur-xs absolute top-12 left-12"></div>
        <h3 className="text-5xl text-white text-center">
          How it{" "}
          <span className="text-yellow-500 drop-shadow-xl hover:drop-shadow-yellow-500/50">
            Really Works
          </span>
        </h3>
        <ul className="flex flex-wrap justify-center gap-8 mt-8">
          <li className="lg:w-[30%] w-full px-4 py-12 rounded-lg bg-[#3470df1a]">
            <p className="flex justify-center items-center w-16 h-16 text-3xl text-white bg-blue-800/50 rounded-full">
              1
            </p>
            <div className="flex gap-2 text-blue-400 my-4">
              <Smartphone size={28} />
              <Camera size={28} />
            </div>
            <h6 className="text-xl font-medium text-white">Mount + Launch</h6>
            <p className="text-white mt-4">
              Open the app, mount your phone on the dashboard, and grant the
              required permissions. Your phone acts as a temporary sensor hub
              until the dedicated hardware* is built.
            </p>
          </li>
          <li className="lg:w-[30%] w-full px-4 py-12 rounded-lg bg-[#34df7315]">
            <p className="flex justify-center items-center w-16 h-16 text-3xl text-white bg-green-800/50 rounded-full">
              1
            </p>
            <div className="flex gap-2 text-green-400 my-4">
              <Car size={28} />
              <MapPin size={28} />
            </div>
            <h6 className="text-xl font-medium text-white">Just Drive</h6>
            <p className="text-white mt-4">
              Open the app, mount your phone on the dashboard, and grant the
              required permissions. Your phone acts as a temporary sensor hub
              until the dedicated hardware* is built.
            </p>
          </li>
          <li className="lg:w-[30%] w-full px-4 py-12 rounded-lg bg-[#2b22554b]">
            <p className="flex justify-center items-center w-16 h-16 text-3xl text-white bg-indigo-800/50 rounded-full">
              1
            </p>
            <div className="flex gap-2 text-indigo-400 my-4">
              <Banknote size={28} />
              <Euro size={28} />
            </div>
            <h6 className="text-xl font-medium text-white">Get Paid</h6>
            <p className="text-white mt-4">
              Open the app, mount your phone on the dashboard, and grant the
              required permissions. Your phone acts as a temporary sensor hub
              until the dedicated hardware* is built.
            </p>
          </li>
        </ul>
      </section>
      <section className="py-16  max-w-7xl mx-auto relative flex flex-wrap px-1">
        <div className="relative lg:w-1/2 w-full min-h-[360px]">
          <DollarSign
            color="lightGreen"
            size={18}
            className="absolute blur-xs dollar z-10 top-16 -left-16"
          />
          <DollarSign
            color="lightGreen"
            size={18}
            className="absolute blur-xs dollar z-10 -top-4 left-0"
          />
          <DollarSign
            color="lightGreen"
            size={18}
            className="absolute blur-xs dollar z-10 -top-8 left-24"
          />
          <DollarSign
            color="lightGreen"
            size={18}
            className="absolute blur-xs dollar z-10 -top-8 left-44"
          />
          <video
            src="https:/navistride.online/navistride_demo.mp4"
            className="w-full z-40 h-full absolute p-1 min-h-80 rounded-lg"
            controls
          ></video>
          <img
            src="/navistride/navistride_phone.png"
            className="absolute z-50 w-60 hover:scale-110 transition-all duration-200 h-fit lg:-bottom-12 lg:-left-12 bottom-0 left-0"
            alt=""
          />
        </div>
        <div className="space-y-4 lg:w-1/2 w-full px-4 mt-4 lg:mt-0">
          <h2 className="text-5xl text-white">
            The More You Drive,{" "}
            <span className="text-green-400 drop-shadow-xl hover:drop-shadow-green-500/50">
              the More You Earn
            </span>
          </h2>
          <p className="text-white">
            Whether you're going to work, delivering, or road-tripping—every
            mile contributes.
          </p>
          <p className="text-green-400 font-medium text-xl">
            We pay you for the data you generate. Simple as that.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            <li className="flex gap-4 items-center bg-blue-300/20 p-3 rounded-lg text-white">
              <Check size={18} color="lightGreen" />
              <span>Passive Income</span>
            </li>
            <li className="flex gap-4 items-center bg-blue-300/20 p-3 rounded-lg text-white">
              <Check size={18} color="lightGreen" />
              <span>No behavior tracking</span>
            </li>
            <li className="flex gap-4 items-center bg-blue-300/20 p-3 rounded-lg text-white">
              <Check size={18} color="lightGreen" />
              <span>Fully opt-in and encrypted</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-16  max-w-7xl mx-auto relative">
        <h1 className="text-5xl text-white text-center mb-8">
          Other{" "}
          <span className="text-green-400  drop-shadow-xl hover:drop-shadow-green-500/50">
            Applications
          </span>
        </h1>
        <p className="text-center text-white text-lg">
          Leverage your driving data beyond AV
        </p>
        <ul className="flex flex-wrap justify-center mt-8 gap-8">
          <li className="lg:w-[30%] w-full relative p-4 rounded-lg bg-[#3470df1a]">
            <div className="animate-pulse w-4 h-4 rounded-full bg-blue-300/60 absolute top-2 right-2"></div>
            <img
              src="/navistride/street_view.webp"
              alt=""
              className="w-full h-fit rounded-lg"
            />
            <h4 className="flex gap-2 text-xl text-blue-400 mt-4 items-center">
              <Map size={24} color="#50A3FF" />
              <span>Community Street Mapping</span>
            </h4>
            <p className="text-white mt-4">
              Populate open, up-to-date street view layers with real-time
              imagery.
            </p>
          </li>
          <li className="lg:w-[30%] w-full relative p-4 rounded-lg bg-[#34df7315]">
            <div className="animate-pulse w-4 h-4 rounded-full bg-green-300/60 absolute top-2 right-2"></div>
            <img
              src="/navistride/street_view.webp"
              alt=""
              className="w-full h-fit rounded-lg"
            />
            <h4 className="flex gap-2 text-xl text-green-400 mt-4 items-center">
              <Map size={24} color="lightGreen" />
              <span>Community Street Mapping</span>
            </h4>
            <p className="text-white mt-4">
              Populate open, up-to-date street view layers with real-time
              imagery.
            </p>
          </li>
          <li className="lg:w-[30%] w-full relative p-4 rounded-lg bg-[#2b22554b]">
            <div className="animate-pulse w-4 h-4 rounded-full bg-indigo-300/60 absolute top-2 right-2"></div>
            <img
              src="/navistride/street_view.webp"
              alt=""
              className="w-full h-fit rounded-lg"
            />
            <h4 className="flex gap-2 text-xl text-violet-400 mt-4 items-center">
              <Map size={24} color="#A684FF" />
              <span>Community Street Mapping</span>
            </h4>
            <p className="text-white mt-4">
              Populate open, up-to-date street view layers with real-time
              imagery.
            </p>
          </li>
        </ul>
      </section>
      <section className="py-16  max-w-7xl mx-auto relative px-1">
        <div className="glow w-12 h-12 rounded-full bg-blue-300/30 blur absolute top-12 left-12"></div>
        <div className="glow w-12 h-12 rounded-full bg-green-300/30 blur absolute bottom-12 right-12"></div>
        <div className="wonderer w-12 h-12 rounded-full bg-blue-300/20 blur-xs absolute"></div>
        <h1 className="text-5xl text-white text-center mb-8">
          You drive{" "}
          <span className="text-blue-400 drop-shadow-xl hover:drop-shadow-blue-500/50">
            the future
          </span>
        </h1>
        <p className="text-center text-white text-lg max-w-2xl mx-auto">
          Self-driving systems need diverse, real-world data. We're building the
          next dataset standard—from the ground up, with you.
        </p>
        <div className="flex flex-wrap justify-center items-center mt-8">
          <div className="relative lg:w-1/2 w-full min-h-[360px]">
            <div className="star w-4 h-4 rounded-full bg-blue-300 z-40 absolute right-4 top-4"></div>
            <div className="star w-4 h-4 rounded-full bg-blue-300 z-40 absolute right-20 top-20"></div>
            <div className="star w-4 h-4 rounded-full bg-blue-300 z-40 absolute right-28 bottom-28"></div>
            <div className="star w-4 h-4 rounded-full bg-blue-300 z-40 absolute left-12 top-12"></div>
            <div className="star w-4 h-4 rounded-full bg-blue-300 z-40 absolute right-4 top-4"></div>
            <span className="absolute z-40 bg-yellow-400 px-3 py-2 rounded-lg">
              Proof of Concept
            </span>
            <img
              src="/navistride/navistride_device.png"
              className="w-full h-fit rounded-lg z-0"
              alt=""
            />
          </div>
          <ul className="lg:w-1/2 p-4 w-full grid lg:grid-cols-2 h-fit gap-4">
            <li className="space-y-4 rounded-lg bg-[#3470df1a] hover:shadow-lg shadow-blue-500/20 p-4 group">
              <Camera
                size={24}
                color="lightBlue"
                className="group-hover:scale-125 transition-all"
              />
              <span className="text-white text-lg">360 camera</span>
              <div className="h-2 rounded bg-blue-400/60 mt-4"></div>
            </li>
            <li className="space-y-4 rounded-lg bg-[#34df5f1a] hover:shadow-lg shadow-green-500/20 p-4 group">
              <Circle
                size={24}
                color="lightGreen"
                className="group-hover:scale-125 transition-all"
              />
              <span className="text-white text-lg">Solid State Rador</span>
              <div className="h-2 rounded bg-green-400/60 mt-4"></div>
            </li>
            <li className="space-y-4 rounded-lg bg-[#6234df1a] hover:shadow-lg shadow-indigo-500/20 p-4 group">
              <Pin
                size={24}
                color="#6234df"
                className="group-hover:scale-125 transition-all"
              />
              <span className="text-white text-lg">RTK-Enhanced GPS</span>
              <div className="h-2 rounded bg-indigo-400/60 mt-4"></div>
            </li>
            <li className="space-y-4 rounded-lg bg-[#cedf341a] hover:shadow-lg shadow-yellow-500/20 p-4 group">
              <Wifi
                size={24}
                color="lightYellow"
                className="group-hover:scale-125 transition-all"
              />
              <span className="text-white text-lg">Cellular + Wi-Fi Sync</span>
              <div className="h-2 rounded bg-yellow-400/60 mt-4"></div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navistride;
