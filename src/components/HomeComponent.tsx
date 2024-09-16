const HomeComponent = () => {
  return (
    <section
      // style={{ backgroundImage: "url('/images/bg-header-desktop.png')" }}
      className="
        flex flex-col items-center justify-center gap-10
        min-h-screen bg-no-repeat bg-cover min-w-full
        DivPadding HomeBackgroundImage
    "
    >
      {/* Logo Image */}
      <div className="flex flex-row justify-center">
        <img src="/images/logo.svg" className="w-24 h-24 object-fill" />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-10">
        <h2 className="HeaderText">A history of everything you copy</h2>
        {/* <p className="text-xl text-slate-400 text-center xl:px-80">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p> */}
        <p className="mx-w-3xl mx-auto text-xl text-grayishBlue text-center">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4">
        <button
          className="
            bg bg-strongCyan py-3 w-[300px] md:w-[250px] rounded-full text-white text-lg
            hover:opacity-80 hover:-translate-y-0.5
            "
        >
          Donload for iOS
        </button>
        <button
          className="
            bg bg-lightBlue py-3 w-[300px] md:w-[250px] rounded-full text-white text-lg
            hover:opacity-80 hover:-translate-y-0.5
            "
        >
          Donload for Mac
        </button>
      </div>
    </section>
  );
};

export default HomeComponent;
