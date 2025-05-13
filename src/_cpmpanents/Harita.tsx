import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import axios from "axios";
import { Clock2, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

function Harita() {
  const [address, setAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>();

  const getAddressFromCoords = async (lat: number, lon: number) => {
    try {
      const res = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
      );
      return res.data.display_name;
    } catch (err) {
      console.error("Reverse geocoding error:", err);
      return null;
    }
  };

  return (
    <div className="bg-black container m-auto min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[#ffe000] text-5xl md:text-6xl font-bold mb-8 leading-tight">
            получите бесплатный первый урок
          </h2>

          {/* Form Section */}
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <input
                type="text"
                placeholder="Ваше имя"
                className="bg-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ffe000]"
              />
              <input
                type="tel"
                placeholder="Номер телефона"
                className="bg-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ffe000]"
              />
              <select className="bg-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ffe000]">
                <option value="">Выберете курс</option>
                <option value="course1">Курс 1</option>
                <option value="course2">Курс 2</option>
              </select>
              <input
                type="number"
                placeholder="Возраст"
                className="bg-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#ffe000]"
              />
            </div>

            <button
              className="bg-[#ffe000] w-full py-3 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 mb-8"
              style={{
                boxShadow: "0 0 20px rgba(255, 224, 0, 0.7)",
              }}
            >
              получить
            </button>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="bg-[#ffe000] text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300 transition">
                Филиал Ц4
              </button>
              <button className="bg-white text-black font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition">
                Филиал Беруни
              </button>
            </div>
          </div>

          {/* Info Cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-16">
            <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg w-full max-w-xs">
              <div className="bg-[#ffe000] text-black rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} />
              </div>
              <p className="text-white text-lg">Адрес Орьентир</p>
            </div>

            <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg w-full max-w-xs">
              <div className="bg-[#ffe000] text-black rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Clock2 size={20} />
              </div>
              <p className="text-white text-lg">График работы</p>
            </div>

            <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg w-full max-w-xs">
              <div className="bg-[#ffe000] text-black rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Phone size={20} />
              </div>
              <p className="text-white text-lg">Номера телефонов</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="text-center">
          <button
            onClick={() => {
              setLoading(true);
              navigator.geolocation.getCurrentPosition(
                async (data) => {
                  const coords = {
                    latitude: data.coords.latitude,
                    longitude: data.coords.longitude,
                  };
                  setLocation(coords);
                  const address = await getAddressFromCoords(
                    coords.latitude,
                    coords.longitude
                  );
                  setAddress(address);
                  setLoading(false);
                },
                (error) => {
                  console.log(error);
                  setLoading(false);
                }
              );
            }}
            className="bg-blue-600 hover:bg-blue-700 rounded-lg px-6 py-3 text-white font-bold text-xl mb-6 transition-colors"
            disabled={loading}
          >
            {loading ? "Определение местоположения..." : "Найти меня"}
          </button>

          {address && (
            <p className="text-white text-lg mb-8 p-4 bg-gray-800 rounded-lg">
              Ваше местоположение: {address}
            </p>
          )}

          <div className="rounded-xl overflow-hidden shadow-xl border-2 border-[#ffe000]">
            <YMaps>
              <Map
                className="w-full h-96"
                state={{
                  center: location
                    ? [location.latitude, location.longitude]
                    : [41.2995, 69.2401],
                  zoom: 15,
                }}
              >
                {location && (
                  <Placemark
                    geometry={[location.latitude, location.longitude]}
                    options={{
                      preset: "islands#redIcon",
                    }}
                  />
                )}
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Harita);
