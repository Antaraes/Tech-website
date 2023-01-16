import React from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { BsHeart } from 'react-icons/bs';

const btns = [
    {
        name : 'add to cart',
        icon : <GiShoppingCart />
    },
    {
        name : 'wishlist ',
        icon : <BsHeart />
    }
]

const DetailsCom = ({ name, img, colors, spec}) => {
  return (
    <main className='w-full'>
        <div className='flex justify-between items-center px-10 py-2'>
        <h5>{name}</h5>
        <div className='flex gap-3'>
            {
                btns?.map((btn,idx) => (
             <button className='flex items-center border border-blue-400 rounded p-1 px-2 capitalize tracking-wider text-sm drpo-shadow hover:bg-blue-400 hover:text-white duration-200' key={`btn${idx}`}>
                <span className='text-xl p-2'>
                    {btn.icon}
                </span>
               {btn.name}
                </button>
                ))
            }

        </div>
        </div>

    <div className='bg-black/[0.85] flex flex-col justify-center p-4'>
     <img 
     src={img}
     alt=""
     className='w-full h-[85vh]'
      />

     <div className='flex justify-center items-center my-4 py-4'>
        {
         colors.map((color,idx) => (
             <div className='flex gap-2 mx-2' key={idx}>
                 <div className={`w-6 h-6 rounded ${ color === 'blue' ? 'bg-blue-800': color === 'silver' ? 'bg-zinc-300':'bg-black'}`}></div>
                 <h5 className='text-white text-h4 capitalize tracking-wider'>{color}</h5>
             </div>
         ))
        }
     </div>
    </div>

    <div className="bg-black text-white py-4">

        {
            spec?.map((spe,idx) => (
                <div className="w-10/12 mx-auto py-10 flex border-b border-stone-500" key={`spec${idx}`}>
                <div className='w-4/12'>
                 <h5 className='text-h2 font-semibold capitalize'>{spe.specName}</h5>
                </div>
     
                 <div className='flex-1'>
                     <h5 className='text-h2 font-semibold py-1'>{spe.dec}</h5>
                     <p className='text-h4 py-1'>{spe.v && spe.v}</p>
                     <p className='text-h4 py-1'>{spe.efficient && spe.efficient}</p>
                     <p className='text-h4 py-1'>{spe.GHZ && spe.GHZ}</p>
                     {
                        spe.cpu && <>
                     <h5 className='text-h4 py-1'>CPU:</h5>
                     <p className='text-h4 py-1'>{spe.cpu.goldCore}</p>
                     <p className='text-h4 py-1'>{spe.cpu.silverCore}</p>
                     <p className='text-h4 py-1'>{`${Object.keys(spe.gpu)}:${spe.gpu.GPU}`}</p>
                        </>
                     }
                     {
                        spe.front_feature && spe.front_feature.photoFeature && <>
                          <h5 className='text-h2 font-semibold'>{spe.front_feature.photoFeature.name}</h5>
                         {
                          spe.front_feature.photoFeature.func?.map((f,idx) => (
                            <p key={`fun${idx}`} className='py-1'>{f}</p>
                          ))
                          }
                        </>
                     }
                     {
                        spe.front_feature && spe.front_feature.videoFeature && <>
                          <h5 className='text-h2 font-semibold'>{spe.front_feature.videoFeature.name}</h5>
                         {
                          spe.front_feature.videoFeature.func?.map((f,idx) => (
                            <p key={`fun${idx}`} className='py-1'>{f}</p>
                          ))
                          }
                        </>
                     }
                     <p className='text-h4 py-1'>{spe.adv && spe.adv}</p>
                     <p className='text-h4 py-1'>{spe.turbo && spe.turbo}</p>
                     <p className='text-h4 py-1'>{spe.USB && spe.USB}</p>
                 </div>
              </div>
            ))
        }
       
    </div>
 
 </main>
  )
}

export default DetailsCom