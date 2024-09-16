import TextWithDescription from "./TextWithDescription";

const SecondComponent = () => {
  return (
    <div className="flex flex-col DivPadding md:px-14 mb-32 min-h-screen">
      {/* Main Text */}
      <div className="flex flex-col gap-10">
        <h2 className="HeaderText">Keep track of your snippets</h2>
        <p className="text-xl md:text-xl text-slate-400 text-center xl:px-80">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>

      {/* Image with Content */}
      <div className="flex flex-col lg:flex-row md:gap-10 items-center justify-center mt-20">
        <img src="/images/image-computer.png" className="max-w-[400px]" />

        <div className="flex flex-col gap-10 mt-12">
          <TextWithDescription
            title="Quick Search"
            description="Easily search your snippets by content, category, web address,
              application, and more."
          />

          <TextWithDescription
            title="iCloud Sync"
            description="Instantly saves and syncs snippets across all your devices."
          />

          <TextWithDescription
            title="Completely History"
            description="Retrieve any snippets from the first moment you started using the app."
          />
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
