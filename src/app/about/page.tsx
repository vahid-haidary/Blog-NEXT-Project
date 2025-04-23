import Image from 'next/image'
import React from 'react'

function AboutPage() {
  return (
    <div>
        <div className='relative flex w-full h-lvh '>
            <Image
            src='/banner/about-us.jpg'
            fill
            alt='About us'
            className='object-cover'
            />
        </div>

        <div className='absolute left-0 right-0 top-10 text-center px-48 text-white select-none'>
            <h1 className='text-5xl font-bold mb-9'>AboutUs</h1>
            <p className='leading-10 font-semibold drop-shadow-sm text-stroke '>
                We are a dedicated team of professionals committed to delivering high-quality solutions that meet the needs of our clients. Our mission is to create innovative and user-friendly products that make a difference in peoples lives. With years of experience in the industry, we pride ourselves on our ability to adapt to the ever-changing technological landscape and provide cutting-edge services.

                At our core, we value integrity, collaboration, and excellence. We believe in fostering a culture of continuous learning and growth, empowering our team members to reach their full potential. By working closely with our clients, we ensure that their vision is brought to life with precision and care.

                Our journey has been one of passion and perseverance, and we are grateful for the trust and support of our clients and partners. As we continue to grow, we remain committed to our goal of making a positive impact through our work. Thank you for being a part of our story, and we look forward to achieving great things together.
            </p>
        </div>
    </div>
  )
}

export default AboutPage