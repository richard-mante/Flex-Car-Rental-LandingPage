import { TopNav } from "../../components/TopNav";
import dashboard from "../../assets/dashboard.png";
import brandLogo from "../../assets/brandLogo.svg";
import { Feature } from "../../components/widgets/Feature";
import Footer from "../../components/footer";
export const Services = () => {
  return (
    <div>
      <header className="min-h-screen w-screen bg-cover bg-no-repeat bg-hero-pattern flex flex-col items-center">
        <TopNav />
        <div className="flex flex-col gap-6 items-center justify-center h-full text-slate-700 max-w-custom py-24 md:py-32">
          <h1 className=" text-4xl md:text-6xl font-bold text-center sm:w-full">
            Explore Our Comprehensive Services
          </h1>
          <p className="text-lg text-slate-600 px-0 md:px-16 text-center ">
            At <span className="font-bold">Flex Drive</span>, we provide a wide
            range of services designed to meet the unique needs of both car
            renters and owners. Whether you’re looking to rent a vehicle or list
            your car for others to use, our platform ensures a seamless, secure,
            and efficient experience.
          </p>
        </div>

        <img
          src={dashboard}
          alt="dashboard"
          className="w-11/12 rounded-3xl relative object-contain scroll-rotate"
        />
      </header>
      <div className="min-h-screen w-screen bg-cover bg-no-repeat bg-body-background flex flex-col items-center px-8 md:px-16 lg:px-32 pt-16 md:pt-24">
        <div className="w-full  flex flex-col items-center gap-24">
          <div className="flex flex-col gap-6 items-center justify-center w-full h-full text-slate-700 md:max-w-custom">
            <h1 className="text-3xl md:text-5xl font-bold text-center ">
              What we Offer
            </h1>
            <p className="text-lg text-slate-600 px-0 md:px-16 text-center ">
              Flexible options for renters and owners. Whether you need a car or
              have one to rent, we've got you covered.
            </p>
          </div>
          <div className=" flex flex-col gap-8 lg:gap-0 lg:flex-row items-center lg:items-stretch justify-center w-full md:px-16 lg:px-32">
            <div className="border-2 border-solid border-red-100 rounded-3xl flex flex-col gap-6 px-12 py-16 w-full max-w-container sm:grow">
              <h3 className="font-semibold text-xl">For Car Renters</h3>
              <p className="min-w-32 text-slate-600">
                Unlock the freedom to drive the car of your dreams with our
                easy-to-use car rental service. Whether you need a vehicle for a
                weekend getaway, a business trip, or just to run errands, we’ve
                got you covered. Here’s what we offer
              </p>
              <div className="flex flex-col gap-4">
                <Feature>
                  Wide Selection of Vehicles: Choose from a variety of cars,
                  including sedans, SUVs, luxury vehicles, and more.
                </Feature>
                <Feature>
                  Wide Selection of Vehicles: Choose from a variety of cars,
                  including sedans, SUVs, luxury vehicles, and more.
                </Feature>
                <Feature>
                  Instant Booking: Quickly reserve a car with real-time
                  availability.
                </Feature>
                <Feature>
                  Comprehensive Insurance: Enjoy peace of mind with full
                  coverage options.
                </Feature>
                <Feature>
                  24/7 Customer Support: Get assistance whenever you need it,
                  day or night.
                </Feature>
                <Feature>
                  Easy Payment Options: Pay securely through multiple payment
                  gateways.
                </Feature>
                <Feature>
                  GPS Navigation: Access to GPS-enabled vehicles for hassle-free
                  travel.
                </Feature>
                <Feature>
                  Convenient Pick-up & Drop-off: Choose locations that work best
                  for you.
                </Feature>
              </div>
            </div>
            <img src={brandLogo} alt="brand logo" />
            <div className="overflow-hidden border-2 border-solid border-red-100 rounded-3xl flex flex-col gap-6 px-12 py-16 w-full max-w-container sm:grow">
              <h3 className="font-semibold text-xl">For Car Renters</h3>
              <p className="min-w-32 text-slate-600">
                Unlock the freedom to drive the car of your dreams with our
                easy-to-use car rental service. Whether you need a vehicle for a
                weekend getaway, a business trip, or just to run errands, we’ve
                got you covered. Here’s what we offer
              </p>
              <div className="flex flex-col gap-4">
                <Feature>
                  Earn Extra Income: Rent out your car when it's not in use and
                  earn money.
                </Feature>

                <Feature>
                  Flexible Listing Options: Set your own rental rates and
                  availability.
                </Feature>

                <Feature>
                  Insurance Coverage: Get your car insured during the rental
                  period.
                </Feature>

                <Feature>
                  Vehicle Maintenance Tracking: Keep track of your car's
                  condition and maintenance schedule.
                </Feature>

                <Feature>
                  Secure Transactions: All payments are handled securely through
                  the app.
                </Feature>

                <Feature>
                  24/7 Support: Dedicated support for any issues or inquiries.
                </Feature>

                <Feature>
                  Performance Analytics: Monitor your earnings and rental
                  activity through a user-friendly dashboard.
                </Feature>

                <Feature>
                  Customizable Rental Terms: Define terms and conditions for
                  your vehicle's rental.
                </Feature>

                <Feature>
                  Automatic Booking Management: Let the app handle bookings,
                  reminders, and notifications.
                </Feature>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
