// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Extra = () => {
  const [bool, setBool] = useState(true);
  const [bool1, setBool1] = useState(true);
  const [bool2, setBool2] = useState(true);
  const [bool3, setBool3] = useState(true);
  const [bool4, setBool4] = useState(true);
  const [bool5, setBool5] = useState(true);
  const [email, setEmail] = useState("");

  return (
    <div>
      <div className="xl:flex xl:h-[800px] xl:w-[1518px] bg-black border-b-8 border-gray-600">
        <div className="xl:mt-[450px] xsm:pt-24 xl:pt-0  xl:ml-44 ">
          <h1 className="text-white xl:text-5xl xsm:text-3xl xl:ml-0 xsm:ml-16 font-bold">
            Enjoy on your TV
          </h1>
          <h1 className="text-white mt-5 xl:text-2xl xsm:text-xl xl:w-[600px] xsm:w-[382px] xl:ml-0 xsm:ml-6">
            Watch on smart TVs, PlayStation, Xbox,
            <br className="xl:hidden" />
            <span className="inline-block xl:inline xsm:block xsm:mr-2 xl:mr-0">
              Chromecast, Apple TV, Blu-ray players and{" "}
            </span>
            <span className="inline-block xl:inline xsm:block xsm:ml-36 xl:ml-0">
              more.
            </span>
          </h1>
        </div>
        <div className="xl:mt-72 xsm:mt-10 xl:ml-8 xsm:ml-4">
          <img
            className="xl:h-[400px] xsm:h-72 xl:w-[600px] xsm:w-[380px]"
            src="https://images.ctfassets.net/fltupc9ltp8m/2JRuWpOfcKdPpmnCyx2QkR/a26f2850ab06847709a51030ec1a01d8/Netflix-hero-YouPeople_1200.png?fm=webp&w=1900&q=80"
          ></img>
        </div>
      </div>
      <div className="xl:flex xl:h-[600px] xl:w-[1518px] bg-black border-b-8 border-gray-600">
        <div className="xl:mt-12">
          <img
            className="xl:h-[440px] xl:w-[650px]"
            src="https://static.wixstatic.com/media/14a182_a26998f929cc42dc83375fdca2515593~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/mobile-0819.jpg"
          ></img>
        </div>
        <div className="xl:mt-48 xsm:mt-10 xl:ml-20 xsm:ml-7">
          <h1 className="text-white xl:text-5xl xsm:text-3xl xl:ml-0 xsm:ml-4 font-bold ">
            Download your shows
          </h1>
          <h1 className="text-white xl:text-5xl xsm:text-3xl xl:ml-0 xsm:ml-14  font-bold xl:mt-4 xsm:mt-2">
            to watch offline
          </h1>
          <h1 className="text-white mt-5 xl:text-2xl xsm:text-lg xl:w-[600px] xsm:w-80 xl:ml-0 xsm:ml-5 ">
            Save your favourites easily and always <br className="xl:hidden" />
            <span className="inline-block xl:inline xsm:block xsm:ml-12 xl:ml-0">
              {" "}
              have something to watch.{" "}
            </span>
          </h1>
        </div>
      </div>
      <div className="xl:flex xl:h-[600px] xl:w-[1518px] bg-black border-b-8 border-gray-600">
        <div className="xl:mt-64  xl:ml-44 xsm:pt-12">
          <h1 className="text-white xl:text-5xl xsm:text-3xl xl:ml-0 xsm:ml-14 font-bold">
            Watch everywhere
          </h1>
          <h1 className="text-white mt-5 xl:text-2xl xsm:text-xl xl:w-[600px] xl:ml-0 xsm:ml-3">
            Stream unlimited movies and TV shows on <br className="xl:hidden" />
            <span className="inline-block xl:inline xsm:block xsm:ml-8 xl:ml-0">
              {" "}
              your phone, tablet, laptop, and TV.
            </span>
          </h1>
        </div>
        <div className="xl:mt-32 xsm:mt-6 xl:ml-8">
          <img
            className="xl:h-[430px]  xl:w-[650px]"
            src="https://static.wixstatic.com/media/14a182_e4eef291886b4827abb156c846eaf01b~mv2.png/v1/fill/w_714,h_535,al_c,lg_1,q_90,enc_auto/device-pile.png"
          ></img>
        </div>
      </div>
      <div className="xl:flex xl:h-[600px] xl:w-[1518px] bg-black border-b-8 border-gray-600">
        <div className="xl:mt-12 xl:ml-12">
          <img
            className="xl:h-[440px] xl:w-[600px]"
            src="https://occ-0-993-2219.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
          ></img>
        </div>
        <div className="xl:mt-48 xl:ml-20 xsm:mt-8">
          <h1 className="text-white xl:ml-0 xsm:ml-8 xl:text-5xl xsm:text-3xl font-bold ">
            Create profiles for kids
          </h1>

          <h1 className="text-white mt-5 xl:text-2xl xsm:text-xl xl:w-[600px] xl:ml-0 xsm:ml-5">
            Send children on adventures with their <br className="xl:hidden" />
            <span className="inline-block xl:inline xsm:block xsm:mr-3 xl:mr-0">
              {" "}
              favourite characters in a space made just
            </span>
            <span className="inline-block xl:inline xsm:block xsm:ml-2 xl:ml-0">
              for them—free with your membership.
            </span>
          </h1>
        </div>
      </div>
      <div className="h-full xl:w-[1518px] bg-black border-b-8 border-gray-600">
        <h1 className="text-white xl:text-5xl xsm:text-4xl font-bold xl:ml-[420px] xsm:ml-16  xl:pt-12 xsm:pt-9">
          Frequently Asked <br className="xl:hidden" />{" "}
          <span className="inline-block xl:inline xsm:block xsm:ml-10 xl:ml-0">
            Questions
          </span>
        </h1>

        <div>
          <button
            onClick={() => {
              setBool1(true);
              setBool(!bool);
              setBool2(true);
              setBool3(true);
              setBool4(true);
              setBool5(true);
            }}
            className="mt-7 xl:ml-48 xsm:ml-5 xl:h-20 xsm:h-16 xl:w-[1200px] xsm:w-[350px]  border-2 bg-neutral-700 text-white xl:text-2xl xl:pr-[940px] xsm:pr-[180px] hover:bg-slate-700 "
          >
            What is NetflixGPT?
          </button>
          {bool ? (
            ""
          ) : (
            <h1 className="text-white ml-48 w-[1200px] text-2xl border-2 mt-1 pl-6 pt-4 pb-4 bg-neutral-700">
              NetflixGPT is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices.<br></br> You can watch as
              much as you want, whenever you want, without a single ad – all for
              one low monthly price. There always something new to discover, and
              new TV shows and movies are added every week!
            </h1>
          )}
        </div>
        <div>
          <button
            onClick={() => {
              setBool1(!bool1);
              setBool(true);
              setBool2(true);
              setBool3(true);
              setBool4(true);
              setBool5(true);
            }}
            className="mt-3 xl:ml-48 xsm:ml-5 xl:h-20 xsm:h-16 xl:w-[1200px] xsm:w-[350px] border-2 bg-neutral-700 text-white xl:text-2xl xl:pr-[800px] xsm:pr-[90px] hover:bg-slate-700 "
          >
            How much does NetflixGPT cost?
          </button>
          {bool1 ? (
            ""
          ) : (
            <h1 className="text-white ml-48 w-[1200px]  xl:text-2xl border-2 mt-1 pl-6 pt-4 pb-4 bg-neutral-700">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
            </h1>
          )}
        </div>
        <div>
          <button
            onClick={() => {
              setBool1(true);
              setBool(true);
              setBool2(!bool2);
              setBool3(true);
              setBool4(true);
              setBool5(true);
            }}
            className="mt-3 xl:ml-48 xsm:ml-5 xl:h-20 xsm:h-16 xl:w-[1200px] xsm:w-[350px]  border-2 bg-neutral-700 text-white xl:text-2xl xl:pr-[940px] xsm:pr-[180px] hover:bg-slate-700 "
          >
            Where I can watch?
          </button>
          {bool2 ? (
            ""
          ) : (
            <h1 className="text-white ml-48 w-[1200px] text-2xl border-2 mt-1 pl-6 pt-4 pb-4 bg-neutral-700">
              Watch anywhere, anytime. Sign in with your NetflixGPT account to
              watch instantly on the web at netflixgpt.com from your personal
              computer or on any internet-connected device that offers the
              NetflixGPT app, including smart TVs, smartphones, tablets,
              streaming media players and game consoles. You can also download
              your favourite shows with the iOS, Android, or Windows 10 app. Use
              downloads to watch while you are on the go and without an internet
              connection. Take NetflixGPT with you anywhere.
            </h1>
          )}
        </div>
        <div>
          <button
            onClick={() => {
              setBool1(true);
              setBool(true);
              setBool2(true);
              setBool3(!bool3);
              setBool4(true);
              setBool5(true);
            }}
            className="mt-3 xl:ml-48 xsm:ml-5 xl:h-20 xsm:h-16 xl:w-[1200px] xsm:w-[350px]  border-2 bg-neutral-700 text-white xl:text-2xl xl:pr-[970px] xsm:pr-[190px] hover:bg-slate-700 "
          >
            How do I cancel?
          </button>
          {bool3 ? (
            ""
          ) : (
            <h1 className="text-white ml-48 w-[1200px] text-2xl border-2 mt-1 pl-6 pt-4 pb-4 bg-neutral-700">
              NetflixGPT is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </h1>
          )}
        </div>
        <div>
          <button
            onClick={() => {
              setBool1(true);
              setBool(true);
              setBool2(true);
              setBool3(true);
              setBool4(!bool4);
              setBool5(true);
            }}
            className="mt-3 xl:ml-48 xsm:ml-5 xl:h-20 xsm:h-16 xl:w-[1200px] xsm:w-[350px] border-2 bg-neutral-700 text-white xl:text-2xl xl:pr-[800px] xsm:pr-[90px] hover:bg-slate-700 "
          >
            What can I Watch on NetflixGPT?
          </button>
          {bool4 ? (
            ""
          ) : (
            <h1 className="text-white ml-48 w-[1200px] text-2xl border-2 mt-1 pl-6 pt-4 pb-4 bg-neutral-700">
              NetflixGPT has an extensive library of feature films,
              documentaries, TV shows, anime, award-winning NetflixGPT
              originals, and more. Watch as much as you want, anytime you want.
            </h1>
          )}
        </div>
        <div>
          <button
            onClick={() => {
              setBool1(true);
              setBool(true);
              setBool2(true);
              setBool3(true);
              setBool4(true);
              setBool5(!bool5);
            }}
            className="mt-3 xl:ml-48 xsm:ml-5 xl:h-20 xsm:h-16 xl:w-[1200px] xsm:w-[350px] border-2 bg-neutral-700 text-white xl:text-2xl xl:pr-[830px] xsm:pr-[100px] hover:bg-slate-700 "
          >
            Is NetflixGPT is good for kids?
          </button>
          {bool5 ? (
            ""
          ) : (
            <h1 className="text-white ml-48 w-[1200px] text-2xl border-2 mt-1 pl-6 pt-4 pb-4 bg-neutral-700">
              The NetflixGPT Kids experience is included in your membership to
              give parents control while kids enjoy family-friendly TV shows and
              films in their own space.<br></br> Kids profiles come with
              PIN-protected parental controls that let you restrict the maturity
              rating of content kids can watch and block specific titles you
              don’t want kids to see.
            </h1>
          )}
          <h1 className="text-white  xl:text-2xl xsm:text-xl mt-6  xl:ml-96 xsm:ml-8">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h1>
          <div className="mt-4 xl:ml-[400px] mb-12">
            <input
              className="xl:text-xl h-12 xl:w-[450px] xsm:w-72 pl-5 xl:bg-slate-600 xsm:bg-slate-800 xsm:ml-10 xl:ml-0 rounded-md text-white opacity-80"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="Email address"
            ></input>
            {email === "" ? (
              <button className="xl:ml-2 xsm:ml-28 xl:mt-0 xsm:mt-3 h-12 xl:w-56 xsm:w-36 rounded-md bg-red-700 text-white xl:text-xl">
                Get Started
              </button>
            ) : (
              <Link to={`/signup/${email}`}>
                <button className="xl:ml-2 xsm:ml-28 xl:mt-0 xsm:mt-3 h-12 xl:w-56 xsm:w-36 rounded-md bg-red-700 text-white xl:text-xl">
                  Get Started
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
