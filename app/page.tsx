"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, CheckCircle, FileText, PlayCircle, Star, Trophy } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import VideoModal from "@/components/video-modal"
import data from "@/data.json"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navigation from "@/components/navigation"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Page() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Auto-scroll testimonials with improved behavior
  useEffect(() => {
    const interval = setInterval(() => {
      if (!testimonialsRef.current) return

      const nextIndex = (currentTestimonial + 1) % data.home.testimonials.length
      setCurrentTestimonial(nextIndex)

      testimonialsRef.current.scrollTo({
        left: nextIndex * (testimonialsRef.current.clientWidth / 2.5),
        behavior: "smooth",
      })
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [currentTestimonial])

  // Add this function to handle manual navigation
  const scrollToTestimonial = (index: number) => {
    if (!testimonialsRef.current) return
    setCurrentTestimonial(index)
    testimonialsRef.current.scrollTo({
      left: index * (testimonialsRef.current.clientWidth / 2.5),
      behavior: "smooth",
    })
  }

  // Carousel images
  const carouselImages = [
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "Mathematics Excellence",
      caption: "Building Mathematical Excellence",
    },
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "JEE Success",
      caption: "Proven Success in JEE Advanced",
    },
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "Learning Environment",
      caption: "Supportive Learning Environment",
    },
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "Expert Teaching",
      caption: "Learn from the Best in the Field",
    },
  ]

  const course = {
    batch: 2025,
    title: "JEE Advanced Mathematics",
    subtitle: "Comprehensive course for JEE Advanced aspirants",
    rating: 4.8,
    reviews: 1200,
    students: 5000,
    duration: "240 hours",
    startDate: "June 15, 2024",
    language: "English",
    level: "Advanced",
    instructor: {
      name: "Mr. Vikas Gupta",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop",
    },
    price: 12999,
    originalPrice: 19999,
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Enhanced Hero Section with Modern Layout */}
      <section id="hero" className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-[#5362D0]/90 to-[#1e3a8a]/90">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#5362D0] to-[#1e3a8a] mix-blend-multiply"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container relative z-10 mx-auto max-w-6xl px-4 pt-12 pb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Text Content - Takes 7 columns on large screens */}
            <div className="lg:col-span-7 text-white space-y-8">
              <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-2">
                Trusted by 10,000+ JEE aspirants
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Master Mathematics with <span className="text-yellow-300">Vikas Gupta</span>
              </h1>

              <p className="text-xl text-white/90 max-w-xl leading-relaxed">
                Transform your JEE preparation with expert guidance from India's leading mathematics educator. Unlock
                your potential with our proven methodology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-white hover:bg-gray-200 text-[#5362D0] font-bold px-8 text-lg h-12">
                  Explore Courses
                </Button>
                <Button size="lg" className="bg-white hover:bg-gray-200 text-[#5362D0] font-bold px-8 text-lg h-12">
                  Explore Test series
                </Button>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">{data.home.stats.students}</div>
                  <div className="text-sm text-white/80">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">{data.home.stats.selections}</div>
                  <div className="text-sm text-white/80">Selections</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">{data.home.stats.toppers}</div>
                  <div className="text-sm text-white/80">Toppers</div>
                </div>
              </div>
            </div>

            {/* Image Content - Takes 5 columns on large screens */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                {/* Remove the Image component */}
                {/* Floating Cards */}
                <div className="absolute top-0 right-0 bg-white rounded-lg shadow-xl p-4 w-48 transform rotate-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 rounded-full p-2">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">JEE Advanced</p>
                      <p className="text-xs text-gray-600">Top Results</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 bg-white rounded-lg shadow-xl p-4 w-48 transform -rotate-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500 rounded-full p-2">
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">20+ Years</p>
                      <p className="text-xs text-gray-600">Teaching Excellence</p>
                    </div>
                  </div>
                </div>
                
              </div>

              {/* Testimonial Previews */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-3">
                <div className="bg-white rounded-lg shadow-xl p-4 max-w-xs hidden">
                  <div className="flex items-start gap-3">
                    <div className="flex -space-x-2">
                      <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop"
                        width={40}
                        height={40}
                        alt="Student"
                        className="rounded-full border-2 border-white"
                      />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <span className="text-xs font-medium ml-1">4.9/5</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        "Vikas sir's teaching methodology transformed my approach to mathematics."
                      </p>
                      <p className="text-xs font-bold text-gray-800 mt-1">- Aaryan Sharma, AIR 15</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-4 max-w-xs">
                  <div className="flex items-start gap-3">
                    <div className="flex -space-x-2">
                      <Image
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop"
                        width={40}
                        height={40}
                        alt="Student"
                        className="rounded-full border-2 border-white"
                      />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <span className="text-xs font-medium ml-1">4.8/5</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        "The best mathematics teacher I have ever had."
                      </p>
                      <p className="text-xs font-bold text-gray-800 mt-1">- Priya Singh, AIR 25</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-4 max-w-xs">
                  <div className="flex items-start gap-3">
                    <div className="flex -space-x-2">
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop"
                        width={40}
                        height={40}
                        alt="Student"
                        className="rounded-full border-2 border-white"
                      />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <span className="text-xs font-medium ml-1">4.7/5</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        "Highly recommend for JEE preparation."
                      </p>
                      <p className="text-xs font-bold text-gray-800 mt-1">- Rahul Verma, AIR 35</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>


      {/* Our Result: The Chain of Toppers */}
      <section id="testimonials" className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Result: The Chain of Toppers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our successful students who cracked JEE with top ranks
            </p>
          </div>

          {/* Testimonials Carousel */}
          <Carousel className="w-full">
            <CarouselContent>
              {data.home.testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden h-full">
                      <div
                        className="relative cursor-pointer group"
                        onClick={() => setSelectedVideo(testimonial.video)}
                      >
                        <div className="relative h-[200px] overflow-hidden">
                          <Image
                            src={`https://img.youtube.com/vi/${testimonial.video}/maxresdefault.jpg`}
                            alt={testimonial.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                            <div className="bg-red-600 rounded-full p-3 group-hover:scale-110 transition-transform">
                              <PlayCircle className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="font-semibold text-red-600">{testimonial.rank}</span>
                          <span>|</span>
                          <span>JEE Advanced {testimonial.year}</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">{testimonial.feedback}</p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>

          <div className="mt-8 text-center">
            <Button variant="outline" className="gap-2">
              View All Success Stories
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Courses for 2025 */}
      <section id="courses" className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Courses for 2025</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive mathematics courses designed specifically for JEE aspirants
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.home.coursesOverview.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative">
                    <div className="relative h-[200px]">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge className={`${course.tagColor} text-white font-medium`}>{course.tag}</Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="bg-white text-gray-800 font-medium">
                        Batch {course.batch}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Test Series for 2025 */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Test Series for 2025</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive test series to evaluate and improve your JEE preparation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.home.testSeries.map((test, index) => (
              <Link key={index} href={`/test-series/${test.id}`}>
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative">
                    <div className="relative h-[150px]">
                      <Image
                        src={test.image || "/placeholder.svg"}
                        alt={test.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge className={`${test.tagColor} text-white font-medium`}>{test.tag}</Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="bg-white text-gray-800 font-medium">
                        Batch {test.batch}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">{test.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{test.description}</p>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Study Materials (Free) */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Study Materials <span className="text-green-600">(Free)</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download free study materials to boost your JEE Mathematics preparation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.home.studyMaterials.map((material, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-2">
                  <FileText className={`w-8 h-8 ${material.iconColor}`} />
                  <h3 className="font-semibold text-lg">{material.title}</h3>
                  <p className="text-gray-600 text-sm">{material.description}</p>
                  <Link href="#" className="inline-flex items-center text-blue-600 hover:underline mt-2 gap-1">
                    Download
                    <Download className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" className="gap-2">
              View All Materials
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="contact" className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our courses and teaching methodology
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {data.home.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="text-left font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="text-center mt-10">
            <Button className="bg-[#5362D0] hover:bg-[#4351C0] gap-2">
              Contact Us for More Information
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal isOpen={!!selectedVideo} onClose={() => setSelectedVideo(null)} videoId={selectedVideo || ""} />
    </div>
  )
}

