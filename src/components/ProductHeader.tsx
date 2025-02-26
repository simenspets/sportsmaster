
import { Search, Sparkles, User, ShoppingCart, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ProductHeader = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isChatVisible && chatContainerRef.current) {
      const script = document.createElement("script");
      script.textContent = `
        (function(d, t) {
          var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
          v.onload = function() {
            const chatContainer = document.querySelector('#voiceflow-chat');
            if (!chatContainer) {
              console.error('Chat container not found');
              return;
            }
            window.voiceflow.chat.load({
              verify: { projectID: '67891dc58be20586cd1445e8' },
              url: 'https://general-runtime.voiceflow.com',
              versionID: 'production',
              assistant: {
                stylesheet: "https://kristoman-rikardo.github.io/dafaq/style.css",
              },
              render: {
                mode: 'embedded',
                target: chatContainer,
              },
              launch: {
                event: { 
                  type: "launch",
                  payload: { test_url: window.location.href }
                }
              },
              autostart: true,
            });
          };
          v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; 
          v.type = "text/javascript";
          s.parentNode.insertBefore(v, s);
        })(document, 'script');
      `;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isChatVisible]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsChatVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between gap-8">
          <a href="/" className="flex-shrink-0">
            <img
              src="https://sportsmaster.no/media/logo/stores/1/desktop-221122.png"
              alt="Sportsmaster"
              className="w-[400px] h-auto object-contain"
            />
          </a>

          <div ref={searchContainerRef} className="flex-1 max-w-[650px] relative">
            <div className="relative">
              <div className="flex items-center bg-gray-100 rounded-full">
                <input
                  type="text"
                  placeholder="Søk etter produkter..."
                  className="w-full h-12 pl-12 pr-24 bg-transparent rounded-full focus:outline-none"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <button
                  onClick={() => setIsChatVisible(!isChatVisible)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 text-blue-600 hover:text-blue-700"
                >
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm">AI-søk</span>
                </button>
              </div>
            </div>

            {isChatVisible && (
              <div
                ref={chatContainerRef}
                className="absolute top-full right-0 mt-2 w-full max-h-[500px] overflow-auto border rounded-lg bg-white shadow-lg z-50"
              >
                <div id="voiceflow-chat"></div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-6">
            <button className="flex flex-col items-center gap-1">
              <User className="h-6 w-6" />
              <span className="text-xs">Min side</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <Heart className="h-6 w-6" />
              <span className="text-xs">Ønskeliste</span>
            </button>
            <button className="flex flex-col items-center gap-1 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="text-xs">Handlevogn</span>
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProductHeader;
