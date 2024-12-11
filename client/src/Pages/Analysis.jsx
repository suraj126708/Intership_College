import React, { useState } from 'react';

const SpeechAnalysisDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const analysisData = {
    keyMetrics: [
      { 
        name: 'Speaking Duration', 
        value: '23.42 seconds', 
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        color: 'text-blue-600'
      },
      { 
        name: 'Speech Rate', 
        value: '153.7 wpm', 
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
        color: 'text-green-600'
      },
      { 
        name: 'Language Precision', 
        value: '0.98/1.0', 
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        ),
        color: 'text-purple-600'
      },
      { 
        name: 'Confidence Level', 
        value: '0.00/1.0', 
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        ),
        color: 'text-red-600'
      }
    ],
    errorAnalysis: [
      { 
        type: 'Grammar Errors', 
        count: 6, 
        severity: 'High',
        details: [
          'Inconsistent verb tense (find...trying)',
          'Mixed tense usage (remember...do)',
          'Temporal inconsistency (remember...were)'
        ]
      },
      { 
        type: 'Linguistic Patterns', 
        count: 3, 
        severity: 'Medium',
        details: [
          'Repetitive word usage',
          'Filler word occurrence',
          'Sentence structure variations'
        ]
      }
    ],
    fullTranscript: "And always find a place on the street to park, and it was easy, and you weren't a long distance away from wherever it was that you were trying to go. So I remember that being a lot of fun and easy to do, and there were nice places to go, and good events to attend. Come downtown, and we wanted"
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6">
          <h1 className="text-3xl font-bold text-white">Comprehensive Speech Analysis</h1>
          <p className="text-blue-100 mt-2">Detailed linguistic performance evaluation</p>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            {['Overview', 'Detailed Analysis', 'Transcript'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().replace(' ', ''))}
                className={`
                  px-4 py-4 border-b-2 font-semibold text-sm 
                  ${activeTab === tab.toLowerCase().replace(' ', '') 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Sections */}
        {activeTab === 'overview' && (
          <div className="p-6">
            <div className="grid md:grid-cols-4 gap-6">
              {analysisData.keyMetrics.map((metric, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xs uppercase text-gray-500 tracking-wider mb-2">
                        {metric.name}
                      </h3>
                      <p className={`text-xl font-bold ${metric.color}`}>
                        {metric.value}
                      </p>
                    </div>
                    {metric.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'detailedanalysis' && (
          <div className="p-6 space-y-6">
            {analysisData.errorAnalysis.map((analysis, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {analysis.type}
                  </h3>
                  <span 
                    className={`
                      px-3 py-1 rounded-full text-xs font-bold 
                      ${analysis.severity === 'High' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-yellow-100 text-yellow-800'}
                    `}
                  >
                    {analysis.severity}
                  </span>
                </div>
                <div className="space-y-2">
                  {analysis.details.map((detail, detailIndex) => (
                    <div 
                      key={detailIndex} 
                      className="flex items-center text-gray-600"
                    >
                      <svg 
                        className="w-4 h-4 mr-2 text-blue-500" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'transcript' && (
          <div className="p-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Full Speech Transcript
              </h3>
              <p className="text-gray-700 italic">
                "{analysisData.fullTranscript}"
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeechAnalysisDashboard;