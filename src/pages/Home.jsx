import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  Menu,
  ArrowRight,
  Upload,
  CheckCircle2,
  Target,
  ChartNoAxesColumnIncreasing,
  FileText
} from "lucide-react";

function Home() {
  const skills = ["Python", "FastAPI", "SQL", "REST APIs", "Git"];
  const missingSkills = ["Docker", "Redis"];

  const steps = [
    {
      number: "01",
      title: "Upload your resume",
      description:
        "Upload your resume and let CareerFit understand your skills and experience."
    },
    {
      number: "02",
      title: "AI analyzes your profile",
      description:
        "Our system compares your resume with job requirements and identifies matching skills."
    },
    {
      number: "03",
      title: "Get job matches",
      description:
        "Discover suitable job opportunities and understand which skills you need to improve."
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Job Matching Score",
      description:
        "Get a percentage score showing how well your profile matches a particular job."
    },
    {
      icon: ChartNoAxesColumnIncreasing,
      title: "Skill Gap Analysis",
      description:
        "Find out which skills you already have and which skills you need to develop."
    },
    {
      icon: FileText,
      title: "Resume Suggestions",
      description:
        "Get useful suggestions to improve your resume and increase your job opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7f8f3] text-[#171b1c] font-[Arial,Helvetica,sans-serif]">

      {/* NAVBAR */}

      <nav className="h-[76px] px-[8%] flex items-center justify-between bg-[#f7f8f3] max-[650px]:h-[65px] max-[650px]:px-[6%]">

        <Link
          to="/"
          className="flex items-center gap-[10px] text-[#171b1c] no-underline text-[22px] font-extrabold"
        >
          <span className="w-[17px] h-[17px] bg-[#087b51] rounded-[5px]" />
          CareerFit
        </Link>

        <div className="flex items-center gap-[30px] max-[650px]:hidden">

          <a
            href="#how-it-works"
            className="text-[#252b2b] no-underline text-sm font-semibold hover:text-[#087b51]"
          >
            How it works
          </a>

          <a
            href="#features"
            className="text-[#252b2b] no-underline text-sm font-semibold hover:text-[#087b51]"
          >
            Features
          </a>

          <Link
            to="/login"
            className="text-[#252b2b] no-underline text-sm font-semibold hover:text-[#087b51]"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="bg-[#111719] text-white px-[22px] py-[13px] rounded-[9px] no-underline text-sm font-semibold hover:bg-[#087b51] transition"
          >
            Get started
          </Link>

        </div>

        <Link
          to="/signup"
          className="hidden max-[650px]:block text-[#171b1c]"
          aria-label="Open signup"
        >
          <Menu size={25} />
        </Link>

      </nav>


      {/* HERO SECTION */}

      <section className="py-[85px] pb-[100px] px-[8%] grid grid-cols-2 gap-[65px] items-center min-h-[520px] max-[900px]:gap-[30px] max-[900px]:pt-[60px] max-[650px]:grid-cols-1 max-[650px]:px-[6%] max-[650px]:py-[55px] max-[650px]:gap-[40px]">

        {/* HERO CONTENT */}

        <div>

          <span className="inline-block bg-[#e3f3e9] text-[#087b51] px-[14px] py-[9px] rounded-[20px] text-xs font-bold mb-[25px]">
            AI-POWERED RESUME AND JOB MATCHING
          </span>

          <h1 className="text-[clamp(38px,5vw,62px)] leading-[1.08] tracking-[-2px] mb-[23px] font-bold max-[900px]:text-[43px] max-[650px]:text-[42px]">
            Know how well
            <br />
            you fit the job
            <br />
            before you apply.
          </h1>

          <p className="max-w-[500px] text-[#626969] leading-[1.8] text-base">
            Upload your resume once. CareerFit reads your skills,
            scores you against every opening, and shows exactly
            what is missing for the roles you want.
          </p>

          <div className="flex items-center gap-[25px] flex-wrap mt-[30px]">

            <Link
              to="/signup"
              className="inline-flex justify-center items-center gap-[10px] bg-[#087b51] text-white no-underline rounded-[9px] px-[22px] py-4 text-sm font-bold transition duration-200 hover:bg-[#056341] hover:-translate-y-0.5"
            >
              <Upload size={17} />
              Upload your resume
            </Link>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-[#202827] text-sm font-bold no-underline hover:text-[#087b51]"
            >
              See how it works
              <ArrowRight size={17} />
            </a>

          </div>

        </div>


        {/* SAMPLE FIT SCORE CARD */}

        <div className="bg-white p-7 border border-[#e7e9e4] rounded-[18px] shadow-[0_15px_35px_rgba(0,0,0,0.07)] max-[650px]:p-[22px]">

          <div className="flex justify-between gap-[15px] mb-[22px]">

            <div>
              <span className="text-[#777e7a] text-xs">
                SAMPLE RESULT
              </span>

              <h3 className="text-[19px] my-2 font-bold">
                Backend Developer
              </h3>

              <p className="text-[13px] text-[#777e7a]">
                Northwind Labs · Bengaluru
              </p>
            </div>

            <div className="flex flex-col items-end">

              <strong className="text-[#087b51] text-[38px]">
                86%
              </strong>

              <span className="text-xs text-[#777e7a]">
                Fit Score
              </span>

            </div>

          </div>


          {/* PROGRESS BAR */}

          <div className="w-full h-2 bg-[#e8ece7] rounded-[20px] overflow-hidden mb-[25px]">
            <div className="w-[86%] h-full bg-[#087b51] rounded-[20px]" />
          </div>


          {/* MATCHING SKILLS */}

          <div className="mt-5">

            <h4 className="text-[13px] mb-3 font-bold">
              Skills you already have
            </h4>

            <div className="flex flex-wrap gap-[9px]">

              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#e2f2e9] text-[#087b51] px-[11px] py-2 rounded-md text-xs font-semibold"
                >
                  <CheckCircle2 size={13} className="inline mr-1" />
                  {skill}
                </span>
              ))}

            </div>

          </div>


          {/* MISSING SKILLS */}

          <div className="mt-5">

            <h4 className="text-[13px] mb-3 font-bold">
              Skills to improve
            </h4>

            <div className="flex flex-wrap gap-[9px]">

              {missingSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#fff0d9] text-[#94601c] px-[11px] py-2 rounded-md text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section
        id="how-it-works"
        className="bg-[#111719] text-white py-[75px] px-[8%]"
      >

        <div className="max-w-[1250px] mx-auto">

          <h2 className="text-[32px] leading-[1.3] mb-[45px] font-bold max-[650px]:text-[27px] max-[650px]:mb-[30px]">
            How CareerFit Works
          </h2>

          <div className="grid grid-cols-3 gap-[25px] max-[900px]:gap-[15px] max-[650px]:grid-cols-1">

            {steps.map((step) => (
              <div
                key={step.number}
                className="border-t-2 border-[#54bd91] pt-[22px] max-[650px]:pb-[15px]"
              >

                <span className="text-[#58c99b] text-[13px] font-bold">
                  {step.number}
                </span>

                <h3 className="text-[19px] mt-[15px] mb-3 font-bold">
                  {step.title}
                </h3>

                <p className="text-[#b9c0bd] text-sm leading-[1.7]">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* FEATURES SECTION */}

      <section
        id="features"
        className="py-[85px] px-[8%] max-[650px]:py-[55px] max-[650px]:px-[6%]"
      >

        <div className="max-w-[1250px] mx-auto">

          <h2 className="max-w-[600px] mb-[15px] text-[32px] leading-[1.3] font-bold max-[650px]:text-[27px] max-[650px]:mb-[30px]">
            Everything you need for your career journey
          </h2>

          <p className="text-[#68706c] max-w-[650px] leading-[1.7] mb-[35px]">
            CareerFit helps you understand your strengths,
            identify missing skills and find better job opportunities.
          </p>

          <div className="grid grid-cols-3 gap-[22px] max-[900px]:gap-[15px] max-[650px]:grid-cols-1">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="bg-white border border-[#e6e9e4] rounded-[14px] p-7 min-h-[210px]"
                >

                  <Icon
                    size={27}
                    className="text-[#087b51] mb-5"
                  />

                  <h3 className="text-lg mb-3 font-bold">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#68706c] leading-[1.7]">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* CALL TO ACTION */}

      <section className="mx-[8%] mt-5 mb-[65px] py-[55px] px-5 bg-[#e3f3e9] rounded-[18px] text-center max-[650px]:mx-[6%] max-[650px]:mt-[15px] max-[650px]:mb-10 max-[650px]:py-10 max-[650px]:px-[15px]">

        <h2 className="text-[34px] leading-[1.3] mb-[25px] font-bold max-[650px]:text-[28px]">
          Ready to find your perfect job?
        </h2>

        <p className="text-[#68706c] text-sm leading-[1.7]">
          Start your career journey with CareerFit today.
        </p>

        <Link
          to="/signup"
          className="inline-flex items-center gap-2 mt-7 bg-[#087b51] text-white px-6 py-4 rounded-[9px] text-sm font-bold transition hover:bg-[#056341]"
        >
          Get Started
          <ArrowRight size={17} />
        </Link>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-[#e5e8e2] py-[25px] px-[8%] flex justify-between gap-[15px] text-[#68706c] text-xs max-[650px]:py-[22px] max-[650px]:px-[6%] max-[650px]:flex-col">

        <Link to="/" className="font-extrabold text-[#171b1c]">
          CareerFit
        </Link>

        <p>
          B.Tech Final Year Project
        </p>

        <p>
          © 2026 CareerFit. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;
