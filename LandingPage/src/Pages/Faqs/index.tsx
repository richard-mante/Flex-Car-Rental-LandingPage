import { TopNav } from "../../components/TopNav";
import { Button } from "../../components/widgets/Button";
import dashboard from "../../assets/dashboard.png";
import { Question } from "../../components/Question";
import faqs from "../../data/questions";
import Footer from "../../components/footer";
export const Faqs = () => {
  return (
    <div>
      <header className="min-h-screen w-screen bg-cover bg-no-repeat bg-hero-pattern flex flex-col items-center">
        <TopNav />
        <div className="flex flex-col gap-6 items-center justify-center h-full text-slate-700 max-w-custom py-24 md:py-32">
          <h1 className=" text-4xl md:text-6xl font-bold text-center sm:w-full">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600 px-0 md:px-16 text-center ">
            Welcome to our FAQ section! Here, you’ll find answers to the most
            common questions about using{" "}
            <span className="font-bold">Flex Drive</span>, whether you’re
            renting a car or listing your vehicle.
          </p>
        </div>

        <img
          src={dashboard}
          alt="dashboard"
          className="w-11/12 rounded-3xl relative object-contain scroll-rotate"
        />
      </header>

      <section className=" w-screen  bg-no-repeat flex flex-col items-center gap-24 px-8 md:px-16 lg:px-32 py-16 md:py-24">
        <div className="flex flex-wrap gap-6 w-full max-w-screen-lg">
          {faqs.map((faq, index) => {
            return (
              <Question
                question={faq.question}
                answer={faq.answer}
                key={index}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};
