import React from 'react';
import DetailsCom from '../components/DetailsCom';

const spec = [
    {
        specName : "processor",
        dec : 'Dimensity 8100-Ultra',
        efficient :'5nm power-efficient manufacturing process',
        GHZ : 'Up to 2.85GHz',
        cpu : {
            goldCore : '4x Gold cores (A78-based), 2.85GHz',
            silverCore : '4x Silver cores (A55-based), 2.0GHz',
        },
        gpu : {
            GPU:'Mali-G610 MC6'
        }
    },
    {
        specName : "Battery & Charging",
        dec : '5000mAh battery (typ)',
        adv : '19mins to 100%',
        turbo : 'Supports 120W wired turbo charging',
        USB : 'USB type-c'
    },
    {
        specName:'operating system',
        v : 'MIUI 13, Android 12'
    },
    {
        specName : 'front camera',
        dec : '20MP in-display selfie camera',
        front_feature : {
            photoFeature:{
            name : 'Front camera photography features',
            func : [
                'Timed burst','AI Beautify', 
                'AI portrait mode with bokeh and depth control', 
                'HDR', 'Panorama selfies'
            ]
        },
        videoFeature : {
            name : 'Front camera video features',
            func : [
                'Video HDR','AI portrait video','Time-lapse selfie'
            ]
        }
        }
    }
]

const Details = () => {
  return (
    <DetailsCom 
    name={`Xiaomi 12T | Xiaomi 12T Pro`} 
    img={"https://i02.appmifile.com/947_operator_sg/26/08/2022/982d9fcde03ed59525fd7448f580b839.png?f=webp" }
    colors={['blue','silver','black']}
    spec={spec}  
    />
  )
}

export default Details