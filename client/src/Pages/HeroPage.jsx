function HeroPage() {
  return (
    <div>
      <section id="section-95129977-ab56-41f8-8de2-2caec530c790">
        <htmlCode>
          <div id="root">
            <section
              id="navbar_hero"
              className="relative overflow-hidden bg-white"
            >
              {/* Desktop Navigation */}
              <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src="https://d1t11jpd823i7r.cloudfront.net/homepage/logo.png"
                    alt="ELSA Speak Logo"
                    className="h-12 w-auto"
                  />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                  <div className="relative group">
                    <button className="flex items-center text-gray-600 hover:text-blue-600">
                      Product
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Redeem Promo Code
                  </a>
                  <div className="relative group">
                    <button className="flex items-center text-gray-600 hover:text-blue-600">
                      Learn English
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Blog
                  </a>
                </div>

                <div className="hidden lg:flex items-center space-x-4">
                  <button className="px-6 py-2 text-gray-600 hover:text-blue-600">
                    Login
                  </button>
                  <img
                    src="https://d1t11jpd823i7r.cloudfront.net/homepage/desktop-Elsa-global-homepage-top-menu-download-CTA.png"
                    alt="Download CTA"
                    className="h-12 w-auto cursor-pointer"
                  />
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                  <button className="text-gray-600 hover:text-blue-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </nav>

              {/* Hero Section */}
              <div className="container mx-auto px-4 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                      Meet ELSA - Your personal AI-powered English speaking
                      coach
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                      Speak English in short, fun dialogues. Get instant
                      feedback from our proprietary artificial intelligence
                      technology.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                      <img
                        src="https://d1t11jpd823i7r.cloudfront.net/homepage/Appstore.png"
                        alt="Download on App Store"
                        className="h-14 w-auto cursor-pointer"
                      />
                      <img
                        src="https://d1t11jpd823i7r.cloudfront.net/homepage/GooglePlay.png"
                        alt="Get it on Google Play"
                        className="h-14 w-auto cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full border-8 border-green-500  h-auto rounded-3xl"
                    >
                      <source
                        src="https://d1t11jpd823i7r.cloudfront.net/roleplay/CTA%20-%20Available%20now.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </htmlCode>
      </section>
      <section id="section-87ccf9ac-f227-405b-a5b6-a2dc84ee244d">
        <htmlCode>
          <div id="root">
            <section id="features" className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">
                  The Best Way to Improve Your Skills
                </h2>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Feature 1 */}
                  <div className="bg-white p-8 rounded-xl">
                    <img
                      src="https://d1t11jpd823i7r.cloudfront.net/homepage/ai-coach-a.png"
                      alt="AI Coach"
                      className="w-full h-auto mb-6"
                    />
                    <h3 className="text-2xl font-semibold mb-4">
                      Get Instant Feedback
                    </h3>
                    <p className="text-gray-600">
                      Receive immediate, detailed feedback on your pronunciation
                      using our proprietary artificial intelligence technology.
                    </p>
                  </div>

                  {/* Feature 2 */}
                  <div className="bg-white p-8 rounded-xl">
                    <img
                      src="https://d1t11jpd823i7r.cloudfront.net/homepage/realtime-a.png"
                      alt="Real-time Feedback"
                      className="w-full h-auto mb-6"
                    />
                    <h3 className="text-2xl font-semibold mb-4">
                      Find Your Proficiency Level
                    </h3>
                    <p className="text-gray-600">
                      Take a thoughtfully designed, short assessment test and
                      receive a detailed report of your strengths and
                      weaknesses.
                    </p>
                  </div>

                  {/* Feature 3 */}
                  <div className="bg-white p-8 rounded-xl">
                    <img
                      src="https://d1t11jpd823i7r.cloudfront.net/homepage/intelligent-b.png"
                      alt="Intelligent Learning"
                      className="w-full h-auto mb-6"
                    />
                    <h3 className="text-2xl font-semibold mb-4">
                      Explore Fun Content
                    </h3>
                    <p className="text-gray-600">
                      Play games while practicing all 44 English language
                      sounds, and learn from a wide range of relevant topics.
                    </p>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <img
                      src="https://d1t11jpd823i7r.cloudfront.net/homepage/90.png"
                      alt="90% Success Rate"
                      className="w-32 h-32 mx-auto mb-4"
                    />
                    <p className="text-lg font-semibold">
                      90% See an improvement in pronunciation
                    </p>
                  </div>

                  <div className="text-center">
                    <img
                      src="https://d1t11jpd823i7r.cloudfront.net/homepage/95.png"
                      alt="95% Confidence"
                      className="w-32 h-32 mx-auto mb-4"
                    />
                    <p className="text-lg font-semibold">
                      95% Express higher confidence in speaking English
                    </p>
                  </div>

                  <div className="text-center">
                    <img
                      src="https://d1t11jpd823i7r.cloudfront.net/homepage/68.png"
                      alt="68% Clarity"
                      className="w-32 h-32 mx-auto mb-4"
                    />
                    <p className="text-lg font-semibold">
                      68% Feel they spoke more clearly
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </htmlCode>
      </section>
      <section id="section-e0c01d11-dbfb-4133-a98a-fcd5b02fbf42">
        <htmlCode>
          <div id="root">
            <section id="how_it_works" className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-16">
                    Experience ELSA's AI Technology
                  </h2>

                  {/* Word Pronunciation */}
                  <div className="mb-20">
                    <h3 className="text-2xl font-semibold mb-6">
                      Word Pronunciation
                    </h3>
                    <div className="bg-gray-50 p-8 rounded-xl">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                          <p className="text-xl mb-4">
                            Speak the word and get pronunciation feedback for
                            each sound.
                          </p>
                          <p className="text-2xl font-semibold text-blue-600 mb-2">
                            interesting
                          </p>
                          <p className="text-gray-600">/ˈɪn.trɪ.stɪŋ/</p>
                        </div>
                        <div className="flex-1">
                          <img
                            src="https://d1t11jpd823i7r.cloudfront.net/homepage/speaker-avatar.png"
                            alt="Speaker Avatar"
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sentence Delivery */}
                  <div className="mb-20">
                    <h3 className="text-2xl font-semibold mb-6">
                      Sentence Delivery
                    </h3>
                    <div className="bg-gray-50 p-8 rounded-xl">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                          <p className="text-xl mb-4">
                            Receive feedback on your pronunciation, intonation,
                            and fluency.
                          </p>
                          <p className="text-2xl font-semibold text-blue-600 mb-2">
                            Would you like to try?
                          </p>
                          <p className="text-gray-600">/wʊd ju laɪk tə traɪ/</p>
                        </div>
                        <div className="flex-1">
                          <img
                            src="https://d1t11jpd823i7r.cloudfront.net/homepage/avatar-ma.png"
                            alt="Avatar"
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spontaneous Speech */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">
                      Spontaneous Speech
                    </h3>
                    <div className="bg-gray-50 p-8 rounded-xl">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                          <p className="text-xl mb-4">
                            Receive feedback on your pronunciation, vocabulary,
                            grammar & more.
                          </p>
                          <p className="text-lg mb-4">
                            Share your inspiration in learning English and get
                            detailed feedback on your speech.
                          </p>
                          <p className="text-2xl font-semibold text-blue-600">
                            That's cool! Let me try...
                          </p>
                          <div className="mt-4">
                            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-lg">
                              93%
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <img
                            src="https://d1t11jpd823i7r.cloudfront.net/homepage/slider-1.png"
                            alt="Speech Analysis"
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </htmlCode>
      </section>
      <section id="section-a2a1eb2b-d761-42d8-8586-63583c5307d3">
        <htmlCode>
          <div id="root">
            <section id="testimonials" className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">
                  Anybody Can Speak English Confidently
                </h2>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Testimonial 1 */}
                  <div className="bg-white p-8 rounded-xl">
                    <div className="mb-6">
                      <p className="text-gray-600 italic">
                        "I never thought I would be able to get rid of my strong
                        Chinese accent... Then I discovered this app. It helped
                        me identify issues with my pronunciation that I was not
                        aware of... There's already a vast improvement with my
                        speech."
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="font-semibold">Guany</p>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="bg-white p-8 rounded-xl">
                    <div className="mb-6">
                      <p className="text-gray-600 italic">
                        "I love this app!! It helps me speak English fluently
                        and fix my strong accent. I can see my improvement
                        clearly after 3 months of use... when I try to speak in
                        Google Translate, it is correct nearly 85% of the time,
                        which is much more than before."
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="font-semibold">Joy</p>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="bg-white p-8 rounded-xl">
                    <div className="mb-6">
                      <p className="text-gray-600 italic">
                        "This app is great. I'm that person that NEVER writes
                        reviews. It's that good... Amazing easy interface for
                        everyday use, and great discounts; I bought the full
                        version for a year. God bless you developers ❤️"
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="font-semibold">Dun</p>
                    </div>
                  </div>
                </div>

                {/* Brands Section */}
                <div className="mt-20">
                  <h3 className="text-xl font-semibold text-center mb-8">
                    As Seen In
                  </h3>
                  <div className="hidden md:block">
                    <img
                      src="https://d1t11jpd823i7r.cloudfront.net/homepage/brands.png"
                      alt="Featured Brands"
                      className="w-full max-w-4xl mx-auto"
                    />
                  </div>
                  <div className="md:hidden">
                    <img
                      src="https://d1t11jpd823i7r.cloudfront.net/homepage/brands-m.png"
                      alt="Featured Brands Mobile"
                      className="w-full max-w-sm mx-auto"
                    />
                  </div>
                </div>

                {/* Download CTA */}
                <div className="mt-16 text-center">
                  <p className="text-lg mb-6">
                    4 millions exercises practiced / day by our users, download
                    and try our app
                  </p>
                  <div className="flex justify-center space-x-4">
                    <img
                      src="https://d1t11jpd823i7r.cloudfront.net/homepage/Appstore.png"
                      alt="Download on App Store"
                      className="h-14 cursor-pointer"
                    />
                    <img
                      src="https://d1t11jpd823i7r.cloudfront.net/homepage/GooglePlay.png"
                      alt="Get it on Google Play"
                      className="h-14 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </htmlCode>
      </section>
      <section id="section-76d10df4-8e81-4752-9889-d13a96d5b54b">
        <htmlCode>
          <div id="root">
            <section id="pricing_plans" className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-6">Choose Your Plan</h2>
                  <p className="text-xl text-gray-600">
                    Start improving your English pronunciation today
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {/* Free Plan */}
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
                    <p className="text-gray-600 mb-6">
                      Perfect for trying out ELSA
                    </p>
                    <div className="text-4xl font-bold mb-6">$0</div>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Limited access to lessons
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Basic pronunciation feedback
                      </li>
                    </ul>
                    <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                      Get Started
                    </button>
                  </div>

                  {/* Pro Plan */}
                  <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-xl transform scale-105">
                    <div className="inline-block bg-blue-500 text-sm px-3 py-1 rounded-full mb-4">
                      Most Popular
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
                    <p className="text-blue-100 mb-6">
                      Best for serious learners
                    </p>
                    <div className="text-4xl font-bold mb-6">
                      $19.99<span className="text-lg">/month</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 text-white mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Unlimited access to all lessons
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 text-white mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Advanced pronunciation feedback
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 text-white mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Personal learning plan
                      </li>
                    </ul>
                    <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                      Get Started
                    </button>
                  </div>

                  {/* Enterprise Plan */}
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                    <p className="text-gray-600 mb-6">
                      For teams & organizations
                    </p>
                    <div className="text-4xl font-bold mb-6">Custom</div>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Custom solutions
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Team management
                      </li>
                    </ul>
                    <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </htmlCode>
      </section>
      <section id="section-dd9518cf-3490-4d3f-a64b-7b94b7d8a1ee">
        <htmlCode>
          <div id="root">
            <section id="download_app" className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                      <h2 className="text-4xl font-bold mb-8">
                        Download ELSA Now and Start Speaking English with
                        Confidence
                      </h2>
                      <div className="space-y-6 mb-8">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-blue-600 mt-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="text-lg text-gray-600">
                            Get instant feedback on your pronunciation
                          </p>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-blue-600 mt-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="text-lg text-gray-600">
                            Practice with AI-powered conversation scenarios
                          </p>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-blue-600 mt-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="text-lg text-gray-600">
                            Track your progress with detailed analytics
                          </p>
                        </div>
                      </div>

                      {/* Download Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <img
                          src="https://d1t11jpd823i7r.cloudfront.net/homepage/Appstore.png"
                          alt="Download on App Store"
                          className="h-14 cursor-pointer"
                        />
                        <img
                          src="https://d1t11jpd823i7r.cloudfront.net/homepage/GooglePlay.png"
                          alt="Get it on Google Play"
                          className="h-14 cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Right Content - App Screenshots */}
                    <div className="grid grid-cols-2 gap-6 relative">
                      <img
                        src="https://d1t11jpd823i7r.cloudfront.net/homepage/slider-2a.png"
                        alt="ELSA App Screenshot 1"
                        className="w-full h-auto rounded-2xl shadow-lg transform translate-y-8"
                      />
                      <img
                        src="https://d1t11jpd823i7r.cloudfront.net/homepage/slider-3a.png"
                        alt="ELSA App Screenshot 2"
                        className="w-full h-auto rounded-2xl shadow-lg transform -translate-y-8"
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-20 text-center">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <div className="text-4xl font-bold text-blue-600 mb-2">
                          4M+
                        </div>
                        <p className="text-gray-600">Daily Exercises</p>
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-blue-600 mb-2">
                          18M+
                        </div>
                        <p className="text-gray-600">Global Downloads</p>
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-blue-600 mb-2">
                          4.7
                        </div>
                        <p className="text-gray-600">Average Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </htmlCode>
      </section>
      <section id="section-0eab2e10-ada7-4967-bec3-6f561609fc88">
        <htmlCode>
          <div id="root">
            <section id="enterprise_solutions" className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-4xl font-bold text-center mb-16">
                    Enterprise Solutions
                  </h2>

                  {/* Business Solution */}
                  <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                      <img
                        src="https://d1t11jpd823i7r.cloudfront.net/homepage/business.png"
                        alt="ELSA for Business"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-6">
                        ELSA for Business
                      </h3>
                      <p className="text-xl text-gray-600 mb-8">
                        Drive business outcomes and gain a competitive edge on
                        the market by improving your organization's English
                        proficiency.
                      </p>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center space-x-3">
                          <svg
                            className="w-6 h-6 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Customized learning paths</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg
                            className="w-6 h-6 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Progress tracking & analytics</span>
                        </div>
                      </div>
                      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Get A Quote
                      </button>
                    </div>
                  </div>

                  {/* Schools Solution */}
                  <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="order-2 md:order-1">
                      <h3 className="text-3xl font-bold mb-6">
                        ELSA for Schools
                      </h3>
                      <p className="text-xl text-gray-600 mb-8">
                        Bring learning to new heights beyond the traditional
                        classroom. Test out ELSA Pro for your class.
                      </p>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center space-x-3">
                          <svg
                            className="w-6 h-6 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Comprehensive classroom tools</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg
                            className="w-6 h-6 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Student performance monitoring</span>
                        </div>
                      </div>
                      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Bring ELSA To Your Classroom
                      </button>
                    </div>
                    <div className="order-1 md:order-2">
                      <img
                        src="https://d1t11jpd823i7r.cloudfront.net/homepage/schools.png"
                        alt="ELSA for Schools"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>

                  {/* API Solution */}
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-6">ELSA API</h3>
                    <p className="text-xl text-gray-600 mb-8">
                      Leverage world-class speech recognition technology for
                      your business needs.
                    </p>
                    <div className="hidden md:block">
                      <img
                        src="https://d1t11jpd823i7r.cloudfront.net/homepage/api.png"
                        alt="ELSA API"
                        className="w-full h-auto rounded-lg mx-auto"
                      />
                    </div>
                    <div className="md:hidden">
                      <img
                        src="https://d1t11jpd823i7r.cloudfront.net/homepage/api-mobile.png"
                        alt="ELSA API Mobile"
                        className="w-full h-auto rounded-lg mx-auto"
                      />
                    </div>
                    <div className="mt-8 space-x-4">
                      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Get The API
                      </button>
                      <button className="bg-transparent text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                        Learn more about API Documentation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </htmlCode>
      </section>
      <section id="section-ac5183ce-0b23-4b80-879b-b52fc4d0c84c">
        <htmlCode>
          <div id="root">
            <section id="blog_resources" className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">
                      Latest Resources
                    </h2>
                    <p className="text-xl text-gray-600">
                      Discover tips and strategies to improve your English
                      speaking skills
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Blog Card 1 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <div className="relative">
                        <img
                          src="https://d1t11jpd823i7r.cloudfront.net/homepage/slider-4.png"
                          alt="English Learning Tips"
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                          Speaking Tips
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">
                          Master English Pronunciation
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Essential tips and exercises to improve your English
                          pronunciation and speak with confidence.
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            5 min read
                          </span>
                          <button className="text-blue-600 font-semibold hover:text-blue-700">
                            Read More →
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Blog Card 2 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <div className="relative">
                        <img
                          src="https://d1t11jpd823i7r.cloudfront.net/homepage/slider-5a.png"
                          alt="Pronunciation Guide"
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                          Study Guide
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">
                          Effective Learning Strategies
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Learn how to make the most of your English practice
                          sessions with these proven techniques.
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            7 min read
                          </span>
                          <button className="text-blue-600 font-semibold hover:text-blue-700">
                            Read More →
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Blog Card 3 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <div className="relative">
                        <img
                          src="https://d1t11jpd823i7r.cloudfront.net/homepage/slider-2a.png"
                          alt="AI Learning"
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                          AI Learning
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">
                          AI-Powered English Practice
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Discover how artificial intelligence can help you
                          achieve your English speaking goals faster.
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            4 min read
                          </span>
                          <button className="text-blue-600 font-semibold hover:text-blue-700">
                            Read More →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-12">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      View All Resources
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </htmlCode>
      </section>
      <section id="section-8788bf8f-57a0-4138-a811-7e03c3db0b4b">
        <htmlCode>
          <div id="root">
            <section id="footer" className="bg-gray-900 text-gray-400">
              <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                  {/* Top Section */}
                  <div className="grid md:grid-cols-4 gap-8 mb-16">
                    {/* Logo and Social Links */}
                    <div className="col-span-1">
                      <img
                        src="https://d1t11jpd823i7r.cloudfront.net/homepage/logo.png"
                        alt="ELSA Speak Logo"
                        className="mb-6 h-12"
                      />
                      <div className="flex space-x-4">
                        <a href="#" className="hover:text-white">
                          <img
                            src="https://d1t11jpd823i7r.cloudfront.net/homepage/facebook.png"
                            alt="Facebook"
                            className="w-6 h-6"
                          />
                        </a>
                        <a href="#" className="hover:text-white">
                          <img
                            src="https://d1t11jpd823i7r.cloudfront.net/homepage/instagram.png"
                            alt="Instagram"
                            className="w-6 h-6"
                          />
                        </a>
                        <a href="#" className="hover:text-white">
                          <img
                            src="https://d1t11jpd823i7r.cloudfront.net/homepage/twitter.png"
                            alt="Twitter"
                            className="w-6 h-6"
                          />
                        </a>
                        <a href="#" className="hover:text-white">
                          <img
                            src="https://d1t11jpd823i7r.cloudfront.net/homepage/youtube.png"
                            alt="YouTube"
                            className="w-6 h-6"
                          />
                        </a>
                      </div>
                    </div>

                    {/* For Individuals */}
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-4">
                        For Individuals
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <a href="#" className="hover:text-white">
                            ELSA Subscriptions
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-white">
                            Redeem Promo Code
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-white">
                            Activate Voucher Code
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* For Organizations */}
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-4">
                        For Organizations
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <a href="#" className="hover:text-white">
                            English for Schools
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-white">
                            English for Companies
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-white">
                            ELSA API
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-white">
                            Partner Login
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Company */}
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-4">
                        Company
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <a href="#" className="hover:text-white">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-white">
                            Careers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-white">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-white">
                            FAQs
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-white">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Download Section */}
                  <div className="border-t border-gray-800 pt-8 mb-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                      <span className="text-white">Download ELSA App:</span>
                      <div className="flex space-x-4">
                        <img
                          src="https://d1t11jpd823i7r.cloudfront.net/homepage/Appstore.png"
                          alt="Download on App Store"
                          className="h-10 cursor-pointer"
                        />
                        <img
                          src="https://d1t11jpd823i7r.cloudfront.net/homepage/GooglePlay.png"
                          alt="Get it on Google Play"
                          className="h-10 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="border-t border-gray-800 pt-8 text-sm">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                      <div>© 2024 ELSA. All Rights Reserved</div>
                      <div className="flex space-x-6">
                        <a href="#" className="hover:text-white">
                          Terms of Service
                        </a>
                        <a href="#" className="hover:text-white">
                          Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white">
                          Cookie Policy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </htmlCode>
      </section>
    </div>
  );
}

export default HeroPage;
