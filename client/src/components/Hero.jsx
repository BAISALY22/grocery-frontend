
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='relative'>
        {/* <img src={assets.hero_bg}className='w-full hidden md:block'/>
       
       <img src={assets.mb_hero_bg}
       className='md:hidden w-full'/> */}

<img 
  src={assets.hero_bg} 
  className="w-full h-[400px] md:h-[500px] object-cover hidden md:block"
/>

<img 
  src={assets.mb_hero_bg} 
  className="w-full h-[450px] object-cover md:hidden"
/>

    <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 mb:pb-0 md:pl-18 lg:pl-24'>
        <h1 className='text-3xl md:text-4xl md:mt-18 font-bold text-center md:text-left max-w-72 md:max-w-150 leading-tight lg:leading-15'>
            {/* Freshness you can trust,savings you will love! */}
{/* Your everyday groceries, handled the easy way    */}
    Groceries? Yeah, we got that handled —so don’t wait. </h1>
        <div className='flex items-center mt-6 font-medium gap-6'>

            <Link to={"/products"} className='flex group items-center gap-2 px-7 rounded text-white py-3 bg-primary cursor-pointer'>
           Let’s Shop
            <img src={assets.white_arrow_icon} className='md:hidden transition group-focus:translate-x-1'/>
            </Link>

 <Link to={"/products"} className='hidden md:flex group items-center gap-2 px-7 rounded text-white py-3 bg-primary cursor-pointer'>
           Grab Deals
            <img src={assets.white_arrow_icon} className='md:hidden transition group-focus:translate-x-1'/>
            </Link>

        </div>
    </div>



    </div>






  )
}

export default Hero
