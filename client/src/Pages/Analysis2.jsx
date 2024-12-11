import React from 'react';

const SpeechAnalysisDashboardtwo = () => {
  const analysisData = {
    keyMetrics: [
      { name: 'Duration', value: '23.42 sec', icon: '⏱️' },
      { name: 'Speech Rate', value: '153.7 wpm', icon: '🎙️' },
      { name: 'Language Score', value: '0.98/1.0', icon: '📝' },
      { name: 'Confidence', value: '0.00/1.0', icon: '🔍' }
    ],
    errorDistribution: [
      { name: 'Grammar Errors', value: 6, color: 'bg-red-500' },
      { name: 'Filler Words', value: 1, color: 'bg-yellow-500' },
      { name: 'Repetitions', value: 3, color: 'bg-blue-500' }
    ],
    verbTenseErrors: [
      'find...trying',
      'remember...do',
      'remember...were',
      'remember...go',
      'remember...attend',
      'Come...wanted'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            Speech Analysis Report
          </h1>
          <p className="text-gray-600 mt-2">Comprehensive linguistic breakdown</p>
        </header>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {analysisData.keyMetrics.map((metric, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{metric.icon}</div>
              <h3 className="font-bold text-gray-700">{metric.name}</h3>
              <p className="text-xl text-blue-600 font-semibold">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Main Analysis Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Error Distribution */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Error Distribution</h2>
            <div className="space-y-4">
              {analysisData.errorDistribution.map((error, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-12 h-12 ${error.color} rounded-full mr-4 flex items-center justify-center text-white font-bold`}>
                    {error.value}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">{error.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verb Tense Errors */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Verb Tense Inconsistencies</h2>
            <div className="space-y-3">
              {analysisData.verbTenseErrors.map((error, index) => (
                <div 
                  key={index} 
                  className="bg-red-50 border-l-4 border-red-500 p-3 rounded hover:bg-red-100 transition-colors"
                >
                  <p className="text-red-700 font-medium">Error {index + 1}: {error}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full Text Analysis */}
        <div className="mt-12 bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Full Speech Text</h2>
          <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
            <p className="text-gray-700 italic">
              {" And always find a place on the street to park, and it was easy, and you weren't a long distance away from wherever it was that you were trying to go. So I remember that being a lot of fun and easy to do, and there were nice places to go, and good events to attend. Come downtown, and we wanted"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeechAnalysisDashboardtwo;