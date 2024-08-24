import { TopNav } from "../../components/TopNav";
import { Button } from "../../components/widgets/Button";
import dashboard from "../../assets/dashboard.png";
import Footer from "../../components/footer";

export const About = () => {
  return (
    <>
      <header className="min-h-screen h-fit w-screen bg-cover bg-no-repeat bg-hero-pattern flex flex-col items-center">
        <TopNav />
        <div className="flex flex-col gap-6 items-center justify-center h-full text-slate-700 max-w-custom py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-bold text-center sm:w-full">
            About Us, Our Mission and What we Offer
          </h1>
          <p className="text-lg text-slate-600 px-0 md:px-16 text-center ">
            Welcome to <span className="font-bold">Flex Drive</span>, the
            innovative platform transforming the car rental experience in Ghana.
            Whether you're looking to rent a car for a few hours or planning to
            list your vehicle to earn extra income, we are here to connect you
            with the perfect match.
          </p>
        </div>
        <img
          src={dashboard}
          alt="dashboard"
          className="w-11/12 rounded-3xl relative object-contain scroll-rotate"
        />
      </header>
      <div className="min-h-screen w-screen bg-cover bg-no-repeat bg-body-background flex flex-col items-center">
        <div className="w-screen px-8 md:px-16 lg:px-32 pt-16 md:pt-24 flex flex-col items-center">
          <div className="flex flex-col gap-6 items-center justify-center w-sreen h-full text-slate-700 md:w-custom py-12">
            <h1 className="text-5xl font-bold text-center ">Our Mission </h1>
            <p className="text-lg text-slate-600 px-0 md:px-16 text-center ">
              Our mission is to make car rentals seamless, affordable, and
              accessible to everyone. We believe in empowering both renters and
              car owners by providing a platform that is secure, user-friendly,
              and efficient.
            </p>
          </div>
        </div>
        <div className="w-screen px-8 md:px-16 lg:px-32 pt-16 md:pt-24 flex flex-col items-center">
          <div className="flex flex-col gap-6 items-center justify-center w-sreen h-full text-slate-700 md:w-custom">
            <div className="flex flex-col gap-6 items-center justify-center w-sreen h-full text-slate-700 md:w-custom py-12">
              <h1 className="text-5xl font-bold text-center ">What We Offer</h1>
              <p className="text-lg text-slate-600 px-0 md:px-16 text-center ">
                At <span className="font-bold">Flex Drive</span>, we offer a
                diverse range of vehicles to meet your unique needs, from
                economy cars to luxury vehicles. Our easy-to-use app allows
                renters to browse, book, and drive, all in a matter of minutes.
                For car owners, we provide a hassle-free way to list your
                vehicle, manage bookings, and earn extra income, all while
                ensuring your car is protected and in good hands.
              </p>
            </div>
          </div>
        </div>

        <div className="w-screen px-8 md:px-16 lg:px-32 pt-16 md:pt-24 flex flex-col items-center">
          <div className="flex flex-col gap-6 items-center justify-center w-sreen h-full text-slate-700 md:w-custom">
            <div className="flex flex-col gap-6 items-center justify-center w-sreen h-full text-slate-700 md:w-custom py-12">
              <h1 className="text-5xl font-bold text-center ">
                Join Us on Our Journey
              </h1>
              <p className="text-lg text-slate-600 px-0 md:px-16 text-center ">
                Whether you’re looking to rent a car for your next adventure or
                list your vehicle to earn extra income
                <span className="font-bold">Flex Drive</span> is here to help.
                Join our growing community and experience the future of car
                rentals in Ghana.
              </p>
              <div className="flex gap-4">
                <Button
                  type="outline"
                  onClick={() => console.log("button is clicked")}
                >
                  Log In
                </Button>
                <Button
                  type="fill"
                  onClick={() => console.log("button is clicked")}
                >
                  Join us Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
