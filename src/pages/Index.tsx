
import { useEffect, useState } from "react";
import { Info } from "lucide-react";
import ProductHeader from "@/components/ProductHeader";
import Navigation from "@/components/Navigation";
import LoadingOverlay from "@/components/LoadingOverlay";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Index = () => {
  useEffect(() => {
    // Initialize Voiceflow chat
    const script = document.createElement("script");
    script.textContent = `
      const targetElement = document.querySelector('#dafaq-container');
      if (!targetElement) {
        console.warn("Fant ikke den spesifikke divverud alléen.");
      } else {
        targetElement.style.paddingTop = '16px';
        const chatContainer = document.createElement('div');
        chatContainer.id = 'voiceflow-container';
        chatContainer.style.maxHeight = '800px';
        chatContainer.style.width = '100%';
        targetElement.appendChild(chatContainer);
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
      }
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductHeader />
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-sm text-gray-600 mb-8">
          <span>Hjem</span>
          <span className="mx-2">/</span>
          <span>Kondisjon</span>
          <span className="mx-2">/</span>
          <span>Tredemølle</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Sportsmaster Alpha Runner HD m/LCD skjerm</span>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div className="relative">
            <img
              src="https://sportsmaster.no/media/catalog/product/cache/3d38b864d9b64b07d45c94527d5a7159/s/p/sportsmaster_alpha_runner_hd_mlcd_skjerm_ar22.2.jpg"
              alt="Sportsmaster Alpha Runner HD"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <div className="mb-6">
              <p className="text-sm text-gray-600 uppercase mb-1">TREDEMØLLE</p>
              <h1 className="text-4xl font-semibold mb-4">
                Sportsmaster Alpha Runner HD m/LCD skjerm
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">0 vurderinger</span>
              </div>
              <div className="mb-8">
                <p className="text-4xl font-bold">124 800,-</p>
                <p className="text-sm text-gray-600">Vis eks mva</p>
              </div>

              <div className="flex gap-4 mb-4">
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  className="w-20 px-4 py-2 border rounded-lg"
                />
                <button className="flex-1 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Legg i handlekurv
                </button>
                <button className="p-2 border rounded-lg hover:bg-gray-50 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              <div id="dafaq-container" className="relative w-full mb-8">
                <LoadingOverlay />
                <div className="absolute top-0 right-0 z-50 p-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-5 w-5 text-gray-500" />
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="bg-transparent border-0 shadow-none p-0">
                        <img
                          src="https://i.postimg.cc/sgS2P3hH/Dalai-FAQ-Prototype.png"
                          alt="FAQ Info"
                          className="w-1/2 h-auto"
                        />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Mulighet for montering</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>60 dagers returrett</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>21 års erfaring</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-8">
                Tilgjengelig fra 10.03.2025
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
