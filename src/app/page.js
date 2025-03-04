import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-2 w-full h-screen bg-blue-100">
          <div>
            <Image
            src = "/assets/logo.png"
            width={36}
            height={36}
            alt = "Logo"
            /> 
            <h4 className="text-lg font-semibold font-roboto">Chat Bot</h4>
          </div>
        </div>
        <div className="col-span-8"></div>
      </div>
    </div>
  );
}
