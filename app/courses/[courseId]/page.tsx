"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  BookOpen,
  CheckCircle,
  Clock,
  Globe,
  GraduationCap,
  Languages,
  PlayCircle,
  Star,
  Trophy,
  Calendar,
  Users,
  BarChart,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import data from "@/data.json"

export default function CourseDetailsPage({ params }: { params: { courseId: string } }) {
  const course = data.courseDetails[params.courseId as keyof typeof data.courseDetails]

  if (!course) {
    return <div className="min-h-screen flex items-center justify-center">Course not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Course Header with Glass Effect */}
      <div className="relative bg-[#1e3a8a] text-white py-12 py-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/015.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
            opacity: 0.2,
          }}
        ></div>
        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 backdrop-blur-md bg-white/10 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-red-600 text-white">Batch {course.batch}</Badge>
                <Badge variant="outline" className="text-white border-white">
                  JEE Mathematics
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-gray-200 mb-6">{course.subtitle}</p>
              <div className="flex flex-wrap items-center gap-6 text-sm mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-bold">{course.rating}</span>
                  <span className="text-gray-300">({course.reviews.toLocaleString()} ratings)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-5 h-5 text-gray-300" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-5 h-5 text-gray-300" />
                  <span>Last updated: March 2024</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span>Starts: {course.startDate}</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-full">
                  <Globe className="w-4 h-4" />
                  <span>{course.language}</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-full">
                  <BarChart className="w-4 h-4" />
                  <span>{course.level}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={course.instructor.image || "/placeholder.svg"}
                  width={60}
                  height={60}
                  alt={course.instructor.name}
                  className="rounded-full border-2 border-white"
                />
                <div>
                  <p className="font-medium">Created by</p>
                  <p className="font-bold text-lg">{course.instructor.name}</p>
                </div>
              </div>
            </div>
            <Card className="bg-white/10 backdrop-blur-md text-white p-6">
              <div className="space-y-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-bold">₹{course.price.toLocaleString()}</span>
                  <span className="text-lg text-gray-300 line-through">₹{course.originalPrice.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Starts {course.startDate}</span>
                  </div>
                </div>
                <Button
                  className="w-full text-lg bg-red-600 hover:bg-red-700"
                  size="lg"
                  onClick={() => window.location.href = course.enrollLink}
                >
                  Enroll Now
                </Button>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                  Try Free Demo Class
                </Button>
                <p className="text-center text-sm text-gray-300">7-Day Money-Back Guarantee</p>
                <div className="space-y-3 pt-4 border-t border-white/20">
                  <h3 className="font-bold">This course includes:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4 text-gray-300" />
                      <span>Live online classes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-gray-300" />
                      <span>Comprehensive study materials</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-gray-300" />
                      <span>Regular assessments & tests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Languages className="w-4 h-4 text-gray-300" />
                      <span>Doubt clearing sessions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-gray-300" />
                      <span>Performance analysis</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Course Details */}
      <div className="container mx-auto max-w-7xl px-4 py-8 space-y-8">
        {/* What you'll learn */}
        <Card className="p-6 bg-white">
          <h2 className="text-xl font-bold mb-4">What you'll learn</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {course.whatYouWillLearn.map((item, i) => (
              <div key={i} className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Course Features */}
        <Card className="p-6 bg-white">
          <h2 className="text-xl font-bold mb-4">Course Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {course.features.map((feature, i) => (
              <div key={i} className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Course Syllabus Download */}
        <Card className="p-6 bg-white">
          <h2 className="text-xl font-bold mb-4">Course Syllabus</h2>
          <Button className="w-full text-lg bg-blue-600 hover:bg-blue-700" size="lg">
            Download Course Syllabus
          </Button>
        </Card>

        {/* Requirements */}
        <Card className="p-6 bg-white">
          <h2 className="text-xl font-bold mb-4">Requirements</h2>
          <ul className="list-disc pl-5 space-y-2">
            {course.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </Card>

        {/* Instructor Information */}
        <Card className="p-6 bg-white">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <Image
              src={course.instructor.image || "/placeholder.svg"}
              alt={course.instructor.name}
              width={150}
              height={150}
              className="rounded-lg"
            />
            <div>
              <h2 className="text-xl font-bold mb-2">{course.instructor.name}</h2>
              <p className="text-gray-600 mb-4">{course.instructor.title}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-6">
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-xl text-blue-600">{course.instructor.experience}</span>
                  <span className="text-gray-600">Teaching Experience</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-xl text-blue-600">
                    {course.instructor.students.toLocaleString()}
                  </span>
                  <span className="text-gray-600">Students</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-bold text-xl text-blue-600">{course.instructor.selections}</span>
                  <span className="text-gray-600">JEE Selections</span>
                </div>
              </div>
              <p className="text-gray-700">
                Mr. Vikas Gupta is a renowned mathematics educator with over 15 years of experience in teaching
                JEE aspirants. His unique teaching methodology has helped thousands of students crack JEE with
                top ranks. He is known for simplifying complex mathematical concepts and making them accessible
                to students of all levels.
              </p>
            </div>
          </div>
        </Card>

        {/* FAQs */}
        <Card className="p-6 bg-white">
          <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {course.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <span className="text-left font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 pt-0 text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </div>
  )
}

