import React from 'react'



const Education = () => {
    
  const educationData = [
  {
    year: "High School Grades 10 - 12 (2019-2022)",
    school: "Dipangkornwittayapat (Mattayom Wat Hattasarn Kaset) Under the Royal",
    degree: "Major in Modern Business",
    description: "GPA: 3.87"
  },
  {
    year: "Year 1 - 4 (2022-Present)",
    school: "Bangkok University",
    degree: "Faculty of Information Technology and Innovation | Major in Computer Science",
    description: "GPA: 3.81"
  },
];
   return (
     <div className="max-w-3xl mx-auto mt-20 mb-20 p-6">
      <h2 className="text-3xl font-bold text-center mb-8">My <span className='text-primary'>Education</span></h2>
      <div className="relative border-l-2 border-gray-300 ml-4">
        {educationData.map((edu, index) => (
          <div key={index} className="mb-8 ml-6">
            <span className="absolute -left-4 w-8 h-8 bg-[#8872c1] rounded-full flex items-center justify-center text-white font-bold">
              {index + 1}
            </span>
            <div className="bg-card p-4 rounded-md shadow-md card-hover">
              <h2 className="font-semibold text-lg animate-fade-in">{edu.school}</h2>
              <p className="text-sm  my-5 animate-fade-in text-muted-foreground">{edu.year} | {edu.degree}</p>
              <p className="mt-2 animate-fade-in text-muted-foreground">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
   );
}

export default Education