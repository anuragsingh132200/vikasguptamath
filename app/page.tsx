"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Download, CheckCircle, FileText, PlayCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import VideoModal from "@/components/video-modal"
import data from "@/data.json"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Users, Clock, Calendar, Globe, BarChart, BookOpen, GraduationCap, Languages, Trophy } from "lucide-react"

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
      
      {/* Hero Section with Glass Effect */}
      <section
        className="relative pt-20 overflow-hidden bg-gradient-to-br from-[#5362D0] to-[#5362D0] backdrop-blur-md bg-white/10"
        style={{
          backgroundImage: "linear-gradient(rgba(83, 98, 208, 0.5), rgba(83, 98, 208, 0.5)), url('/dsc_0794.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8,
        }}
      >
        <div className="container mx-auto mt-[1.2vh] max-w-6xl px-4 pt-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <p className="text-white text-lg">Your Online Learning Partner</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                {data.home.hero.headline
                  .split(" ")
                  .map((word, i, arr) => (i < arr.length - 2 ? word + " " : i === arr.length - 2 ? word + "\n" : word))}
              </h1>
              <p className="text-white text-lg max-w-xl">{data.home.hero.subheadline}</p>
              <Button size="lg" className="bg-white hover:bg-gray-200 text-[#5362D0] font-bold px-8 text-lg h-12">
                {data.home.hero.cta}
              </Button>
              <div className="pt-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop"
                      width={55}
                      height={55}
                      alt="Student"
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop"
                      width={55}
                      height={55}
                      alt="Student"
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop"
                      width={55}
                      height={55}
                      alt="Student"
                      className="rounded-full border-2 border-white"
                    />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">4.8</div>
                    <div className="text-teal-50/90">Student Review</div>
                    <div className="text-teal-50/75 text-xs">Based on more than 10,000 feedbacks</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/maxresdefault-Photoroom (1)-Photoroom (1).png"
                alt="Hero"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute top-8 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
                <div className="text-3xl font-bold">1200+</div>
                <div className="text-sm">Total Courses</div>
              </div>
              <div className="absolute bottom-32 right-8 bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
                <div className="text-3xl font-bold">400+</div>
                <div className="text-sm">Total Instructors</div>
              </div>
              <div className="absolute bottom-48 left-[-70px] bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
                <div className="text-3xl font-bold">20,000+</div>
                <div className="text-sm">Total Students</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Math is easy section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-[#1e3a8a] text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.home.tagline.title}</h2>
              <p className="text-lg text-gray-200 mb-6">{data.home.tagline.description}</p>
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{data.home.stats.students}</p>
                    <p className="text-sm text-gray-200">Students</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{data.home.stats.selections}</p>
                    <p className="text-sm text-gray-200">Selections</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{data.home.stats.toppers}</p>
                    <p className="text-sm text-gray-200">Toppers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop"
                width={600}
                height={400}
                alt="Students learning mathematics"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Result: The Chain of Toppers */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Result: The Chain of Toppers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our successful students who cracked JEE with top ranks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.home.testimonials.slice(0, 6).map((testimonial, index) => (
              <div key={index} className="flex flex-col">
                <div className="relative cursor-pointer group" onClick={() => setSelectedVideo(testimonial.video)}>
                  <div className="relative h-[200px] rounded-lg overflow-hidden">
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
                <div className="mt-4">
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="font-semibold text-red-600">{testimonial.rank}</span>
                    <span>|</span>
                    <span>JEE Advanced {testimonial.year}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">{testimonial.feedback}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Make Mathematics Easier to Crack */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Make Mathematics <span className="text-red-600">EASIER</span> to Crack
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-full mt-1">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Conceptual Understanding</h3>
                    <p className="text-gray-600">Build strong fundamentals with our unique teaching methodology</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-full mt-1">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Problem-Solving Techniques</h3>
                    <p className="text-gray-600">Learn effective strategies to tackle complex JEE problems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-full mt-1">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Regular Practice & Assessment</h3>
                    <p className="text-gray-600">Strengthen your skills with daily practice and weekly tests</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-full mt-1">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Personalized Attention</h3>
                    <p className="text-gray-600">Get individual guidance and doubt resolution from expert faculty</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-red-600 hover:bg-red-700 gap-2">
                  Enroll Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop"
                width={600}
                height={600}
                alt="Mr. Vikas Gupta"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses for 2025 */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
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
                    <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">{course.title}</h3>
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
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
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

