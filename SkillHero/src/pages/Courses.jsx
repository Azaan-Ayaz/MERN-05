import React from 'react'
import Navbar from '../components/Navbar'


const courseData=[
    {
        title:"ES6",
  desc:"Learn about es6",
  category:"programming",
  author:"Alex",
  price: 20,
    },
    {
        title:"CSS",
  desc:"Learn about CSS",
  category:"programming",
  author:"Tony",
  price: 15,

    },
    {
        title:"JavaScript",
  desc:"Learn about JavaScript",
  category:"programming",
  author:"Sylvie",
  price: 50,

    },
    {
        title:"React",
  desc:"Learn about React",
  category:"programming",
  author:"max",
  price: 40,

    },
    {
        title:"Python",
  desc:"Learn about Python",
  category:"programming",
  author:"jhon",
  price: 30,

    }
]
export default function Courses() {
  return (
    <>
    <Navbar/>
    <h1 className='font-bold text-7xl text-center'>Courses</h1>
    <div className='my-10'>
        <div className='flex gap-16 mx-6 my-[200px] justify-center'>
            {
                courseData.map((course,index)=>{
                    return(
                        <div className='text-center' key={index}>
                        <div className='flex justify-centerx'>
                            <img className="w-20" src={`https://api.dicebear.com/7.x/icons/svg?seed=${course.title}`} alt="Logo"/>
                        </div>
                        <div>
                            {course.title}
                        </div>
                        <div>
                            {course.desc}
                        </div>
                        <div>
                            {course.author}
                        </div>
                    </div>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}
