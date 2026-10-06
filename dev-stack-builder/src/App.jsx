import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import StackSidebar from './components/StackSidebar';
import Footer from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Challenge: Load JSON data with useEffect + Loading State
  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Add item to stack with validation & React-Toastify alerts
  const handleAddToStack = (tech) => {
    const exists = stack.some((item) => item.id === tech.id);
    if (exists) {
      toast.warning(`${tech.name} is already in your stack!`, { position: 'top-right' });
      return;
    }
    setStack([...stack, tech]);
    toast.success(`Added ${tech.name} to your stack!`, { position: 'top-right' });
  };

  // Remove single item
  const handleRemoveFromStack = (id) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`Removed ${itemToRemove.name} from your stack.`, { position: 'top-right' });
    }
  };

  // Clear all items
  const handleClearAll = () => {
    setStack([]);
    toast.error('Cleared all items from your stack.', { position: 'top-right' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      <ToastContainer autoClose={2500} />

      <div>
        <Navbar />
        <Hero />

        {/* Technologies Grid & Sidebar Section */}
        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Explore Technologies</h2>
            <p className="text-slate-600 mt-2">
              Browse top-tier frameworks, libraries, and databases to build your application stack.
            </p>
          </div>

          {/* Loading State Spinner */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-slate-600 font-medium">Loading technologies...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

              {/* Technology Cards: 3 columns desktop, 2 tablet, 1 mobile */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {technologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    isAdded={stack.some((item) => item.id === tech.id)}
                    onAdd={handleAddToStack}
                  />
                ))}
              </div>

              {/* Your Stack Sidebar */}
              <div className="lg:col-span-1">
                <StackSidebar
                  stack={stack}
                  onRemove={handleRemoveFromStack}
                  onClearAll={handleClearAll}
                />
              </div>

            </div>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;