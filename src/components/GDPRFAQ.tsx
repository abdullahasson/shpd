import { useState } from 'react';

interface FAQItem {
  id: string;
  title: string;
  content: string;
  isOpen?: boolean;
}

const GDPRFAQ = () => {
  // First accordion items
  const [leftItems, setLeftItems] = useState<FAQItem[]>([
    {
      id: 'collapseOne',
      title: 'Access',
      content: 'Request access to your personal data.',
      isOpen: false,
    },
    {
      id: 'collapseTwo',
      title: 'Rectification',
      content: 'Request correction of any inaccurate or incomplete data.',
      isOpen: true,
    },
    {
      id: 'collapseThree',
      title: 'Erasure',
      content: 'Request deletion of your personal data, subject to certain exceptions.',
      isOpen: false,
    },
  ]);

  // Second accordion items
  const [rightItems, setRightItems] = useState<FAQItem[]>([
    {
      id: 'collapseFour',
      title: 'Restriction',
      content: 'Request restriction of processing your personal data.',
      isOpen: false,
    },
    {
      id: 'collapseFive',
      title: 'Portability',
      content: 'Request your personal data in a structured, commonly used, and machine-readable format.',
      isOpen: false,
    },
    {
      id: 'collapseSix',
      title: 'Objection',
      content: 'Object to the processing of your personal data in specific circumstances.',
      isOpen: false,
    },
  ]);

  const toggleItem = (items: FAQItem[], setItems: React.Dispatch<React.SetStateAction<FAQItem[]>>, id: string) => {
    setItems(
      items.map((item) => ({
        ...item,
        isOpen: item.id === id ? !item.isOpen : false,
      }))
    );
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24 md:mb-16">
          <div className="flex justify-center">
            <div className="w-full lg:w-7/12">
              <h3 className="text-3xl font-semibold">
                Under the GDPR, customers have the following rights
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-6/12 px-4 md:mt-16">
            <div className="space-y-4">
              {leftItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-white p-4">
                    <h5 className="mb-0">
                      <button
                        className="w-full text-left flex justify-between items-center focus:outline-none"
                        onClick={() => toggleItem(leftItems, setLeftItems, item.id)}
                      >
                        <span className="font-medium text-lg">{item.title}</span>
                        <span className="text-gray-500">
                          {item.isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                          )}
                        </span>
                      </button>
                    </h5>
                  </div>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      item.isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 bg-gray-50">
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-6/12 px-4 mt-8 lg:mt-0">
            <div className="space-y-4">
              {rightItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-white p-4">
                    <h5 className="mb-0">
                      <button
                        className="w-full text-left flex justify-between items-center focus:outline-none"
                        onClick={() => toggleItem(rightItems, setRightItems, item.id)}
                      >
                        <span className="font-medium text-lg">{item.title}</span>
                        <span className="text-gray-500">
                          {item.isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                          )}
                        </span>
                      </button>
                    </h5>
                  </div>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      item.isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 bg-gray-50">
                      <p>{item.content}</p>
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

export default GDPRFAQ;