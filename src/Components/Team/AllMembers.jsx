import { useEffect, useState } from "react";
import { FaGooglePlusG } from "react-icons/fa6";

const AllMembers = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("TeamCard.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        console.log(data);
      });
  }, []);

  const displayedCards = cards.slice(0, 4);

  return (
    <div>
      <div
        className=""
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/9FF6p1VH/pngwing-com-11-1.png')",
        }}
      >
        <div className="container mx-auto p-5 py-[105px] px-[5%]">
          <div>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
              {displayedCards.map((card) => (
                <div key={card.id} className="relative group bg-[#b7e9ff]">
                  {/* Card content */}
                  <div className="relative w-full overflow-hidden rounded shadow-lg">
                    {/* Image */}
                    <img
                      src={card.image}
                      className="object-cover w-full h-full"
                      alt={card.name}
                    />

                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 group-hover:scale-125">
                      <img
                        src={card.image}
                        className="object-cover w-full h-full"
                        alt={card.name}
                      />
                    </div>

                    {/* Blackish Overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

                    {/* SVG Icons */}
                    <div className="absolute inset-0 flex items-center justify-center text-center translate-y-16 md:translate-y-16 lg:translate-y-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ">
                      <ul className="flex space-x-3">
                        {/* Social Media Icons */}
                        {/* Social media links */}
                        <li>
                          <a
                            href="#"
                            title=""
                            className="flex items-center justify-center text-white bg-[#00A1E6] rounded-md w-7 h-7"
                          >
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="flex items-center justify-center text-white bg-[#00A1E6] rounded-md w-7 h-7"
                          >
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="flex items-center justify-center text-white bg-[#00A1E6] rounded-md w-7 h-7"
                          >
                            <svg
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                              <circle cx="16.806" cy="7.207" r="1.078"></circle>
                              <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="flex items-center justify-center text-white bg-[#00A1E6] rounded-md w-7 h-7"
                          >
                            <FaGooglePlusG />
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Overlay for Button */}
                    <div className="absolute inset-0 z-10 flex items-end p-6">
                      <button className="w-full py-3 bg-white group-hover:bg-[#00A1E6] transition duration-300 transform translate-y-0 group-hover:translate-y-6">
                        <h1 className="text-black font-rajdhani text-[28px] font-bold group-hover:text-white">
                          {card.name}
                        </h1>
                        <p className="text-[#00A1E6] font-rajdhani text-base font-[600] group-hover:text-white">
                          {card.designation}
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMembers;