import {
  ArrowBigUp,
  CircleAlert,
  Leaf,
  Menu,
  Search,
  ShoppingCart,
  ThumbsUp
} from "lucide-react";
import "../assets/anime.css";
const AnimeFashion = () => {
  return (
    <div className="grid grid-cols-1 max-w-[1420px] mx-auto md:grid-cols-3 gap-4 p-2">
      <div className="box1 rounded-lg flex flex-col items-end justify-center relative aspect-square md:col-span-2 md:-mt-12 md:row-span-2">
        <h2 className="font-black text-end text-white text-xl md:text-4xl mr-4">
          Festive sale On
        </h2>
        <h1 className="font-black text-end text-white text-3xl md:text-6xl mr-4">
          Flpcart Fashion
        </h1>
        <p className="font-medium max-w-[320px] text-end text-white mr-4">
          we blend innovation with tradition to create unique fashion
          statements.
        </p>
        <button className=" rounded-full md:top-16 top-5 -left-0.5 md:left-4 md:p-3 bg-[#FAC5B4] absolute ">
          <Leaf size={40} />
        </button>
        <button className="absolute left-[46%] md:left-[47.5%] top-4 md:top-14 bg-[#FAC5B4] rounded-full md:py-4 md:px-8 py-1 px-3">
          <Search size={24} />
        </button>
        <button className="absolute left-[58.5%] md:left-[60%]  top-4 md:top-14 bg-[#FAC5B4] rounded-full md:py-4 md:px-8 py-1 px-3">
          <Menu size={24} />
        </button>
        <img
          src="/anime/anime1.png"
          className="max-w-2/3 absolute bottom-0 md:-bottom-6 left-0 md:left-6"
          alt=""
        />
        <div className="absolute box4 w-[130px] md:w-[270px] bottom-0 right-0 aspect-square">
          <img
            src="/anime/anime4.png"
            className="md:h-[400px] h-[200px] object-cover absolute -bottom-2 md:-bottom-4 right-0"
            alt=""
          />
        </div>
      </div>
      <div className="box2 relative max-h-[48vh] md:mt-4 mt-12  p-2 min-h-[420px] md:min-h-80">
        <h3 className="text-end font-bold text-lg mr-16 md:mr-20">SIZE</h3>
        <ul className="flex justify-end gap-2 mt-4  mr-16 md:mr-20">
          <li className="rounded-full w-12 text-center py-1 bg-white">XS</li>
          <li className="rounded-full w-12 text-center py-1 bg-white">SM</li>
          <li className="rounded-full w-12 text-center py-1 bg-white">L</li>
          <li className="rounded-full w-12 text-center py-1 bg-white">XL</li>
        </ul>
        <ul className="flex justify-end gap-2 mt-12  mr-16 md:mr-20">
          <li className="rounded-full w-6 h-6 bg-black"></li>
          <li className="rounded-full w-6 h-6 bg-white"></li>
          <li className="rounded-full w-6 h-6 bg-red-500"></li>
          <li className="rounded-full w-6 h-6 bg-blue-500"></li>
        </ul>
        <p className="text-end text-sm  mt-4 text-slate-500  mr-16 md:mr-20">
          From conceptual sketches to final garments, fashion designers follow.
        </p>
        <div className="flex justify-end flex-col  h-1/2 p-2 items-end  mr-16 md:mr-20">
          <span className="text-slate-600">Sold</span>
          <span className="text-6xl font-black">180</span>
        </div>
        <button className="absolute cursor-pointer left-[48%]  rounded-full p-1  top-0">
          <ThumbsUp />
        </button>
        <button className="absolute cursor-pointer left-[58%]  rounded-full p-1  top-0">
          <ShoppingCart />
        </button>
        <button className="absolute cursor-pointer top-[56%] rounded-full p-1  right-8 md:right-14">
          <ArrowBigUp size={24} />
        </button>
        <img
          src="/anime/anime2.png"
          className="max-w-2/3 absolute bottom-0 md:-bottom-6"
          alt=""
        />
      </div>
      <div className="box3 relative max-h-[48vh]  p-2 min-h-[420px] md:min-h-80">
        <h3 className="text-end font-bold text-lg mr-14 md:mr-20">SIZE</h3>
        <ul className="flex justify-end gap-2 mt-4  mr-14 md:mr-20">
          <li className="rounded-full w-12 text-center py-1 bg-white">XS</li>
          <li className="rounded-full w-12 text-center py-1 bg-white">SM</li>
          <li className="rounded-full w-12 text-center py-1 bg-white">L</li>
          <li className="rounded-full w-12 text-center py-1 bg-white">XL</li>
        </ul>
        <ul className="flex justify-end gap-2 mt-12  mr-14 md:mr-20">
          <li className="rounded-full w-6 h-6 bg-black"></li>
          <li className="rounded-full w-6 h-6 bg-white"></li>
          <li className="rounded-full w-6 h-6 bg-red-500"></li>
          <li className="rounded-full w-6 h-6 bg-blue-500"></li>
        </ul>
        <p className="text-end text-sm  mt-4 text-slate-500  mr-14 md:mr-20">
          From conceptual sketches to final garments, fashion designers follow.
        </p>
        <div className="flex justify-end flex-col  h-1/2 p-2 items-end  mr-16 md:mr-20">
          <span className="text-slate-600">Sold</span>
          <span className="text-6xl font-black">120</span>
        </div>

        <button className="absolute cursor-pointer left-[48%]  rounded-full p-1 top-0">
          <ThumbsUp />
        </button>
        <button className="absolute cursor-pointer left-[58%]  rounded-full p-1  top-0">
          <ShoppingCart />
        </button>
        <button className="absolute cursor-pointer top-[58%] rounded-full p-1  right-6 md:right-12">
          <ArrowBigUp size={24} />
        </button>
        <img
          src="/anime/anime3.png"
          className="max-w-2/3 absolute bottom-0 md:-bottom-6"
          alt=""
        />
      </div>
    </div>
  );
};

export default AnimeFashion;
