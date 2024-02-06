const PreviewContainer = () => {
  return (
    <div className="fixed md:mt-12 lg:mt-8 max-w-80 lg:max-w-[540px] md:max-w-72 w-full right-0 top-0 bottom-0 z-0 h-full p-8 hidden md:grid place-items-center border-l border-gray-200">
      <div className="max-w-[275px] h-full md:max-h-[450px] lg:max-h-[540px] border-[12px] border-gray-400 rounded-[40px] overflow-hidden select-none shadow-md">
        <iframe
          className="w-full h-full border-none"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
          title="Preview"
        ></iframe>
      </div>
    </div>
  );
};

export default PreviewContainer;
