import React from 'react'

function Practice() {
  return (
   <div class="relative">
  <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="Your Image" class="block w-full h-auto"/>
  <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity flex justify-center items-center hover:opacity-100">
  <h2 class="text-white text-center text-lg px-4">Your Text Here</h2>
</div>
</div>
  )
}

export default Practice