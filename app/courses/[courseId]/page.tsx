"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Clock, Globe, Star, Users, Calendar, BarChart } from "lucide-react"
import Image from "next/image"
import data from "@/data.json"

export default function CourseDetailsPage({ params }: { params: { courseId: string } }) {
  const course = data.courseDetails[params.courseId as keyof typeof data.courseDetails]

  if (!course) {
    return <div className="min-h-screen flex items-center justify-center">Course not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-[#1e3a8a] text-white py-12 pt-24">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/dsc_0794.webp')",
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
                <Button className="w-full text-lg bg-red-600 hover:bg-red-700" size="lg">
                  Enroll Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-8 space-y-8">
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
      </div>
    </div>
  )
}

