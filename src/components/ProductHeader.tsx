
import { Search, Sparkles, User, ShoppingCart, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ProductHeader = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isChatVisible) {
      const chatContainer = chatContainerRef.current;
      if (!chatContainer) return;

      // Load Voiceflow chat only when visible
      const script = document.createElement("script");
      script.textContent = `
        (function(d, t) {
          var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
          v.onload = function() {
            window.voiceflow.chat.load({
              verify: { projectID: '67a3984016e45a2b5dfdb816' },
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

  // Close chat when clicking outside
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
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          <a href="/" className="flex-shrink-0">
            <img
              src="https://sportsmaster.no/media/logo/stores/1/desktop-221122.png"
              alt="Sportsmaster"
              className="h-8"
            />
          </a>

          <div ref={searchContainerRef} className="flex-1 max-w-2xl relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Søk etter produkter"
                className="w-full pl-10 pr-16 py-2 border rounded-lg"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <button
                onClick={() => setIsChatVisible(!isChatVisible)}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-blue-600"
              >
                <Sparkles className="h-4 w-4" />
                <span className="text-sm">AI-søk</span>
              </button>
            </div>

            {isChatVisible && (
              <div
                ref={chatContainerRef}
                className="absolute top-full right-0 mt-2 w-[350px] max-h-[500px] overflow-auto border rounded-lg bg-white shadow-lg z-50"
              />
            )}
          </div>

          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-sm">
              <User className="h-5 w-5" />
              <span>Min side</span>
            </button>
            <button className="flex items-center gap-2 text-sm">
              <ShoppingCart className="h-5 w-5" />
              <span>Handlevogn</span>
            </button>
            <button className="lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProductHeader;

