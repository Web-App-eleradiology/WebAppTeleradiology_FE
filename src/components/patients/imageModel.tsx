import Close from "../../dashboard/sidebar/icons/Close";
const ImageModel = ({
  setShowModal,
  image,
}: {
  setShowModal: (value: boolean) => void;
  image: string;
}) => {
  return (
    <>
      <div
        onClick={() => setShowModal(false)}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
      >
        <div className="relative mx-auto my-6 max-h-screen w-auto max-w-full">
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            <div className="absolute right-0 z-10 p-5">
              <button
                className="cursor-pointer text-black"
                onClick={() => setShowModal(false)}
              >
                <span className="h-2 w-2 text-2xl">
                  <Close />
                </span>
              </button>
            </div>
            <div className="relative flex-auto">
              <img src={image} alt="patient" />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
};

export default ImageModel;