function Home() {
  return (
    <div className="max-w-3xl mx-auto p-8 space-y-6">
      <h1 className="text-4xl font-bold text-zinc-800 mb-4">
        Robert's Rules Timer
      </h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-zinc-700 border-b pb-2">
          How to Use This Timer
        </h2>
        
        <section className="space-y-2">
          <h3 className="text-xl font-semibold text-zinc-700">Purpose</h3>
          <p className="text-zinc-600">
            This timer helps manage debate time during congregational meetings 
            following Robert's Rules of Order Newly Revised. It tracks two separate 
            timers: one for individual speakers and one for the total time allotted 
            to debate a motion.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-xl font-semibold text-zinc-700">Getting Started</h3>
          <ol className="list-decimal list-inside space-y-2 text-zinc-600 ml-4">
            <li>Navigate to the <strong>Settings</strong> page to configure your timer durations</li>
            <li>Set the <strong>Speaker Timer</strong> (typically 2-10 minutes per speaker)</li>
            <li>Set the <strong>Subject/Motion Timer</strong> (total debate time for the motion)</li>
            <li>Go to the <strong>Timers</strong> page to begin timing</li>
          </ol>
        </section>

        <section className="space-y-2">
          <h3 className="text-xl font-semibold text-zinc-700">Using the Timers</h3>
          <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
            <li>Click the <strong>large timer</strong> (top) to start/stop the Speaker Timer</li>
            <li>Click the <strong>smaller timer</strong> (bottom) to start/stop the Subject/Motion Timer</li>
            <li>Use the <strong>Reset</strong> button to reset the Speaker Timer between speakers</li>
            <li>Timers will gradually turn red as time runs out</li>
            <li>When a timer reaches zero, it will flash gently to alert you</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-xl font-semibold text-zinc-700">Tips</h3>
          <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
            <li>Display the timer page on a screen visible to all participants</li>
            <li>Reset the Speaker Timer after each person finishes speaking</li>
            <li>The Subject Timer tracks the cumulative debate time</li>
            <li>Both timers can run simultaneously or independently</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Home;
